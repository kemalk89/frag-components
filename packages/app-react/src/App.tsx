import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Projects from "./components/projects/projects";
import Timesheet from "./components/timesheet/timesheet";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="main-content">
          <Switch>
            <Route exact path="/">
              <Projects />
            </Route>
            <Route path="/timesheet">
              <Timesheet />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
