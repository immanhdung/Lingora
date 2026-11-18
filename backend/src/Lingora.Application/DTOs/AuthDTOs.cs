using Lingora.Domain.Enums;

namespace Lingora.Application.DTOs;

public record RegisterRequest(
    string Email,
    string Password,
    string FullName,
    UserRole Role = UserRole.Student
);

public record LoginRequest(
    string Email,
    string Password
);

public record AuthResponse(
    Guid UserId,
    string Email,
    string FullName,
    string Role,
    string AccessToken,
    string RefreshToken,
    DateTime ExpiresAt
);

public record RefreshTokenRequest(
    string AccessToken,
    string RefreshToken
);

public record UserProfileDto(
    Guid UserId,
    string Email,
    string FullName,
    string Role,
    string? AvatarUrl,
    string TargetProgram,
    string CurrentLevel,
    string TargetScore,
    int DailyGoalMinutes,
    int StreakDays,
    int TotalXp,
    int Stars,
    int Coins
);
