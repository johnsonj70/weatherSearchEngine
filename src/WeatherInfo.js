import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import { WeatherSvg } from "weather-icons-animated";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.condition}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">

            <div className="container">
               <img
                  src={WeatherSvg}
                  alt={CodeMapping(code)}
                  className="current_icon"
               />
                <WeatherTemperature celsius={props.data.temperature.current} />
                <WeatherIcon code={<WeatherSvg state ="partly-cloudy" size={size}></WeatherSvg>} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 