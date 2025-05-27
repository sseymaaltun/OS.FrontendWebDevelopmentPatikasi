import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const HomePage = () => {
  const { weatherData, loading, city, setCity } = useContext(WeatherContext);

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <div>
      <h1>{city} Hava Durumu</h1>
      <select onChange={(e) => setCity(e.target.value)} value={city}>
        <option value="Konya">Konya</option>
        <option value="İstanbul">İstanbul</option>
        <option value="Ankara">Ankara</option>
        {/* Diğer şehirleri buraya ekleyebilirsin */}
      </select>
      <div>
        {weatherData.map((day, index) => (
          <div key={index}>
            <h2>{new Date(day.dt * 1000).toLocaleDateString()}</h2>
            <p>En Yüksek Sıcaklık: {day.temp.max}°C</p>
            <p>En Düşük Sıcaklık: {day.temp.min}°C</p>
            <p>Hava Durumu: {day.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
