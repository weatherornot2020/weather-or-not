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
import { getTimeFromDate } from "../util";

export const CurrentWeatherDisplay = (props) => {
  if (
    props.weatherData &&
    props.weatherData.weather &&
    props.weatherData.weather[0]
  ) {
    const weatherInfo = props.weatherData.weather[0];
    return (
      <FadeIn>
        <h2>{props.weatherData.name}</h2>
        <img
          src={`http://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`}
          alt="weather icon"
        />
        <span className={"weather-desc"}>{weatherInfo.description}</span>
        <br />
        <div>
          <Thermometer />
          {props.weatherData.main.temp}&deg;F
          <br />
          <Smile /> Feels like {props.weatherData.main.feels_like}&deg;F
          <br />
          <ArrowUpCircle /> {props.weatherData.main.temp_max}&deg;F |{" "}
          <ArrowDownCircle /> {props.weatherData.main.temp_min}&deg;F
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

CurrentWeatherDisplay.propTypes = {
  weatherData: PropTypes.object,
};
