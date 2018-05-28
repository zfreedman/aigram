import React, { Component } from "react";

class MatchListItem extends Component {
  render() {
    return (
      <li>{this.props.match.name}</li>
    );
  }
}

export default MatchListItem;
