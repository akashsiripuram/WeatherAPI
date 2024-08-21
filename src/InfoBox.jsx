import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
export default function InfoBox({info}){
    const imgAdd="https://plus.unsplash.com/premium_photo-1714923303591-3b262dd1864f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return(

        <div className="InfoBox">
           
            <div className="cardContainer">
            <Card sx={{ maxWidth: 395 }}>
      <CardMedia
        sx={{ height: 160,width: 360 }}
        image={imgAdd}  
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
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