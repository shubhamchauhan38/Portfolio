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

builder.Services.AddSingleton<IMongoClient, MongoClient>(
    sp => new MongoClient(builder.Configuration.GetValue<string>("MongoDbSettings:ConnectionString")));

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
        policy.WithOrigins("http://localhost:3000") // Add the allowed frontend URL here
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

app.UseCors("AllowFrontend");  // Apply the CORS policy

// Custom error handling middleware
app.UseMiddleware<ErrorHandlingMiddleware>();

// HTTPS redirection
app.UseHttpsRedirection();

// Authorization (if you're adding authentication)
app.UseAuthorization();

// Map controllers for API endpoints
app.MapControllers();

app.Run();
