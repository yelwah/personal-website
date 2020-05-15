import React, { Component } from "react";

class Step extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id={"Step" + this.props.stepNum} className={this.props.theme}>
        <div className="panel step">
          <img src={this.props.image}></img>
          <div className="text">
            <h1>{this.props.title}</h1>
            <p className="indent">{this.props.text}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Step;
