namespace CodingTask.Api.Models; 

public class Status {
    public Status(string id, string name) {
        Id = id;
        Name = name;
    }

    public string Id { get; }
    public string Name { get; }
}