/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css";
export default function InfoBox({info}){
    // const imgAdd="https://static.vecteezy.com/system/resources/previews/000/830/977/original/weather-icon-set-vector.jpg";
    let RAIN_URL="https://images.unsplash.com/photo-1501691223387-dd0500403074?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let COLD_URL="https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let HOT_URL="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return(

        <div className="InfoBox">
           
            <div className="cardContainer">
            <Card sx={{ maxWidth: 395 }}>
      <CardMedia
        sx={{ height: 160,width: 360 }}
        image={info.humidity>80?RAIN_URL:info.temp>15?HOT_URL:COLD_URL}  
        title="Weather Information"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity>80?<ThunderstormIcon/>:info.temp>15?<WbSunnyIcon/>:<AcUnitIcon/>}  
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <p>
            Temperature={info.temp}
          </p>
          <p>
            Feels Like={info.feelsLike}
          </p>
          <p>
            Humidity={info.humidity}
          </p>
          <p>
            High={info.tempMax}
          </p>
          <p>
            Low={info.tempMin}
          </p>
          <p>
            {info.description}
          </p>
          
        </Typography>
      </CardContent>
    </Card>
    </div>
            
        </div>
    )
}