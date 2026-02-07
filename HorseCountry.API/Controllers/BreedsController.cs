using HorseCountry.API.DTOs;
using HorseCountry.API.Persistence;
using HorseCountry.API.Persistence.Entities;
using Microsoft.AspNetCore.Mvc;

namespace HorseCountry.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class BreedsController : ControllerBase
{
    private readonly HorseDbContext _context;

    public BreedsController(HorseDbContext context)
    {
        this._context = context;
    }

    [HttpGet]
    public IEnumerable<BreedDTO> Get()
    {
        var breeds = _context.Breeds.Select(breed => new BreedDTO { Id = breed.Id, Description = breed.Description }).ToList();
        return breeds;
    }

    [HttpGet("{id}")]
    public ActionResult<BreedDTO> GetById(int id)
    {
        var result = _context.Breeds.FirstOrDefault(breed => breed.Id == id);
        if (result == null)
            return NotFound();
        return Ok(new BreedDTO { Id = result.Id, Description = result.Description });
    }

    [HttpPost]
    public IActionResult Post(BreedUpdateDTO breed)
    {
        if (string.IsNullOrEmpty(breed.Description))
            return BadRequest("El nombre no puede estar vacio");

        Breed newBreed = new Breed { Description = breed.Description };
        _context.Breeds.Add(newBreed);
        _context.SaveChanges();

        return CreatedAtAction(nameof(GetById), new { newBreed.Id }, newBreed);
    }

    [HttpPut("{id}")]
    public IActionResult Put(int id, BreedUpdateDTO updatedBreed)
    {
        Breed? breed = _context.Breeds.FirstOrDefault(b => b.Id == id);

        if (breed == null)
            return BadRequest("The selected breed don´t exists.");
        if (string.IsNullOrEmpty(updatedBreed.Description))
            return BadRequest("El nuevo nombre no puede estar vacio");

        breed.Description = updatedBreed.Description;
        _context.SaveChanges();

        return Ok();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        Breed? breed = _context.Breeds.FirstOrDefault(b => b.Id == id);

        if (breed == null)
            return NotFound("The selected breed don´t exists.");

        _context.Breeds.Remove(breed);
        _context.SaveChanges();

        return Ok();
    }
}
