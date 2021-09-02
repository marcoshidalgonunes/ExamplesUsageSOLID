# NetCoreSOLID

The following principles were applied in this Web API application.

**Single Responsability Principle**

There are service classes responsible to get data. Controller class is responsible to send data from service to the caller.

**Open-Closed Principle**

There is a base class for services and each derived service class realizes the implementation and are sealed.

**Liskov Substitution Principle**

Only implementation of interface is public in the service classes.

**Interface Segregation Principle**

There is an interface for services, which supports the [Dependency Injection](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-5.0) of service classes.

**Dependency Inversion Principle**

The controller does not knows the internals of service classes.

## Points of Interest

The choice of service is made though configuration. The 'ConfigureServices' method of 'Startup' class shows how they are instantiated in a Singleton pattern, using the configuration.

One of services uses a MemoryCache to retrieve preset data. This is why service is instantiated using Singleton pattern.
