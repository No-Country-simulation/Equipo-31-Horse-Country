namespace HorseCountry.API.Persistence.Entities;

public class AttachedFile
{
    public Guid Id { get; set; }
    public int HorseId { get; set; }
    public string URL { get; set; }
    public string Type { get; set; }
    public virtual Horse Horse { get; set; }
}
