import React, { Component } from "react";

class SettingsGroupItem extends Component {
  render() {
    return (
      <div>
        {this.props.item.name}
      </div>
    );
  }
}

export default SettingsGroupItem;
