import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
   return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
      <div className="signature">
        <footer ClassName="text-align-center">
          This project was coded by{" "}
          <a
            href="https://github.com/johnsonj70"
            target="_blank"
            rel="noopener noreferrer"
          >
            Janice Johnson
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/johnsonj70/weatherSearchEngine"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://jj-weathersearchengine.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
        </div>
      </div>
    </div>
  );
}
