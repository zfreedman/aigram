import React, { Component } from "react";
import { Glyphicon } from "react-bootstrap";

import MatchList from "./match_list.js";
import SearchComponent from "./search_component";
//class used to display all matches
//  - filter search Bar
//  - match list
class MatchBar extends Component {
  render() {
    return (
      <div className="app_col_inner">
        <h3>
          <div>
            <Glyphicon glyph="user" />
          </div>
          <div>
            ({this.props.matches.length})
          </div>
        </h3>
        <SearchComponent />
        <MatchList matches={this.props.matches} />
      </div>
    );
  }
}

export default MatchBar;
