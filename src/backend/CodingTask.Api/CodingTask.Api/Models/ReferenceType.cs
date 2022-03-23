namespace CodingTask.Api.Models; 

public class ReferenceType {
    public ReferenceType(string id, string prefix) {
        Id = id;
        Prefix = prefix;
    }

    public string Id { get; }
    public string Prefix { get; }
}