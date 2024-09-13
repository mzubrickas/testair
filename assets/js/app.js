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
        displayError("Please enter a city name.", errorMessage);
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
