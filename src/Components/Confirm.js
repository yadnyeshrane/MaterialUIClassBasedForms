import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";
export class Confirm extends Component {
  state = {};

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values } = this.props;
    console.log(this.props);
    return (
      <MuiThemeProvider>
        <>
          <AppBar title="Confirm User Data" />
          <List>
            <ListItem
              primaryText="Firstname"
              secondaryText={values.firstName}
            />
            <ListItem primaryText="Lastname" secondaryText={values.LastName} />
            <ListItem primaryText="Email" secondaryText={values.email} />
            <ListItem
              primaryText="Occupation"
              secondaryText={values.occupation}
            />
            <ListItem primaryText="City" secondaryText={values.city} />
            <ListItem primaryText="Bio" secondaryText={values.bio} />
          </List>
          <RaisedButton
            label="COntinue and confimr"
            primary={true}
            onClick={this.continue}
          />
          <RaisedButton label="Back" primary={false} onClick={this.back} />
        </>
      </MuiThemeProvider>
    );
  }
}
