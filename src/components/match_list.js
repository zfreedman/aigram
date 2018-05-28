import React, { Component } from "react";
import MatchListItem from "./match_list_item";

class MatchList extends Component {
  render() {
    return (
      <div>
        Match List
        <ul className="match_list">
          {
            // render each match as a MatchListItem
            this.props.matches.map((match) => {
              // change key to user/match ID later
              return <MatchListItem key={match.name} match={match} />;
            })
          }
        </ul>
      </div>
    );
  }
}

export default MatchList;
