import React, { Component } from "react";

import SettingsGroup from "./settings_group";

class SettingsList extends Component {
  render() {
    return (
      <div>
        {
          this.props.settings.map((setting) => {
            return <SettingsGroup key={setting.name} cog={setting} />;
          })
        }
      </div>
    );
  }
}

export default SettingsList;
