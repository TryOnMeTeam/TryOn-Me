using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;

public class Program
{
    public static void Main(string[] args)
    {
        CreateHostBuilder(args).Build().Run();
    }

    public static IHostBuilder CreateHostBuilder(string[] args) =>
        Host.CreateDefaultBuilder(args)
            .ConfigureWebHostDefaults(webBuilder =>
            {
                webBuilder.UseStartup<Startup>();  // Link to Startup.cs

                // Option 1: Use HTTP instead of HTTPS for development purposes
                webBuilder.UseUrls("http://localhost:5000");

                // Uncomment the following line if HTTPS is necessary and you've run the `dotnet dev-certs https --trust` command
                // webBuilder.UseUrls("https://localhost:5001");  // Using HTTPS

                // HTTPS can be configured in Startup.cs or appsettings.json as well
            });
}
