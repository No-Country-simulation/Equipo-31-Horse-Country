namespace HorseCountry.API.DTOs;

public class GenderDTO
{
    public int Id { get; set; }
    public string? Description { get; set; }
}

public class GenderUpdateDto
{
    public required string Description { get; set; }
}


