import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Projects from "./components/projects/projects";
import Timesheet from "./components/timesheet/timesheet";

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Projects />
          </Route>
          <Route path="/timesheet">
            <Timesheet />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
