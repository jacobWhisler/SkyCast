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
        Welcome to <span className="company">SkyCast!</span> Choose a city below
        to get the current weather there!
      </div>
      <div className="home-city-cards-container p-20">
        {arrayOfPopularCities.map((item) => (
          <HomeCityCard item={item} setUserCity={setUserCity} />
        ))}
      </div>
      <WeatherDisplay data={data} userCity={userCity} />
    </div>
  );
};

export default Home;
