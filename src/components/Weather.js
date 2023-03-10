import React, { useState } from "react";
import DisplayWeather from "./DisplayWeather";
import './Weather.css';

const Weather = () => {
    const API_KEY = "fdd6809097085c02f1076e93f867607a";
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [weather, setWeather] = useState([]);

    const cityChangeHandler = (event) => {
        setCity(event.target.value);
        console.log(city);
    }

    const countryChangeHandler = (event) => {
        setCountry(event.target.value);
        console.log(country);
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        if (city === "" && country === "") {
            alert("Add Values!");
        }
        else {
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q= ${city},${country}&appid=${API_KEY}`);
            const response = await data.json();
            setWeather({ data: response });
            console.log(response);
        }
    }

    return (
        <div className="weather">
            <span className="title">Weather App</span>
            <br />
            <form onSubmit={submitHandler}>
                <label htmlFor='city'>City</label> &nbsp; &nbsp;
                <input type="text" name="city" value={city} onChange={cityChangeHandler} />
                &nbsp; &nbsp; &nbsp; &nbsp;
                <label htmlFor='country'>Country</label> &nbsp; &nbsp;
                <input type="text" name="country" value={country} onChange={countryChangeHandler} />
                <br />
                <button className="btn">Submit</button>
            </form>
            {weather.data !== undefined ? (<div><DisplayWeather data={weather.data}></DisplayWeather></div>) : null}
        </div>
    );
}

export default Weather;