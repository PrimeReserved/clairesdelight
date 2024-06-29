"use client";

import { useEffect, useState } from "react";
import { CardHero } from "../card/CardHero";

export default function TodayInfo() {
  const [weather, setWeather] = useState<any>(null);
  const [location, setLocation] = useState<any>(null);
  const [currentTime, setCurrentTime] = useState<any>(null);

  useEffect(() => {
    const fetchWeatherData = async (lat: any, lon: any) => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_WEATHER_APIKEY;
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
        );
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error(`Error fetching weather data: ${error}`);
      }
    };

    const fetchLocationData = async (lat: any, lon: any) => {
      try {
        const response = await fetch(
          `https://geocode.xyz/${lat},${lon}?geoit=json`
        );
        const data = await response.json();
        setLocation(data);
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    };

    const updateTime = (timeZone: any) => {
      const date: any = new Date().toLocaleString("en-US", { timeZone });
      setCurrentTime(date);
    };

    const fetchData = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherData(latitude, longitude);
          fetchLocationData(latitude, longitude);
          updateTime(Intl.DateTimeFormat().resolvedOptions().timeZone);
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    };

    fetchData();
  }, []);

  if (!weather || !location || !currentTime) {
    return null;
  }

  return (
    <div className="pt-6">
      <div className="flex justify-between items-center p-2">
        <div>
          <h1>Today</h1>
          <CardHero title={currentTime} />
        </div>
        <div>
          <h3>Today&apos;s weather</h3>
          <CardHero title={`${weather?.main?.temp}°C`} />
          <div>
            <h4>Location</h4>
            <CardHero title={`${location.city}, ${location.country}`} />
          </div>
        </div>
      </div>
    </div>
  );
}
