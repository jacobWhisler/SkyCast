import React from "react";
import "./HomeCityCard.scss";

const HomeCityCard = ({ setUserCity, item }) => {
  return (
    <button
      className="home-city-card"
      style={{ backgroundImage: `url(${item.background})` }}
      onClick={() => setUserCity(item.name)}
    >
      <h6 className="name">{item.name}</h6>
    </button>
  );
};

export default HomeCityCard;
