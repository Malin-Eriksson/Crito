using System.ComponentModel.DataAnnotations;

namespace Crito.Models
{
    public class ContactFormEntity
    {
        [Required]
        public string Name { get; set; } = null!;
        [Required]
        [EmailAddress]
        [Key]
        public string Email { get; set; } = null!;
        [Required]
        public string Message { get; set; } = null!;

    }
}
