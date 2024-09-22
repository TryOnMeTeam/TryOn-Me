using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SmartWardrobeBackend.Data;
using SmartWardrobeBackend.Models;

namespace SmartWardrobeBackend.Controllers;

[Route("api/[controller]")]
[ApiController]
public class OccasionController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public OccasionController(ApplicationDbContext context)
    {
        _context = context;
    }

    // GET: api/Occasion
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Occasion>>> GetOccasions()
    {
        return await _context.Occasions.ToListAsync();
    }

}
