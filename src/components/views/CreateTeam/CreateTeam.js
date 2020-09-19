import React, { Component } from "react";
import "./../RegisterAgent/Register.css";
import { gql } from "@apollo/client";
import { client } from "../../../index";
import Swal from "sweetalert2";

const CREATE_NEW_TEAM = gql`
  mutation CreateTeam($teamName: String) {
    CreateTeam(teamName: $teamName)
  }
`;

let teamName = React.createRef();

class CreateTeam extends Component {
  state = {
    optionsData: undefined,
    selectedTeamId: undefined,
  };

  apiHandler = async (e) => {
    e.preventDefault();
    let response;
    response = await client.mutate({
      mutation: CREATE_NEW_TEAM,
      variables: {
        teamName: teamName.current.value,
      },
    });
    console.log("----data submitted ---", response);
    response = response.data.CreateTeam;

    if (response == "success") {
      Swal.fire({
        title: "Team Created!",
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
          window.location = "/";
        }
      });
    }
    console.log("response check when submit", response);
  };

  componentDidMount = async () => {
    // let res = await client.query({
    //   query: AllTeam,
    // });
    // res = res.data.AllTeams;
    // console.log("-----data---", res);
    // this.setState({ optionsData: res });
  };

  render() {
    return (
      <form class="registerForm">
        <div class="registerContainer">
          <h1>Create a Team</h1>
          <p>Please fill in this form to create a Team.</p>
          <hr />
          <label for="teamName" style={{ float: "left" }}>
            Team Name
          </label>
          <input
            type="text"
            name="teamName"
            placeholder="Enter Team Name"
            ref={teamName}
            required
          />

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
              Create Team
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default CreateTeam;
