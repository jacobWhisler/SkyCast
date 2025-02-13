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
      `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${userCity}&aqi=no`
    );
    return await res.json();
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["currentWeather", userCity],
    queryFn: () => fetchCurrentWeather(userCity),
  });

  if (error) return <div>There was an error</div>;

  if (isLoading) return <div>Loading...</div>;

  // console.log(data?.current);

  // Continent Arrays
  // North America
  const northAmericaCitiesArray = arrayOfPopularCities.filter(
    (item) => item.continent === "North America"
  );

  const sortedNorthAmericaCitiesArray = northAmericaCitiesArray.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  // South America
  const southAmericaCitiesArray = arrayOfPopularCities.filter(
    (item) => item.continent === "South America"
  );

  const sortedSouthAmericaCitiesArray = southAmericaCitiesArray.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  // Europe
  const europeCitiesArray = arrayOfPopularCities.filter(
    (item) => item.continent === "Europe"
  );

  const sortedEuropeCitiesArray = europeCitiesArray.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  // Asia
  const asiaCitiesArray = arrayOfPopularCities.filter(
    (item) => item.continent === "Asia"
  );

  const sortedAsiaCitiesArray = asiaCitiesArray.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  // Australia / Oceania
  const australiaOceaniaCitiesArray = arrayOfPopularCities.filter(
    (item) => item.continent === "Australia/Oceania"
  );

  const sortedAustraliaOceaniaCitiesArray = australiaOceaniaCitiesArray.sort(
    (a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    }
  );

  // Africa
  const africaCitiesArray = arrayOfPopularCities.filter(
    (item) => item.continent === "Africa"
  );

  const sortedAfricaOceaniaCitiesArray = africaCitiesArray.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

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
            {sortedNorthAmericaCitiesArray
              .map((item) => (
                <HomeCityCard
                  key={item.id}
                  setUserCity={setUserCity}
                  item={item}
                />
              ))
              .sort((a, b) => {
                // console.log(a, b);
                if (a.name < b.name) {
                  return -1;
                }
                if (a.name > b.name) {
                  return 1;
                }
                return 0;
              })}
          </div>
        </div>
        <div className="home-city-cards-location-container south-america">
          <h6 className="location-title">South America</h6>
          <div className="location-cards">
            {sortedSouthAmericaCitiesArray.map((item) => (
              <HomeCityCard
                key={item.id}
                setUserCity={setUserCity}
                item={item}
              />
            ))}
          </div>
        </div>
        <div className="home-city-cards-location-container europe">
          <h6 className="location-title">Europe</h6>
          <div className="location-cards">
            {sortedEuropeCitiesArray.map((item) => (
              <HomeCityCard
                key={item.id}
                setUserCity={setUserCity}
                item={item}
              />
            ))}
          </div>
        </div>

        <div className="home-city-cards-location-container asia">
          <h6 className="location-title">Asia</h6>
          <div className="location-cards">
            {sortedAsiaCitiesArray.map((item) => (
              <HomeCityCard
                key={item.id}
                setUserCity={setUserCity}
                item={item}
              />
            ))}
          </div>
        </div>
        <div className="home-city-cards-location-container australia-oceania">
          <h6 className="location-title">Australia / Oceania</h6>
          <div className="location-cards">
            {sortedAustraliaOceaniaCitiesArray.map((item) => (
              <HomeCityCard
                key={item.id}
                setUserCity={setUserCity}
                item={item}
              />
            ))}
          </div>
        </div>
        <div className="home-city-cards-location-container africa">
          <h6 className="location-title">Africa</h6>
          <div className="location-cards">
            {sortedAfricaOceaniaCitiesArray.map((item) => (
              <HomeCityCard
                key={item.id}
                setUserCity={setUserCity}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
      <WeatherDisplay data={data} userCity={userCity} />
    </div>
  );
};

export default Home;
