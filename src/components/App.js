import React, { Component } from "react";
import Main from "./main";
import AboutPage from "./about-page";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./scrollToTop.jsx";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Router>
          <ScrollToTop />
          <div>
            <Switch>
              <Route path="/" exact component={Main} />

              <Route path="/about" component={AboutPage} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
