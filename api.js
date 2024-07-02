//event listener for button click to fetch weather data
document.getElementById('getWeather').addEventListener('click', function() {
    const zip = document.getElementById('zip').value;
    const apiKey = '13bfe0b2904c637d5f60f69ac03e1f63'; 
    //async function to fetch weather data from network openweathermap.org, waits for a response from the server
    //promise-based HTTP request specifically for a GET request, as it is used to retriece data from the specified URL.
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apiKey}&units=imperial`)
        .then(response => response.json()) //used to handle the response once it is received
        .then(data => {                   //
            const date = new Date();
            document.getElementById('date').innerText = date.toLocaleDateString();
            document.getElementById('city').innerText = data.name;
                /*I added Math.round() to each temperature value before concatenating
                it with the degree symbol and '°F'. This will round the temperature to the 
                nearest integer.*/
            document.getElementById('temperature').innerText = `${Math.round(data.main.temp)}°F`;
            document.getElementById('conditions').innerText = data.weather[0].description;
            document.getElementById('tempHigh').innerText = `High: ${Math.round(data.main.temp_max)}°F`;
            document.getElementById('tempLow').innerText = `Low: ${Math.round(data.main.temp_min)}°F`;
        })
        .catch(error => console.error('Error fetching weather data:', error)); 
}); 

//promises are either resolved or rejected

/*
The selected code snippet is part of a JavaScript event listener that is attached to a button with the id 'getWeather'. 
When this button is clicked, the function inside the event listener is executed.

Inside the function, it retrieves the value entered in an input field with the id 'zip'. 
Then, it declares a constant variable 'apiKey' with the value '13bfe0b2904c637d5f60f69ac03e1f63',
 which is the API key for the OpenWeatherMap API. This API key is used to authenticate the request to fetch weather data.


The code then uses the Fetch API to make a GET request to the OpenWeatherMap API, passing the zip 
code and API key as query parameters. The response from the API is expected to be in JSON format,
 so the code uses the response.json() method to parse the response into a JavaScript object.

The parsed weather data is then used to update the text content of various HTML elements, 
such as the date, city name, temperature, weather conditions, and high and low temperatures.
If any errors occur during the fetch request or parsing of the response, the code will log the error to the console.

*/