import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import { startLogout } from "../actions/auth";
import { connect } from "react-redux";
import { map } from "@firebase/util";

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Expensify</h1>
        </Link>
        <button className="button button--link" id="btn-logout" onClick={startLogout}>
          Logout
        </button>
      </div>
    </div>

    {/* <nav>
      <ul>
        <li>
          <Link
            // className={({ isActive }) => (isActive ? "is-active" : "")}
            to="/dashboard"
          >
            <h1>Expensify</h1>
          </Link>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "is-active" : "")}
            to="/create"
          >
            Create Expense
          </NavLink>
        </li>
        <li>
          <button id="btn-logout" onClick={startLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav> */}
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);
