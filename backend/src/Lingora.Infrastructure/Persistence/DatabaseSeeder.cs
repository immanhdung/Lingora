using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Lingora.Domain.Entities;
using Lingora.Domain.Enums;
using Lingora.Infrastructure.Identity;

namespace Lingora.Infrastructure.Persistence;

public static class DatabaseSeeder
{
    public static async Task SeedAsync(ApplicationDbContext db)
    {
        // 1. Seed Users if not present
        if (!await db.Users.AnyAsync())
        {
            var adminUser = new User
            {
                Email = "admin@lingora.edu.vn",
                FullName = "Đoàn Thu Hà (Admin)",
                Role = UserRole.Admin,
                PasswordHash = PasswordHasher.HashPassword("LingoraAdmin2026!"),
                Profile = new UserProfile
                {
                    TargetProgram = LearningProgramType.General,
                    CurrentLevel = EnglishLevel.Advanced,
                    DailyGoalMinutes = 60
                }
            };

            var studentUser = new User
            {
                Email = "student@lingora.edu.vn",
                FullName = "Minh Anh",
                Role = UserRole.Student,
                PasswordHash = PasswordHasher.HashPassword("LingoraStudent2026!"),
                Profile = new UserProfile
                {
                    TargetProgram = LearningProgramType.IELTS,
                    CurrentLevel = EnglishLevel.Intermediate,
                    TargetScore = "7.5",
                    DailyGoalMinutes = 30,
                    StreakDays = 14,
                    TotalXp = 3850,
                    Stars = 128,
                    Coins = 450
                }
            };

            var parentUser = new User
            {
                Email = "parent@lingora.edu.vn",
                FullName = "Trần Gia Hưng (Phụ Huynh)",
                Role = UserRole.Parent,
                PasswordHash = PasswordHasher.HashPassword("LingoraParent2026!"),
                Profile = new UserProfile
                {
                    TargetProgram = LearningProgramType.Kids,
                    CurrentLevel = EnglishLevel.Beginner,
                    DailyGoalMinutes = 45
                }
            };

            db.Users.AddRange(adminUser, studentUser, parentUser);
        }

        // 2. Seed Kids Worlds
        if (!await db.KidsWorlds.AnyAsync())
        {
            db.KidsWorlds.AddRange(
                new KidsWorld { Name = "Alphabet Kingdom", VietnameseName = "Vương Quốc Chữ Cái", Slug = "alphabet", Icon = "🔤", OrderIndex = 1, RequiredStars = 0 },
                new KidsWorld { Name = "Animal Kingdom", VietnameseName = "Vương Quốc Động Vật", Slug = "animals", Icon = "🦁", OrderIndex = 2, RequiredStars = 5 },
                new KidsWorld { Name = "Food Paradise", VietnameseName = "Thiên Đường Ẩm Thực", Slug = "food", Icon = "🍎", OrderIndex = 3, RequiredStars = 15 },
                new KidsWorld { Name = "Color Island", VietnameseName = "Hòn Đảo Sắc Màu", Slug = "colors", Icon = "🎨", OrderIndex = 4, RequiredStars = 25 }
            );
        }

        // 3. Seed Vocabulary Topics & Words
        if (!await db.VocabularyTopics.AnyAsync())
        {
            var travelTopic = new VocabularyTopic
            {
                Title = "Du Lịch & Khách Sạn",
                Slug = "travel",
                Icon = "✈️",
                Description = "Sân bay, làm thủ tục, đặt phòng & chỉ đường"
            };

            travelTopic.Words.Add(new VocabularyWord
            {
                Word = "Itinerary",
                Phonetic = "/aɪˈtɪn.ə.rer.i/",
                MeaningVi = "Lịch trình chuyến đi chi tiết",
                DefinitionEn = "A detailed plan or route of a journey.",
                ExampleEn = "We must finalize our travel itinerary before booking the flights.",
                ExampleVi = "Chúng ta phải chốt lịch trình du lịch trước khi đặt vé máy bay.",
                PartOfSpeech = "Noun",
                DifficultyLevel = "B2"
            });

            travelTopic.Words.Add(new VocabularyWord
            {
                Word = "Accommodation",
                Phonetic = "/əˌkɑː.məˈdeɪ.ʃən/",
                MeaningVi = "Chỗ ở, phòng nghỉ lưu trú",
                DefinitionEn = "A place where you live or stay, especially when traveling.",
                ExampleEn = "The resort provides luxurious accommodation overlooking the sea.",
                ExampleVi = "Khu nghỉ dưỡng cung cấp chỗ ở sang trọng nhìn ra biển.",
                PartOfSpeech = "Noun",
                DifficultyLevel = "B1"
            });

            db.VocabularyTopics.Add(travelTopic);
        }

        // 4. Seed TOEIC Mock Test
        if (!await db.ToeicTests.AnyAsync())
        {
            var toeicTest = new ToeicTest
            {
                Title = "TOEIC ETS Full Mock Test 2026 - Test 01",
                Year = 2026,
                DurationMinutes = 120,
                TotalQuestions = 200,
                Difficulty = "Medium"
            };

            toeicTest.Questions.Add(new ToeicQuestion
            {
                PartNumber = 1,
                QuestionNumber = 1,
                QuestionText = "Look at the picture and select the best statement.",
                OptionsJson = "[\"Some laptops are arranged on the table\",\"People are walking out\",\"The curtains are closed\",\"The chairs are stacked\"]",
                CorrectAnswer = "A",
                ExplanationVi = "Đáp án A đúng vì trong ảnh các máy tính xách tay được xếp trên bàn họp.",
                TranscriptEn = "(A) Some laptops are arranged on the conference table."
            });

            db.ToeicTests.Add(toeicTest);
        }

        await db.SaveChangesAsync();
    }
}
