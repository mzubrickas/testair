window.addEventListener('DOMContentLoaded', () => {
    const historyContainer = document.getElementById('weather-history-container');
    const weatherHistory = JSON.parse(localStorage.getItem('weatherHistory')) || [];

    if (weatherHistory.length === 0) {
        historyContainer.innerHTML = '<p class="history-message">No weather history available</p>';
        return;
    }

    weatherHistory.forEach(record => {
        const date = new Date(record.dateTime * 1000); 
        const weekday = date.toLocaleDateString(undefined, { weekday: 'short' });
        const day = date.toLocaleDateString(undefined, { day: 'numeric' });

        const card = document.createElement('div');
        card.className = 'weather-result-block';
        card.innerHTML = `
            <div class="weather-card-top">
                <img class="icon" src="https://openweathermap.org/img/wn/${record.weatherIcon}@2x.png" alt="Weather Icon">
                <div class="weather-descriotion-block">
                    <span class="first-description">${record.weatherDescription.split(' ')[0]}</span>
                    <span class="second-description">${record.weatherDescription.split(' ')[1] || ''}</span>
                </div>
            </div>
            <div class="weather-card-mid">
                <div class="temp">${parseFloat(record.temperature).toFixed(0)}</div>
                <span class="degree">°</span>
            </div>
            <div class="weather-card-bottom">
                <div class="city">${record.cityName}</div>
                <div class="weekday-block">
                    <span class="weekday">${weekday}</span>
                    <span class="day">${day}</span>
                </div>
            </div>
        `;

        historyContainer.appendChild(card);
    });
});
