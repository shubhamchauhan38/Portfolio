using MongoDB.Driver;
using Portfolio.Repository;

public class EducationService
{
    private readonly IEducationRepository _educationRepository;

    public EducationService(IEducationRepository educationRepository)
    {
        _educationRepository = educationRepository;
    }

    public async Task<List<Education>> GetAllAsync() =>
        await _educationRepository.GetAllAsync();

    public async Task<Education> CreateAsync(Education education) =>
        await _educationRepository.CreateAsync(education);
}
