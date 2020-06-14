class Weather {
  constructor(city, state) {
    this.key = "2222591dbc78f127345cf78a84e3fcdc";
    this.city = city;
    this.state = state;
  }

  //fetch weather from api
  async getWeather() {
    const response = await fetch(
      // `api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=1658d7c5d0a3dcb1f6bd89e08bf3bf86`
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.key}`
    );
    const responseData = await response.json();
    return responseData;
  }

  //change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
