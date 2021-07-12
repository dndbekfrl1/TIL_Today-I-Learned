import "./App.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function tick() {
  ReactDOM.render(<Clock />, document.getElementById("root"));
}

setInterval(tick, 1000);

class App extends React.Component {
  render() {
    return <div>hello</div>;
  }
}
export default App;
