using Microsoft.AspNetCore.Mvc;
using Portfolio.Model.DTO;
using Portfolio.Service;
using System.Linq;
using System.Threading.Tasks;

namespace Portfolio.Controllers
{
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
        public async Task<IActionResult> Create([FromBody] SkillsWrapperDTO wrapperDTO)
        {
            if (wrapperDTO == null || wrapperDTO.SkillDTO == null || !wrapperDTO.SkillDTO.Any())
            {
                return BadRequest("SkillsWrapperDTO or skillDTO is null or empty");
            }

            // Assuming each CoreSkillDTO inside the SkillDTO list needs to be created
            foreach (var skillDTO in wrapperDTO.SkillDTO)
            {
                var skill = new CoreSkill
                {
                    Category = skillDTO.Category,
                    Skills = skillDTO.Skills
                };
                var result = await _coreSkillService.CreateAsync(skill);
            }

            return Ok("Skills created successfully");
        }
    }
}
