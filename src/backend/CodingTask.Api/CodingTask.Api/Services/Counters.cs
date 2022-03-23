using CodingTask.Api.Models;

namespace CodingTask.Api.Services; 

public class Counters {
    private long _next = 1;
    
    public Reference NextReference(ReferenceType type) {
        var reference = new Reference(type, _next, $"{type.Prefix}{_next}");
        
        _next++;

        return reference;
    }

    public void Reset() => _next = 1;
}