import React, { useState } from "react";
import PropTypes from "prop-types";
import magglass from "./Search.png";
import "./Weather.css";
import userbase from "userbase-js";
import { SavedZips } from "./SavedZips";

export const WeatherForm = (props) => {
  const { user } = props;
  const [zip, setZip] = useState();
  const [userZip, setUserZip] = useState();
  const [userZipId, setUserZipId] = useState();
  const [error, setError] = useState();

  React.useEffect(() => {
    if (props.user && !props.user.zipItems) {
      userbase
        .openDatabase({
          databaseName: "zips",
          changeHandler: function (items) {
            console.log(items);
            if (
              items &&
              items.length > 0 &&
              items[0].item &&
              items[0].item.zip
            ) {
              props.setUser({ ...props.user, zipItems: items });
              setUserZip(items[0].item.zip);
              setUserZipId(items[0].itemId);
            }
          },
        })
        .catch((e) => console.error(e));
    } else {
      setUserZip(null);
      setUserZipId(null);
    }
    // eslint-disable-next-line
  }, [props.user]);

  React.useEffect(() => {
    if (userZip) {
      fetchWeatherData(null, userZip);
    }
    // eslint-disable-next-line
  }, [userZip]);

  // This api key must come from a local .env file or GitHub Secret
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  //TODO: make this user-selectable
  const countryCode = "us";

  const fetchWeatherData = (event, userZip) => {
    //Get current weather
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${
        userZip || zip
      },${countryCode}&appid=${apiKey}&units=imperial`
    )
      .then(async (res) => {
        // convert current weather to json
        const data = await res.json();
        // store current weather data in React component state
        props.setCurrentWeatherData(data);
      })
      .then(() => {
        // get forecast weather
        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?zip=${
            userZip || zip
          },${countryCode}&appid=${apiKey}&units=imperial`
        ).then(async (res) => {
          // convert forecast weather data to JSON
          const data = await res.json();
          // store forecast weather data in React component state
          props.setForecastData(data);
        });
      })
      .then(() => {
        if (props.user && zip) {
          if (zip && userZip && userZip !== zip) {
            userbase
              .updateItem({
                databaseName: "zips",
                item: { zip },
                itemId: userZipId,
              })
              .then(() => {
                // item updated
              })
              .catch((e) => console.error(e));
          } else {
            userbase
              .insertItem({
                databaseName: "zips",
                item: { zip },
              })
              .then(() => {
                // item inserted
                console.log("successfully saved " + zip);
              })
              .catch((e) => console.error(e));
          }
        }
      })
      .catch((e) => console.log(e));
  };

  React.useEffect(() => {
    if (zip && zip.length === 5) {
      fetchWeatherData();
    }
    // eslint-disable-next-line
  }, [zip]);

  return (
    <>
      <SavedZips user={user} setZip={setZip} />
      <input
        className="Weather-input"
        type="text"
        id="zipcode"
        name="zipcode"
        placeholder="zip code"
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
      <button icon="refresh" onClick={fetchWeatherData}>
        <img src={magglass} className="Weather-search" alt="search button" />
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
