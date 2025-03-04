namespace SmartWardrobeBackend.DTOs;

public class ProductDto
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public decimal Price { get; set; }
    public string? Description { get; set; }
    public string? ImageUrl { get; set; }
    public List<int>? OccasionIds { get; set; }
    public List<int>? SeasonIds { get; set; }
}