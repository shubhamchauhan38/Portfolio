using Microsoft.AspNetCore.Mvc;
using Portfolio.Model.DTO;
using Portfolio.Service;
using System.Linq;
using System.Threading.Tasks;

namespace Portfolio.Controllers
{
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
        public async Task<IActionResult> Create([FromBody] CodingProfileWrapperDTO wrapperDTO)
        {
            if (wrapperDTO == null || wrapperDTO.CodingProfiles == null || !wrapperDTO.CodingProfiles.Any())
            {
                return BadRequest("CodingProfileWrapperDTO or CodingProfiles list is null or empty");
            }

            // Assuming you need to create multiple coding profiles
            foreach (var codingProfileDTO in wrapperDTO.CodingProfiles)
            {
                var profile = new CodingProfile
                {
                    Platform = codingProfileDTO.Platform,
                    Link = codingProfileDTO.Link
                };
                var result = await _codingProfileService.CreateAsync(profile);
            }

            return Ok("Coding profiles created successfully");
        }
    }
}
