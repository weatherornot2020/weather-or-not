import React, { useState } from "react";
import PropTypes from "prop-types";
import { Search } from "react-feather";
import magglass from "./Search.png";
import "./Weather.css";

export const WeatherForm = (props) => {
  const [zip, setZip] = useState();
  const [error, setError] = useState();

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  //TODO: make this user-selectable
  const countryCode = "us";

  const fetchWeatherData = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zip},${countryCode}&appid=${apiKey}&units=imperial`
    )
      .then(async (res) => {
        const data = await res.json();
        console.log(data);
        props.setCurrentWeatherData(data);
      })
      .then(() => {
        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?zip=${zip},${countryCode}&appid=${apiKey}&units=imperial`
        ).then(async (res) => {
          const data = await res.json();
          console.log(data);
          props.setForecastData(data);
        });
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <label htmlFor="zipcode" className="Weather-zipcode">
        Search:
        <input
          className="Weather-input"
          type="text"
          id="zipcode"
          name="zipcode"
          placeholder="Enter your zip code"
          onChange={(event) => {
            if (!isNaN(event.target.value)) {
              setError(null);
              setZip(event.target.value);
            } else {
              setZip(null);
              setError("Please enter a valid number");
            }
          }}
        />
      </label>
      <button icon="refresh" onClick={fetchWeatherData}>
        <img src={magglass} className="Weather-search"></img>
      </button>
      <br />
      <span style={{ color: "red" }}>{error}</span>
    </>
  );
};

WeatherForm.propTypes = {
  setCurrentWeatherData: PropTypes.func.isRequired,
  setForecastData: PropTypes.func.isRequired,
};
