import React from "react";
import CityInput from "./components/CityInput";
import CityWeather from "./components/CityWeather";
import "./App.css";
const App = () => {
  const [city, setCity] = React.useState("");
  const [cityWeather, setCityWeather] = React.useState({});
  // const [render,setRender] = React.useState(false);
  const fetchCityWeather = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4c496af33d732297c30b641b3b235e47`
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result.main);
        // setRender(true);
        setCityWeather(result.main);
      });
  };
  return (
    <>
      <CityInput
        city={city}
        setCity={setCity}
        fetchCityWeather={fetchCityWeather}
        className="inputField"
      />
      <CityWeather cityWeather={cityWeather} />
    </>
  );
};

export default App;
