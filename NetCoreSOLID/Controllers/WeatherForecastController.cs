using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using NetCoreSOLID.Models;
using NetCoreSOLID.Services;

namespace NetCoreSOLID.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private readonly ILogger<WeatherForecastController> _logger;

        private readonly IForecastService _service;

        public WeatherForecastController(
            ILogger<WeatherForecastController> logger,
            IForecastService service)
        {
            _logger = logger;
            _service = service;
        }

        [HttpGet]
        public async Task<IEnumerable<WeatherForecast>> Get(int days)
        {
            return await _service.GetAsync(days);
        }
    }
}
