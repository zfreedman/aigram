import React, { Component } from "react";

class MatchList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      matches: [
        {name: "Alice", dist: "5 mi"},
        {name: "Brittney", dist: "11 mi"},
        {name: "Candace", dist: "8 mi"}
      ]
    }
  }

  render() {
    return (
      <div>
        Match List
      </div>
    );
  }
}

export default MatchList;
