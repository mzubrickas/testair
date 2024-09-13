window.addEventListener('DOMContentLoaded', () => {
    const cityName = localStorage.getItem('cityName');
    const temperature = localStorage.getItem('temperature');
    const weatherDescription = localStorage.getItem('weatherDescription');
    const weatherIcon = localStorage.getItem('weatherIcon');
    const dateTime = localStorage.getItem('dateTime');

    const date = new Date(dateTime * 1000); 
    const weekday = date.toLocaleDateString(undefined, { weekday: 'short' });
    const day = date.toLocaleDateString(undefined, { day: 'numeric' }); 
    
    const cityNameElem = document.getElementById('city-name');
    const temperatureElem = document.getElementById('temperature');
    const weatherDescriptionElem1 = document.getElementById('weather-description-1');
    const weatherDescriptionElem2 = document.getElementById('weather-description-2');
    const weatherWeekdayElem = document.getElementById('weather-weekday');
    const weatherDayElem = document.getElementById('weather-day');
    const weatherIconElem = document.getElementById('weather-icon');
    
    
    
    cityNameElem.textContent = cityName;
    temperatureElem.textContent = parseFloat(temperature).toFixed(0);

    const descriptionWords = weatherDescription.split(' ');
    if (descriptionWords.length > 1) {
        weatherDescriptionElem1.textContent = descriptionWords[0];
        weatherDescriptionElem2.textContent = descriptionWords[1];
    } else {
        weatherDescriptionElem1.textContent = weatherDescription;
        weatherDescriptionElem2.textContent = '';
    }
    
    weatherWeekdayElem.textContent = weekday; 
    weatherDayElem.textContent = day;
    weatherIconElem.src = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
});
