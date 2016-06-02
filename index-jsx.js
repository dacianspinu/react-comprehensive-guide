var HelloWorld = React.createClass({
  render: function(){
    return (
      <div>
        Hello World!
      </div>
    )
  }
});

ReactDOM.render(<HelloWorld />, document.getElementById('app'));

//it seems like you can't run JSX code in browser directly so you actually need to transform that in JS code
//by using babel --plugins transform-react-jsx index-jsx.js
