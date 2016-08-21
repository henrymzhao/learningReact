var Note = React.createClass({
  render: function()
  {
    return(
      <div className="note" />
    );
  }
});

ReactDOM.render(<Note>Hello World</Note>,
    document.getElementById('react-container'));
