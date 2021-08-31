using System;
using NetCoreSOLID.Models;

namespace NetCoreSOLID.Services
{
    public sealed class ForecastRealTimeService : ForecastBaseService
    {
        protected override WeatherForecast Get(int days, Random rng)
        {
            return Create(DateTime.Today.AddDays(days).Date, rng);
        }
    }
}
