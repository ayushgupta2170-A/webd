console.log("hello bhaiya");

const API_KEY="d18456"

async function showWeather(){
   // let latitude=15.3333;
   // let longitude=74.0833;
    let response= await fetch`https://api.openweatherapp.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const data=response.json();
    console.log("Weather data:->"+data);
}