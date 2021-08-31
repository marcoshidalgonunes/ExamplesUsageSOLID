using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NetCoreSOLID.Services
{
    internal static class ForecastServiceFactory
    {
        internal static IForecastService Create(string serviceName)
        {
            if (!string.IsNullOrEmpty(serviceName) && serviceName.Equals("Cache", StringComparison.InvariantCultureIgnoreCase))
            {
                return new ForecastCacheService();
            }
            else
            {
                return new ForecastRealTimeService();
            }
        }
    }
}
