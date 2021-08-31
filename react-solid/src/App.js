import React from 'react';
import { Layout } from './components/Layout';
import { WeatherForecast } from './components/WeatherForecast';

import './App.css';

class App extends React.Component {
  render() {
    var url = this.props.url;
    var days = this.props.days;
    var unit = this.props.unit;
    return (
      <Layout>
        <WeatherForecast url={url} days={days} unit={unit}/>
      </Layout>
    );
  }
}

export default App;

