using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Serilog;
using Lingora.Application.Interfaces;
using Lingora.Infrastructure.Identity;
using Lingora.Infrastructure.Persistence;
using Lingora.Infrastructure.Services;

var builder = WebApplication.CreateBuilder(args);

// 1. Serilog Structured Logging
Log.Logger = new LoggerConfiguration()
    .ReadFrom.Configuration(builder.Configuration)
    .Enrich.FromLogContext()
    .WriteTo.Console()
    .CreateLogger();

builder.Host.UseSerilog();

// 2. Add Database Context (Supabase PostgreSQL via Npgsql)
var connectionString = builder.Configuration.GetConnectionString("SupabasePostgres");
builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    if (!string.IsNullOrEmpty(connectionString) && !connectionString.Contains("your-project-ref"))
    {
        options.UseNpgsql(connectionString, b => b.MigrationsAssembly("Lingora.Infrastructure"));
    }
    else
    {
        // Fallback to SQLite or InMemory if Supabase connection string is pending configuration
        options.UseInMemoryDatabase("LingoraDb");
    }
});

// 3. Register Security & Application Services
var jwtSecret = builder.Configuration["JwtSettings:SecretKey"] ?? "LingoraEnterpriseSecretKeyForAuthentication2026!";
var jwtIssuer = builder.Configuration["JwtSettings:Issuer"] ?? "LingoraAPI";
var jwtAudience = builder.Configuration["JwtSettings:Audience"] ?? "LingoraClients";

var jwtGenerator = new JwtTokenGenerator(jwtSecret, jwtIssuer, jwtAudience);
builder.Services.AddSingleton(jwtGenerator);

builder.Services.AddScoped<IAuthService, AuthService>();
builder.Services.AddScoped<IVocabularyService, VocabularyService>();
builder.Services.AddHttpClient();
builder.Services.AddScoped<IAiService>(sp =>
{
    var clientFactory = sp.GetRequiredService<IHttpClientFactory>();
    var db = sp.GetRequiredService<ApplicationDbContext>();
    var apiKey = builder.Configuration["Gemini:ApiKey"] ?? "";
    return new GeminiAiService(clientFactory.CreateClient(), db, apiKey);
});

// 4. JWT Authentication
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.RequireHttpsMetadata = false;
    options.SaveToken = true;
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSecret)),
        ValidateIssuer = true,
        ValidIssuer = jwtIssuer,
        ValidateAudience = true,
        ValidAudience = jwtAudience,
        ClockSkew = TimeSpan.Zero
    };
});

builder.Services.AddAuthorization();

// 5. CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("http://localhost:5173", "http://localhost:3000", "https://*.vercel.app")
              .SetIsOriginAllowedToAllowWildcardSubdomains()
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials();
    });
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();

// 6. Swagger with Bearer Auth
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "LINGORA API — EdTech AI Learning Platform",
        Version = "v1",
        Description = "RESTful APIs for Lingora English Learning Platform (Kids, Adults, TOEIC, IELTS, AI)."
    });

    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Description = "Nhập 'Bearer {token}' để xác thực các endpoint bảo mật.",
        Name = "Authorization",
        In = ParameterLocation.Header,
        Type = SecuritySchemeType.ApiKey,
        Scheme = "Bearer"
    });

    c.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference { Type = ReferenceType.SecurityScheme, Id = "Bearer" }
            },
            Array.Empty<string>()
        }
    });
});

var app = builder.Build();

// 7. Seed Initial Database Content
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
    try
    {
        if (db.Database.IsRelational())
        {
            await db.Database.MigrateAsync();
        }
        await DatabaseSeeder.SeedAsync(db);
        Log.Information("Lingora database seeded successfully.");
    }
    catch (Exception ex)
    {
        Log.Error(ex, "An error occurred during database migration / seeding.");
    }
}

// 8. Pipeline Configuration
if (app.Environment.IsDevelopment() || true)
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Lingora API v1");
        c.RoutePrefix = "swagger";
    });
}

app.UseCors("AllowFrontend");

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
