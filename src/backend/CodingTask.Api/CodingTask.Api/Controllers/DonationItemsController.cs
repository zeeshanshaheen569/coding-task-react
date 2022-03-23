using CodingTask.Api.Models;
using CodingTask.Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace CodingTask.Api.Controllers;

[ApiController]
[Route("/api/v1/donationItems")]
public class DonationItemsController : ControllerBase {
    private readonly Database _database;
    private readonly Counters _counters;

    public DonationItemsController(Database database, Counters counters) {
        _database = database;
        _counters = counters;
    }
    
    [HttpPost]
    public DonationItem AddDonationItem(NewDonationItem newItem) {
        var reference = _counters.NextReference(ReferenceType.DonationItem);
        var status = _database.GetStatuses().Single(x => x.Id == "active");
        Price? price = null;
        
        var location = _database.GetLocations()
                                .SingleOrDefault(x => x.Id.Equals(newItem.Location,
                                                                  StringComparison.InvariantCultureIgnoreCase));

        var theme = _database.GetThemes()
                             .SingleOrDefault(x => x.Id.Equals(newItem.Theme,
                                                               StringComparison.InvariantCultureIgnoreCase));

        if (newItem.Price != null) {
            price = new Price(newItem.Price.Currency,
                              newItem.Price.Amount,
                              $"{newItem.Price.Currency} {newItem.Price.Amount}");
        }
        
        var donationItem = new DonationItem(Guid.NewGuid(),
                                            reference,
                                            newItem.Name!,
                                            location,
                                            theme,
                                            price,
                                            status);
        
        _database.AddDonationItem(donationItem);

        return donationItem;
    }

    [HttpGet("all")]
    public IEnumerable<DonationItem> GetDonationItems() {
        return _database.GetDonationItems();
    }
    
    [HttpGet("locations")]
    public IEnumerable<Location> GetLocations() {
        return _database.GetLocations();
    }
    
    [HttpGet("statuses")]
    public IEnumerable<Status> GetStatuses() {
        return _database.GetStatuses();
    }
    
    [HttpGet("themes")]
    public IEnumerable<Theme> GetThemes() {
        return _database.GetThemes();
    }
    
    [HttpPost("reset")]
    public ActionResult Reset() {
        _database.Reset();
        _counters.Reset();

        return Ok();
    }
}