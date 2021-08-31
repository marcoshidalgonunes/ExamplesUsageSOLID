import React, { Component } from 'react';

class Forecast extends Component {
    constructor(forecasts, unit) {
        super();
        this.forecasts = forecasts;
        this.unit = unit
    }
    getForecasts() {
        return this.forecasts;
    }
    renderForecasts() {
        let contents = this.renderTableBody();
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Temp. ({this.unit})</th>
                  <th>Summary</th>
                </tr>
              </thead>
              {contents}
            </table>
        );
    }
    renderTableBody() {}
}

export class ForecastC extends Forecast {
    constructor(forecasts) {
        super(forecasts, 'C');
    }
    renderTableBody() {
        return (
            <tbody>
              {this.getForecasts().map(forecast =>
                <tr key={forecast.date}>
                  <td>{new Date(forecast.date).toDateString()}</td>
                  <td>{forecast.temperature}</td>
                  <td>{forecast.summary}</td>
                </tr>
              )}
            </tbody>
        );
    }
}

export class ForecastF extends Forecast {
    constructor(forecasts) {
        super(forecasts, 'F');
    }
    renderTableBody() {
        return (   
            <tbody> 
              {this.getForecasts().map(forecast =>
                <tr key={forecast.date}>
                  <td>{new Date(forecast.date).toDateString()}</td>
                  <td>{Math.round((forecast.temperature/0.5556)+32)}</td>
                  <td>{forecast.summary}</td>
                </tr>
              )}
            </tbody>
        );
    }
}