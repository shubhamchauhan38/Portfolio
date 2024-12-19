using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace Portfolio.Model
{
    public class Project
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public List<string> Features { get; set; }
        public List<string> Technologies { get; set; }
    }
}
