import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import { startLogout } from "../actions/auth";
import { connect } from "react-redux";
import { map } from "@firebase/util";

export const Header = ({ startLogout }) => (
  <header>
    <h1>Expensify</h1>

    <nav>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "is-active" : "")}
            to="/dashboard"
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "is-active" : "")}
            to="create"
          >
            Create Expense
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "is-active" : "")}
            to="help"
          >
            Help
          </NavLink>
        </li>
        <li>
          <button onClick={startLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);
