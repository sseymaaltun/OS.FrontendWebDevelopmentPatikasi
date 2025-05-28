//Şehir bilgisini ve hava durumu verisini uygulama genelinde yönetmek için bir Context
import react, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const WeatherContext = createContext(); //yeni bir context oluşturma

const API_KEY = "03007765f5a2f0755dddfab969b0a31a";

//Context sağlayıcısını tanımlaması
const WeatherProvider = ({children}) => {
    const [weatherData, setWeatherData] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [city, setCity] = useState("İstanbul");

    useEffect (() => { // Şehir değiştiğinde hava durumu verilerini al
    if (!city) return;

    setLoading(true); 

    axios(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=tr`)
    .then(response => setWeatherData(response.data.list)) // API'den gelen veriyi state'e kaydet
    .catch(error => {
        console.log("Veri alınamadı",error)
        setWeatherData([])
    }) // Hata durumunda state'i boş bir dizi olarak ayarla
    .finally(() => setLoading(false)); //// loading false yaparak "Yükleniyor..." yazısını kaldırıyoruz
},[city]);

return ( // WeatherContext.Provider ile context'i sağlayarak alt bileşenlere veri aktarımı
    <WeatherContext.Provider value = {{weatherData, loading, city, setCity}}>
        {children}
    </WeatherContext.Provider>
) 
};

export default WeatherProvider; 