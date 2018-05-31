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
        {name: "Alice", dist: "5 mi", img: "https://pbs.twimg.com/profile_images/739247958340698114/fVKY9fOv.jpg"},
        {name: "Brittney", dist: "11 mi", img: "https://pbs.twimg.com/profile_images/803217914337828864/99oo37KN_400x400.jpg"},
        {name: "Candace", dist: "8 mi", img: "http://dailypost.ng/wp-content/uploads/2018/01/Ugochi-Ihezue.jpg"},
        {name: "Denise", dist: "42 mi", img: "http://www.fotothing.com/photos/1b3/1b3a599726df89c8a665b2993591459e.jpg"},
        {name: "Emily", dist: "300 mi", img: "https://ae01.alicdn.com/kf/HTB199DpXTZRMeJjSspkq6xGpXXaU/New-Women-Bras-Girl-Racerback-Bra-Seamless-Wireless-Underwear-Bra-Best-XM.jpg"},
        {name: "Fran", dist: "107 mi", img: "https://images.pexels.com/photos/654690/pexels-photo-654690.jpeg?auto=compress&cs=tinysrgb&h=350"},
        {name: "Gabby", dist: "2921 mi", img: "https://i2.wp.com/www.usmagazine.com/wp-content/uploads/2018/05/shayanna-jenkins-hernandez.jpg?crop=236px%2C0px%2C1565px%2C1564px&resize=400%2C400&ssl=1"},
        {name: "Heather", dist: "22 mi", img: "https://www.dunkindonuts.com/content/dam/dd/img/heros-lifestyle/standard/hero-perks-lp-surprisedgirl-640x640.jpg"}
      ],
      //as of right now settings should be passed down to SettingsList
      settings: [
        {
          name: "Gender",
          arr: [
            {
              name: "Want"
            },
            {
              name: "Am"
            }
          ]
        },
        {
          name: "Location",
          arr: [
            {
              name: "Want"
            }
          ]
        }
      ]
    }
  }

  render() {
    //const show_grid = "show-grid ";
    const show_grid = "";

    return (
      <div>
        <Grid>
          <Row className={`${show_grid} row_no_padding`}>
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
              <SettingsBar settings={this.state.settings} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
