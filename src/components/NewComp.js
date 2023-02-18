import React, { Component } from "react";

export class NewComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Subscribe to Munene",
      sub: "Subscribe",
    };
  }
  styles = {
    fontStyle: "italic",
    color: "#6F8FAF",
  };

  ButtonChange = () => {
    this.setState({
      message: "You have successfully subscribed to Munene's",
      sub: "Thank you",
    });
  };
  render() {
    return (
      <div>
        <h3 style={this.styles}>{this.state.message}</h3>
        <button onClick={this.ButtonChange}>{this.state.sub}</button>
      </div>
    );
  }
}

export default NewComp;
