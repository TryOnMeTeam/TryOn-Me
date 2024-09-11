using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SmartWardrobeBackend.Models;

public class Product
{
    [Key]
    public int Id { get; set; }

    [Required(ErrorMessage = "Product name is required.")]
    public required string ProductName { get; set; }

    [Required(ErrorMessage = "Product type id is required.")]
    public required int ProductTypeId { get; set; }

    public DateTime CreatedAt { get; set; }

    // Constructor to initialize CreatedAt
    public Product()
    {
        CreatedAt = DateTime.Now; // Automatically set to current time
    }
}
