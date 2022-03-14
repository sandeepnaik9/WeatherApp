import logo from './logo.svg';
import './App.css';
import WeatherComponent from './weathercomponent.js';
import {useEffect,useState} from 'react';

function App() {


  return (
    <div className="App">
      <WeatherComponent />
    </div>
  );
}

export default App;
