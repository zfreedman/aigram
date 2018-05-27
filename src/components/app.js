import React, { Component } from 'react';
import { Grid, Row, Col} from "react-bootstrap";

//custom components
import MatchBar from "./match_bar";
import SettingsBar from "./settings_bar";
import InfoBox from "./info_box";

export default class App extends Component {
  render() {
    return (
      <div>
          <Grid>
            <Row className="show-grid">
              <Col md={2} className="match_bar">
                <MatchBar />
              </Col>
              <Col md={8} className="info_box">
                <InfoBox />
              </Col>
              <Col md={2} className="settings_bar">
                <SettingsBar />
              </Col>
            </Row>
          </Grid>
      </div>
    );
  }
}
