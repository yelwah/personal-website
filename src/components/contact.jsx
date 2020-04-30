import React, { Component } from "react";
import phoneIcon from "../images/icons/phone-icon-A8CEA5.png";
import mailIcon from "../images/icons/gmail-icon-A8CEA5.png";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 1,
    };
  }
  render() {
    return (
      <div class="secondary">
        <div class="content">
          <div class="h1-secondary">Contact</div>
          <div class="icon-tray">
            <div class="contact-icon-button">
              <a href="" target="_blank" rel="noopener noreferrer">
                <img class="circle-icon-white" src={phoneIcon}></img>
              </a>
              <div class="button-text">Call or text me at 609-556-2455</div>
            </div>
          </div>
          <div class="icon-tray">
            <div class="contact-icon-button">
              <a href="" target="_blank" rel="noopener noreferrer">
                <img class="circle-icon-white" src={mailIcon}></img>
              </a>
              <div class="button-text">Email me at: j.yelwah@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
