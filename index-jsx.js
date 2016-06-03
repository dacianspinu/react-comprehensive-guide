var FriendsContainer = React.createClass({
    getInitialState: function() {
      return {
        name: "Dacian Spinu",
        friends: ["Vlad Tarcan", "Paul Bencko", "Ruxandra Bucos"]
      }
    },

    addFriend: function(friend) {
        this.state.friends.push(friend);
        this.setState({
          friends: this.state.friends
        });
    },

    componentWillMount: function() {
      alert("Component Will Mount")
    },
    componentDidMount: function() {
      alert("Component Did Mount")
    },
    componentWillReceiveProps: function() {
      alert("Component Will Receive Props")
    },

    componentWillUnmount: function() {
      alert("Component Will Unmount")
    },
    render: function() {
      return (
        <div>
          <h3>{ this.state.name }</h3>
        </div>
      )
    }
});

var AddFriend = React.createClass({
  getInitialState: function() {
    return {
      newFriend: ''
    }
  },

  propTypes: {
    addNew: React.PropTypes.func.isRequired
  },

  updateNewFriend: function(e) {
    this.setState({
      newFriend: e.target.value
    })
  },

  handleAddNew: function() {
    console.log(this.props)
    this.props.addNew(this.state.newFriend);
    this.setState({
      newFriend: ''
    })
  },

  render: function() {
    return (
      <div>
        <input type="text" value={this.state.newFriend} onChange={this.updateNewFriend}></input>
        <button onClick={this.handleAddNew}> Add Friend </button>
      </div>
    )
  }
});


var ShowList = React.createClass({
  getDefaultProps: function() {
    return {
      names: []
    }
  },
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
});

ReactDOM.render(<FriendsContainer username="Tyler"/>, document.getElementById('app'));

//it seems like you can't run JSX code in browser directly so you actually need to transform that in JS code
//by using babel --plugins transform-react-jsx index-jsx.js
