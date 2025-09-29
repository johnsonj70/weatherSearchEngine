import "./styles.css"


export default function WeatherSearchEngine() {
  let weatherData = {
    city: "New York",
    temperature: 19,
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10,
  };
  return (
    <div className="WeatherSearchEngine">
      <header>
        <form className="search-form">
          <input
            type="search"
            placeholder="ENTER A COUNTRY OR CITY"
            required
            className="search-form-input"
          />
          <input type="submit" value="SEARCH" className="search-form-button" />
        </form>
      </header>
      <main>
        <div className="weather-app-data">
          <div>
            <h1 className="weather-app-city">{weatherData.city}</h1>
            <p className="weather_app-details">
              <span className="day-and-time"></span>
              <br />
              <span className="conditions">
                <strong>CONDITIONS: {""}</strong>

                {weatherData.description}
              </span>
              <br />
              <span className="humidity">
                <strong>HUMIDITY:</strong> {weatherData.humidity}
                {"%"}
              </span>
              <br />
              <span className="wind-speed">
                <strong>WIND SPEED:</strong> {weatherData.wind} {"m/ph"}
              </span>
            </p>
          </div>
          <div className="weather-app-temp-container">
            <div>
              <img
                className="weather-app-icon"
                src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
                alt=""
              />
            </div>
            <div className="weather-app-temperature">29</div>
            <div className="weather-app-unit">°C</div>
          </div>
        </div>
        <br />
        <br />
        <div className="weather-outlook"></div>
      </main>
      <footer>
        Coded by{" "}
        <a href="https://github.com/johnsonj70" target="_blank" rel="noreferrer">
          Janice Johnson
        </a>
        , is open-sourced on{" "}
        <a
          href="https://github.com/johnsonj70/weatherSearchEngine"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
        and website hosted on{" "}
        <a href="https://jj-weathersearchengine.netlify.app/" target="_blank" rel="noreferrer">
          Netlify
        </a>
      </footer>
    </div>
  );
}