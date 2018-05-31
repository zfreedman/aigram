import React, { Component } from "react";
import { Glyphicon } from "react-bootstrap";
//class used to display settings options
//  - match distance
//  - age preference
//  - gender preference
//  - personal profile information
class SettingsBar extends Component {
  render() {
    return (
      <div className="settings_bar">
        <h3>
          <Glyphicon glyph="cog" />
        </h3>
      </div>
    );
  }
}

export default SettingsBar
