namespace Portfolio.Repository
{
    public interface ICoreSkillRepository
    {
        Task<List<CoreSkill>> GetAllAsync();
        Task<CoreSkill> CreateAsync(CoreSkill skill);
    }
}
