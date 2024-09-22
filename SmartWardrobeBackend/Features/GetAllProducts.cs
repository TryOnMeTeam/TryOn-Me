using Microsoft.EntityFrameworkCore;
using SmartWardrobeBackend.Data;
using SmartWardrobeBackend.DTOs;

namespace SmartWardrobeBackend.Features;

public class GetAllProducts
{
    private readonly ApplicationDbContext _context;

    public GetAllProducts(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<ICollection<ProductDto>> GetAllProduct()
    {
        var products = await _context.Products
            .Include(p => p.ProductCatalogs)
            .ThenInclude(pc => pc.Occasion)
            .Include(p => p.ProductCatalogs)
            .ThenInclude(pc => pc.Season)
            .Select(p => new ProductDto
            {
                Id = p.Id,
                Name = p.Name,
                Price = p.Price,
                Description = p.Description,
                ImageUrl = p.ImageUrl,
                OccasionIds = p.ProductCatalogs.Select(pc => pc.OccasionId).ToList(),
                SeasonIds = p.ProductCatalogs.Select(pc => pc.SeasonId).ToList()
            })
            .ToListAsync();

        return products;
    }
}
