import React, { Component } from "react";
import "./../RegisterAgent/Register.css";
import { gql } from "@apollo/client";
import { client } from "../../../index";
import Swal from "sweetalert2";

const DELETE_A_TEAM = gql`
  mutation DeleteTeam($teamName: ID) {
    DeleteTeam(teamName: $teamName)
  }
`;
const AllTeam = gql`
  query {
    AllTeams {
      id
      teamName
      createdAt
      sales
    }
  }
`;

let teamId= React.createRef();

class DeleteTeam extends Component {
  state = {
    optionsData: undefined,
    selectedTeamId: undefined,
  };

  

  apiHandler = async (e) => {
    e.preventDefault();
    let response;
    response = await client.mutate({
      mutation: DELETE_A_TEAM,
      variables: {
        teamName: teamId.current.value,
      },
    });
    console.log("----data submitted ---", response);
    response = response.data.DeleteTeam;

    if (response == "success") {
      Swal.fire({
        title: "Team Deleted!",
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
      query: AllTeam,
    });
    res = res.data.AllTeams;
    console.log("-----data---", res); 
    this.setState({ optionsData: res });
  };

  render() {
    return (
      <form class="registerForm">
        <div class="registerContainer">
          <h1>Create a Team</h1>
          <p>Please fill in this form to create a Team.</p>
          <hr />
          {/* <label for="teamName" style={{ float: "left" }}>
            Team Name
          </label>
          <input
            type="text"
            name="teamName"
            placeholder="Enter Team Name"
            ref={teamName}
            required
          /> */}

          <label for="teams" style={{ float: "left" }}>
            Team
          </label>
          <select
            name="teams"
            required
            ref={teamId}
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
                      {item.teamName}
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

export default DeleteTeam;
