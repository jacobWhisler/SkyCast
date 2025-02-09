import React from "react";

const HomeCityCard = ({ setUserCity, item }) => {
  return <button onClick={() => setUserCity(item.name)}>{item.name}</button>;
};

export default HomeCityCard;
