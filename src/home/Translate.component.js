import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class Translate extends Component {
  state = {
    translation: null,
    loading: false,
    value: ""
  };

  translate = async (fromLang, toLang, text) => {
    this.setState({ loading: true });
    const link = `https://systran-systran-platform-for-language-processing-v1.p.rapidapi.com/translation/text/translate?source=${fromLang}&target=${toLang}&input=${text}`;
    const headers = {
      "X-RapidAPI-Host":
        "systran-systran-platform-for-language-processing-v1.p.rapidapi.com",
      "X-RapidAPI-Key": "cf8c840b45mshf1002d7a2752fdap1b5519jsneb49ee70221b"
    };
    const res = await axios.get(link, { headers: headers });

    const translation = await res.data.outputs[0].output;
    this.setState({ translation, loading: false });
  };

  getText = () => {
    const fromLang = this.refs.fromLanguage.value;
    const toLang = this.refs.toLanguage.value;
    const text = this.refs.textBefore.value;
    this.translate(fromLang, toLang, text);
    this.setState({ value: text });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h1 className="translateText">Translate</h1>
        <div className="sect1">
          <div className="formGroup">
            <label className="label1">From:</label>
            <p></p>
            <select className="select-form" ref="fromLanguage">
              <option disabled>Select a Language</option>
              <option selected value="en">
                English
              </option>
              <option value="fr">French</option>
              <option value="pt">Portugal</option>
              <option value="zh">China</option>
            </select>
          </div>
          <div className="formGroup">
            <label className="label1">To:</label>
            <p></p>
            <select className="select-form" ref="toLanguage">
              <option selected disabled>
                Select a Language
              </option>
              <option value="en">English</option>
              <option selected value="fr">
                French
              </option>
              <option value="pt">Portugal</option>
              <option value="zh">China</option>
            </select>
          </div>
        </div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="sect2">
            <input className="mainTextbox" ref="textBefore"></input>
            <button
              className="mainButton"
              id="mainButton"
              onClick={this.getText.bind(this)}
            >
              Translate
            </button>
          </div>
        </form>
        <span className="translate">Translation: </span>
        <span id="result">{this.state.translation}</span>
      </div>
    );
  }
}

export default Translate;
