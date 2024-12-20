using Microsoft.AspNetCore.Mvc;
using Portfolio.Model.DTO;
using Portfolio.Services;

[Route("api/[controller]")]
[ApiController]
public class EducationController : ControllerBase
{
    private readonly EducationService _educationService;

    public EducationController(EducationService educationService)
    {
        _educationService = educationService;
    }

    [HttpGet("all")]
    public async Task<IActionResult> GetAll()
    {
        var educationList = await _educationService.GetAllAsync();
        var educationDTOs = educationList.Select(education => new EducationDTO
        {
            Degree = education.Degree,
            Institution = education.Institution,
            Duration = education.Duration,
            CGPA = education.CGPA
        }).ToList();
        return Ok(educationDTOs);
    }

    [HttpPost("create")]
    public async Task<IActionResult> Create([FromBody] EducationDTO educationDTO)
    {
        var education = new Education
        {
            Degree = educationDTO.Degree,
            Institution = educationDTO.Institution,
            Duration = educationDTO.Duration,
            CGPA = educationDTO.CGPA
        };
        var result = await _educationService.CreateAsync(education);
        return CreatedAtAction(nameof(GetAll), new { id = result.Id }, result);
    }
}
