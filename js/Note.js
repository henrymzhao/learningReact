var Note = React.createClass({
    render: function() {
      return (
        <div className="note"></div>
      );
});
// wtf stop breaking

ReactDOM.render(<Note>Hello World</Note>,
    document.getElementById('react-container'));
