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
      <div class="primary">
        <div class="content">
          <div class="h1-primary">Experience</div>
          <div class="h2-primary">Education & Employment</div>
          <hr class="hr-primary"></hr>
          <div class="h3-primary">Education</div>
          <div class="body-primary">
            <table>
              <tr>
                <td class="td-left-title">Rancocas Valley</td>
                <td class="td-right-title">High School</td>
              </tr>
              <tr>
                <td class="td-left-detail">
                  Mount Holly, NJ
                  <br></br>
                  2011-2015
                </td>
                <td class="td-right-detail">
                  <ul>
                    <li>Earned a 3.87 GPA and was rank 17 of 479</li>
                    <li>Led the Men's Swimming and Tennis teams as Captain</li>
                  </ul>
                </td>
              </tr>
              <tr class="spacer">
                <br></br>
              </tr>
              <tr>
                <td class="td-left-title">University of Delaware</td>
                <td class="td-right-title">Computer Science BS</td>
              </tr>
              <tr>
                <td class="td-left-detail">
                  Newark, DE
                  <br></br>
                  2015-2019
                </td>
                <td class="td-right-detail">
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
              <tr class="spacer">
                <br></br>
              </tr>
            </table>
            <div class="h3-primary">Experience</div>
            <table>
              <tr>
                <td class="td-left-title">General Dynamics</td>
                <td class="td-right-title">Software Engineer</td>
              </tr>
              <tr>
                <td class="td-left-detail">
                  Pittsburgh, PA
                  <br></br>
                  10/19-3/20
                </td>
                <td class="td-right-detail">
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
              <tr>
                <td class="td-left-title">Lockheed Martin</td>
                <td class="td-right-title">Software Engineering Intern (Jr/Sr)</td>
              </tr>
              <tr>
                <td class="td-left-detail">
                  Moorestown, NJ
                  <br></br>
                  06/18-08/18
                </td>
                <td class="td-right-detail">
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
              <tr>
                <td class="td-left-title">Lockheed Martin</td>
                <td class="td-right-title">Software Engineering Intern (Soph/Jr)</td>
              </tr>
              <tr>
                <td class="td-left-detail">
                  Moorestown, NJ
                  <br></br>
                  06/17-08/17
                </td>
                <td class="td-right-detail">
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
          </div>
          <div class="icon-tray">
            <a
              href="https://www.linkedin.com/in/jared-hawley-a6094112a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="linkedIn-icon-button">
                <img class="circle-icon-green" src={linkedInIcon}></img>
                Check me out on LinkedIn!
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
