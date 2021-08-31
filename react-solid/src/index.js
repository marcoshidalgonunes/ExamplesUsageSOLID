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
const days = urlParams.has('days') ? urlParams.get('days') : '7';
const unit = urlParams.has('unit') ? urlParams.get('unit') : 'C';

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <App url={url} days={days} unit={unit}/>
  </BrowserRouter>,
  rootElement);