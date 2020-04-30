import React, { Component } from "react";
import scrollDownIcon from "../images/icons/scroll-down-icon.png";
import ScrollIntoView from "react-scroll-into-view";

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 1,
    };
    var element = document.getElementById("profile");
  }
  render() {
    return (
      <div>
        <div class="title">
          <div class="title-heading">Jared Hawley</div>
          <div class="title-sub-heading">INTERACTIVE RESUME</div>
        </div>
        <div class="scroll-down">
          <ScrollIntoView selector="#profile">
            <img class="scroll-down-icon" src={scrollDownIcon} alt="scroll down"></img>
          </ScrollIntoView>
        </div>
      </div>
    );
  }
}

export default Title;
