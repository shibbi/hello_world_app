var React = require('react');
var $ = require('jquery');

var WeatherClock = React.createClass({
  getInitialState: function() {
    return {time: new Date(), weather: "Loading...", temp: "Loading..."};
  },
  tick: function(index) {
    this.setState({time: new Date()});
  },
  componentWillMount: function() {
    navigator.geolocation.getCurrentPosition(function(position) {
      this.getWeather(position);
    }.bind(this));
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  getWeather: function(position) {
    var apiKey = "645c5d39c7603f17e23fcaffcea1a3c1";
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var params = "units=imperial&lat=" + lat + "&lon=" + lon + "&APPID=" + apiKey;
    $.ajax({
      type: "GET",
      url: "http://api.openweathermap.org/data/2.5/weather?" + params,
      success: function(resp) {
        this.state.weather = resp.weather[0].main;
        this.state.temp = resp.main.temp.toFixed(0);
      }.bind(this)
    });
  },
  render: function() {
    return (
      <div>
        <h2>Weather Clock</h2>
        <div className="time">
          Time: {this.state.time.toString()}
        </div>
        <div className="weather">
          Weather: {this.state.weather}
          <br />
          Temperature: {this.state.temp}&#8457;
        </div>
      </div>
    );
  }
});

module.exports = WeatherClock;