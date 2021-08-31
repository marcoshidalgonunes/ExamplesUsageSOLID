using System;
using Microsoft.Extensions.Caching.Memory;
using NetCoreSOLID.Models;

namespace NetCoreSOLID.Services
{
    public sealed class ForecastCacheService : ForecastBaseService
    {
        private readonly IMemoryCache _cache = new MemoryCache(new MemoryCacheOptions());

        protected override WeatherForecast Get(int days, Random rng)
        {
            WeatherForecast forecast;
            DateTime date = DateTime.Today.AddDays(days).Date;

            if (!_cache.TryGetValue(date, out forecast))
            {
                forecast = Create(date, rng);

                MemoryCacheEntryOptions cacheEntryOptions = new MemoryCacheEntryOptions()
                    .SetSlidingExpiration(TimeSpan.FromHours(12));

                _cache.Set(date, forecast, cacheEntryOptions);
            }

            return forecast;
        }
    }
}
