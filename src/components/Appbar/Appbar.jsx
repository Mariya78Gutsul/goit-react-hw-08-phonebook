import React from "react";
import { connect } from "react-redux";

import Navigation from "../Navigation/Navigation";
import LoginMenu from "../LoginMenu/LoginMenu";
import UserMenu from "../UserMenu/UserMenu";
import authSelectors from "../../redux/auth/authSelectors";

import s from "./Appbar.module.css";

const Appbar = ({ isAuthenticated }) => {
  return (
    <div className={s.Appbar}>
      <Navigation />
      {!isAuthenticated ? <LoginMenu /> : <UserMenu />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Appbar);
