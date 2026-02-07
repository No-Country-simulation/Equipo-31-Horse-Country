namespace HorseCountry.API.DTOs;

public class StatusDTO
{
    public int Id { get; set; }
    public string? Description { get; set; }
}

public class StatusUpdateDto
{
    public required string Description { get; set; }
}