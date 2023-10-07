using Crito.Models;
using Crito.Services;
using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Core.Cache;
using Umbraco.Cms.Core.Logging;
using Umbraco.Cms.Core.Routing;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core.Web;
using Umbraco.Cms.Infrastructure.Persistence;
using Umbraco.Cms.Web.Website.Controllers;

namespace Crito.Controllers
{
    public class SubscribeController : SurfaceController
    {
        private readonly SubscriberService _subscriberService;

        public SubscribeController(IUmbracoContextAccessor umbracoContextAccessor, IUmbracoDatabaseFactory databaseFactory, ServiceContext services, AppCaches appCaches, IProfilingLogger profilingLogger, IPublishedUrlProvider publishedUrlProvider, SubscriberService subscriberService) : base(umbracoContextAccessor, databaseFactory, services, appCaches, profilingLogger, publishedUrlProvider)
        {
            _subscriberService = subscriberService;
        }

        public async Task<IActionResult> Index(NewsletterForm newsletterForm)
        {
            if (ModelState.IsValid) 
            {
                await _subscriberService.AddSubscriberAsync(newsletterForm);
                return LocalRedirect(newsletterForm.RedirectUrl ?? "/");
            }

            return CurrentUmbracoPage();
        }
    }
}
