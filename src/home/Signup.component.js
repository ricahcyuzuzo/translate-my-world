import React, { Component } from "react";
import "./App.css";

class Signup extends Component {
  state = {
    names: "",
    username: "",
    password: ""
  };

  handleChangenames = e => {
    this.setState({ names: e.target.value });
  };
  handleChangeusername = e => {
    this.setState({ username: e.target.value });
  };
  handleChangepassword = e => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = () => {
    const { names, username, password } = this.state;
    localStorage.setItem("names", names);
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  };
  render() {
    return (
      <div className="while">
        <div className="homeText">
          <h1>Translate My World</h1>
          <p>
            The most important thing in the world is communication, and the
            languages are the key. We have different languages and culture.
            Let's Connect the world together with Translate My World{" "}
          </p>
        </div>
        <div className="sign in">
          <h2 className="logo h">Sign Up</h2>

          <form onSubmit={this.handleSubmit.bind(this)} action="/">
            <label className="label">Full names</label>
            <input
              type="text"
              minLength="3"
              className="form-input"
              value={this.state.names}
              onChange={this.handleChangenames.bind(this)}
              required
            ></input>
            <label className="label">Username</label>
            <input
              type="email"
              value={this.state.username}
              className="form-input"
              onChange={this.handleChangeusername.bind(this)}
              required
            ></input>
            <label className="label">password</label>
            <input
              type="password"
              value={this.state.password}
              className="form-input"
              onChange={this.handleChangepassword.bind(this)}
              required
            ></input>
            <button className="button">Sign Up</button>
            <span className="formText"></span>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
