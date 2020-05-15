import React, { Component } from "react";
import Title from "./title";
import Profile from "./profile";
import About from "./about";
import Experience from "./experience";
import Contact from "./contact";

class Main extends Component {
  state = {};
  render() {
    return (
      <div class="main fixed-img">
        <Title />
        <Profile />
        <About />
        <Experience />
        <Contact />
      </div>
    );
  }
}

export default Main;
