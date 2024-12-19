using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public class CoreSkill
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }
    public string Category { get; set; }  // e.g., Programming Languages, Web Development
    public List<string> Skills { get; set; }
}
