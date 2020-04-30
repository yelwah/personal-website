import React, { Component } from "react";
import profilePic from "../images/profile-pic-cutout.png";

let aboutMe =
  "Hello and welcome, I'm Jared Hawley. I began using computers at three years old, continued my passion by earning my Bachelor's of Science from the University of Delaware, and am now pursuing a career in front-end web development. I have worked at two major software engineering companies where I learned the core of modern software development environments. Using programming to solve problems in combination with the artistic and user focused elements of web design truly inspire me. To me, the core concepts of web development are not HTML and Javascript. I beleive what makes an exceptional web developer is effectively communicating with the customer, refining and translating their needs into a beatuiful and intuitive design, and executing the plan, converting the design to functional & maintainable website. I am constantly looking for ways to improve these skills, and beleive while I am pursuing those, the necessary technical skills will follow.";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 1,
    };
  }
  render() {
    return (
      <div class="primary" id="profile">
        <div class="content">
          {/* Heading */}
          <div class="h1-primary">Profile</div>
          <div class="h2-primary">Front-End Developer</div>
          <hr class="hr-primary"></hr>
          {/* About Me */}
          <div class="h3-primary">About Me</div>
          <div class="body-primary indent">{aboutMe}</div>
          <div class="left-column">
            {/* Details */}
            <div class="h3-primary">
              Details
              <div class="body-primary">
                <table>
                  <tr>
                    <td class="detail-descriptor">Name:</td>
                    <td>Jared Hawley</td>
                  </tr>
                  <tr>
                    <td class="detail-descriptor">Age:</td>
                    <td>23 years</td>
                  </tr>
                  <tr>
                    <td class="detail-descriptor">Location:</td>
                    <td>Eastampton Township, New Jersey, USA</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          {/*Profile Picture*/}
          <div class="right-column">
            <img class="profile-pic" src={profilePic} alt="profile of jared hawley"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
