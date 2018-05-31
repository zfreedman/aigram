import React, { Component } from "react";
import { Glyphicon } from "react-bootstrap";

//class used to filter current matches
//  - based on name
class MatchSearch extends Component {
  constructor(props) {
    super(props);

    this.state = { filter: "" };
  }

  render() {
    return (
      <div className="match_search">
        <Glyphicon glyph="search" />
        <input
          placeholder="Search"
          value={this.state.filter}
          onChange = {event => this.setState({ filter: event.target.value })}
          />
      </div>
    );
  }
}

export default MatchSearch;
