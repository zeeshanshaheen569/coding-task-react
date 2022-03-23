namespace CodingTask.Api.Models; 

public class Reference {
    public Reference(ReferenceType type, long number, string text) {
        Type = type;
        Number = number;
        Text = text;
    }
    
    public ReferenceType Type { get; }
    public long Number { get; }
    public string Text { get; }
}