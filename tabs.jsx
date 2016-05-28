var React = require('react');

var Tabs = React.createClass({
  getInitialState: function() {
    return {selected: 0};
  },
  clicked: function(index) {
    this.setState({selected: index});
  },
  render: function() {
    var self = this;
    var tabs = this.props.tabs.map(function(tab, index) {
      if (self.state.selected == index) {
        return <li key={index} content={tab.content} onClick={self.clicked.bind(self, index)}><b>{tab.title}</b></li>;
      }
      else {
        return <li key={index} content={tab.content} onClick={self.clicked.bind(self, index)}>{tab.title}</li>;
      }
    });
    var content = this.props.tabs[this.state.selected].content;
    return (
      <div>
        <h2>Tabs</h2>
        <ul>
          {tabs}
        </ul>
        <article>
          <h3>Article:</h3>
          {content}
        </article>
      </div>
    );
  }
});

module.exports = Tabs;