import React, { Component } from "react";
import "../../App.css";
import "../SignUp.css"


import axios from "axios";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeState = this.onChangeState.bind(this);
    this.onChangeZip = this.onChangeZip.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      email: "",
      type: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      phone: "",
    };
  }

  onChangeUserName(e) {
    this.setState({ username: e.target.value });
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangeType(e) {
    this.setState({ type: e.target.value });
  }

  onChangeAddress(e) {
    this.setState({ address: e.target.value });
  }

  onChangeCity(e) {
    this.setState({ city: e.target.value });
  }

  onChangeState(e) {
    this.setState({ state: e.target.value });
  }

  onChangeZip(e) {
    this.setState({ zip: e.target.value });
  }

  onChangePhone(e) {
    this.setState({ phone: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const userObject = {
      username: this.state.username,
      email: this.state.email,
      type: this.state.type,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      phone: this.state.phone,
    };

    axios
      .post("http://localhost:4000/users/create", userObject)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({
      username: "",
      email: "",
      type: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      phone: "",
    });
  }

  render() {
    return (
      <div className="wrapper">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Business/User Name </label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.onChangeUserName}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              value={this.state.email}
              onChange={this.onChangeEmail}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Business Type</label>
            <input
              type="text"
              value={this.state.type}
              onChange={this.onChangeType}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              value={this.state.address}
              onChange={this.onChangeAddress}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              value={this.state.city}
              onChange={this.onChangeCity}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>State</label>
            <input
              type="text"
              value={this.state.state}
              onChange={this.onChangeState}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Zip</label>
            <input
              type="text"
              value={this.state.zip}
              onChange={this.onChangeZip}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              value={this.state.phone}
              onChange={this.onChangePhone}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create User"
              className="btn btn-success btn-block"
            />
          </div>
        </form>
      </div>
    );
  }
}
