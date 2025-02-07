import React, { useState } from "react";
import "./Home.scss";
import { useQuery } from "@tanstack/react-query";

const weatherApiKey = import.meta.env.VITE_WEATHER_KEY;

const Home = () => {
  const [userCity, setUserCity] = useState();

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
    <div>
      {userCity ? JSON.stringify(data) : "Please choose a city"}
      <button onClick={() => setUserCity("Cleveland")}>Cleveland</button>
      <button onClick={() => setUserCity("Zurich")}>Zurich</button>
      <button onClick={() => setUserCity("Milan")}>Milan</button>
    </div>
  );
};

export default Home;
