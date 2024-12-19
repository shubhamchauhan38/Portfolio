using Microsoft.AspNetCore.Mvc;
using Portfolio.Model.DTO;
using Portfolio.Service;

[Route("api/[controller]")]
[ApiController]
public class CoreSkillController : ControllerBase
{
    private readonly CoreSkillService _coreSkillService;

    public CoreSkillController(CoreSkillService coreSkillService)
    {
        _coreSkillService = coreSkillService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var coreSkills = await _coreSkillService.GetAllAsync();
        var coreSkillsDTO = coreSkills.Select(skill => new CoreSkillDTO
        {
            Category = skill.Category,
            Skills = skill.Skills
        }).ToList();
        return Ok(coreSkillsDTO);
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] CoreSkillDTO skillDTO)
    {
        var skill = new CoreSkill
        {
            Category = skillDTO.Category,
            Skills = skillDTO.Skills
        };
        var result = await _coreSkillService.CreateAsync(skill);
        return CreatedAtAction(nameof(GetAll), new { id = result.Id }, result);
    }
}
