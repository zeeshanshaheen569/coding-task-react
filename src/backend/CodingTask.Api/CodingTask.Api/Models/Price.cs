namespace CodingTask.Api.Models; 

public class Price {
    public Price(Currency currency, decimal amount, string text) {
        Currency = currency;
        Amount = amount;
        Text = text;
    }

    public Currency Currency { get; }
    public decimal Amount { get; }
    public string Text { get; }
}