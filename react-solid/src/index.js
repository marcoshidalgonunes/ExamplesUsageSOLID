import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');
const url = document.getElementById("url").value;
const urlParams = new URLSearchParams(window.location.search); 
const temperature = urlParams.has('temp') ? urlParams.get('temp') : '20';
const unit = urlParams.has('unit') ? urlParams.get('unit') : 'C';

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <App url={url} temperature={temperature} unit={unit}/>
  </BrowserRouter>,
  rootElement);