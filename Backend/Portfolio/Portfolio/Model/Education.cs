using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public class Education
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }
    public string Degree { get; set; }  // e.g., Bachelor of Technology
    public string Institution { get; set; }
    public string Duration { get; set; }  // e.g., 01/2019 – 12/2023
    public double CGPA { get; set; }     // e.g., 8.63
}
