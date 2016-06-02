var App = React.createClass({
  render: function () {
    return React.createElement(
      "div",
      null,
      "Hello World!"
    );
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
