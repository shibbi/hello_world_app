var React = require('react');
var ReactDOM = require('react-dom');
var Tabs = require('./tabs');
var WeatherClock = require('./weatherclock');
var Autocomplete = require('./autocomplete');

var Widgets = React.createClass({
  render: function () {
    var tabs = [
      {title: "one", content: "this is article number one"},
      {title: "two", content: "second article"},
      {title: "three", content: "third time's the charm!"}
    ];

    var names = [
      "Layne",
      "Brenna",
      "Vonnie",
      "Nicolle",
      "Rebecca",
      "Hertha",
      "Audrea",
      "Eileen",
      "Graham",
      "Thaddeus"
    ];

    return(
      <div>
        <Tabs tabs={tabs} />
        <WeatherClock />
        <Autocomplete names={names} />
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Widgets />, document.getElementById('main'));
});
