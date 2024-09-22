namespace SmartWardrobeBackend.Models;

public class Product
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public decimal Price { get; set; }

    public string? Description { get; set; }

    public required string ImageUrl { get; set; }

    public int MerchantId { get; set; }

    public Merchant? Merchant { get; set; }

    public ICollection<ProductCatalog> ProductCatalogs { get; set; } = new List<ProductCatalog>();
}
