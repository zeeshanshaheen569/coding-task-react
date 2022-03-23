using CodingTask.Api.Models;

namespace CodingTask.Api.Services; 

public class Database {
    private readonly List<DonationItem> _donationItems = new();

    public void AddDonationItem(DonationItem donationItem) {
        if (_donationItems.Count > 1000) {
            throw new Exception("Maximum capacity has been reached, reset database before proceeding");
        }
        
        _donationItems.Add(donationItem);
    }
    
    public IEnumerable<Currency> GetCurrencies() {
        yield return new Currency("gbp", "£");
    }

    public IEnumerable<DonationItem> GetDonationItems() => _donationItems;

    public IEnumerable<Location> GetLocations() {
        yield return new Location("canada", "Canada");
        yield return new Location("sudan", "Sudan");
        yield return new Location("yemen", "Yemen");
        yield return new Location("unrestricted", "Where Most Needed");
    }
    
    public IEnumerable<ReferenceType> GetReferenceTypes() {
        yield return new ReferenceType("donationItem", "DI");
    }
    
    public IEnumerable<Status> GetStatuses() {
        yield return new Status("active", "Active");
        yield return new Status("awaitingApproval", "Awaiting Approval");
        yield return new Status("inactive", "Inactive");
    }
    
    public IEnumerable<Theme> GetThemes() {
        yield return new Theme("emergency", "Emergency");
        yield return new Theme("food", "Food");
        yield return new Theme("unrestricted", "General");
        yield return new Theme("health", "Health");
    }

    public void Reset() => _donationItems.Clear();
}