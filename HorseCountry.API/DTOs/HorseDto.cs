public class HorseDto
{
    public Guid? Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string? BreedDescription;
    public string? ColorDescription;
    public decimal Price { get; set; }
    public string Description { get; set; } = string.Empty;
    public string? Status { get; set; }
    public int StatusId { get; set; }
    public int BreedId { get; set; }
    public int ColorId { get; set; }
    public int GenderId { get; set; }
    public IFormFile? ImageFile { get; set; }
}