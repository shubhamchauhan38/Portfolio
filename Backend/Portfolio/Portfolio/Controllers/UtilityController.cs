using Microsoft.AspNetCore.Mvc;

namespace Portfolio.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UtilityController : ControllerBase
    {
        [HttpGet("resume")]
        public IActionResult GetResume()
        {
            var filePath = Path.Combine(Directory.GetCurrentDirectory(), "Files", "Shubam_Kumar_Resume.pdf");
            if (!System.IO.File.Exists(filePath))
            {
                return NotFound("Resume file not found.");
            }
            var fileBytes = System.IO.File.ReadAllBytes(filePath);
            return File(fileBytes, "application/pdf", "Shubam_Kumar_Resume.pdf");
        }
    }
}
