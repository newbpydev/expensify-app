//* Higher order component (HOC) - A component (HOC) that renders another
//* component
//! Reuse code
//! Render Hijacking
//! Prop manipulation
//! Abstract State

import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      {console.log("I am in the admin before the wrapped")}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedContent) => {
  return (props) => (
    <div>
      {props.isAuthendticated ? (
        <WrappedContent {...props} />
      ) : (
        <p>Please log in to view the info.</p>
      )}
    </div>
  );
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info)

ReactDOM.render(
  <AuthInfo isAuthendticated={false} info="This is the detail" />,
  document.getElementById("root")
);
// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="This is the detail" />,
//   document.getElementById("root")
// );
