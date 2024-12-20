using Microsoft.AspNetCore.Mvc;
using Portfolio.Model;
using Portfolio.Services;

[Route("api/[controller]")]
[ApiController]
public class WorkExperienceController : ControllerBase
{
    private readonly WorkExperienceService _service;

    public WorkExperienceController(WorkExperienceService service)
    {
        _service = service;
    }

    [HttpGet("all")]
    public async Task<IActionResult> GetAll() =>
        Ok(await _service.GetAllAsync());

    [HttpPost("create")]
    public async Task<IActionResult> Create([FromBody] WorkExperience experience)
    {
        var result = await _service.CreateAsync(experience);
        return CreatedAtAction(nameof(GetAll), new { id = result.Id }, result);
    }
}
