import React, { Component } from "react";
import scrollDownIcon from "../images/icons/scroll-down-icon.png";
import ScrollIntoView from "react-scroll-into-view";

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 1,
    };
  }
  render() {
    return (
      <div>
        <div class="title">
          <h1>
            J<h1 class="small">ARED </h1>H<h1 class="small">AWLEY</h1>
          </h1>
          <h2>INTERACTIVE RESUME</h2>
        </div>
        <div class="scroll-down-button">
          <ScrollIntoView selector="#profile">
            <img class="icon" src={scrollDownIcon} alt="scroll down"></img>
          </ScrollIntoView>
        </div>
      </div>
    );
  }
}

export default Title;
