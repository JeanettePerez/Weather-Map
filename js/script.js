
"use strict";

const weather = {
  getWeather: function (city) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${OWM_TOKEN}`
    ).then(response => response.json())
      .then(data => console.log(data));
  }

}
