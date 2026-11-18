# LINGORA DEPLOYMENT GUIDE

## 1. Supabase PostgreSQL Database Setup
1. Create a project at [supabase.com](https://supabase.com).
2. Go to **SQL Editor** in your Supabase project dashboard.
3. Copy and execute the contents of `docs/supabase_schema.sql`.
4. Navigate to **Project Settings -> Database** and copy the Connection String (URI or Pooler URI on port 6543 / 5432).

---

## 2. Backend ASP.NET Core Deployment (Render / Railway / Docker)

### Environment Variables
Configure the following environment variables on Render or Railway:
```env
ConnectionStrings__SupabasePostgres=Host=aws-0-ap-southeast-1.pooler.supabase.com;Port=6543;Database=postgres;Username=postgres.your-ref;Password=your-password;SSL Mode=Require;Trust Server Certificate=true
JwtSettings__SecretKey=YourSuperSecretKeyMustBeAtLeast32BytesLength2026!
JwtSettings__Issuer=LingoraAPI
JwtSettings__Audience=LingoraClients
Gemini__ApiKey=YourGoogleGeminiApiKey
ASPNETCORE_ENVIRONMENT=Production
```

### Docker Build (Optional)
```dockerfile
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app
COPY . .
RUN dotnet restore backend/Lingora.sln
RUN dotnet publish backend/src/Lingora.API/Lingora.API.csproj -c Release -o /out

FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /out .
ENTRYPOINT ["dotnet", "Lingora.API.dll"]
```

---

## 3. Frontend Deployment (Vercel)
1. Push repository to GitHub.
2. In Vercel, select **Import Git Repository** and choose the `frontend` root directory.
3. Configure Framework Preset: **Vite**.
4. Set Environment Variables:
   - `VITE_API_BASE_URL`: `https://your-backend-domain.onrender.com/api/v1`
   - `VITE_APP_ENV`: `production`
5. Click **Deploy**. Vercel will automatically build with `npm run build` and serve from `dist/`.
