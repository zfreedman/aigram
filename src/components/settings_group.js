import React, { Component } from "react";

class SettingsGroup extends Component {
  render() {
    return (
      <div>
        {this.props.setting.name}
      </div>
    );
  }
}

export default SettingsGroup;
