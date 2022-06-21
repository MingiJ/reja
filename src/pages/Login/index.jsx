import React from "react";
import "./styles.css";

const Login = () => {
  return (
    <form action="" method="post">
      <input
        label="email"
        placeholder="e.g. name@example.com"
        type="text"
        info="Type your email."
      />
      <br />

      <input
        label="password"
        placeholder="e.g. t0p_s3cr3t"
        type="password"
        info="Type your password."
      />
       <button>
        Login
        </button>
        <p>Don't have an account?Signup</p>
    </form>
   
  );
};

export default Login;
