import React from "react";
import './DisplayWeather.css';

const DisplayWeather = (props) => {
    // http://openweathermap.org/img/wn/10d@2x.png
    const iconUrl = "http://openweathermap.org/img/wn/" + `${props.data.cod != 404 ? props.data.weather[0].icon : null}` + ".png"; // every icon has unique code so changing icon acc to got weather data
    return (
        <div className="displayweather">
            {props.data.cod != 404 ? (
                <div>
                    <div className="maincard">
                        <span className="cardtitle">
                            {props.data.name}, {props.data.sys.country}. Weather
                        </span>
                        <span className="cardsubtitle">As of {new Date().toLocaleTimeString()}</span>
                        {/* converting calvin to celcius */}
                        <h1>{Math.floor(props.data.main.temp - 273.15)}
                            <sup>o</sup></h1>
                        <span className="weather-main">{props.data.weather[0].main}</span>
                        <img src={iconUrl} className="weather-icon" alt=""></img>
                        <span className="weather-description">{props.data.weather[0].description}</span>
                    </div>

                    <div className="weatherdetails">
                        <div className="section1">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <h4>High/Low</h4>
                                        </td>
                                        <td>
                                            <span>
                                                {Math.floor(props.data.main.temp_max - 273.15)}/{" "}{Math.floor(props.data.main.temp_min - 273.15)} <sup>o</sup> C
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Humidity</h4>
                                        </td>
                                        <td>
                                            <span>{props.data.main.humidity} %</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Pressure</h4>
                                        </td>
                                        <td>
                                            <span>{props.data.main.pressure} hPa</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Visibility</h4>
                                        </td>
                                        <td>
                                            <span>{props.data.visibility / 1000} km</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="section2">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <h4>Wind</h4>
                                        </td>
                                        <td>
                                            <span>
                                                {Math.floor(props.data.wind.speed * 18) / 5} Km/hr
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Wind Direction</h4>
                                        </td>
                                        <td>
                                            <span>{props.data.wind.deg} <sup>o</sup>deg</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Sunrise</h4>
                                        </td>
                                        <td>
                                            <span>{new Date(props.data.sys.sunrise * 1000).toLocaleTimeString()}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h4>Sunset</h4>
                                        </td>
                                        <td>
                                            <span>{new Date(props.data.sys.sunset * 1000).toLocaleTimeString()}</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>)
                : (<div className="maincard"><h2>{props.data.message}</h2></div>
                )}
        </div>
    );
}

export default DisplayWeather;