import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Expensify</h1>

    <nav>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "is-active" : "")}
            to="/"
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
        {/* <li>
          <NavLink
            className={({ isActive }) => (isActive ? "is-active" : "")}
            to="edit"
          >
            Edit Expense
          </NavLink>
        </li> */}
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "is-active" : "")}
            to="help"
          >
            Help
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);


export default Header;