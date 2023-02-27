import React from "react";
import "./style.css";
function Login() {
  return (
    <div className="main-card">
      <form className="box">
        <h1> Login </h1>
        <label for="username"> Username </label>
        <br />
        <input
          type="text"
          name="username"
          id="username"
          placeholder=" Enter Username"
        />
        <p>{}</p>
        <br />
        <br />
        <label for="password"> Password </label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder=" Enter password"
        />
        <p>{}</p>
        <br />
        <br />
        <button type="submit" value="Submit">
          {" "}
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
