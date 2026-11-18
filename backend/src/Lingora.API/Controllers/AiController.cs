using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Lingora.Application.DTOs;
using Lingora.Application.Interfaces;

namespace Lingora.API.Controllers;

[ApiController]
[Route("api/v1/[controller]")]
public class AiController : ControllerBase
{
    private readonly IAiService _ai;

    public AiController(IAiService ai)
    {
        _ai = ai;
    }

    [HttpPost("tutor/chat")]
    public async Task<ActionResult<AiChatResponse>> ChatWithTutor([FromBody] AiChatRequest request)
    {
        var response = await _ai.ChatAsync(request.Persona, request.Message);
        return Ok(response);
    }

    [Authorize]
    [HttpPost("writing/evaluate")]
    public async Task<IActionResult> EvaluateWriting([FromBody] WritingEvaluationRequest request)
    {
        var userId = GetCurrentUserId();
        var result = await _ai.EvaluateWritingAsync(userId, request);
        return Ok(result);
    }

    [Authorize]
    [HttpPost("speaking/evaluate")]
    public async Task<IActionResult> EvaluateSpeaking([FromBody] SpeakingEvaluationRequest request)
    {
        var userId = GetCurrentUserId();
        var result = await _ai.EvaluateSpeakingAsync(userId, request);
        return Ok(result);
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
