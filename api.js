
document.getElementById('getWeather').addEventListener('click', function() {
    const zip = document.getElementById('zip').value;
    const apiKey = '13bfe0b2904c637d5f60f69ac03e1f63'; // Replace this with your actual API key
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apiKey}&units=imperial`)
        .then(response => response.json())
        .then(data => {
            const date = new Date();
            document.getElementById('date').innerText = date.toLocaleDateString();
            document.getElementById('city').innerText = data.name;
            document.getElementById('temperature').innerText = `${data.main.temp}°F`;
            document.getElementById('conditions').innerText = data.weather[0].description;
            document.getElementById('tempHigh').innerText = `High: ${data.main.temp_max}°F`;
            document.getElementById('tempLow').innerText = `Low: ${data.main.temp_min}°F`;
        })
        .catch(error => console.error('Error fetching weather data:', error));
});


