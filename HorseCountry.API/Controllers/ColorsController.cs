using HorseCountry.API.DTOs;
using HorseCountry.API.Persistence;
using HorseCountry.API.Persistence.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HorseCountry.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ColorsController : ControllerBase
{

    private readonly HorseDbContext _context;
    public ColorsController(HorseDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IEnumerable<ColorDto> Get()
    {
        var colors = _context.Colors.Select(c => new ColorDto { Id = c.Id, Description = c.Description }).ToList();
        return colors;
    }

    [HttpGet("{id}")]
    public ActionResult<ColorDto> GetById(int id)
    {
        var result = _context.Colors.FirstOrDefault(c => c.Id == id);
        if (result == null)
            return NotFound();

        return Ok(new ColorDto { Id = result.Id, Description = result.Description });
    }

    [HttpPost]
    public IActionResult Post(ColorUpdateDto colorUpdateDto)
    {
        if (string.IsNullOrEmpty(colorUpdateDto.Description))
            return BadRequest();

        var newColor = new Color { Description = colorUpdateDto.Description };

        _context.Colors.Add(newColor);
        _context.SaveChanges();

        return CreatedAtAction(nameof(GetById), new { newColor.Id }, newColor);
    }

    [HttpPut("{id}")]
    public IActionResult Put(int id, ColorUpdateDto colorUpdateDto)
    {
        if (string.IsNullOrEmpty(colorUpdateDto.Description))
            return BadRequest();

        var color = _context.Colors.FirstOrDefault(c => c.Id == id);
        if (color == null)
            return NotFound();

        color.Description = colorUpdateDto.Description;
        _context.SaveChanges();

        return Ok();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var color = _context.Colors.FirstOrDefault(c => c.Id == id);
        if (color == null)
            return NotFound("The selected color don´t exists.");
        _context.Colors.Remove(color);
        _context.SaveChanges();
        return Ok();
    }
}
