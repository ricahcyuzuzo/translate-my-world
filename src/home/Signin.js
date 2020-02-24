import React, { Component } from "react";
import "./App.css";

class Signin extends Component {
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
          <svg
            width="175"
            height="172"
            viewBox="0 0 175 172"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M175 86C175 63.1914 165.781 41.3169 149.372 25.1888C132.962 9.06069 110.706 1.722e-06 87.5 0C64.2936 -1.722e-06 42.0376 9.06068 25.6282 25.1888C9.21873 41.3169 3.50408e-06 63.1914 0 86L87.5 86H175Z"
              fill="#5FBB9F"
            />
            <ellipse cx="87" cy="47" rx="43" ry="41" fill="#FFFEFE" />
          </svg>

          <form>
            <label className="label">Username</label>
            <input
              className="form-input"
              required
              type="email"
              ref="username"
            ></input>
            <label className="label">password</label>
            <input
              type="password"
              className="form-input"
              required
              ref="password"
            ></input>
            <button className="button">Sign In</button>
            <span className="formText">
              Don't have an account?{" "}
              <a href="/signup" className="signup">
                Sign Up
              </a>
            </span>
          </form>
        </div>
      </div>
    );
  }
}

export default Signin;
