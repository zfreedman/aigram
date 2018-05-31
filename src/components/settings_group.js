import React, { Component } from "react";

import SettingsGroupItem from "./settings_group_item";

class SettingsGroup extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.setting.name}</h4>
        {
          this.props.setting.arr.map((item) => {
            return <SettingsGroupItem
              key={item.name}
              item={item}
              group={this.props.setting.name}
              />;
          })
        }
      </div>
    );
  }
}

export default SettingsGroup;
