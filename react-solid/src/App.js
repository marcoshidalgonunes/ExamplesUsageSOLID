import React from 'react';
import { Layout } from './components/Layout';
import { WeatherForecast } from './components/WeatherForecast';

import './App.css';

class App extends React.Component {
  render() {
    var url = this.props.url;
    var temperature = this.props.temperature;
    var unit = this.props.unit;
    return (
      <Layout>
        <WeatherForecast url={url} temperature={temperature} unit={unit}/>
      </Layout>
    );
  }
}

export default App;

