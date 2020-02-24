import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class Dictionary extends Component {
  state = {
    definition: null,
    value: ""
  };

  defini = async text => {
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v1/entries/en/${text}`
    );
    const data = await res.json();
    console.log(data);
  };

  getText = () => {
    const text = this.refs.textBefore.value;
    this.defini(text);
    this.setState({ value: text });
  };

  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <h1 className="translateText">Dictionary</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="sect2">
            <input className="mainTextbox" ref="textBefore"></input>
            <button
              className="mainButton"
              id="mainButton"
              onClick={this.getText.bind(this)}
            >
              Search
            </button>
          </div>
        </form>
        <span className="translate">Meaning: </span>
        <span id="result"></span>
      </div>
    );
  }
}

export default Dictionary;
