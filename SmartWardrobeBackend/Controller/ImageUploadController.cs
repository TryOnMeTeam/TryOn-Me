using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.IO;
using System.Text.Json;

[Route("api/[controller]")]
[ApiController]
public class ImageUploadController : ControllerBase
{
    [AllowAnonymous]
    [HttpPost("upload")]
    public IActionResult UploadImage(IFormFile file)
    {
        // Path to the Python script
        string pythonScriptPath = "/Users/codeinsight/Documents/TryOnMe/SmartWardrobeAI/api_call.py"; // Update with the path to your Python script

        // Create the process start info
        var startInfo = new ProcessStartInfo
        {
            FileName = "python3", // Use "python" if Python 3 is installed as "python"
            Arguments = pythonScriptPath,
            RedirectStandardOutput = true,
            UseShellExecute = false,
            CreateNoWindow = true
        };

        using (var process = Process.Start(startInfo))
        {
            using (var reader = process.StandardOutput)
            {
                var result = reader.ReadToEnd();
                process.WaitForExit();

                // Parse the JSON response from the Python script
                var response = JsonDocument.Parse(result);
                var imageUrl = response.RootElement.GetProperty("imageUrl").GetString();

                return Ok(new { message = "Random image URL retrieved", imageUrl });
            }
        }
    }
}
