import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assests/logo.png";

export const LandingPage = () => {
  return (
    <div className="flex">
      <div className="imgBox">
        <img src={logo} alt=""></img>
      </div>
      <h4 className="text-white">Welcome to Sumit Gpt</h4>
      <h5 className="text-white">Login with your account to continue</h5>
      <div className="d-flex gap-2">
        <Link to="/signin">
          <Button variant="success"> Login</Button>
        </Link>
        <Link to="signup">
          <Button variant="success"> SignUp</Button>
        </Link>
      </div>
    </div>
  );
};
