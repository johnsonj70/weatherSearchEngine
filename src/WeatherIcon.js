import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import { WeatherSvg } from "weather-icons-animated";

export default function WeatherIcon(props) {
  const codeMapping = {
   "sunny": "sunny",
    "clear-night": night,
    "partlycloudy": "partlycloudy",
    "partlycloudy": night,
    "cloudy": "cloudy",
    "cloudy": night,
    "fog": "fog",
    "hail": "hail",
    "hail": night,
    "rainy": "rainy",
    "rainy": night,
    "snowy": "snowy",
    "snowy": night,
    "snowy-rainy": "snowy-rainy",
    "snowy-rainy": night,
    "pouring": "pouring",
    "pouring": night,
    "lightning": "lightning",
    "lightning": night,
    "lightning-rainy": "lightning-rainy",
    "lightning-rainy": night,
    "windy": "windy",
    "windy": night,
    "windy-variant": "windy-variant",
    "windy-variant": night
  };

  return (
    <WeatherSvg
      state={codeMapping[props.code]}
      size={props.size}
    />
  );
}