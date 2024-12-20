using Microsoft.AspNetCore.Mvc;
using Portfolio.Model;
using Portfolio.Services;

[Route("api/[controller]")]
[ApiController]
public class ProjectController : ControllerBase
{
    private readonly ProjectService _service;

    public ProjectController(ProjectService service)
    {
        _service = service;
    }

    [HttpGet("all")]
    public async Task<IActionResult> GetAll() =>
        Ok(await _service.GetAllAsync());

    [HttpPost("create")]
    public async Task<IActionResult> Create([FromBody] Project project)
    {
        var result = await _service.CreateAsync(project);
        return CreatedAtAction(nameof(GetAll), new { id = result.Id }, result);
    }
}
