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
    public DbSet<Product> ProductCatalog { get; set; }
    public DbSet<Merchant> Merchants { get; set; }
    public DbSet<Season> Seasons { get; set; }
    public DbSet<Occasion> Occasions { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Merchant>()
            .HasMany(m => m.Products)
            .WithOne(p => p.Merchant)
            .HasForeignKey(p => p.MerchantId);

        modelBuilder.Entity<Occasion>()
            .HasMany(o => o.ProductCatalogs)
            .WithOne(pc => pc.Occasion)
            .HasForeignKey(pc => pc.OccasionId);

        modelBuilder.Entity<Season>()
            .HasMany(s => s.ProductCatalogs)
            .WithOne(pc => pc.Season)
            .HasForeignKey(pc => pc.SeasonId);

        modelBuilder.Entity<Product>()
            .HasMany(p => p.ProductCatalogs)
            .WithOne(pc => pc.Product)
            .HasForeignKey(pc => pc.ProductId);
    }
}
