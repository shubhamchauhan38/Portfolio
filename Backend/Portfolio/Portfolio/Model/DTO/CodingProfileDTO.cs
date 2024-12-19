namespace Portfolio.Model.DTO
{
    public class CodingProfileDTO
    {
        public string Platform { get; set; }
        public string Link { get; set; }
    }

    public class CodingProfileWrapperDTO
    {
        public List<CodingProfileDTO> CodingProfiles { get; set; }
    }

}
