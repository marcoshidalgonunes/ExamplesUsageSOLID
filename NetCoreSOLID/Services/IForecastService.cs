using System.Collections.Generic;
using System.Threading.Tasks;
using NetCoreSOLID.Models;

namespace NetCoreSOLID.Services
{
    public interface IForecastService
    {
        Task<IEnumerable<WeatherForecast>> GetAsync(int days);
    }
}
