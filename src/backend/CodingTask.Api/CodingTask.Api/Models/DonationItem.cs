namespace CodingTask.Api.Models; 

public class DonationItem {
    public DonationItem(Guid id,
                        Reference reference,
                        string name,
                        Location? location,
                        Theme? theme,
                        Price? price,
                        Status status) {
        Id = id;
        Reference = reference;
        Name = name;
        Location = location;
        Theme = theme;
        Price = price;
        Status = status;
    }

    public Guid Id { get; }
    public Reference Reference { get; }
    public string Name { get; }
    public Location? Location { get; }
    public Theme? Theme { get; }
    public Price? Price { get; }
    public Status Status { get; }
}