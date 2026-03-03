using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HorseCountry.API.Persistence; 
using HorseCountry.API.Persistence.Entities;

namespace HorseCountry.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GendersController : ControllerBase
    {
        private readonly HorseDbContext _context;

        public GendersController(HorseDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<object>>> GetGenders()
        {
            // Retornamos Id y Description para el <select> de React
            return await _context.Genders
                .Select(g => new { 
                    id = g.Id, 
                    description = g.Description 
                })
                .ToListAsync();
        }
    }
}