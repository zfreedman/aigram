import React, { Component } from "react";

//class used to filter current matches
//  - based on name
class MatchSearch extends Component {
  render() {
    return (
      <div className="match_search">
        <input
          placeholder={"Search"}
          />
      </div>
    );
  }
}

export default MatchSearch;
