import React from "react";
import PropTypes from "prop-types";
import {
  Wind,
  Sunset,
  Sunrise,
  Thermometer,
  ArrowDownCircle,
  ArrowUpCircle,
  Smile,
} from "react-feather";
import FadeIn from "react-fade-in";
import { kToF } from "../util/kToF";

function pad(num) {
  return ("0" + num).slice(-2);
}
function getTimeFromDate(timestamp) {
  var date = new Date(timestamp * 1000);
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";
  if (hours > 12) hours = hours - 12;
  return pad(hours) + ":" + pad(minutes) + ":" + pad(seconds) + ampm;
}

export const WeatherDisplay = (props) => {
  if (
    props.weatherData &&
    props.weatherData.weather &&
    props.weatherData.weather[0]
  ) {
    const weatherInfo = props.weatherData.weather[0];
    return (
      <FadeIn>
        <div>
          temporary for testing: {JSON.stringify(props.weatherData, null, 2)}
        </div>
        <h2>{props.weatherData.name}</h2>
        <img
          src={`http://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`}
          alt="weather icon"
        />
        <span className={"weather-desc"}>{weatherInfo.description}</span>
        <br />
        <div>
          <Thermometer />
          {kToF(props.weatherData.main.temp)}&deg;F
          <br />
          <Smile /> Feels like {kToF(props.weatherData.main.feels_like)}&deg;F
          <br />
          <ArrowUpCircle /> {kToF(props.weatherData.main.temp_max)}&deg;F |{" "}
          <ArrowDownCircle /> {kToF(props.weatherData.main.temp_min)}&deg;F
        </div>
        <div>
          <Wind />
          <div style={{ display: "inline", marginTop: "-5" }}>
            {props.weatherData.wind.speed}mph at {props.weatherData.wind.deg}
            &deg;
          </div>
        </div>
        <div>
          <Sunrise /> {getTimeFromDate(props.weatherData.sys.sunrise)}
        </div>
        <div>
          <Sunset /> {getTimeFromDate(props.weatherData.sys.sunset)}
        </div>
      </FadeIn>
    );
  } else {
    return null;
  }
};

WeatherDisplay.propTypes = {
  weatherData: PropTypes.object,
};
