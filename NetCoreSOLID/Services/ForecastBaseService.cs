using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NetCoreSOLID.Models;

namespace NetCoreSOLID.Services
{
    public abstract class ForecastBaseService : IForecastService
    {
        private const int MinTemperature = -40, MaxTemperature = 50;

        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        #region IForecastService members

        public async Task<IEnumerable<WeatherForecast>> GetAsync(int days)
        {
            var rng = new Random();
            List<WeatherForecast> forecasts = Enumerable.Range(1, days).Select(numberOfDays => Get(numberOfDays, rng)).ToList();
            return await Task.FromResult(forecasts);
        }

        #endregion

        #region Protected members

        protected static WeatherForecast Create(DateTime date, Random rng)
        {
            int temperature = rng.Next(MinTemperature, MaxTemperature);

            return new WeatherForecast
            {
                Date = date,
                Temperature = temperature,
                Summary = GetSummary(temperature)
            };

        }

        protected abstract WeatherForecast Get(int days, Random rng);

        #endregion

        #region Helper methods

        private static string GetSummary(int temperature)
        {
            string summary;

            switch (temperature)
            {
                case < -25:
                    summary = Summaries[0];
                    break;
                case < -10:
                    summary = Summaries[1];
                    break;
                case < 3:
                    summary = Summaries[2];
                    break;
                case < 15:
                    summary = Summaries[3];
                    break;
                case < 23:
                    summary = Summaries[4];
                    break;
                case < 28:
                    summary = Summaries[5];
                    break;
                case < 32:
                    summary = Summaries[6];
                    break;
                case < 36:
                    summary = Summaries[7];
                    break;
                case < 40:
                    summary = Summaries[7];
                    break;
                default:
                    summary = Summaries[9];
                    break;
            }

            return summary;
        }

        #endregion
    }
}
