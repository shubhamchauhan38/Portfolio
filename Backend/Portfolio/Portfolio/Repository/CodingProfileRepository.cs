using MongoDB.Driver;
using Portfolio.Service;

public class CodingProfileRepository : ICodingProfileRepository
{
    private readonly IMongoCollection<CodingProfile> _codingProfileCollection;

    public CodingProfileRepository(IMongoClient mongoClient)
    {
        var database = mongoClient.GetDatabase("PortfolioDb");
        _codingProfileCollection = database.GetCollection<CodingProfile>("CodingProfiles");
    }

    public async Task<List<CodingProfile>> GetAllAsync() =>
        await _codingProfileCollection.Find(_ => true).ToListAsync();

    public async Task<CodingProfile> CreateAsync(CodingProfile profile)
    {
        await _codingProfileCollection.InsertOneAsync(profile);
        return profile;
    }
}
