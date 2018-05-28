import React, { Component } from 'react';
import { Grid, Row, Col} from "react-bootstrap";

//custom components
import MatchBar from "./match_bar";
import SettingsBar from "./settings_bar";
import InfoBox from "./info_box";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //as of right now matches should be passed down to MatchList
      matches: [
        {name: "Alice", dist: "5 mi"},
        {name: "Brittney", dist: "11 mi"},
        {name: "Candace", dist: "8 mi"}
      ]
    }
  }

  render() {
    //const show_grid = "show-grid ";
    const show_grid = "";

    return (
      <div>
          <Grid>
            <Row className={`${show_grid}`}>
              <Col md={2} className="match_bar app_col">
                {
                  //passing props from App to MatchBar ...
                  //MatchBar should pass to MatchList
                }
                <MatchBar matches={this.state.matches} />
              </Col>
              <Col md={8} className="info_box app_col">
                <InfoBox />
              </Col>
              <Col md={2} className="settings_bar app_col">
                <SettingsBar />
              </Col>
            </Row>
          </Grid>
      </div>
    );
  }
}
