import React, { Component } from "react";
import { connect } from "react-redux";

import authOperations from "../../redux/auth/authOperations";

import s from "./Login.module.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  onChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <h2 className={s.heading}>Log in</h2>
        <label className={s.label}>
          Email
          <input
            className={s.input}
            type="email"
            name="email"
            autoComplete="off"
            placeholder="Enter your e-mail"
            onChange={this.onChange}
          />
        </label>
        <label className={s.label}>
          Password
          <input
            className={s.input}
            type="password"
            name="password"
            autoComplete="off"
            placeholder="Enter your password"
            onChange={this.onChange}
          />
        </label>
        <button type="submit" className={s.button}>
          Sign in
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (state) => dispatch(authOperations.login(state)),
});

export default connect(null, mapDispatchToProps)(Login);
