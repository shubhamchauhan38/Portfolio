using MongoDB.Driver;
using Portfolio.DatabaseSetting;
using Portfolio.Middleware;
using Portfolio.Repository;
using Portfolio.Service;
using Portfolio.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configure MongoDB settings from appsettings.json
builder.Services.Configure<MongoDbSettings>(
    builder.Configuration.GetSection("MongoDbSettings"));

builder.Services.AddSingleton<IMongoClient, MongoClient>(sp =>
{
    var settings = MongoClientSettings.FromUrl(new MongoUrl(builder.Configuration.GetValue<string>("MongoDbSettings:ConnectionString")));
    settings.SslSettings = new SslSettings() { EnabledSslProtocols = System.Security.Authentication.SslProtocols.Tls12 };
    return new MongoClient(settings);
});

// Register Services
builder.Services.AddScoped<WorkExperienceService>();
builder.Services.AddScoped<ProjectService>();
builder.Services.AddScoped<CoreSkillService>();
builder.Services.AddScoped<EducationService>();
builder.Services.AddScoped<CodingProfileService>();

// Register Repositories
builder.Services.AddSingleton<ICoreSkillRepository, CoreSkillRepository>();
builder.Services.AddSingleton<IEducationRepository, EducationRepository>();
builder.Services.AddSingleton<ICodingProfileRepository, CodingProfileRepository>();

// Configure CORS policy
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("https://shubhamchauhan38.github.io") // Your React app's hosted URL
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowFrontend"); // Apply the CORS policy

// Custom error handling middleware
app.UseMiddleware<ErrorHandlingMiddleware>();

// HTTPS redirection
app.UseHttpsRedirection();

// Authorization (if you're adding authentication)
app.UseAuthorization();

// Map controllers for API endpoints
app.MapControllers();

app.Run();