import React from "react";
import "./WeatherDisplay.scss";

const WeatherDisplay = ({ data, userCity }) => {
  const cityWeatherData = JSON.stringify(data);
  // console.log(cityWeatherData);

  return (
    <div className="weather-display-container p-20">
      {userCity ? (
        <>
          <div className="weather-display-header">
            <div className="left">
              <h3 className="city-region">
                {data.location.name}
                {data.location.country === "United States of America"
                  ? `, ${data.location.region}`
                  : ""}
              </h3>
              <h4 className="country">{data.location.country}</h4>
            </div>
            <div className="right">
              <h4 className="temp">
                {Math.round(data.current.temp_f)}&#176;f
                <span>/</span>
                {Math.round(data.current.temp_c)}&#176;c
              </h4>
            </div>
          </div>
          <div className="more-details-container">
            <div className="weather-conditions-container">
              <h6 className="weather-conditions-header more-details-header">
                <span></span>Current weather conditions
              </h6>
              <p className="current-conditions">
                {data.current.condition.text}{" "}
                <img src={data.current.condition.icon} width="35" />
              </p>
            </div>
            <div className="temp-details-container">
              <h6 className="temp-details-header more-details-header">
                <span></span>Temperatre Details
              </h6>
              <div className="temp-details-info">
                <div className="left">
                  <div className="current-temp temp-details-info-item">
                    <h6 className="temp-details-info-item-header">
                      Current Temp
                    </h6>
                    <p className="temp-details-info-item-content">
                      {Math.round(data.current.temp_f)}&#176;f
                      <span>/</span>
                      <br />
                      {Math.round(data.current.temp_c)}&#176;c
                    </p>
                  </div>
                </div>
                <div className="right">
                  <div className="feels-like temp-details-info-item">
                    <h6 className="temp-details-info-item-header">
                      Feels Like
                    </h6>
                    <p className="temp-details-info-item-content">
                      {Math.round(data.current.feelslike_f)}&#176;f
                      <span>/</span>
                      {Math.round(data.current.feelslike_c)}&#176;c
                    </p>
                  </div>
                  <div className="wind-chill temp-details-info-item">
                    <h6 className="temp-details-info-item-header">
                      Wind Chill
                    </h6>
                    <p className="temp-details-info-item-content">
                      {Math.round(data.current.windchill_f)}&#176;f
                      <span>/</span>
                      {Math.round(data.current.windchill_c)}&#176;c
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="extended-weather-details-container">
              <h6 className="extended-weather-details-header more-details-header">
                <span></span>More Details
              </h6>
              <div className="extended-weather-details-items">
                <div className="extended-weather-details-item wind-speed">
                  <h6 className="extended-weather-details-item-header">
                    Wind Speed
                  </h6>
                  <p className="extended-weather-details-item-content">
                    {Math.round(data.current.wind_mph)} mph
                    <span>/</span>
                    {Math.round(data.current.wind_kph)} kph
                  </p>
                </div>
                <div className="extended-weather-details-item wind-direction">
                  <h6 className="extended-weather-details-item-header">
                    Direction
                  </h6>
                  <p className="extended-weather-details-item-content">
                    {data.current.wind_dir}
                  </p>
                </div>
                <div className="extended-weather-details-item humidity">
                  <h6 className="extended-weather-details-item-header">
                    Humidity
                  </h6>
                  <p className="extended-weather-details-item-content">
                    {data.current.humidity} %
                  </p>
                </div>
                <div className="extended-weather-details-item uv-index">
                  <h6 className="extended-weather-details-item-header">
                    UV Index
                  </h6>
                  <p className="extended-weather-details-item-content">
                    {data.current.uv}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p className="please-choose-a-city-message">
          Please choose from one of the cities above to see that city's current
          weather conditions.
        </p>
      )}
    </div>
  );
};

export default WeatherDisplay;
