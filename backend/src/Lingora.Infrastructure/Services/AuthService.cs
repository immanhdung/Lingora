using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Lingora.Application.DTOs;
using Lingora.Application.Interfaces;
using Lingora.Domain.Entities;
using Lingora.Domain.Enums;
using Lingora.Infrastructure.Identity;
using Lingora.Infrastructure.Persistence;

namespace Lingora.Infrastructure.Services;

public class AuthService : IAuthService
{
    private readonly ApplicationDbContext _db;
    private readonly JwtTokenGenerator _jwt;

    public AuthService(ApplicationDbContext db, JwtTokenGenerator jwt)
    {
        _db = db;
        _jwt = jwt;
    }

    public async Task<AuthResponse> RegisterAsync(RegisterRequest request)
    {
        var existingUser = await _db.Users.AnyAsync(u => u.Email.ToLower() == request.Email.ToLower());
        if (existingUser)
        {
            throw new InvalidOperationException("Email này đã được sử dụng trên hệ thống.");
        }

        var user = new User
        {
            Email = request.Email.Trim().ToLower(),
            FullName = request.FullName.Trim(),
            PasswordHash = PasswordHasher.HashPassword(request.Password),
            Role = request.Role,
            Profile = new UserProfile
            {
                TargetProgram = request.Role == UserRole.Student ? LearningProgramType.IELTS : LearningProgramType.General,
                CurrentLevel = EnglishLevel.Intermediate,
                TargetScore = "7.5",
                DailyGoalMinutes = 30,
            }
        };

        var accessToken = _jwt.GenerateAccessToken(user, out var expiresAt);
        var refreshTokenValue = _jwt.GenerateRefreshToken();

        user.RefreshTokens.Add(new RefreshToken
        {
            Token = refreshTokenValue,
            ExpiresAt = DateTime.UtcNow.AddDays(30)
        });

        _db.Users.Add(user);
        await _db.SaveChangesAsync();

        return new AuthResponse(
            user.Id,
            user.Email,
            user.FullName,
            user.Role.ToString(),
            accessToken,
            refreshTokenValue,
            expiresAt
        );
    }

    public async Task<AuthResponse> LoginAsync(LoginRequest request)
    {
        var user = await _db.Users
            .Include(u => u.Profile)
            .Include(u => u.RefreshTokens)
            .FirstOrDefaultAsync(u => u.Email.ToLower() == request.Email.ToLower());

        if (user == null || !PasswordHasher.VerifyPassword(request.Password, user.PasswordHash))
        {
            throw new UnauthorizedAccessException("Email hoặc mật khẩu không chính xác.");
        }

        var accessToken = _jwt.GenerateAccessToken(user, out var expiresAt);
        var refreshTokenValue = _jwt.GenerateRefreshToken();

        user.RefreshTokens.Add(new RefreshToken
        {
            Token = refreshTokenValue,
            ExpiresAt = DateTime.UtcNow.AddDays(30)
        });

        await _db.SaveChangesAsync();

        return new AuthResponse(
            user.Id,
            user.Email,
            user.FullName,
            user.Role.ToString(),
            accessToken,
            refreshTokenValue,
            expiresAt
        );
    }

    public async Task<AuthResponse> RefreshTokenAsync(RefreshTokenRequest request)
    {
        var tokenRecord = await _db.RefreshTokens
            .Include(r => r.User)
            .FirstOrDefaultAsync(r => r.Token == request.RefreshToken && !r.IsRevoked);

        if (tokenRecord == null || tokenRecord.ExpiresAt < DateTime.UtcNow)
        {
            throw new UnauthorizedAccessException("Refresh token không hợp lệ hoặc đã hết hạn.");
        }

        // Revoke old token
        tokenRecord.IsRevoked = true;

        var user = tokenRecord.User;
        var newAccessToken = _jwt.GenerateAccessToken(user, out var expiresAt);
        var newRefreshToken = _jwt.GenerateRefreshToken();

        user.RefreshTokens.Add(new RefreshToken
        {
            Token = newRefreshToken,
            ExpiresAt = DateTime.UtcNow.AddDays(30)
        });

        await _db.SaveChangesAsync();

        return new AuthResponse(
            user.Id,
            user.Email,
            user.FullName,
            user.Role.ToString(),
            newAccessToken,
            newRefreshToken,
            expiresAt
        );
    }

    public async Task<UserProfileDto?> GetUserProfileAsync(Guid userId)
    {
        var user = await _db.Users
            .Include(u => u.Profile)
            .FirstOrDefaultAsync(u => u.Id == userId);

        if (user == null) return null;

        var profile = user.Profile;
        return new UserProfileDto(
            user.Id,
            user.Email,
            user.FullName,
            user.Role.ToString(),
            user.AvatarUrl,
            profile?.TargetProgram.ToString() ?? "IELTS",
            profile?.CurrentLevel.ToString() ?? "Intermediate",
            profile?.TargetScore ?? "7.5",
            profile?.DailyGoalMinutes ?? 30,
            profile?.StreakDays ?? 1,
            profile?.TotalXp ?? 0,
            profile?.Stars ?? 0,
            profile?.Coins ?? 0
        );
    }
}
