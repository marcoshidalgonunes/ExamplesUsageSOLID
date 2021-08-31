import React, { Component } from 'react';
import { ForecastC } from './Forecast';
import { ForecastF } from './Forecast';

export class WeatherForecast extends Component {
  static displayName = WeatherForecast.name;

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };
  }

  componentDidMount() {
    this.populateWeatherData();
  }

  render() {
    let forecast = this.props.unit === 'C' ? new ForecastC(this.state.forecasts) : new ForecastF(this.state.forecasts)
    let contents = this.state.loading
      ? <p><em>Loading data. If results are not shown, the Weather Forecast Service is offline.</em></p>
      : forecast.renderForecasts();

    return (
      <div>
        <h1 id="tabelLabel" >Weather Forecast</h1>
        {contents}
      </div>
    );
  }

  async populateWeatherData() {
    var days = this.props.days;
    var url = this.props.url;
    const response = await fetch(`${url}/weatherforecast?days=${days}`);
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  }
}
