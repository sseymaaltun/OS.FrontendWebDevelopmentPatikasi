import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import Home from "../AppPage.css";
import {
    WiDaySunny,
    WiNightClear,
    WiCloud,
    WiCloudy,
    WiShowers,
    WiRain,
    WiThunderstorm,
    WiSnow,
    WiFog
} from "react-icons/wi";

function HomePage() {
    const { weatherData, loading, city, setCity } = useContext(WeatherContext);

    const filteredData = weatherData.filter((item, index, self) => {
        const currentDateUTC = new Date(item.dt * 1000).toISOString().split('T')[0]; // YYYY-MM-DD formatında
        return index === self.findIndex(d => {
            const dateUTC = new Date(d.dt * 1000).toISOString().split('T')[0];
        return dateUTC === currentDateUTC;
        });
    });
    console.log(filteredData)
    const getWeatherIcon = (iconCode) => {
        const codeMap = {
            '01d': <WiDaySunny size={48} />,
            '01n': <WiNightClear size={48} />,
            '02d': <WiCloud size={48} />,
            '02n': <WiCloud size={48} />,
            '03d': <WiCloudy size={48} />,
            '03n': <WiCloudy size={48} />,
            '04d': <WiCloudy size={48} />,
            '04n': <WiCloudy size={48} />,
            '09d': <WiShowers size={48} />,
            '09n': <WiShowers size={48} />,
            '10d': <WiRain size={48} />,
            '10n': <WiRain size={48} />,
            '11d': <WiThunderstorm size={48} />,
            '11n': <WiThunderstorm size={48} />,
            '13d': <WiSnow size={48} />,
            '13n': <WiSnow size={48} />,
            '50d': <WiFog size={48} />,
            '50n': <WiFog size={48} />,
        };
        return codeMap[iconCode] || <WiCloud size={48} />;
    };

    const cities = [ "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya",
      "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur",
      "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne",
      "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane",
      "Hakkâri", "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu",
      "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya",
      "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu",
      "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat",
      "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray",
      "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan",
      "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"
    ];

    if (loading) return <div>Yükleniyor...</div>;

    return (
        <div className = "container">
            <h2 className='title'>{city} Hava Durumu</h2>

            <select
                className='city-select'
                value={city}
                onChange={(e) => setCity(e.target.value)} >
                {cities.map((cityName) => (
                    <option key={cityName} value={cityName}>
                        {cityName}
                    </option>
                ))}
            </select>

            <div className = "card" >
                {filteredData.slice(0, 7).map((day, index) => (
                    <div className = "filtered-data" key={index} >
                        <div className='day'>
                            {new Date(day.dt * 1000).toLocaleDateString('tr-TR', {
                                weekday: 'short'
                            })}
                        </div>
                        <div>
                            {getWeatherIcon(day.weather[0].icon)}
                        </div>     
                        <div className = "temp">
                            {Math.round(day.main.temp_max)}° / {Math.round(day.main.temp_min)}°
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePage;
