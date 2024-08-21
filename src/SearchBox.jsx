import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';
 
export default function SearchBox({ updateInfo }){
    let [city,setCity]=useState("");
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="a7060db4c17739ddbe9cd0778ebb0260";
    let getWeatherInfo=async()=>{
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonresponse=await response.json();
        
        let res={
            city:city,
            temp:jsonresponse.main.temp,
            tempMin:jsonresponse.main.temp_min,
            tempMax:jsonresponse.main.temp_max,
            humidity:jsonresponse.main.humidity,
            feelsLike:jsonresponse.main.feels_like,
            description:jsonresponse.weather[0].description
        }
        console.log(res);
        return res;

    };
    let handleChange =(event)=>{
        setCity(event.target.value);
        
    }
    let handleSubmit=async (evt)=>{
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo=await getWeatherInfo();
        updateInfo(newInfo);

        
    }
    return(
        <>
        <div className="SearchBox">
            <h3>Search for Weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} required />
                <br />
                <br />
                <Button variant="contained" type="submit">Search</Button>

            </form>
        </div>
        </>
    )
}