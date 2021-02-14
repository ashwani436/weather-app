import React from "react";
import "./styles.css";

const CityWeather = ({ cityWeather }) => {
  const {temp, temp_max, temp_min } = cityWeather;

  return (
    <div className="cityWeather">
      <div>Temprature: {(temp - 271).toFixed(2)} °Cel</div>
      <div>Max: {(temp_max - 271).toFixed(2)} °Cel</div>
      <div>Min: {(temp_min - 271).toFixed(2)} °Cel</div>
    </div>
  );
};

export default CityWeather;
