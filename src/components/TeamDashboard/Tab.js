import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Tab, Paper, Tabs, Box, Typography } from "@material-ui/core";
// import Enquiries from '../Web Components/Enquiries';
import TableComponentEditable from "./EditableTable";
import CollapsibleTable from "./CollapsibleTable";
import { gql } from "@apollo/client";
import { client } from "../../index";

const AllTeam = gql`
  query AllTeams($teamName:String) {
    AllTeams(teamName:$teamName) {
      id
      teamName
      createdAt
      sales
    }
  }
`;

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width: "80%",
    margin: "80px auto 0",
  },
});

// class getDataTeams extends Component{

//   state={
//     teamsData:undefined
//   }
//   componentDidMount=async()=>{

//     let res = await client.query({
//       query: AllTeam,
//     });
//   res= res.data.AllTeams
//   console.log("-----data---",res)

//   }

// render()
// {
//  return <><CollapsibleTable teamsData={this.state.teamsData} /></>

// }

// }

export default function   CenteredTabs({teamsData,usersData}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = async (event, newValue) => {
    if(newValue==0)
    {
      let res = await client.query({
        query: AllTeam,
        variables:{teamName:localStorage.getItem("TeamManagerTeam")}
      });
      res = res.data.AllTeams;
      console.log("-----data---", res);
    }

    if(newValue==1)
    {
      
    }
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        {/* <Tab label="My Profile" value={0} /> */}
        <Tab label="Teams" value={0} />
        {/* <Tab label="My Calendar" value={2} /> */}
        {/* <Tab label="Agents" value={1} /> */}
        {/* <Tab label="Customers" value={2} /> */}
      </Tabs>

      {/* <TabPanel value={value} index={1}>
                <Enquiries {...props} />
            </TabPanel> */}
      <TabPanel value={value} index={0}>
        <CollapsibleTable teamsData={teamsData} />
      </TabPanel>

      {/* <TabPanel value={value} index={1}>
        <TableComponentEditable usersData={usersData} />
      </TabPanel> */}

    </Paper>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
