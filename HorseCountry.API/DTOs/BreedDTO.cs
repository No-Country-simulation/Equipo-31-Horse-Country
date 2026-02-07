namespace HorseCountry.API.DTOs;

public class BreedDTO
{
    public int Id { get; set; }
    public string? Description { get; set; }
}

public class BreedUpdateDTO
{
    public required string Description { get; set; }
}