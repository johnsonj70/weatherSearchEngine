import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import React, {useState} from "react";
import axios from "axios";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ready: false});

  function handleResponse (response) {
    console.log(response);

      setWeatherData({
        ready: true,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        description: response.data.weather[0].description,
        wind: response.data.wind.speed,
        city: response.data.name,
        date: new Date(response.data.dt * 1000),
        iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      })
    }

    function search() {
      const apiKey = "7746bdeabca928cfedcad71e52fd9d66";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
      event.preventDefault();
      search();
    }

    function handleCityChange (event) {
      setCity(event.target.value);
    }

  if (weatherData.ready) {
    return (
        <div className="Weather">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input type="search" placeholder="Enter a city" className="form-control" autoFocus="on" onChange={(handleCityChange)}></input>
              </div>
              <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100"></input>
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} />
  </div>
  );
  } else { 
      search();  
      return "Loading";
      
    }
  }
