namespace SmartWardrobeBackend.Models;
public class Merchant
{
    public int Id { get; set; }

    public required string Name { get; set; }

    public required string ContactInfo { get; set; }

    public int Priority { get; set; }

    public ICollection<Product> Products { get; set; } = new List<Product>();
}
