using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Lingora.Application.DTOs;
using Lingora.Application.Interfaces;

namespace Lingora.API.Controllers;

[ApiController]
[Route("api/v1/[controller]")]
public class VocabularyController : ControllerBase
{
    private readonly IVocabularyService _vocab;

    public VocabularyController(IVocabularyService vocab)
    {
        _vocab = vocab;
    }

    [HttpGet("topics")]
    public async Task<IActionResult> GetTopics()
    {
        var topics = await _vocab.GetTopicsAsync();
        return Ok(topics);
    }

    [HttpGet("words")]
    public async Task<IActionResult> GetWords([FromQuery] Guid topicId)
    {
        var userId = GetCurrentUserId();
        var words = await _vocab.GetWordsByTopicAsync(topicId, userId);
        return Ok(words);
    }

    [Authorize]
    [HttpPost("srs/review")]
    public async Task<IActionResult> SubmitSrsReview([FromBody] SrsReviewRequest request)
    {
        var userId = GetCurrentUserId();
        await _vocab.SubmitSrsReviewAsync(userId, request);
        return Ok(new { success = true, message = "SRS progress updated successfully" });
    }

    private Guid GetCurrentUserId()
    {
        var userIdClaim = User.FindFirstValue(ClaimTypes.NameIdentifier);
        if (!string.IsNullOrEmpty(userIdClaim) && Guid.TryParse(userIdClaim, out var userId))
        {
            return userId;
        }
        return Guid.Empty;
    }
}
