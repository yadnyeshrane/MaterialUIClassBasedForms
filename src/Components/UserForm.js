import React, { Component } from "react";
import { UserDetails } from "./UserDetails";
import { UserPersonalDetails } from "./UserPersonalDetails";
import { Confirm } from "../Components/Confirm";
export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    LastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: ""
  };
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };
  handleChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value
    });
  };
  render() {
    const { step } = this.state;
    const { firstName, LastName, email, occupation, city, bio } = this.state;

    const values = { firstName, LastName, email, occupation, city, bio };
    switch (step) {
      case 1:
        return (
          <UserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 2:
        return (
          <UserPersonalDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            prevStep={this.prevStep}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            values={values}
            prevStep={this.prevStep}
          />
        );
      case 4:
        return <h1>Sucess </h1>;
    }
  }
}
