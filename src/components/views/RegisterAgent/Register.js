import React, { Component } from "react";
import "./../RegisterAgent/Register.css";
import {gql} from "@apollo/client"
import {client} from "./../../../index"
import Swal from "sweetalert2"

const ADD_NEWUSER = gql`
  mutation AgentRegistration($data: AgentRegistrationObject) {
    AgentRegistration(data: $data)
  }
`;

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

let email=React.createRef();
let password=React.createRef();
let name=React.createRef();
let userType=React.createRef();

class Register extends Component {

  state={
    optionsData:undefined,
    selectedTeamId:undefined
  }

apiHandler = async(e)=>{
  e.preventDefault();
  let response
  let data={name:name.current.value,email:email.current.value,password:password.current.value,teams:this.state.selectedTeamId,userType:userType.current.value}
  response = await client.mutate({
    mutation: ADD_NEWUSER,
    variables: {
      data:data,
    },
    
  });
  console.log("----data submitted ---",response)
response=response.data.AgentRegistration;
  
  if (response == "success") {
    Swal.fire({
      title: "Registered  !",
      text: "successfully",
      icon: "success",
    }).then((result) => {
      if (result.value) {
        window.location = "/";
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
  
}

componentDidMount=async()=>{
  let res = await client.query({
    query: AllTeam,
  });
res= res.data.AllTeams
console.log("-----data---",res)
this.setState({optionsData:res})
}

  render() {
    return (
      <form class="registerForm">
        <div class="registerContainer">
          <h1>Register User</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <label for="name" style={{ float: "left"}}>
            Name
          </label>
          <input type="text" name="name" placeholder="Enter Name" ref={name} required />

          <label for="email" style={{ float: "left" }}>
            Email
          </label>
          <input type="text" placeholder="Enter Email" ref={email} name="email" required />

          <label for="password" style={{ float: "left" }}>
            Password
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            ref={password}
            required
          />
          <label for="userType" style={{ float: "left" }} >
            User Type
          </label>
          <select name="userType" ref={userType} required>
             <option value="agent">Agent</option>
             <option value="admin">Admin</option>
             <option value="teammanager">Team Manger</option>
          </select>

          <label for="teams" style={{ float: "left" }}>
           Team
          </label>
          <select name="teams" required onChange={(event)=>{
            console.log("--running ",event.currentTarget.value)
            this.setState({selectedTeamId:event.currentTarget.value})
          }}>
            <option value="">Select a Team</option>
            {this.state.optionsData!=undefined?(this.state.optionsData.map(item=>{
              return <option key={item.id} value={item.id}>{item.teamName}</option>

            })):""}
          </select>

          <div class="clearfix">
            <button type="button" class="cancelbtn">
              Cancel
            </button>
            <button type="submit" class="signupbtn" onClick={(e)=>{this.apiHandler(e)}}>
              Register Agent
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Register;
