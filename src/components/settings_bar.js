import React, { Component } from "react";
import { Glyphicon } from "react-bootstrap";

import SearchComponent from "./search_component";
import SettingsList from "./settings_list";
//class used to display settings options
//  - match distance
//  - age preference
//  - gender preference
//  - personal profile information
class SettingsBar extends Component {
  render() {
    return (
      <div className="app_col_inner">
        <h3>
          <div>
            <Glyphicon glyph="cog" />
          </div>
        </h3>
        <SearchComponent />
        <SettingsList settings={this.props.settings} />
      </div>
    );
  }
}

export default SettingsBar
