using System.ComponentModel.DataAnnotations.Schema;

namespace HorseCountry.API.Persistence.Entities;

public class StatusHistory
{
    public int Id { get; set; }
    public virtual User User { get; set; }
    public int OldStatusId { get; set; }
    [ForeignKey(nameof(OldStatusId))]
    public virtual Status OldStatus { get; set; }
    public int NewStatusId { get; set; }
    [ForeignKey(nameof(NewStatusId))]
    public virtual Status NewStatus { get; set; }
    public TimeSpan Created_At { get; set; }
}
