import React, { useState } from "react";
import { CurrentWeatherDisplay } from "./CurrentWeatherDisplay";
import { WeatherForm } from "./WeatherForm";
import { FutureHour } from "./FutureHour";

export const Weather = () => {
  const [weatherData, setWeatherData] = useState();
  const [forecastData, setForecastData] = useState();

  return (
    <main>
      <section className={"weather-form"}>
        <WeatherForm
          setCurrentWeatherData={setWeatherData}
          setForecastData={setForecastData}
        />
      </section>
      <section className={"current-weather-data"}>
        <CurrentWeatherDisplay weatherData={weatherData} />
      </section>
      <section className={"hourly-weather-container"}>
        {forecastData &&
          forecastData.list &&
          forecastData.list.length > 0 &&
          forecastData.list.map((futureHourWeather) => (
            <FutureHour
              key={futureHourWeather.dt}
              weatherData={futureHourWeather}
            />
          ))}
      </section>
    </main>
  );
};
