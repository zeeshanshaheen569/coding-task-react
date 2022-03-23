namespace CodingTask.Api.Models; 

public class Theme {
    public Theme(string id, string name) {
        Id = id;
        Name = name;
    }

    public string Id { get; }
    public string Name { get; }
}