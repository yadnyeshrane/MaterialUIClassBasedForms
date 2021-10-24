import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
export class UserDetails extends Component {
  state = {};

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    console.log(this.props);
    return (
      <MuiThemeProvider>
        <>
          <AppBar title="Enter user Details" />
          <TextField
            hintText="Enter your firts name"
            floatingLabelText="FIrtsName"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
          />
          <br />
          <TextField
            hintText="Enter your Last name"
            floatingLabelText="LastName"
            onChange={handleChange("LastName")}
            defaultValue={values.LastName}
          />
          <br />
          <TextField
            hintText="Enter your Email"
            floatingLabelText="EMails"
            onChange={handleChange("email")}
            defaultValue={values.email}
          />
          <br />
          <RaisedButton
            label="COntinue"
            primary={true}
            onClick={this.continue}
          />
        </>
      </MuiThemeProvider>
    );
  }
}
