import React, { useState } from "react";
import PropTypes from "prop-types";

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
      <label htmlFor="zipcode">
        Zip Code:
        <br />
        <input
          type="text"
          id="zipcode"
          name="zipcode"
          placeholder="enter weather data"
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
      <br />
      <button onClick={fetchWeatherData}>Find Weather Data</button>
      <br />
      <span style={{ color: "red" }}>{error}</span>
    </>
  );
};

WeatherForm.propTypes = {
  setCurrentWeatherData: PropTypes.func.isRequired,
  setForecastData: PropTypes.func.isRequired,
};
