using Crito.Contexts;
using Crito.Models;

namespace Crito.Services
{
    public class ContactService
    {
        private readonly DataContext _context;

        public ContactService(DataContext context)
        {
            _context = context;
        }

        public async Task AddMessageAsync(ContactForm contactForm)
        {
            _context.ContactForms.Add(new ContactFormEntity 
            { 
                Name = contactForm.Name,
                Email = contactForm.Email,
                Message = contactForm.Message
            });
            await _context.SaveChangesAsync();
        }

    }
}
