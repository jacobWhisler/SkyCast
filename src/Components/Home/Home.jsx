import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import HomeCityCard from "../HomeCityCard/HomeCityCard";
import WeatherDisplay from "../WeatherDisplay/WeatherDisplay";

import arrayOfPopularCities from "../../cities";
import "./Home.scss";

const weatherApiKey = import.meta.env.VITE_WEATHER_KEY;

const Home = ({ userCity, setUserCity }) => {
  const fetchCurrentWeather = async (userCity) => {
    const res = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${userCity}&aqi=no`
    );
    return await res.json();
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["currentWeather", userCity],
    queryFn: () => fetchCurrentWeather(userCity),
  });

  if (error) return <div>There was an error</div>;

  if (isLoading) return <div>Loading...</div>;

  console.log(data?.current);

  return (
    <div className="home-container">
      <div className="home-intro-text pb-20">
        Welcome to <span className="company">SkyCast! </span> Choose a city
        below to get the current weather there!
      </div>
      <div className="home-city-cards-container p-20">
        <div className="home-city-cards-location-container north-america">
          <h6 className="location-title">North America</h6>
          <div className="location-cards">
            {arrayOfPopularCities.map(
              (item) =>
                item.continent === "North America" && (
                  <HomeCityCard setUserCity={setUserCity} item={item} />
                )
            )}
          </div>
        </div>
        <div className="home-city-cards-location-container south-america">
          <h6 className="location-title">South America</h6>
          <div className="location-cards">
            {arrayOfPopularCities.map(
              (item) =>
                item.continent === "South America" && (
                  <HomeCityCard setUserCity={setUserCity} item={item} />
                )
            )}
          </div>
        </div>
        <div className="home-city-cards-location-container europe">
          <h6 className="location-title">Europe</h6>
          <div className="location-cards">
            {arrayOfPopularCities.map(
              (item) =>
                item.continent === "Europe" && (
                  <HomeCityCard setUserCity={setUserCity} item={item} />
                )
            )}
          </div>
        </div>

        <div className="home-city-cards-location-container asia">
          <h6 className="location-title">Asia</h6>
          <div className="location-cards">
            {arrayOfPopularCities.map(
              (item) =>
                item.continent === "Asia" && (
                  <HomeCityCard setUserCity={setUserCity} item={item} />
                )
            )}
          </div>
        </div>
        <div className="home-city-cards-location-container australia-oceania">
          <h6 className="location-title">Australia / Oceania</h6>
          <div className="location-cards">
            {arrayOfPopularCities.map(
              (item) =>
                item.continent === "Australia/Oceania" && (
                  <HomeCityCard setUserCity={setUserCity} item={item} />
                )
            )}
          </div>
        </div>
        <div className="home-city-cards-location-container africa">
          <h6 className="location-title">Africa</h6>
          <div className="location-cards">
            {arrayOfPopularCities.map(
              (item) =>
                item.continent === "Africa" && (
                  <HomeCityCard setUserCity={setUserCity} item={item} />
                )
            )}
          </div>
        </div>
      </div>
      <WeatherDisplay data={data} userCity={userCity} />
    </div>
  );
};

export default Home;
