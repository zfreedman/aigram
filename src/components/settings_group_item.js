import React, { Component } from "react";

import { INPUT_CHECKBOX, INPUT_RADIO, INPUT_SLIDER } from "./settings_types";

function Slider(props) { 
  return (
    <div className="input_slide_field">
    <input
    className="input_slide_field_field"
    />
    <input
    className="input_slide_field_slide"
    type="range"
    min="1"
    max="100"
    defaultValue="50" />
    </div>
  );
}

class SettingsGroupItem extends Component {
  render() {
    const input_type = this.props.item.type;
    const input_comp = input_type === INPUT_SLIDER ?
      <Slider /> : <h2>Bye</h2>;
    return (
      <div>
        {this.props.item.name}
        {input_comp}
      </div>
    );
  }
}

export default SettingsGroupItem;
