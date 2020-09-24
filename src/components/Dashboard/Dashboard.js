import React, { Fragment } from "react";
import CenteredTabs from "./Tab";
import { client } from "./../../index";
import { gql } from "@apollo/client";

const AllTeam = gql`
  query {
    AllTeams {
      id
      teamName
      createdAt
      sales
      totalNoMembers
    }
  }
`;

const AllUser = gql`
  query {
    AllUser {
      name
      email
      type
      # createdAt
    }
  }
`;

class Dashboard extends React.Component {
  state = {
    teamsData: undefined,
    usersData: undefined,
  };

  componentDidMount = async () => {
    let res = await client.query({
      query: AllTeam,
      context: {
        request: {
          authorization: "Bearer " + localStorage.getItem("SessionToken"),
        },
      },
    });

    res = res.data.AllTeams;
    console.log("-----data---", res);
    this.setState({ teamsData: res });

    //==========
    let res1 = await client.query({
      query: AllUser,
      context: {
        request: {
          authorization: "Bearer " + localStorage.getItem("SessionToken"),
        },
      },
    });

    res = res1.data.AllUser;
    console.log("---- All User-data---", res1);
    this.setState({ usersData: res1 });
  };
  render() {
    return (
      <Fragment>
        <div style={{ marginTop: "56px" }}>
          <CenteredTabs
            teamsData={this.state.teamsData}
            usersData={this.state.usersData}
          />
        </div>
      </Fragment>
    );
  }
}

export default Dashboard;
