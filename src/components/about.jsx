import React, { Component } from "react";
import gitHubIcon from "../images/icons/github-icon-circle-A8CEA5.png";

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
      <div class="secondary">
        <div class="content">
          <div class="h1-secondary">About this Site</div>
          <div class="h2-secondary">Q & A</div>
          <hr class="hr-secondary"></hr>
          <div class="h3-secondary">Why did you decide to make this?</div>
          <div class="body-secondary indent">
            The primary reason I created this site was to build confidence in my web development
            ability as a whole. I had a vision for a complete, clean website that I designed and
            executed on my own. By accomplishing this goal, I helped fill any gaps in my knowledge
            that may have been masked by someone else's knowledge during a team project. While
            teamwork is important, I beleive it is important for me to have a strong working
            knowledge to become a better teammate for others. I noticed some key technologies in the
            web development world that are extremely popular and powerful, like React, that I had
            never used before, so I also wanted to challenge myself with making this site with those
            unfirmiliar tools.
          </div>
          <div class="h3-secondary">What was your process to make this?</div>
          <div class="body-secondary indent">
            I went at creating the site pretty formally to really get experience with professional
            web development and design. Before starting, I attempted to define and refine the goals
            of this site. What purpose is this site supposed to serve and who would the audience be.
            What are the key questions this site is trying to answer or problems it was trying to
            solve. I brainstormed a lot of ideas then refined back down to a few of the best. The
            next stage was to begin the design process. I first browsed many websites online to get
            a feel for some things I liked and ask myself why they might have presented their
            information in a certain way. I then tried to produce a lot of rough sketches on paper
            of as many different designs as I could, and once again refined down picking and
            choosing the best features. Once I had a pretty good idea of what I wanted I used Figma
            to create a wireframe of my website. I ended up scrapping my first design after it
            didn't come out quite as cleanly as I hoped, and went back to my drawings again. I came
            back to Figma and locked in a design for my website. At this point I started creating
            the barebones of my website with React, learning more about the necessary tools,
            especially Javascript in the process. Having the design already thought through, I
            focused on just implementing the design with React. Finally, once site was built and
            styled, I went through trying to add some finishing touches and flourish with some
            animation and additionally dynamic functionalities.
          </div>
          <div class="icon-tray">
            <a
              href="https://github.com/yelwah/personal-website"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="gitHub-icon-button">
                <img class="circle-icon-green" src={gitHubIcon}></img>
                Source code for this site on GitHub
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
