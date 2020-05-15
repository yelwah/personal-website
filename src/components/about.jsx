import React, { Component } from "react";
import gitHubIcon from "../images/icons/github-icon-circle-alt.png";
import aboutIcon from "../images/icons/about-icon-green-cream.png";
import { Link } from "react-router-dom";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 1,
    };
  }
  variables = {
    gitHubIcon: gitHubIcon,
  };
  render() {
    return (
      <div class="secondary" id="about">
        <div class="content">
          <h1>About this Site</h1>
          <h2>Q & A</h2>
          <hr></hr>
          <h3>Why did you decide to make this?</h3>
          <p class="indent">
            I had a vision of a clean and complete website designed and executed on my own. By
            accomplishing this goal, I filled gaps in my knowledge that were responsibilities of
            others in team projects. Teamwork is important and I believe it is valuable to have a
            more diverse skill set to become a better teammate. I noticed some extremely popular and
            powerful technologies in web development, such as React, that I had never used. So, I
            challenged myself by making this site with those unfamiliar tools.
          </p>
          <h3>How did you make this site?</h3>
          <p class="indent">
            For information about how I made this site click the info button below to more about
            this site. If you're interested in the source code, the link to the GitHub page is also
            available below.
          </p>
          <div class="icon-tray">
            <div class="slider-button-container">
              <Link to="/about">
                <div class="slider-button">
                  <img class="circle-icon" src={aboutIcon} alt="About icon"></img>
                  <div class="button-text">How I made this site</div>
                </div>
              </Link>
            </div>
            <div class="slider-button-container">
              <a
                href="https://github.com/yelwah/personal-website"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="slider-button">
                  <img class="circle-icon" src={gitHubIcon} alt="GitHub icon"></img>
                  <div class="button-text">This site on GitHub</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
