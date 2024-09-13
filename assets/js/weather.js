function fetchWeather(city) {
    const apiKey = '10692b614cde4a27abc3caf08c696dfa'; // 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    return fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                return response.json().then(errorData => {
                    throw new Error(errorData.message || "Failed to fetch weather data.");
                });
            }
            return response.json();
        });
}

function storeWeatherData(data) {
    localStorage.setItem("weatherDescription", data.weather[0].description);
    localStorage.setItem("weatherIcon", data.weather[0].icon);
    localStorage.setItem("temperature", data.main.temp);
    localStorage.setItem("dateTime", data.dt);
    localStorage.setItem("cityName", data.name);
}
