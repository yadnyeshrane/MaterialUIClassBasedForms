import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
export class UserPersonalDetails extends Component {
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
    const { values, handleChange } = this.props;
    console.log(this.props);
    return (
      <MuiThemeProvider>
        <>
          <AppBar title="Enter PerosnalDetails Details" />
          <TextField
            hintText="Enter your Occupation"
            floatingLabelText="Ocuupation"
            onChange={handleChange("occupation")}
            defaultValue={values.occupation}
          />
          <br />
          <TextField
            hintText="Enter your City"
            floatingLabelText="City"
            onChange={handleChange("city")}
            defaultValue={values.city}
          />
          <br />
          <TextField
            hintText="Enter your bio"
            floatingLabelText="bio"
            onChange={handleChange("bio")}
            defaultValue={values.bio}
          />
          <br />
          <RaisedButton
            label="COntinue"
            primary={true}
            onClick={this.continue}
          />
          <RaisedButton label="Back" primary={false} onClick={this.back} />
        </>
      </MuiThemeProvider>
    );
  }
}
