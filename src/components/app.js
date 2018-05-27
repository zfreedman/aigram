import React, { Component } from 'react';
import MatchBar from "./match_bar";
import SettingsBar from "./settings_bar";

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <MatchBar />
        <SettingsBar />
      </div>
    );
  }
}
