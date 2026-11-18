using System;
using Lingora.Domain.Enums;

namespace Lingora.Domain.Entities;

public class User
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public string Email { get; set; } = string.Empty;
    public string PasswordHash { get; set; } = string.Empty;
    public string FullName { get; set; } = string.Empty;
    public UserRole Role { get; set; } = UserRole.Student;
    public string? AvatarUrl { get; set; }
    public bool IsActive { get; set; } = true;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime? UpdatedAt { get; set; }

    public UserProfile? Profile { get; set; }
    public ICollection<RefreshToken> RefreshTokens { get; set; } = new List<RefreshToken>();
}

public class UserProfile
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public Guid UserId { get; set; }
    public User User { get; set; } = null!;

    public LearningProgramType TargetProgram { get; set; } = LearningProgramType.General;
    public EnglishLevel CurrentLevel { get; set; } = EnglishLevel.Intermediate;
    public string TargetScore { get; set; } = "7.5";
    public int DailyGoalMinutes { get; set; } = 30;
    public int StreakDays { get; set; } = 1;
    public int TotalXp { get; set; } = 0;
    public int Stars { get; set; } = 0;
    public int Coins { get; set; } = 0;
}

public class RefreshToken
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public Guid UserId { get; set; }
    public User User { get; set; } = null!;
    public string Token { get; set; } = string.Empty;
    public DateTime ExpiresAt { get; set; }
    public bool IsRevoked { get; set; } = false;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
