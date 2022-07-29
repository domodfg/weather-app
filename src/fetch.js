import { display } from "./interface.js";
import { format } from "date-fns";

async function fetchWeather(location, unit) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=54e9faf7c9a9a28e98cc28c24b39ed9a&units=${unit}`,
    { mode: "cors" }
  );
  const weather = await response.json();
  if (response.ok) {
    render(weather);
  } else {
    const message = `Location not found!`;
    throw new Error(message);
  }
}

function render(weather) {
  display.error.textContent = "";
  display.location.textContent = weather.name;
  display.date.textContent = format(new Date(), "cccc LLLL d, yyyy");
  display.temperature.textContent = weather.main.temp + "℃";
  display.weather.textContent = weather.weather[0].main;
  display.weatherDes.textContent = weather.weather[0].description;
  display.feelsLike.textContent = weather.main.feels_like + "℃";
  display.humidity.textContent = weather.main.humidity + "%";
  display.tempMin.textContent = weather.main.temp_min + "℃";
  display.tempMax.textContent = weather.main.temp_max + "℃";
  display.windSpeed.textContent = weather.wind.speed + "m/s";
  display.visibility.textContent = weather.visibility / 1000 + " km";
  display.cloud.textContent = weather.clouds.all + "%";
  display.rain.textContent =
    weather.rain != undefined ? weather.rain["1h"] + " mm" : "No data";
  display.pressure.textContent = weather.main.pressure + "hPa";
  if (display.weather.textContent == "Clear") {
    document.body.style.backgroundImage = "url(./b371820d085f952e13f3.jpg)";
  } else if (display.weather.textContent == "Clouds") {
    document.body.style.backgroundImage = "url(./391fe57f10df710d21ac.png)";
  } else {
    document.body.style.backgroundImage = "url(./8d53d61b090e7e3ad51c.jpg)";
  }
}

const searchBar = (() => {
  const search = document.querySelector(".search");
  const searchInput = document.querySelector(".searchInput");

  search.addEventListener("click", () => {
    if (searchInput.value != "") {
      fetchWeather(searchInput.value, "metric").catch(
        (err) => (display.error.textContent = err.message)
      );
      searchInput.value = "";
    }
  });
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      fetchWeather(searchInput.value, "metric").catch(
        (err) => (display.error.textContent = err.message)
      );
      searchInput.value = "";
    }
  });
})();

export { fetchWeather };
