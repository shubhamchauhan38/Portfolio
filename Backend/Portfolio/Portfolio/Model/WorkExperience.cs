using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace Portfolio.Model
{
    public class WorkExperience
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; } // Marked as nullable

        public string Company { get; set; }
        public string Role { get; set; }
        public string Duration { get; set; }
        public List<string> Responsibilities { get; set; }
    }
}
