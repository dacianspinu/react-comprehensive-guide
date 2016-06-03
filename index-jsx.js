var FriendsContainer = React.createClass({
    getInitialState: function() {
      return {
        name: "Dacian Spinu",
        friends: ["Vlad Tarcan", "Paul Bencko", "Ruxandra Bucos"]
      }
    },
    render: function() {
      return (
        <div>
          <h3>{ this.state.name }</h3>
          <ShowList friends={ this.state.friends }/>
        </div>
      )
    }
});

var ShowList = React.createClass({
  render: function() {
    var listItems=this.props.friends.map(function(friend) {
      return <li> { friend } </li>
    });
    return (
      <div>
        <h3>These are your friends</h3>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
})

ReactDOM.render(<FriendsContainer username="Tyler"/>, document.getElementById('app'));

//it seems like you can't run JSX code in browser directly so you actually need to transform that in JS code
//by using babel --plugins transform-react-jsx index-jsx.js
