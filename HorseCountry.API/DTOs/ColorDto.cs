namespace HorseCountry.API.DTOs;

public class ColorDto
{
    public int Id { get; set; }
    public string? Description { get; set; }
}

public class ColorUpdateDto
{
    public required string Description { get; set; }
}

