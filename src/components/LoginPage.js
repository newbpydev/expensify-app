import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export function LoginPage({startLogin}) {
  // console.log(props)
  return (
    <div>
      <h1>This is the LoginPage</h1>
      <button onClick={startLogin}>Login</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)






