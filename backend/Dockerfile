# ========================================================
# Dockerfile for LINGORA ASP.NET Core API (Context: backend/)
# ========================================================

# Stage 1: Build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy solution and csproj files for layer caching
COPY Lingora.sln ./
COPY src/Lingora.Domain/Lingora.Domain.csproj src/Lingora.Domain/
COPY src/Lingora.Application/Lingora.Application.csproj src/Lingora.Application/
COPY src/Lingora.Infrastructure/Lingora.Infrastructure.csproj src/Lingora.Infrastructure/
COPY src/Lingora.API/Lingora.API.csproj src/Lingora.API/

RUN dotnet restore Lingora.sln

# Copy remaining source code and publish
COPY . .
WORKDIR /src/src/Lingora.API
RUN dotnet publish Lingora.API.csproj -c Release -o /app/publish /p:UseAppHost=false

# Stage 2: Runtime
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
EXPOSE 8080
ENV ASPNETCORE_HTTP_PORTS=8080
ENV ASPNETCORE_ENVIRONMENT=Production

COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "Lingora.API.dll"]
