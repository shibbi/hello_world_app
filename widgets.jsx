var React = require('react');
var ReactDOM = require('react-dom');
var Tabs = require('./tabs');

var Widgets = React.createClass({
  render: function () {
    var tabs = [
      {title: "one", content: "this is article number one"},
      {title: "two", content: "second article"},
      {title: "three", content: "third time's the charm!"}
    ];

    return(
      <div>
        <Tabs tabs={tabs} />
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Widgets />, document.getElementById('main'));
});
