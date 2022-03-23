namespace CodingTask.Api.Models; 

public class Currency {
    public Currency(string id, string symbol) {
        Id = id;
        Symbol = symbol;
    }

    public string Id { get; }
    public string Symbol { get; }
}

public static class Currencies {
    public static readonly Currency Gbp = new("gbp", "£");
}