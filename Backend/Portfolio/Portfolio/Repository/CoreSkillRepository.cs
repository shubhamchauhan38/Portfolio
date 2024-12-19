using MongoDB.Driver;

namespace Portfolio.Repository
{
    public class CoreSkillRepository : ICoreSkillRepository
    {
        private readonly IMongoCollection<CoreSkill> _coreSkillCollection;

        public CoreSkillRepository(IMongoClient mongoClient)
        {
            var database = mongoClient.GetDatabase("PortfolioDb");
            _coreSkillCollection = database.GetCollection<CoreSkill>("CoreSkills");
        }

        public async Task<List<CoreSkill>> GetAllAsync() =>
            await _coreSkillCollection.Find(_ => true).ToListAsync();

        public async Task<CoreSkill> CreateAsync(CoreSkill skill)
        {
            await _coreSkillCollection.InsertOneAsync(skill);
            return skill;
        }
    }
}
