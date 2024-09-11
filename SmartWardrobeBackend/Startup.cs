using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using SmartWardrobeBackend.Data;
using Pomelo.EntityFrameworkCore.MySql.Infrastructure;

public class Startup
{
    public IConfiguration Configuration { get; }

    public Startup(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddDbContext<ApplicationDbContext>(options =>
        options.UseMySQL(Configuration.GetConnectionString("DefaultConnection")));

        services.AddEndpointsApiExplorer();
        services.AddSwaggerGen();

        // Add services to the container (e.g., MVC, CORS, Authentication, etc.)
        services.AddControllers();  // Enables API controllers
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
        }
        else
        {
            app.UseExceptionHandler("/Home/Error");
            app.UseHsts();
        }

        app.UseHttpsRedirection();
        app.UseStaticFiles();

        // if (app.Environment.IsDevelopment())
        // {
        app.UseSwagger();
        app.UseSwaggerUI();
        // }

        app.UseRouting();

        app.UseAuthorization();

        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllers(); // Maps controller actions as endpoints
        });
    }
}
