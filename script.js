async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "YOUR_API_KEY"; // <-- Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  const result = document.getElementById("result");
  result.textContent = "Loading...";

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      result.innerHTML = `
        <p><strong>${data.name}, ${data.sys.country}</strong></p>
        <p>🌡️ Temp: ${data.main.temp}°C</p>
        <p>☁️ Weather: ${data.weather[0].description}</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>🌬️ Wind: ${data.wind.speed} m/s</p>
      `;
    } else {
      result.textContent = "City not found!";
    }
  } catch (error) {
    result.textContent = "Error fetching weather data.";
  }
}
