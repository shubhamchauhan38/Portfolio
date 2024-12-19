using System.Collections.Generic;

namespace Portfolio.Model.DTO
{
    public class CoreSkillDTO
    {
        public string Category { get; set; }
        public List<string> Skills { get; set; }
    }

    public class SkillsWrapperDTO
    {
        public List<CoreSkillDTO> SkillDTO { get; set; }
    }
}