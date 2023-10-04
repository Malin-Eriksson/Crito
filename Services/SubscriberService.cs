using Crito.Contexts;
using Crito.Models;

namespace Crito.Services
{
    public class SubscriberService
    {
        private readonly DataContext _context;

        public SubscriberService(DataContext context)
        {
            _context = context;
        }


        public async Task AddSubscriberAsync(NewsletterForm newsletterForm)
        {
            _context.Subscribers.Add(new SubscriberEntity { Email = newsletterForm.Email });
            await _context.SaveChangesAsync();
        }
    }
}
