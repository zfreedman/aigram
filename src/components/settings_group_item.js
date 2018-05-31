import React, { Component } from "react";


class SettingsGroupItem extends Component {
  render() {
    return (
      <div>
        Group: {this.props.group},
        Name: {this.props.item.name},
        Values: None
      </div>
    );
  }
}

export default SettingsGroupItem;
