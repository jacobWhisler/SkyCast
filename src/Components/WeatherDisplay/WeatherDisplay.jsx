import React from "react";
import "./WeatherDisplay.scss";

const WeatherDisplay = ({ data, userCity }) => {
  const cityWeatherData = JSON.stringify(data);
  console.log(cityWeatherData);

  return (
    <div className="weather-display-container p-20">
      {userCity ? (
        <>
          <div className="weather-display-header">
            <div className="left">
              <h3 className="city-region">
                {data.location.name}, {data.location.region}
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
                      Current temp
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
                      Feels like
                    </h6>
                    <p className="temp-details-info-item-content">
                      {Math.round(data.current.feelslike_f)}&#176;f
                      <span>/</span>
                      {Math.round(data.current.feelslike_c)}&#176;c
                    </p>
                  </div>
                  <div className="wind-chill temp-details-info-item">
                    <h6 className="temp-details-info-item-header">
                      Wind chill
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
          </div>
        </>
      ) : (
        <p>Please choose a city from the list above</p>
      )}
    </div>
  );
};

export default WeatherDisplay;
