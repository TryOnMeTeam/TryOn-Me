using Microsoft.EntityFrameworkCore;
using SmartWardrobeBackend.Models;

namespace SmartWardrobeBackend.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
        
    }

    public DbSet<ProductType> ProductTypes { get; set; }
    public DbSet<Product> Products { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Configure relationships if needed
    }
}
