import React, { Component } from "react";
import profilePic from "../images/profile-pic-suit.png";

let aboutMe =
  "My lifelong passion for computers led me to earn a Computer Science B.S. from the University of Delaware, and I am now pursuing a career in front-end web development. I have worked at two major software engineering companies where I learned the core of modern software development environments. Using programming to solve problems in combination with the artistic and user focused elements of web design truly inspire me. I believe the core concepts of web development are not just JavaScript and HTML. What makes an exceptional web developer is effectively communicating with the customer and then refining and translating their needs into a beautiful and intuitive design. After creating a plan, the next step is converting the design to functional & maintainable website, while continuing to incorporate customer feedback. While I am constantly pursing greater technical knowledge, the key to growth and success ultimately is my proficiency in these fundamental concepts.";

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
          <h1>Profile</h1>
          <h2>Front-End Developer</h2>
          <hr></hr>
          <h3>Hello, I'm Jared...</h3>
          <p class="indent">{aboutMe}</p>
          <div class="left-column">
            <h3>Details</h3>
            <p>
              <table>
                <tr>
                  <td>
                    <strong>Name:</strong>
                  </td>
                  <td>Jared Hawley</td>
                </tr>
                <tr>
                  <td>
                    <strong>Age:</strong>
                  </td>
                  <td>23 years</td>
                </tr>
                <tr>
                  <td>
                    <strong>Location:</strong>
                  </td>
                  <td>Eastampton Township, New Jersey, USA</td>
                </tr>
              </table>
            </p>
          </div>
          <div class="right-column">
            <img class="profile-pic" src={profilePic} alt="profile of jared hawley"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
