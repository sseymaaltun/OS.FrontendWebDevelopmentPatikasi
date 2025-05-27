import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const WeatherContext = createContext();

const API_KEY = 'BURAYA_OWN_API_ANAHTARINI_YAZ';

const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState('Konya');

  const fetchWeatherData = async (city) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=0f69c6e701c75a48d587ca306d6eaa94&units=metric&lang=tr`
      );
      setWeatherData(response.data.list);
    } catch (error) {
      console.error('Hava durumu verisi alınamadı:', error);
      setWeatherData([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);

  return (
    <WeatherContext.Provider value={{ weatherData, loading, city, setCity }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
