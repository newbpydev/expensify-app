import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

const NotFoundPage = () => (
  <h1>
    404! - <Link to="/">Go Home</Link>{" "}
  </h1>
);

export default NotFoundPage;

