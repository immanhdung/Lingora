using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Lingora.Infrastructure.Persistence;

namespace Lingora.API.Controllers;

[ApiController]
[Route("api/v1/[controller]")]
public class KidsController : ControllerBase
{
    private readonly ApplicationDbContext _db;

    public KidsController(ApplicationDbContext db)
    {
        _db = db;
    }

    [HttpGet("worlds")]
    public async Task<IActionResult> GetWorlds()
    {
        var worlds = await _db.KidsWorlds.OrderBy(w => w.OrderIndex).ToListAsync();
        return Ok(worlds);
    }
}
