using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SmartWardrobeBackend.Models;

public class ProductType
{
    [Key]
    public int Id { get; set; }

    [Required]
    [StringLength(100)]
    public required string Type { get; set; }
}
