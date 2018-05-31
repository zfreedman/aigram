import React, { Component } from "react";

import SettingsGroup from "./settings_group";

class SettingsList extends Component {
  render() {
    return (
      <div>
        {
          this.props.settings.map((cog) => {
            return <SettingsGroup key={cog.name} cog={cog} />;
          })
        }
      </div>
    );
  }
}

export default SettingsList;
