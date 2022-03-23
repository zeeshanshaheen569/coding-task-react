namespace CodingTask.Api.Models; 

public class Location {
    public Location(string id, string name) {
        Id = id;
        Name = name;
    }

    public string Id { get; }
    public string Name { get; }
}