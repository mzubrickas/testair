window.addEventListener('DOMContentLoaded', () => {
    const cityName = localStorage.getItem('cityName');
    const temperature = localStorage.getItem('temperature');
    const weatherDescription = localStorage.getItem('weatherDescription');
    const weatherIcon = localStorage.getItem('weatherIcon');
    const dateTime = localStorage.getItem('dateTime');

    const date = new Date(dateTime * 1000); 
    const formattedDate = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    
    const cityNameElem = document.getElementById('city-name');
    const temperatureElem = document.getElementById('temperature');
    const weatherDescriptionElem = document.getElementById('weather-description');
    const weatherDateElem = document.getElementById('weather-date');
    const weatherIconElem = document.getElementById('weather-icon');

 
    cityNameElem.textContent = cityName;
    temperatureElem.textContent = temperature;
    weatherDescriptionElem.textContent = weatherDescription;
    weatherDateElem.textContent = formattedDate;
    weatherIconElem.src = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
});
