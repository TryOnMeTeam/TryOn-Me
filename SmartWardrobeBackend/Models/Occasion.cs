namespace SmartWardrobeBackend.Models;

public class Occasion
{
    public int Id { get; set; }

    public required string Name { get; set; }

    public ICollection<ProductCatalog> ProductCatalogs { get; set; } = new List<ProductCatalog>();
}
