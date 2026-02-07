using Microsoft.AspNetCore.Identity;

namespace HorseCountry.API.Persistence.Entities;

public class User : IdentityUser
{
    [PersonalData]
    public string? Name { get; set; }
    public bool IsAdmin { get; set; }
}
