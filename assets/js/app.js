const input = document.getElementById("city-input");
const goBtn = document.getElementById("go-btn");
const loading = document.getElementById("loading");
const errorMessage = document.getElementById("error-message");

function displayError(message, errorElement) {
    errorElement.textContent = message;
}

goBtn.addEventListener("click", function () {
    const city = input.value.trim(); 

    displayError('', errorMessage); 

    if (!city) {
        displayError("Please enter a city name", errorMessage);
        return;
    }

    fetchWeather(city)
        .then(data => {
            storeWeatherData(data);
            window.location.href = "pages/weather-result.html";
        })
        .catch(error => {
            displayError(error.message, errorMessage);
        })
        
});

function storeWeatherData(data) {
    localStorage.setItem("weatherDescription", data.weather[0].description);
    localStorage.setItem("weatherIcon", data.weather[0].icon); 
    localStorage.setItem("temperature", data.main.temp);
    localStorage.setItem("dateTime", data.dt);
    localStorage.setItem("cityName", data.name);
    
    
    let history = JSON.parse(localStorage.getItem("weatherHistory")) || [];
    if (!history.some(item => item.cityName === data.name)) {
        history.push({
            cityName: data.name,
            temperature: data.main.temp,
            weatherDescription: data.weather[0].description,
            weatherIcon: data.weather[0].icon, 
            dateTime: data.dt
        });
    }
    localStorage.setItem("weatherHistory", JSON.stringify(history));
}

let historyBtn = document.getElementById("history-btn");
historyBtn.addEventListener("click", function () {
    window.location.href = "pages/weather-history.html";
});
