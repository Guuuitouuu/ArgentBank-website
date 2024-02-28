import React from "react";
import LoginLogic from "../Services/LoginLogic";
import "./Login.css"

function Login() {
  const { handleSubmit, usernameRef, passwordRef, Error } = LoginLogic();
  return (
    <main className="main bg-dark feu">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input ref={usernameRef} type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input ref={passwordRef} type="password" id="password" />
            {Error ? <span style={{color: "red"}}>Les Identifiants sont incorrects</span> : null}
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
}

export default Login;
