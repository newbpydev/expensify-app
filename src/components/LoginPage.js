import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export function LoginPage({startLogin}) {
  // console.log(props)
  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Expensify</h1>
        <p>It's time to get your expenses under control.</p>
        <button className="button" id="btn-login" onClick={startLogin}>
          Login with Google
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)






