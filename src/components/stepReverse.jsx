import React, { Component } from "react";

class StepReverse extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id={"Step" + this.props.stepNum} className={this.props.theme}>
        <div className="panel step">
          <div className="text">
            <h1>{this.props.title}</h1>
            <p className="indent">{this.props.text}</p>
          </div>
          <img src={this.props.image}></img>
        </div>
      </div>
    );
  }
}

export default StepReverse;
