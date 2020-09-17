import React, { Fragment } from "react";
import CenteredTabs from "./Tab";
import {client} from "./../../index"
import {gql} from "@apollo/client"


const AllTeam = gql`
  query {
  AllTeams{
    id
    teamName
    createdAt
    sales
  }
}
`;

class Dashboard extends React.Component{
state={
  teamsData:undefined
}

componentDidMount=async()=>{

  let res = await client.query({
    query: AllTeam,
    context:{request:{authorization:"Bearer "+localStorage.getItem("SessionToken")}}
  });
  res = res.data.AllTeams;
  console.log("-----data---", res);
  this.setState({teamsData:res})

}
render()
{
 return <Fragment>
      <div style={{ marginTop: "56px" }}>
        <CenteredTabs teamsData={this.state.teamsData} />
      </div>
    </Fragment>
}


}

export default Dashboard;
