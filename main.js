const apiKey = "16419a8cbabf9b3c6f4d6b95ac5be591";

const apiUrl = "";

const searchBtn = document.getElementById("search-button");

const handleWeather = function () {
  const inputCity = document.getElementById("input-field").value;

  if (!inputCity) return;

  const cityName = document.getElementById("city-name");
  const temperature = document.getElementById("temp-city");
  const currentWeather = document.getElementById("current-state-weather");
  const getWeather = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${apiKey}`
  )
    .then((res) => res.json())
    .then((data) => {
      const { name, main, weather } = data;

      const kelvin = main.temp;
      const celcius = (kelvin - 273).toFixed(1);
      cityName.innerText = `${name}`;
      temperature.innerText = `${celcius}`;
      currentWeather.innerText = `${weather[0].main}`;
    });
};
searchBtn.addEventListener("click", handleWeather);
