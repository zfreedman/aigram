import React, { Component } from 'react';
import { Grid, Row, Col} from "react-bootstrap";

//custom components
import MatchBar from "./match_bar";
import SettingsBar from "./settings_bar";
import InfoBox from "./info_box";

export default class App extends Component {
  /*render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col>
              <MatchBar />
            </Col>
            <Col>
              <SettingsBar />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }*/
  render() {
    return (
      <div>
          <Grid>
            <Row className="show-grid">
              <Col md={2}>
                <MatchBar />
              </Col>
              <Col md={8}>
                <InfoBox />
              </Col>
              <Col md={2}>
                <SettingsBar />
              </Col>
            </Row>
          </Grid>
      </div>
    );
  }
}
