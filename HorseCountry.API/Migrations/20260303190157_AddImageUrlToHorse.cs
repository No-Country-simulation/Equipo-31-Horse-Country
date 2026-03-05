using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HorseCountry.API.Migrations
{
    /// <inheritdoc />
    public partial class AddImageUrlToHorse : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImageUrl",
                table: "Horses",
                type: "text",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageUrl",
                table: "Horses");
        }
    }
}
