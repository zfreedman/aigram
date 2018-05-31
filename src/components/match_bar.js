import React, { Component } from "react";
import { Glyphicon } from "react-bootstrap";

import MatchSearch from "./match_search";
import MatchList from "./match_list.js";
//class used to display all matches
//  - filter search Bar
//  - match list
class MatchBar extends Component {
  render() {
    return (
      <div className="match_bar">
        <h3>
          <div>
            <Glyphicon glyph="user" />
          </div>
          <div>
            ({this.props.matches.length})
          </div>
        </h3>
        <MatchSearch />
        <MatchList matches={this.props.matches}/>
      </div>
    );
  }
}

export default MatchBar;
