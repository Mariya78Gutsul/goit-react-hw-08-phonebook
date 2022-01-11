import React from "react";
import { connect } from "react-redux";

import authSelectors from "../../redux/auth/authSelectors";
import authOperations from "../../redux/auth/authOperations";

import s from "./UserMenu.module.css";

const UserMenu = ({ userName, onLogout }) => {
  return (
    <div className={s.container}>
      <span className={s.avatar}>{userName.slice(0, 1)}</span>
      <span className={s.name}>{userName}</span>
      <button className={s.button} type="button" onClick={onLogout}>
        Log Out
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userName: authSelectors.getUserName(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(authOperations.logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
