import React from "react";
import { Button, Form } from "react-bootstrap";
import "./singnup.css";
import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <div>
      <div class="form-box">
        <Form class="form">
          <span class="title">Sign up</span>
          <span class="subtitle">Create a free account with your email.</span>
          <div class="form-container">
            <input type="text" class="input" placeholder="Full Name" />
            <input type="email" class="input" placeholder="Email" />
            <input type="password" class="input" placeholder="Password" />
          </div>
          <Button>Sign up</Button>
        </Form>
        <div class="form-section">
          <p>
            Have an account?{" "}
            <Link to="signin" className="nav-link">
              Log in
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
