using MongoDB.Driver;
using Portfolio.Model;

namespace Portfolio.Services
{
    public class ProjectService
    {
        private readonly IMongoCollection<Project> _projectCollection;

        public ProjectService(IMongoClient mongoClient)
        {
            var database = mongoClient.GetDatabase("PortfolioDb");
            _projectCollection = database.GetCollection<Project>("Projects");
        }

        public async Task<List<Project>> GetAllAsync() =>
            await _projectCollection.Find(_ => true).ToListAsync();

        public async Task<Project> CreateAsync(Project project)
        {
            await _projectCollection.InsertOneAsync(project);
            return project;
        }
    }
}
