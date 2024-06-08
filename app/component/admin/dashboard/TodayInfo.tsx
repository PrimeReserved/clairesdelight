"use client"

import { useEffect, useState } from "react";

export default function TodayInfo() {
  const [weather, setWeather] = useState<any>(null);
  const [location, setLocation] = useState<any>(null);
  const [currentTime, setCurrentTime] = useState<any>(null);

  useEffect(() => {
    const fetchWeatherData = async (lat: any, lon: any) => {
      try{
        const apiKey = process.env.NEXT_PUBLIC_WEATHER_APIKEY;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
        const data = await response.json();
        setWeather(data);
      } catch(error){
        console.error(`Error fetching weather data: ${error}`)
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
    return <div>Loading...</div>;
  }

    return (
        <div className="p-5">
          <div className="flex justify-between items-center">
            <div>
              <h1>Today</h1>
              {/* <p>Mon 22, 2021 | 10:00 AM</p> */}
              <p>{currentTime}</p>
            </div>
            <div>
              <h3>Today&apos;s weather</h3>
              {/* <p>30</p> */}
              <p>{weather?.main?.temp}°C</p>
              <div>
        <h4>Location</h4>
        <p>
          {location.city}, {location.country}
        </p>
      </div>
            </div>
          </div>
        </div>
    );
}