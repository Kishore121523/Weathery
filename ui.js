class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.icon = document.getElementById("w-icon");
    this.details = document.getElementById("w-details");
    this.windSpeed = document.getElementById("w-windspeed");
    this.tempMax = document.getElementById("w-temp-max");
    this.tempMin = document.getElementById("w-temp-min");
    this.time = document.getElementById("w-time");
    this.img = document.getElementById("main-bg");
    this.body = document.getElementById("main-body");
    this.card = document.getElementById("main-card");
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].description;
    const currentTemp = weather.main.temp - 273.15;
    this.string.textContent = currentTemp.toFixed(2) + "°";
    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    );
    this.windSpeed.textContent = `Winds: ${weather.wind.speed} km/h`;
    const maximumTemp = weather.main.temp_max - 273.15;
    this.tempMax.textContent = `M ${maximumTemp.toFixed(1)}°  ||`;
    const minimumTemp = weather.main.temp_min - 273.15;
    this.tempMin.textContent = `L ${minimumTemp.toFixed(1)}°`;
    this.lat = weather.coord.lat;
    this.long = weather.coord.lon;
    console.log(this.lat);
    console.log(this.long);
  }
  getTime() {
    var date = new Date();
    var hh = date.getHours();
    var mm = date.getMinutes();
    var timezone = hh > 1 && hh < 12 ? "am" : "pm";

    var hhr = hh > 12 && hh < 24 ? hh - 12 : hh;
    var mmr = mm < 10 ? "0" + mm : mm;

    this.time.textContent = `${hhr}:${mmr} ${timezone}`;

    // changing image and background
    if (hh >= 6 && hh < 15) {
      this.img.setAttribute("src", "./image/morning.jpg");
    } else if (hh >= 15 && hh < 18) {
      this.img.setAttribute("src", "./image/evening.jpg");
    } else {
      this.img.setAttribute("src", "./image/night.jpg");
    }

    //changing background gradient
    if (hh >= 6 && hh < 15) {
      this.body.classList.remove("night");
      this.body.className = "morning";
    } else if (hh >= 15 && hh < 18) {
      this.body.classList.remove("morning");
      this.body.className = "evening";
    } else {
      this.body.classList.remove("evening");
      this.body.className = "night";
    }
  }
}

// test({ "coord": { "lon": -0.13, "lat": 51.51 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }], "base": "stations", "main": { "temp": 296.05, "feels_like": 291.39, "temp_min": 294.26, "temp_max": 298.15, "pressure": 1009, "humidity": 40 }, "visibility": 10000, "wind": { "speed": 6.2, "deg": 130 }, "clouds": { "all": 0 }, "dt": 1592053747, "sys": { "type": 1, "id": 1414, "country": "GB", "sunrise": 1592019782, "sunset": 1592079505 }, "timezone": 3600, "id": 2643743, "name": "London", "cod": 200 })
