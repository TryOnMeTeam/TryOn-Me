using Microsoft.VisualStudio.Web.CodeGeneration.Utils;

namespace SmartWardrobeBackend.Models;

public class ProductCatalog
{
    public int Id { get; set; }

    public int ProductId { get; set; }

    public int OccasionId { get; set; }

    public int SeasonId { get; set; }

    public required Product Product { get; set; }

    public required Occasion Occasion { get; set; }

    public required Season Season { get; set; }
}
