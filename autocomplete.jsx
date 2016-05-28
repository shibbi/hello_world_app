var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var Autocomplete = React.createClass({
  getInitialState: function() {
    return {query: ""};
  },
  handleChange: function(e) {
    this.setState({query: e.target.value.toLowerCase()});
  },
  handleClick: function(index) {
    this.setState({query: this.props.names[index].toLowerCase()})
  },
  render: function() {
    var self = this;
    var matchingNames = this.props.names.filter(function(name) {
      return name.toLowerCase().match(self.state.query);
    });
    var nameItems = matchingNames.map(function(name, index) {
      return <li key={index} onClick={self.handleClick.bind(self, index)}>{name}</li>;
    });
    return (
      <section>
        <h2>Autocomplete</h2>
        <input type="text"
               value={this.state.query}
               placeholder="Type here"
               onChange={this.handleChange} />
        <ul>
          <ReactCSSTransitionGroup transitionName="auto"
                                   transitionEnterTimeout={500}
                                   transitionLeaveTimeout={500}>
            {nameItems}
          </ReactCSSTransitionGroup>
        </ul>
      </section>
    );
  }
});

module.exports = Autocomplete;