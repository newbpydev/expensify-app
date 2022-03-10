import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Header from "../components/Header";
import LoginPage from "../components/LoginPage";

//! Route V6 uses this to properly use Private routes
export const PublicRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <div>
      <LoginPage />
      {/* {children} */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: !!state.auth.uid,
  };
};

export default connect(mapStateToProps)(PublicRoute);
