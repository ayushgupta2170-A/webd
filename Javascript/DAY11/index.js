console.log("hello bhaiya");

const API_KEY = "YOUR_API_KEY";

async function fetchWeatherDetails() {
    try {
        // let latitude = 15.3333;
        // let longitude = 74.0833;

        let city = "goa";

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        const data = await response.json();

        console.log("Weather data:->", data);

        // let newPara = document.createElement('p');
        // newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;
        // document.body.appendChild(newPara);

        renderWeatherInfo(data);
    }
    catch (err) {
        console.log("Error:", err);
    }
}


async function getCustomWeatherDetails() {

    let latitude = 15.3333;
    let longitude = 74.0833;

    try {
        const result = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
        );

        const data = await result.json();

        console.log("Custom weather data:->", data);
    }
    catch (err) {
        console.log("Error:", err);
    }
}


// Function to display weather information
function renderWeatherInfo(data) {
    console.log("Temperature:", data?.main?.temp);
    console.log("Weather:", data?.weather?.[0]?.description);
}


// Function calls
fetchWeatherDetails();
// getCustomWeatherDetails();
