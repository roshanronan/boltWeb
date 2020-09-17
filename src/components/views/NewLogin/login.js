import React from "react";
import "./login.css";
import { gql, useLazyQuery } from "@apollo/client";
import { client } from "./../../../index";
import Swal from "sweetalert2";

const LOGIN = gql`
  query Login($email: String!, $password: String!, $type: String) {
    Login(email: $email, password: $password, type: $type) {
      sxToken
      status
    }
  }
`;
let emailAgent = React.createRef();
let passwordAgent = React.createRef();
let emailAdmin = React.createRef();
let passwordAdmin = React.createRef();

const container = document.getElementsByClassName("container");

class login extends React.Component {
  state = {
    cls: "right-panel-active",
    AgentActive: true,
    LoginButtonDisabled: true,
  };

  checkValidation = (event) => {
    event.preventDefault();
    let email;
    let password;

    if (this.state.AgentActive) {
      email = emailAgent.current.value;
      password = passwordAgent.current.value;
      if (email != "" && password != "") {
        this.setState({ LoginButtonDisabled: false });
      } else {
        this.setState({ LoginButtonDisabled: true });
      }
    } else {
      email = emailAdmin.current.value;
      password = passwordAdmin.current.value;
      if (email != "" && password != "") {
        this.setState({ LoginButtonDisabled: false });
      } else {
        this.setState({ LoginButtonDisabled: true });
      }
    }

    console.log(
      "========email=======",
      email,
      "=======passwrod======",
      password
    );
  };

  runLoginQuery = async (event) => {
    event.preventDefault();
    let email;
    let password;
    let type;
    if (this.state.AgentActive) {
      email = emailAgent.current.value;
      password = passwordAgent.current.value;
      type = "agent";
    } else {
      email = emailAdmin.current.value;
      password = passwordAdmin.current.value;
      type = "admin";
    }

    console.log("=========Email=====", email, "=======Password===", password);

    let response = await client.query({
      query: LOGIN,
      variables: { email: email, password: password, type: type },
    });
    console.log("========Data=====", response);

    if (response.data.Login.sxToken === null) {
      Swal.fire({
        icon: "error",
        title: "Error !",
        text: response.data.Login.status,
      });

      
    } else if (type === "admin") {
      window.location = "/dashboard";
      localStorage.setItem("SessionToken",response.data.Login.sxToken)
    } else if (type === "agent") {
      window.location = "/form";
      localStorage.setItem("SessionToken",response.data.Login.sxToken)
    }
  };

  render() {
    return (
      <div class="loginContainer">
        <div className={"container " + this.state.cls} id="container">
          <div class="form-container sign-up-container">
            <form action="#">
              <h1 style={{ paddingBottom: "10px" }}> Agent LogIn</h1>

              {/* <span>or use your email for registration</span> */}
              <input
                type="email"
                ref={emailAgent}
                className="email"
                name="email"
                placeholder="Email"
                required
                style={{ width: "300px" }}
                onChange={(e) => {
                  this.checkValidation(e);
                }}
              />
              <input
                type="password"
                ref={passwordAgent}
                name="password"
                className="password"
                placeholder="Password"
                style={{ width: "300px" }}
                required
                onChange={(e) => {
                  this.checkValidation(e);
                }}
              />
              <a href="#">Forgot your password?</a>
              <button
                style={
                  this.state.LoginButtonDisabled
                    ? { background: "gray", border: "none" }
                    : { background: "black", border: "1px solid navy" }
                }
                onClick={(e) => {
                  this.runLoginQuery(e);
                }}
                disabled={this.state.LoginButtonDisabled}
              >
                Log In
              </button>
            </form>
          </div>
          <div class="form-container sign-in-container">
            <form action="#">
              <h1 style={{ paddingBottom: "10px" }}> Admin LogIn</h1>
              <input
                type="email"
                name="email"
                ref={emailAdmin}
                placeholder="Email"
                style={{ width: "300px" }}
                required
                onChange={(e) => {
                  this.checkValidation(e);
                }}
              />
              <input
                type="password"
                ref={passwordAdmin}
                name="password"
                placeholder="Password"
                style={{ width: "300px" }}
                required
                onChange={(e) => {
                  this.checkValidation(e);
                }}
              />
              <a href="#">Forgot your password?</a>
              <button
                style={
                  this.state.LoginButtonDisabled
                    ? { background: "gray", border: "none" }
                    : { background: "black", border: "1px solid navy" }
                }
                onClick={(e) => {
                  this.runLoginQuery(e);
                }}
                disabled={this.state.LoginButtonDisabled}
              >
                Login
              </button>
            </form>
          </div>
          <div class="overlay-container">
            <div class="overlay">
              <div class="overlay-panel overlay-left">
                <h1>Welcome Agent!</h1>
                <p>Click here for Admin portal</p>

                <button
                  class="ghost"
                  id="signIn"
                  onClick={() => {
                    this.setState({ cls: "", AgentActive: false });
                  }}
                >
                  Admin LogIn
                </button>
              </div>
              <div class="overlay-panel overlay-right">
                <h1>Hello, Admin</h1>
                <p>Click here for Agent portal </p>

                <button
                  class="ghost"
                  id="signUp"
                  onClick={() => {
                    this.setState({
                      cls: "right-panel-active",
                      AgentActive: true,
                    });
                  }}
                >
                  Agent LogIn
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <footer>
          <p>
            Created with <i class="fa fa-heart"></i> by
            <a target="_blank" href="https://florin-pop.com">
              Florin Pop
            </a>
            - Read how I created this and how you can join the challenge
            <a
              target="_blank"
              href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/"
            >
              here
            </a>
            .
          </p>
        </footer> */}
      </div>
    );
  }
}

export default login;
