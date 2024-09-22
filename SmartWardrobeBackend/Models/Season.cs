namespace SmartWardrobeBackend.Models;

public class Season
{
    public int Id { get; set; }

    public required string Name { get; set; }

    public ICollection<ProductCatalog> ProductCatalogs { get; set; } = new List<ProductCatalog>();
}
