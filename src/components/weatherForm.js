import { useState } from "react";
import styles from './weatherForm.module.css'

export default function WeatherForm({onChangeCity}) {
    const [ city, setCity] = useState('')
    function onChange(e) {
        const value = e.target.value;
        
        if(value !== '') {
            setCity(value)
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        onChangeCity(city);
    }
    return  (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input type="text" placeholder="Ej: Medellin" onChange={onChange} className={styles.weatherFormInput}></input>
        </form>
        
    )
}