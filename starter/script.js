const cityName = document.querySelector("#cityName");
const weatherDisplay = document.querySelector("#weatherDisplay");
const recentSearches = document.querySelector("#recentSearches");

// Write the JavaScript class Weather here
class Weather {
  constructor(city, temperature, humidity, windSpeed) {
    this.city = city;
    this.temperature = temperature;
    this.humidity = humidity;
    this.windSpeed = windSpeed;
  }

  // Exercise 01
  static fetchWeather(city) {
    const weatherData = Weather.weatherData.find(
      (weather) => weather.city.toLowerCase() === city.toLowerCase()
    );

    if (weatherData) {
      Weather.displayCurrentWeather(weatherData);
      saveRecentSearch(weatherData);
      return weatherData;
    } else {
      alert("City not found");
      return null;
    }
  }

  static displayCurrentWeather(data) {
    weatherDisplay.innerHTML = `<h3>City: ${data.city}</h3>
    <p>Temperature: ${data.temperature}°C</p>
    <p>Humidity: ${data.humidity}%</p>
    <p>Wind Speed: ${data.windSpeed} m/s</p>
  `;
  }

  // Exercise 02
  static fetchForecast(city) {
    const forecastData = Weather.fetchWeather(city);
    if (forecastData) {
      Weather.displayForecast(forecastData);
    }
  }

  static displayForecast(data) {
    let forecastHtml = `<h3>5-Day Forecast for ${data.city}</h3>`;
    for (let i = 1; i <= 5; i++) {
      const temperatureEachDay = data.temperature + i;
      forecastHtml += `<p>Day ${
        i - 1 + 1
      }: Temperature ${temperatureEachDay}°C</p>`;
    }
    weatherDisplay.innerHTML += forecastHtml;
  }
}

//Uncomment the lines below to use weather database
Weather.weatherData = [
  new Weather("New York", 16, 70, 7),
  new Weather("London", 12, 80, 5),
  new Weather("Tokyo", 22, 60, 4),
  new Weather("Sydney", 25, 50, 6),
  new Weather("Paris", 15, 65, 5),
  new Weather("Berlin", 14, 60, 6),
  new Weather("Moscow", 5, 75, 10),
  new Weather("Toronto", 17, 55, 8),
  new Weather("Rio de Janeiro", 26, 85, 7),
  new Weather("Beijing", 20, 40, 3),
  new Weather("Mumbai", 30, 70, 5),
  new Weather("Los Angeles", 19, 65, 4),
  new Weather("Cape Town", 18, 60, 6),
  new Weather("Rome", 21, 55, 3),
  new Weather("Bangkok", 33, 75, 2),
  new Weather("Istanbul", 20, 60, 4),
  new Weather("Lagos", 29, 80, 3),
  new Weather("Buenos Aires", 23, 70, 5),
  new Weather("Chicago", 10, 65, 7),
  new Weather("Shanghai", 19, 80, 6),
];

//Exercise 01
function searchWeather() {
  const city = cityName.value.trim();
  if (city) {
    Weather.fetchWeather(city);
    Weather.fetchForecast(city);
  } else {
    alert("Please enter a city name");
  }

  cityName.value = "";
}

const recentSearchList =
  JSON.parse(localStorage.getItem("recentSearches")) || [];

console.log(recentSearchList);

// Exercise 03
function saveRecentSearch(weatherData) {
  const city = weatherData.city;

  if (!recentSearchList.some((item) => item.city === city)) {
    recentSearchList.push(weatherData);

    localStorage.setItem("recentSearches", JSON.stringify(recentSearchList));
  }

  displayRecentSearches();
}

function displayRecentSearches() {
  recentSearches.innerHTML = "";

  recentSearchList.forEach((weatherData) => {
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item", "list-group-item-action");
    listItem.textContent = weatherData.city;
    recentSearches.appendChild(listItem);

    listItem.addEventListener("click", () => {
      Weather.fetchWeather(weatherData.city);
      Weather.fetchForecast(weatherData.city);
    });
  });
}

displayRecentSearches();
// localStorage.clear();
