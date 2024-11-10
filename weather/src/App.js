import React from 'react';
import './App.css';

 export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <footer>
        This project was coded by{" "}
        <a
          href="https://www.shecodes.io/graduates/98761-catherine-milanetti"
          target="_blank"
        >
          Cate Milan
        </a>
        and is an open-source on
        <a
          href="https://github.com/CxMilan/React-Weather-App-Week5"
          target="_blank"
        >
          GitHub
        </a>
        and hosted on
        <a
          href="https://app.netlify.com/sites/react-meteo-app-week5/overview"
          target="_blank"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}