using Microsoft.AspNetCore.Mvc;
using Portfolio.Model.DTO;

[ApiController]
[Route("api/[controller]")]
public class CodingProfileController : ControllerBase
{
    private readonly CodingProfileService _codingProfileService;

    public CodingProfileController(CodingProfileService codingProfileService)
    {
        _codingProfileService = codingProfileService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var codingProfiles = await _codingProfileService.GetAllAsync();
        var codingProfileDTOs = codingProfiles.Select(profile => new CodingProfileDTO
        {
            Platform = profile.Platform,
            Link = profile.Link
        }).ToList();
        return Ok(codingProfileDTOs);
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] CodingProfileDTO codingProfileDTO)
    {
        var profile = new CodingProfile
        {
            Platform = codingProfileDTO.Platform,
            Link = codingProfileDTO.Link
        };
        var result = await _codingProfileService.CreateAsync(profile);
        return CreatedAtAction(nameof(GetAll), new { id = result.Id }, result);
    }
}
