using MongoDB.Driver;

namespace Portfolio.Repository
{
    public class EducationRepository : IEducationRepository
    {
        private readonly IMongoCollection<Education> _educationCollection;

        public EducationRepository(IMongoClient mongoClient)
        {
            var database = mongoClient.GetDatabase("PortfolioDb");
            _educationCollection = database.GetCollection<Education>("Education");
        }

        public async Task<List<Education>> GetAllAsync() =>
            await _educationCollection.Find(_ => true).ToListAsync();

        public async Task<Education> CreateAsync(Education education)
        {
            await _educationCollection.InsertOneAsync(education);
            return education;
        }
    }
}
