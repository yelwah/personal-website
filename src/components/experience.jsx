import React, { Component } from "react";
import linkedInIcon from "../images/icons/linkedin-icon-circle-A8CEA5.png";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 1,
    };
  }
  render() {
    return (
      <div class="primary" id="experience">
        <div class="content">
          <h1>Experience</h1>
          <h2>Education & Employment</h2>
          <hr></hr>
          <h3>Education</h3>
          <p>
            <table>
              <tr class="title">
                <td>University of Delaware</td>
                <td>Computer Science BS</td>
              </tr>
              <tr class="detail">
                <td>
                  Newark, DE
                  <br></br>
                  2015-2019
                </td>
                <td>
                  <ul>
                    <li>Concentration in Leadership & Business Management</li>
                    <li>Earned a 3.43 GPA</li>
                    <li>
                      Advanced Software Engineering Capstone Course
                      <ul>
                        <li>
                          Contracted with a client to create a front-end web application to display
                          students test results analytics
                        </li>
                        <li>
                          Led dialogue to clarify client’s problems/opportunities using diagrams,
                          introducing, refining and prioritizing desired features
                        </li>
                        <li>
                          Translated UI design ideas into a single page application using Angular,
                          JavaScript, CSS, and HTML5
                        </li>
                      </ul>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr class="title">
                <td class="col-width">Rancocas Valley</td>
                <td>High School</td>
              </tr>
              <tr class="detail">
                <td>
                  Mount Holly, NJ
                  <br></br>
                  2011-2015
                </td>
                <td>
                  <ul>
                    <li>Earned a 3.87 GPA and was rank 17 of 479</li>
                    <li>Led the Men's Swimming and Tennis teams as Captain</li>
                  </ul>
                </td>
              </tr>
              <tr class="spacer">
                <br></br>
              </tr>
              <tr class="spacer">
                <br></br>
              </tr>
            </table>
            <h3>Experience</h3>
            <table>
              <tr class="title">
                <td class="col-width">General Dynamics</td>
                <td>Software Engineer</td>
              </tr>
              <tr class="detail">
                <td>
                  Pittsburgh, PA
                  <br></br>
                  10/19-3/20
                </td>
                <td>
                  <ul>
                    <li>
                      Developing automated deployment process to create configurable, cloud-based,
                      highly secure Platform as a Service (PaaS)
                    </li>
                    <li>
                      Leveraging GitLab CI/CD pipelines (Docker) to facilitate the automation steps
                      of configuring (Python), building (Gradle) and deploying (Terraform/Ansible)
                      the PaaS
                    </li>
                    <li>
                      Developing locally with Docker to ensure consistency of functionality in the
                      pipeline
                    </li>
                    <li>
                      Writing python and bash scripts to automate movement of artifacts between
                      pipeline stages
                    </li>
                  </ul>
                </td>
              </tr>
              <tr class="spacer">
                <br></br>
              </tr>
              <tr class="title">
                <td>Lockheed Martin</td>
                <td>Software Engineering Intern (Jr/Sr)</td>
              </tr>
              <tr class="detail">
                <td>
                  Moorestown, NJ
                  <br></br>
                  06/18-08/18
                </td>
                <td>
                  <ul>
                    <li>
                      With Navy customer collaboration, created a new UI teaching application for
                      the AEGIS Missile Defense System using Python and PyQT
                    </li>
                    <li>
                      Iteratively clarified and designed an interactive and intuitive user
                      experience for sailors
                    </li>
                    <li>
                      In a design challenge intern project team competition, integrated coding and
                      robotics with a goal of intercepting an airborne target, finishing first of
                      the twelve teams contending
                    </li>
                    <li>
                      Performed debugging and testing tasks on the main simulation in a
                      version-controlled environment
                    </li>
                    <li>Received highest possible performance review</li>
                  </ul>
                </td>
              </tr>
              <tr class="spacer">
                <br></br>
              </tr>
              <tr class="title">
                <td>Lockheed Martin</td>
                <td>Software Engineering Intern (Soph/Jr)</td>
              </tr>
              <tr class="detail">
                <td>
                  Moorestown, NJ
                  <br></br>
                  06/17-08/17
                </td>
                <td>
                  <ul>
                    <li>
                      Led a team of interns to design and create a C++ model of the vertical missile
                      launching system aboard Navy ships that is now used in the AEGIS Missile
                      Defense System simulation
                    </li>
                    <li>
                      Collaborated with current employees to learn how to interact with engineers,
                      managers, other professionals, and organizational tools in an AGILE
                      environment
                    </li>
                    <li>Received highest possible performance review</li>
                  </ul>
                </td>
              </tr>
            </table>
          </p>
          <div class="icon-tray">
            <div class="slider-button-container">
              <a
                href="https://www.linkedin.com/in/jared-hawley-a6094112a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="slider-button">
                  <img class="circle-icon" src={linkedInIcon} alt="LinkedIn icon"></img>
                  <div class="button-text">Check me out on LinkedIn!</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
