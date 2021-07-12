import "./App.css";
import React, { Component } from "react";

class FancyBorder extends Component {
  render() {
    return (
      <div className={"FancyBorder FancyBorder-" + this.props.color}>
        {this.props.children}
      </div>
    );
  }
}

class WelcomDialog extends Component {
  render() {
    return (
      <FancyBorder color="blue">
        <h1>Welcome</h1>
        <p>Thank you for visiting our spacecraft</p>
      </FancyBorder>
    );
  }
}

class App extends Component {
  render() {
    return <WelcomDialog />;
  }
}

export default App;
