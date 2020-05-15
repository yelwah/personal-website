import React, { Component } from "react";
import phoneIcon from "../images/icons/phone-icon-A8CEA5.png";
import mailIcon from "../images/icons/gmail-icon-A8CEA5.png";
import { CopyToClipboard } from "react-copy-to-clipboard";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 1,
    };
  }

  copyToClipboard = (str) => {
    const el = document.createElement("textarea");
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

  render() {
    return (
      <div class="secondary" id="contact">
        <div class="content">
          <h1>Contact</h1>
          <h2>Click to Copy to Clipboard</h2>
          <div class="icon-tray">
            <div class="slider-button-container">
              <div>
                <div class="slider-button" onClick={() => this.copyToClipboard("609-556-2466")}>
                  <img class="circle-icon" src={phoneIcon} alt="Phone icon"></img>
                  <div class="button-text">Call or text me at 609-556-2455</div>
                </div>
              </div>
            </div>
            <div class="slider-button-container">
              <div>
                <div
                  class="slider-button"
                  onClick={() => this.copyToClipboard("j.yelwah@gmail.com")}
                >
                  <img class="circle-icon" src={mailIcon} alt="Email Icon"></img>
                  <div class="button-text">Email me at j.yelwah@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
