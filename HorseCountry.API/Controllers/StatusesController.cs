using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
// CORRECCIÓN: Usamos la ruta exacta donde está tu DbContext
using HorseCountry.API.Persistence; 
using HorseCountry.API.Persistence.Entities;

namespace HorseCountry.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StatusesController : ControllerBase
    {
        // Usamos AppDbContext que ya tenés definido en tu persistencia
        private readonly HorseDbContext _context;

        public StatusesController(HorseDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<object>>> GetStatuses()
        {
            // Importante: Usamos _context.Status porque así se llama tu DbSet
            return await _context.Status
                .Select(s => new { 
                    id = s.Id, 
                    description = s.Description 
                })
                .ToListAsync();
        }
    }
}