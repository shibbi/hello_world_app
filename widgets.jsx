var React = require('react');
var ReactDOM = require('react-dom');

var Widgets = React.createClass({
  getInitialState: function () {
    return {status: "initial"};
  },
  clickHandler: function() {
    var newStatus = this.state.status;
    if (newStatus == "initial") {
      newStatus = "started";
    }
    else {
      newStatus = "initial";
    }
    this.setState({status: newStatus});
  },
  render: function () {
    return(
      <div className={this.state.status} onClick={this.clickHandler}>Click here</div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Widgets />, document.getElementById('main'));
});
