using Portfolio.Repository;

public class CoreSkillService
{
    private readonly ICoreSkillRepository _coreSkillRepository;

    public CoreSkillService(ICoreSkillRepository coreSkillRepository)
    {
        _coreSkillRepository = coreSkillRepository;
    }

    public async Task<List<CoreSkill>> GetAllAsync() =>
        await _coreSkillRepository.GetAllAsync();

    public async Task<CoreSkill> CreateAsync(CoreSkill skill) =>
        await _coreSkillRepository.CreateAsync(skill);
}
