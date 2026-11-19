# ========================================================
# Dockerfile for LINGORA ASP.NET Core API (Root Build)
# ========================================================

# Stage 1: Build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy solution and csproj files for layer caching
COPY backend/Lingora.sln backend/
COPY backend/src/Lingora.Domain/Lingora.Domain.csproj backend/src/Lingora.Domain/
COPY backend/src/Lingora.Application/Lingora.Application.csproj backend/src/Lingora.Application/
COPY backend/src/Lingora.Infrastructure/Lingora.Infrastructure.csproj backend/src/Lingora.Infrastructure/
COPY backend/src/Lingora.API/Lingora.API.csproj backend/src/Lingora.API/

RUN dotnet restore backend/Lingora.sln

# Copy remaining source code and publish
COPY backend/ backend/
WORKDIR /src/backend/src/Lingora.API
RUN dotnet publish Lingora.API.csproj -c Release -o /app/publish /p:UseAppHost=false

# Stage 2: Runtime
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
EXPOSE 8080
ENV ASPNETCORE_HTTP_PORTS=8080
ENV ASPNETCORE_ENVIRONMENT=Production

COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "Lingora.API.dll"]
