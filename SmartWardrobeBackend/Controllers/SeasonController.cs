using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SmartWardrobeBackend.Data;
using SmartWardrobeBackend.Models;

namespace SmartWardrobeBackend.Controllers;

[Route("api/[controller]")]
[ApiController]
public class SeasonController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public SeasonController(ApplicationDbContext context)
    {
        _context = context;
    }

    // GET: api/Seasons
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Season>>> GetSeasons()
    {
        return await _context.Seasons.ToListAsync();
    }

}
