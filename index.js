var FriendsContainer = React.createClass({
  getInitialState: function () {
    return {
      name: "Dacian Spinu",
      friends: ["Vlad Tarcan", "Paul Bencko", "Ruxandra Bucos"]
    };
  },
  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h3",
        null,
        this.state.name
      ),
      React.createElement(ShowList, { friends: this.state.friends })
    );
  }
});

var ShowList = React.createClass({
  render: function () {
    var listItems = this.props.friends.map(function (friend) {
      return React.createElement(
        "li",
        null,
        " ",
        friend,
        " "
      );
    });
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h3",
        null,
        "These are your friends"
      ),
      React.createElement(
        "ul",
        null,
        listItems
      )
    );
  }
});

ReactDOM.render(React.createElement(FriendsContainer, { username: "Tyler" }), document.getElementById('app'));
