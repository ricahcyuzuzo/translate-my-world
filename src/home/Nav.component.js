import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Route from "react-router-dom/Route";
import Dictionary from "./Dictionary.component";
import Translate from "./Translate.component";

class Nav extends Component {
  render() {
    return (
      <Router>
        <div className="navBar">
          <h2 className="logo">Translate My World</h2>
          <div className="navlinks">
            <NavLink className="nav-link" to="/">
              Translate
            </NavLink>
            <NavLink className="nav-link" to="/dictionary">
              Dictionary
            </NavLink>
          </div>
        </div>
        <Route path="/" exact component={Translate} />
        <Route path="/dictionary" exact component={Dictionary} />
      </Router>
    );
  }
}

export default Nav;
