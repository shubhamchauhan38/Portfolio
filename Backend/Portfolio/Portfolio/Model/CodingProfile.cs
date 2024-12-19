using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public class CodingProfile
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }
    public string Platform { get; set; }  // e.g., LeetCode, GeekForGeeks
    public string Link { get; set; }
}
