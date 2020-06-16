//init storage class
const storage = new Storage();
//Get stored location data
const weatherLocation = storage.getLocationData();

// init weather class
const weather = new Weather(weatherLocation.city, weatherLocation.state);

//init ui class
const ui = new UI();
//Get weather on dom load
document.addEventListener("DOMContentLoaded", getWeather);

//change location event
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;

  //change location
  weather.changeLocation(city, state);

  //set location in local storage
  storage.setLocationData(city, state);

  //Get and display weather

  getWeather();

  //close modal
  $("#locModal").modal("hide");
});

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}

//get time
ui.getTime();

//heart
document.getElementById("heart").addEventListener("click", (e) => {
  const cite = document.querySelector("cite");
  if ($("cite").hasClass("heartclick")) {
    cite.classList.remove("heartclick");
    e.target.classList.remove("heartclick");
  } else {
    cite.className += "heartclick";
    e.target.className += " heartclick";
  }
  e.preventDefault();
});
