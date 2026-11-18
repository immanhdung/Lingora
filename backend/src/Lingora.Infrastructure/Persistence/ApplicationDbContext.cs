using System;
using Microsoft.EntityFrameworkCore;
using Lingora.Domain.Entities;
using Lingora.Domain.Enums;

namespace Lingora.Infrastructure.Persistence;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public DbSet<User> Users => Set<User>();
    public DbSet<UserProfile> UserProfiles => Set<UserProfile>();
    public DbSet<RefreshToken> RefreshTokens => Set<RefreshToken>();

    public DbSet<VocabularyTopic> VocabularyTopics => Set<VocabularyTopic>();
    public DbSet<VocabularyWord> VocabularyWords => Set<VocabularyWord>();
    public DbSet<UserVocabularySrs> UserVocabularySrs => Set<UserVocabularySrs>();

    public DbSet<KidsWorld> KidsWorlds => Set<KidsWorld>();
    public DbSet<UserPet> UserPets => Set<UserPet>();

    public DbSet<ToeicTest> ToeicTests => Set<ToeicTest>();
    public DbSet<ToeicQuestion> ToeicQuestions => Set<ToeicQuestion>();

    public DbSet<WritingSubmission> WritingSubmissions => Set<WritingSubmission>();
    public DbSet<SpeakingSession> SpeakingSessions => Set<SpeakingSession>();

    public DbSet<AiConversation> AiConversations => Set<AiConversation>();
    public DbSet<AiMessage> AiMessages => Set<AiMessage>();
    public DbSet<UserMistakeLog> UserMistakeLogs => Set<UserMistakeLog>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // User & Profile
        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(u => u.Id);
            entity.HasIndex(u => u.Email).IsUnique();
            entity.Property(u => u.Email).IsRequired().HasMaxLength(256);
            entity.Property(u => u.FullName).IsRequired().HasMaxLength(128);

            entity.HasOne(u => u.Profile)
                  .WithOne(p => p.User)
                  .HasForeignKey<UserProfile>(p => p.UserId)
                  .OnDelete(DeleteBehavior.Cascade);
        });

        // RefreshToken
        modelBuilder.Entity<RefreshToken>(entity =>
        {
            entity.HasKey(r => r.Id);
            entity.HasIndex(r => r.Token);
        });

        // Vocabulary
        modelBuilder.Entity<VocabularyTopic>(entity =>
        {
            entity.HasKey(t => t.Id);
            entity.HasIndex(t => t.Slug).IsUnique();
        });

        modelBuilder.Entity<VocabularyWord>(entity =>
        {
            entity.HasKey(w => w.Id);
            entity.HasIndex(w => w.Word);
            entity.HasOne(w => w.Topic)
                  .WithMany(t => t.Words)
                  .HasForeignKey(w => w.TopicId)
                  .OnDelete(DeleteBehavior.Cascade);
        });

        modelBuilder.Entity<UserVocabularySrs>(entity =>
        {
            entity.HasKey(s => s.Id);
            entity.HasIndex(s => new { s.UserId, s.WordId }).IsUnique();
            entity.HasIndex(s => s.NextReviewDate);
        });

        // Kids
        modelBuilder.Entity<KidsWorld>(entity =>
        {
            entity.HasKey(w => w.Id);
            entity.HasIndex(w => w.Slug).IsUnique();
        });

        // TOEIC
        modelBuilder.Entity<ToeicTest>(entity =>
        {
            entity.HasKey(t => t.Id);
        });

        modelBuilder.Entity<ToeicQuestion>(entity =>
        {
            entity.HasKey(q => q.Id);
            entity.HasOne(q => q.Test)
                  .WithMany(t => t.Questions)
                  .HasForeignKey(q => q.TestId)
                  .OnDelete(DeleteBehavior.Cascade);
        });

        // Mistake DNA
        modelBuilder.Entity<UserMistakeLog>(entity =>
        {
            entity.HasKey(m => m.Id);
            entity.HasIndex(m => new { m.UserId, m.Category });
        });
    }
}
