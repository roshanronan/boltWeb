import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { ExportCSV } from "../ExportToExcel/export";
import { Button } from "@material-ui/core";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      { date: "2020-01-05", customerId: "11091700", amount: 3 },
      { date: "2020-01-02", customerId: "Anonymous", amount: 1 },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  var time = new Date(parseInt(row.createdAt));
  var date = new Date(time);

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell align="right">{row.teamName}</TableCell>
        <TableCell align="right">{row.sales}</TableCell>
        <TableCell align="right">{date.toString()}</TableCell>
        <TableCell align="right">{row.totalNoMembers}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))} */}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.number.isRequired,
    teamName: PropTypes.number.isRequired,
    sales: PropTypes.number.isRequired,
    // history: PropTypes.arrayOf(
    //   PropTypes.shape({
    //     amount: PropTypes.number.isRequired,
    //     customerId: PropTypes.string.isRequired,
    //     date: PropTypes.string.isRequired,
    //   })
    // ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
  createData("Eclair", 262, 16.0, 24, 6.0, 3.79),
  createData("Cupcake", 305, 3.7, 67, 4.3, 2.5),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5),
];

export default function CollapsibleTable({ teamsData }) {
  console.log("=======See Me ------", teamsData);
  return (
    <>
      {/* <Button variant="contained" color="primary" style={{margin:"10px 0"}} >Export 
    to Excel</Button> */}
      {/* <Button
        variant="contained"
        style={{ margin: "10px 0" }}
        href="/createTeam"
      >
        Create Team
      </Button>
      <Button
        variant="contained"
        color="secondary"
        style={{ margin: "10px 20px" }}
        href="/deleteTeam"
      >
        Delete Team
      </Button> */}
      <Button variant="contained" color="secondary" style={{margin:"10px 20px",float: "right"}} href="http://localhost:4000/getReport">Download Report</Button>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Team Id</TableCell>
              <TableCell align="right">Team Name</TableCell>
              <TableCell align="right">Sales</TableCell>
              <TableCell align="right">created At</TableCell>
              <TableCell align="right">Total Team Members</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teamsData != undefined
              ? teamsData.map((row) => <Row key={row.id} row={row} />)
              : ""}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
