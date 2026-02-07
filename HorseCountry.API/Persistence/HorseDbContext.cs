using HorseCountry.API.Persistence.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace HorseCountry.API.Persistence;

public class HorseDbContext : IdentityUserContext<User>
{
    public HorseDbContext(DbContextOptions<HorseDbContext> dbContextOptions) : base(dbContextOptions)
    {
    }

    //tablas auxiliares
    public DbSet<Breed> Breeds => Set<Breed>();
    public DbSet<Color> Colors => Set<Color>();
    public DbSet<Gender> Genders => Set<Gender>();
    public DbSet<Status> Status => Set<Status>();
    
    //tablas de la aplicacion
    public DbSet<Horse> Horses => Set<Horse>();
    public DbSet<AttachedFile> AttachedFiles => Set<AttachedFile>();
    public DbSet<StatusHistory> StatusHistories=> Set<StatusHistory>();
}

