const display = (() => {
  const temperature = document.querySelector(".temperature");
  const weather = document.querySelector(".weather");
  const weatherDes = document.querySelector(".weatherDes");
  const feelsLike = document.querySelector(".feelsLike");
  const humidity = document.querySelector(".humidity");
  const tempMin = document.querySelector(".tempMin");
  const tempMax = document.querySelector(".tempMax");
  const windSpeed = document.querySelector(".windSpeed");
  const visibility = document.querySelector(".visibility");
  const cloud = document.querySelector(".cloud");
  const rain = document.querySelector(".rain");
  const pressure = document.querySelector(".pressure");
  const date = document.querySelector(".date");
  const location=document.querySelector('.location')
  const error=document.querySelector('.error')
  return {
    temperature,
    weather,
    weatherDes,
    feelsLike,
    humidity,
    tempMin,
    tempMax,
    windSpeed,
    visibility,
    cloud,
    rain,
    pressure,
    date,
    location,
    error
  };
})();

export { display };
