import { useEffect, useState } from "react"
import WeatherForm from "./weatherForm"
import WeatherMainInfo from "./weatherMainInfo";
import styles from './weatherApp.module.css'



export default function WeatherApp() {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        loadInfo();
    }, []);

    useEffect(() => {
        document.title = `Weather | ${weather?.location.name ?? ""}`
    }, [weather]);
    
    async function loadInfo(city = 'london') {
        try {
            const request = await fetch(`${process.env.REACT_APP_URL}key=${process.env.REACT_APP_KEY}&q=${city}&aqi=no`);
            const data = await request.json();
            setWeather(data)
            console.log(data);
        } catch (error) {
            
        }
    }
    function handleChangeCity(city) {
        setWeather(null);
        loadInfo(city);
    }
    
    return (
        <div className={styles.weatherAppContainer}>
            <div className={styles.weatherSide}>
                <div className={styles.location}>
                    <WeatherForm onChangeCity={handleChangeCity} />
                </div>
                <div className={styles.weather}>
                    <WeatherMainInfo weather={weather} />
                </div>
            </div>     
        </div>
    )
}