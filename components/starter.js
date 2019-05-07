class Starter extends React.Component {
  render() {
    return (
      <div>
        <select className="Starter-select" ref={el => this.el = el}>
          {this.props.children}
        </select>
      </div>
    );
  }
}

function Test() {
  return (
    <Chosen>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Chosen>
  );
}

ReactDOM.render(
  <Example />,
  document.getElementById('root')
);
