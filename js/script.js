"use strict";
const weatherBox = $(".weather-box");



const weather = {
getWeather: function (city,state) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${state}&units=imperial&appid=${OWM_TOKEN}`
    ).then(response => response.json())
      .then(data => {

        $(weatherBox).append(this.displayWeather(data));
      });
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    return `<div class="card" style="width: 18rem;">
              <div class="card-header">
                Weather in ${data.name}
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Temp: ${data.main.temp}</li>
                <li class="list-group-item">${data.weather[0].description}</li>
                <li class="list-group-item">Humidity: ${data.main.humidity}</li>
                <li class="list-group-item">Wind: ${data.wind.speed}</li>
              </ul>
            </div>`

  },
search: function () {
  this.getWeather($(".searchInput").val());
}
};


  $(".searchButton").click(function (e){
        e.preventDefault();
      weather.search();

  });







