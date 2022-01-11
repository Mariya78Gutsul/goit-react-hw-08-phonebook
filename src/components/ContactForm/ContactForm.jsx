import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getContacts } from "../../redux/contacts/contactsSelector";
import * as contactsOperations from "../../redux/contacts/contactsOperations";

import s from "./ContactForm.module.css";

class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    number: "",
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name } = this.state;
    const { contacts, onSubmit } = this.props;
    const sameContact = contacts.find(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );
    if (sameContact) {
      alert(`${name} Already exist`);
      this.reset();
      return;
    }
    onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label} htmlFor="name">
          Name
        </label>
        <input
          className={s.input}
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          placeholder="Name"
          autoComplete="off"
          autoFocus
        />

        <label className={s.label} htmlFor="number">
          Number
        </label>
        <input
          id="number"
          className={s.input}
          type="text"
          name="number"
          value={number}
          onChange={this.handleChange}
          placeholder="Phone number"
          autoComplete="off"
        />

        <button className={s.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
const mapStateToProps = (state) => ({
  contacts: getContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: ({ name, number }) =>
    dispatch(contactsOperations.addContact({ name, number })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
