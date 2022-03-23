using System.ComponentModel.DataAnnotations;

namespace CodingTask.Api.Models; 

public class NewDonationItem {
    [Required]
    [StringLength(200)]
    public string? Name { get; set; }
    public string? Location { get; set; }
    public string? Theme { get; set; }
    public NewPrice? Price { get; set; }
}