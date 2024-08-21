import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
export default function WeatherApp(){
    let  [weatherInfo,setWeatherinfo]=useState({
        city:"Wonderland",
        description: "clear sky",
        feelsLike:28.84,
        humidity: 88,
        temp: 28.84,
        tempMax:25.05,
        tempMin:24.53
        

    })
    let updateInfo=(newInfo)=>{
        setWeatherinfo(newInfo)
    }
    return(
        <>
        <h2 style={{textAlign:"center"}}>Weather App</h2>
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />
        </>

    )
}