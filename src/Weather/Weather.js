import React, { useState } from "react";
import { WeatherDisplay } from "./WeatherDisplay";
import { WeatherForm } from "./WeatherForm";

export const Weather = () => {
  const [weatherData, setWeatherData] = useState();

  return (
    <main>
      <WeatherForm setWeatherData={setWeatherData} />
      <WeatherDisplay weatherData={weatherData} />
    </main>
  );
};
