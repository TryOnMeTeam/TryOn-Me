using Microsoft.AspNetCore.Mvc;
using SmartWardrobeBackend.Data;
using SmartWardrobeBackend.Features;
using SmartWardrobeBackend.Models;

namespace SmartWardrobeBackend.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ProductController : ControllerBase
{
    private readonly GetAllProducts _getAllProducts;

    public ProductController(GetAllProducts getAllProducts)
    {
        _getAllProducts = getAllProducts;
    }

    [HttpGet("getProducts")]
    public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
    {
        var products = await _getAllProducts.GetAllProduct();
        return Ok(products);
    }

}
