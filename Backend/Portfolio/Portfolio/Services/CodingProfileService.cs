using Portfolio.Service;

public class CodingProfileService
{
    private readonly ICodingProfileRepository _codingProfileRepository;

    public CodingProfileService(ICodingProfileRepository codingProfileRepository)
    {
        _codingProfileRepository = codingProfileRepository;
    }

    public async Task<List<CodingProfile>> GetAllAsync() =>
        await _codingProfileRepository.GetAllAsync();

    public async Task<CodingProfile> CreateAsync(CodingProfile profile) =>
        await _codingProfileRepository.CreateAsync(profile);
}
