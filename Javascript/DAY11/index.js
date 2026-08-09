console.log("hello bhaiya");

const API_KEY="d1845658f92b31c64bd94f06f7188c9c";

async function fetchWeatherDetails(){
   try{
    // let latitude=15.3333;
   // let longitude=74.0833;
   let city="goa";
    const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

    const data= await response.json();
    console.log("Weather data:->"+data);

   // let newPara=document.createElement('p');
    //newPara.textContent=`${data?.main?.temp.toFixed(2)} °C`

    //document.body.appendChild(newPara);
    renderWeatherInfo(data);
   }
   catch(err){
      //to handle the error


   }
   //https://api.openweathermap.org/data/4.0/onecall/current?lat={lat}&lon={lon}&appid={API key}
}

async function getCustomWeatherDetails(){
   try{
      let latitude=15.3333;
    let longitude=64.0833;

    let result=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    let data=await result.json();

    console.log(data);
   }
   catch(err){
      console.log("ERROR FOUND",err);
   }
}    