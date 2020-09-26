import React from "react";
import "./login.css";
import { gql, useLazyQuery } from "@apollo/client";
import { client } from "../../../index";
import Swal from "sweetalert2";

const LOGIN = gql`
  query Login($email: String!, $password: String!, $type: String) {
    Login(email: $email, password: $password, type: $type) {
      sxToken
      status
      type
      teamName
    }
  }
`;
let emailAgent = React.createRef();
let passwordAgent = React.createRef();
let emailAdmin = React.createRef();
let passwordAdmin = React.createRef();
let mob_emailAgent = React.createRef();
let mob_passwordAgent = React.createRef();
let mob_emailAdmin = React.createRef();
let mob_passwordAdmin = React.createRef();

const container = document.getElementsByClassName("container");

class login extends React.Component {
  state = {
    cls: "right-panel-active",
    AgentActive: true,
    LoginButtonDisabled: true,
    showAgent: true,
  };

  mob_checkValidation = (event) => {
    event.preventDefault();
    let email;
    let password;

    if (this.state.showAgent) {
      email = mob_emailAgent.current.value;
      password = mob_passwordAgent.current.value;
      if (email != "" && password != "") {
        this.setState({ LoginButtonDisabled: false });
      } else {
        this.setState({ LoginButtonDisabled: true });
      }
    } else {
      email = mob_emailAdmin.current.value;
      password = mob_passwordAdmin.current.value;
      if (email != "" && password != "") {
        this.setState({ LoginButtonDisabled: false });
      } else {
        this.setState({ LoginButtonDisabled: true });
      }
    }

    console.log(
      "========emailValidation=======",
      email,
      "=======passwrodValidation======",
      password,
      "agent state",
      emailAgent.current.value
    );
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
      "========emailValidation=======",
      email,
      "=======passwrodValidation======",
      password,
      "agent state",
      emailAgent.current.value
    );
  };

  mob_runLoginQuery = async (event) => {
    event.preventDefault();
    let email;
    let password;
    let type;
    if (this.state.showAgent) {
      email = mob_emailAgent.current.value;
      password = mob_passwordAgent.current.value;
      // type = "agent";
    } else {
      email = mob_emailAdmin.current.value;
      password = mob_passwordAdmin.current.value;
      type = "admin";
    }

    console.log("=========Email=====", email, "=======Password===", password);

    let response = await client.query({
      query: LOGIN,
      variables: { email: email, password: password, type: type },
    });
    console.log("======== Login Respose Data=====", response);

    if (response.data.Login.sxToken === null) {
      Swal.fire({
        icon: "error",
        title: "Error !",
        text: response.data.Login.status,
      });
    } else if (response.data.Login.type === "admin") {
      window.location = "/dashboard";
      localStorage.setItem("SessionToken", response.data.Login.sxToken);
    } else if (response.data.Login.type === "agent") {
      window.location = "/form";
      localStorage.setItem("SessionToken", response.data.Login.sxToken);
    } else if (response.data.Login.type === "manager") {
      window.location = "/teammanagerDashboard";
      localStorage.setItem("SessionToken", response.data.Login.sxToken);
    }
  };

  runLoginQuery = async (event) => {
    event.preventDefault();
    let email;
    let password;
    let type;
    if (this.state.AgentActive) {
      email = emailAgent.current.value;
      password = passwordAgent.current.value;
      // type = "agent";
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
    console.log("======== Login Respose Data=====", response);

    if (response.data.Login.sxToken === null) {
      Swal.fire({
        icon: "error",
        title: "Error !",
        text: response.data.Login.status,
      });
    } else if (response.data.Login.type === "admin") {
      window.location = "/dashboard";
      localStorage.setItem("SessionToken", response.data.Login.sxToken);
    } else if (response.data.Login.type === "agent") {
      window.location = "/form";
      localStorage.setItem("SessionToken", response.data.Login.sxToken);
    } else if (response.data.Login.type === "manager") {
      window.location = "/teammanagerDashboard";
      localStorage.setItem("SessionToken", response.data.Login.sxToken);
      localStorage.setItem("TeamManagerTeam",response.data.Login.teamName)
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
              {/* <a href="#">Forgot your password?</a> */}
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
              {/* <a href="#">Forgot your password?</a> */}
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

        <div className="qwerty">
          <select
            onChange={(e) => {
              e.preventDefault();
              if (e.target.value == "Agent") {
                this.setState({ showAgent: true });
              } else {
                this.setState({ showAgent: false });
              }
            }}
          >
            <option>Agent</option>
            <option>Admin</option>
          </select>
          <form
            style={
              this.state.showAgent ? { display: "block" } : { display: "none" }
            }
            action="#"
          >
            <h1 style={{ paddingBottom: "10px" }}> Agent LogIn</h1>

            {/* <span>or use your email for registration</span> */}
            <input
              type="email"
              ref={mob_emailAgent}
              className="email"
              name="email"
              placeholder="Email"
              required
              style={{ width: "300px" }}
              onChange={(e) => {
                this.mob_checkValidation(e);
              }}
            />
            <input
              type="password"
              ref={mob_passwordAgent}
              name="password"
              className="password"
              placeholder="Password"
              style={{ width: "300px" }}
              required
              onChange={(e) => {
                this.mob_checkValidation(e);
              }}
            />
            {/* <a href="#">Forgot your password?</a> */}
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

          <form
            style={
              this.state.showAgent ? { display: "none" } : { display: "block" }
            }
            action="#"
          >
            <h1 style={{ paddingBottom: "10px" }}> Admin LogIn</h1>
            <input
              type="email"
              name="email"
              ref={mob_emailAdmin}
              placeholder="Email"
              style={{ width: "300px" }}
              required
              onChange={(e) => {
                this.mob_checkValidation(e);
              }}
            />
            <input
              type="password"
              ref={mob_passwordAdmin}
              name="password"
              placeholder="Password"
              style={{ width: "300px" }}
              required
              onChange={(e) => {
                this.mob_checkValidation(e);
              }}
            />
            {/* <a href="#">Forgot your password?</a> */}
            <button
              style={
                this.state.LoginButtonDisabled
                  ? { background: "gray", border: "none" }
                  : { background: "black", border: "1px solid navy" }
              }
              onClick={(e) => {
                this.mob_runLoginQuery(e);
              }}
              disabled={this.state.LoginButtonDisabled}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default login;
