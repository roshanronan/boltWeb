import React from "react";
import MaterialTable from "material-table";
import { Button } from "@material-ui/core";


export default function MaterialTableDemo({usersData}) {
  const [state, setState] = React.useState({
    columns: [
      { title: "Name", field: "name" },
      { title: "Email", field: "email" },
      { title: "Type", field: "type" },
      // { title: "Created At", field: "createdAt" },

      // { title: "Birth Year", field: "birthYear", type: "numeric" },
      // {
      //   title: "Birth Place",
      //   field: "birthCity",
      //   lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
      // },
    ],
    data: usersData.data.AllUser
  });

  return (
    <>
    <Button variant="contained" style={{margin:"10px 0"}} href="/register">Add User</Button>
    <Button variant="contained" color="secondary" style={{margin:"10px 20px"}} href="/deleteUser">Delete User</Button>
    <MaterialTable
      title="All Users"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        // onRowUpdate: (newData, oldData) =>
        //   new Promise((resolve) => {
        //     setTimeout(() => {
        //       resolve();
        //       if (oldData) {
        //         setState((prevState) => {
        //           const data = [...prevState.data];
        //           data[data.indexOf(oldData)] = newData;
        //           return { ...prevState, data };
        //         });
        //       }
        //     }, 600);
        //   }),
        // onRowDelete: (oldData) =>
        //   new Promise((resolve) => {
        //     setTimeout(() => {
        //       resolve();
        //       setState((prevState) => {
        //         const data = [...prevState.data];
        //         data.splice(data.indexOf(oldData), 1);
        //         return { ...prevState, data };
        //       });
        //     }, 600);
        //   }),
      }}
    />
    </>
  );
}
