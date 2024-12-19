namespace Portfolio.Repository
{
    public interface IEducationRepository
    {
        Task<List<Education>> GetAllAsync();
        Task<Education> CreateAsync(Education education);
    }
}
