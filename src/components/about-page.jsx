import React, { Component } from "react";
import Step from "./step";
import StepReverse from "./stepReverse";
import Step1img from "../images/define-goals.png";
import Step2img from "../images/design-paper.png";
import Step3img from "../images/design-figma.PNG";
import Step4img from "../images/react-logo.png";
import Step5img from "../images/sass-logo.png";
import Step6img from "../images/javascript-logo.png";
import { Link } from "react-router-dom";

class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="about-page">
        <div class="banner-image">
          <Link to="/" className="link" id="top-link">
            {" "}
            Go Back to Main Page{" "}
          </Link>
          <h1>
            D<h1 class="small">ESIGN & </h1>
            <br></br>D<h1 class="small">EVELOPMENT</h1>
          </h1>
        </div>
        <div>
          <Step
            theme="primary"
            image={Step1img}
            stepNum="1"
            title="Defining Goals"
            text='First I defined and refined the goals of this site: "What purpose is this site supposed to serve and who is the audience? What are the key questions this site is going to answer and problems it is going to solve?" After brainstorming a long list of questions, I refined down to a few of the best and most salient questions and came up with concise and clear answers to guide me in my design.'
          />
          <StepReverse
            theme="secondary"
            image={Step2img}
            stepNum="2"
            title="Design: Phase 1"
            text="I worked on designing the website with pencil and paper. I again engaged in the brainstorming process, prompting myself to come up with many design options to generate some new and original ideas rather than the first thing that popped into my head. I also looked online for inspiration for website design elements. After generating many options, I entered the refinement process pulling those ideas into one cohesive site. At this stage, I moved to full page drawings and settled on elements and features that would best meet the defined goals."
          />
          <Step
            theme="primary"
            image={Step3img}
            stepNum="3"
            title="Design: Phase 2"
            text="After I drafted the drawing of my site, I designed with the free prototyping tool Figma. At this stage, decisions like the color palette and photos had to be made, setting the stylistic direction for the site. I used my own photos that fit the style and edited icons to match the color palette. Inevitably, new and better design ideas arose throughout the following stages, but the core of the design work was completed."
          />
          <StepReverse
            theme="secondary"
            image={Step4img}
            stepNum="4"
            title="Basic React Structure"
            text="This stage began by initializing a React project and Git repository. I started deciphering the component breakdown from my design and created basic barebones versions of those components without adding interactive functionality or writing detailed text. The routing structure and component hierarchy was also laid out at this point."
          />
          <Step
            theme="primary"
            image={Step5img}
            stepNum="5"
            title="Foundational CSS"
            text="With the bones of the site in place, I styled the website. While there is a cyclic relationship with the next step, some basic styling initiated the dance of CSS and JavaScript. I used Sass to structure and define colors, font styles, panels, and general layout. Some of the more interactive features were saved for later and I focused on getting the spacing and styling in place."
          />
          <StepReverse
            theme="secondary"
            image={Step6img}
            stepNum="6"
            title="JS & Finishing Touches"
            text="Finally, I worked features like the link and scroll buttons. First, I implemented them functionally and then included compelling styles. I finalized text for the site rather than placeholder text and made smaller CSS tweaks to pull it all together. After I built and tested my site with React, I deployed my website using Google Firebase."
          />
          <div className="primary filler">
            <Link to="/" className="link" id="bottom-link">
              {" "}
              Go Back to Main Page{" "}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
