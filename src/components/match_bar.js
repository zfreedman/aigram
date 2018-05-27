import React, { Component } from "react";

import MatchSearch from "./match_search";
//class used to display all matches
//  - filter search Bar
//  - match list
class MatchBar extends Component {
  render() {
    return (
      <div className="match_bar">
        <h3>Matches</h3>
        <MatchSearch />
      </div>
    );
  }
}

export default MatchBar;
