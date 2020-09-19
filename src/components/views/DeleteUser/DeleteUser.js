import React, { Component } from "react";
import "./../RegisterAgent/Register.css";
import { gql } from "@apollo/client";
import { client } from "../../../index";
import Swal from "sweetalert2";

const DELETE_A_USER = gql`
  mutation DeleteUser($name: String) {
    DeleteUser(name: $name)
  }
`;
const AllUser = gql`
  query {
    AllUser {
      name
      email
    }
  }
`;

let name = React.createRef();

class DeleteUser extends Component {
  state = {
    optionsData: undefined,
    selectedTeamId: undefined,
  };

  apiHandler = async (e) => {
    e.preventDefault();
    let response;
    response = await client.mutate({
      mutation: DELETE_A_USER,
      variables: {
        name: name.current.value,
      },
    });
    console.log("----data submitted ---", response);
    response = response.data.DeleteUser;

    if (response == "success") {
      Swal.fire({
        title: "User Deleted!",
        text: "Successfully",
        icon: "success",
      }).then((result) => {
        if (result.value) {
          window.location = "/dashboard";
        }
      });
    } else {
      Swal.fire({
        title: "Error !",
        text: response,
        icon: "error",
      }).then((result) => {
        if (result.value) {
          window.location = "/dashboard";
        }
      });
    }
    console.log("response check when submit", response);
  };

  componentDidMount = async () => {
    let res = await client.query({
      query: AllUser,
    });
    res = res.data.AllUser;
    console.log("-----data---", res);
    this.setState({ optionsData: res });
  };

  render() {
    return (
      <form class="registerForm">
        <div class="registerContainer">
          <h1>Delete a User</h1>
          <p>Please fill in this form to delete a Userr.</p>
          <hr />
          <label for="name" style={{ float: "left" }}>
            User Name
          </label>
          <select
            name="name"
            required
            ref={name}
            onChange={(event) => {
              console.log("--running ", event.currentTarget.value);
              this.setState({ selectedTeamId: event.currentTarget.value });
              console.log("selectd team id", this.selectedTeamId);
            }}
          >
            <option value="">Select a Team</option>
            {this.state.optionsData != undefined
              ? this.state.optionsData.map((item) => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  );
                })
              : ""}
          </select>

          <div class="clearfix">
            <button type="button" class="cancelbtn">
              Cancel
            </button>
            <button
              type="submit"
              class="signupbtn"
              onClick={(e) => {
                this.apiHandler(e);
              }}
            >
              Delete Team
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default DeleteUser;
