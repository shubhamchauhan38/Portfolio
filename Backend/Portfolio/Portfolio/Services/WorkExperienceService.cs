using MongoDB.Driver;
using Portfolio.Model;

namespace Portfolio.Services
{
    public class WorkExperienceService
    {
        private readonly IMongoCollection<WorkExperience> _workExperienceCollection;

        public WorkExperienceService(IMongoClient mongoClient)
        {
            var database = mongoClient.GetDatabase("PortfolioDb");
            _workExperienceCollection = database.GetCollection<WorkExperience>("WorkExperience");
        }

        public async Task<List<WorkExperience>> GetAllAsync() =>
            await _workExperienceCollection.Find(_ => true).ToListAsync();

        public async Task<WorkExperience> CreateAsync(WorkExperience experience)
        {
            await _workExperienceCollection.InsertOneAsync(experience);
            return experience;
        }
    }
}
