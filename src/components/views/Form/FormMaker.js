import React, { Component, useEffect } from "react";
import { FormikTextInput, FormikCheckBox, FormikDropDown } from "./SignUpForm";
import { Formik, Form, useField } from "formik";
import styles from "./applicantPersonalDetails.module.css";
import { gql, useMutation, useLazyQuery } from "@apollo/client";
import Swal from "sweetalert2";
import { client } from "./../../../index";
import { Language } from "@material-ui/icons";

const CONSTANTS = {
  inputTextField: 1,
  inputDropDown: 2,
  subSectionSelector: 3,
};

const ADD_NEWUSER = gql`
  mutation AgentRegistration($data: AgentRegistrationObject) {
    AgentRegistration(data: $data)
  }
`;

const CUSTOMERDETAILS = gql`
  mutation CustomerDetails($data: CustomerDetailsObject) {
    CustomerDetails(data: $data)
  }
`;

const AllTeam = gql`
  query AllTeams {
    id
    teamName
    createdAt
    sales
  }
`;

class FormMaker extends Component {
  state = {};
  //Yha p all teams api call kr without team argument
  // handleDropDown = async () => {

  // };

  apiHandler = async (data) => {
    let flag = this.props.flag;
    let response;

    switch (flag) {
      case 1:
        response = await client.mutate({
          mutation: CUSTOMERDETAILS,
          variables: {
            data: data,
          },
        });
        response = response.data.CustomerDetails;
        break;

      case 2:
        response = await client.mutate({
          mutation: ADD_NEWUSER,
          variables: {
            data: data,
          },
        });
        response = response.data.AgentRegistration;
        break;
    }
    console.log("rsponse++++++++++++++", response);

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
  };

  render() {
    let section = this.props.section;

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* Logo Area */}
        {/* <div
            style={{
              height: "100px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
           
          </div> */}
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            // backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Formik
            initialValues={{
              formType: "Bolt Energy: WNS Text TPV E-sig CA",
              // language: "english",
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(async () => {
                let data = JSON.stringify(values, null, 2);
                alert(data)
                data = JSON.parse(data);
                this.apiHandler(data);
                setSubmitting(false);
              }, 400);
            }}
          >
            <Form style={{ padding: 0, backgroundColor: "transparent" }}>
              {section.map((container) => {
                return (
                  <div style={{ paddingTop: "40px" }}>
                    <h2
                      style={{
                        backgroundColor: "#0e2334",
                        textAlign: "center",
                        padding: "10px",
                        color: "white",
                        // borderBottom: " 3px solid #00a3a8",
                        borderRadius: "8px",
                        fontFamily: " 'Nunito', sans-serif",
                        letterSpacing: "2px",
                        background:
                          "linear-gradient(to right, #000428, #004e92)",
                        marginBottom: "10px",
                      }}
                    >
                      {container.title}
                    </h2>
                    <div className={container.class} style={container.css}>
                      {container.subsection
                        ? container.subsection.map((subcontainer) => {
                            return (
                              <div
                                className={subcontainer.class}
                                style={subcontainer.css}
                              >
                                {subcontainer.title ? (
                                  <h6
                                    style={{
                                      textAlign: "center",
                                      padding: "10px",
                                      background:
                                        "linear-gradient(to right, #000428, #004e92)",
                                      // backgroundColor: "gray",
                                      borderRadius: "8px",
                                      color: "white",
                                      fontWeight: "bold",
                                      fontSize: "large",
                                      width: "80%",
                                    }}
                                  >
                                    {subcontainer.title}
                                  </h6>
                                ) : (
                                  ""
                                )}

                                {ComponentSelector(
                                  CONSTANTS.subSectionSelector,
                                  undefined,
                                  undefined,
                                  undefined,
                                  subcontainer.fields
                                )}
                              </div>
                            );
                          })
                        : ""}
                      {/*  */}
                    </div>
                  </div>
                );
              })}
              <div
                style={{
                  width: "100%",
                  minWidth: "230px",
                  display: "flex",
                  justifyContent: "center",

                  backgroundImage:
                    "linear-gradient(15deg, #13547a 0%, #80d0c7 100%)",
                  borderRadius: "8px",
                  marginTop: "10px",
                }}
              >
                <button className={styles.commonbtn} type="submit">
                  Submit
                </button>
              </div>
            </Form>
          </Formik>
        </div>
        <div
          className={styles.formBottomDiv}
          style={{ height: "400px", width: "100%", display: "flex" }}
        >
          {/* <img
              className={styles.formBottomImg}
              src={require("")}
              alt="no image"
            /> */}
        </div>
      </div>
    );
  }
}

//Event handler for file type
let file;
const onChangeHandler = (event) => {
  console.log("This is file event....", event.target.files[0].name);
  file = event.target.files[0];
  console.log("data of the file, been uploaded", file);
};

const ComponentSelector = (
  flag,
  attributes,
  type,
  dropdownOptions,
  subcontainerField
) => {
  let component;
  switch (flag) {
    case CONSTANTS.inputTextField:
      component =
        attributes.type == "file" ? (
          <>
            <FormikTextInput
              {...attributes}
              style={{ width: "320px", height: "40px" }}
              onChange={(event) => {
                onChangeHandler(event);
              }}
            />
            <button
              style={{
                backgroundColor: "#0e2334",
                color: "white",
                width: "105px",
                borderRadius: "5px",
                margin: "0 0 0 5px",
                border: "none",
                padding: 0,
                height: "40px",
              }}
              type="button"
            >
              Upload
            </button>
          </>
        ) : attributes.hasHead ? (
          <div className="inputClass">
            <>
              {attributes.hasHead ? (
                <h3
                  style={{
                    // backgroundColor: "#0e2334",
                    // textAlign: "center",
                    padding: "10px 0",
                    color: "white",
                    // borderBottom: " 3px solid #00a3a8",
                    borderRadius: "8px",
                    fontFamily: " 'Nunito', sans-serif",
                    letterSpacing: "2px",
                    background:
                      "linear-gradient(15deg, #13547a 0%, #80d0c7 100%)",
                    marginBottom: "10px",
                    // width: "80%",
                  }}
                >
                  {attributes.hasHead}
                </h3>
              ) : (
                ""
              )}
              <div className="inputClass">
                <FormikTextInput
                  {...attributes}
                  style={{ width: "320px", height: "45px" }}
                />
              </div>
            </>
          </div>
        ) : (
          <>
            <FormikTextInput
              {...attributes}
              style={{ width: "320px", height: "45px" }}
            />
          </>
        );
      break;

    case CONSTANTS.inputDropDown:
      component = (
        <FormikDropDown
          {...attributes}
          style={{ width: "320px", height: "45px" }}
          // onChange={async () => {
          //   if (attributes.hasMethod) {
          //     let res = await client.query({
          //       query: AllTeam,
          //     });
          //     console.log("----data", res);
          //   }
          // }}
        >
          {dropdownOptions.map((dropoption) => {
            return <option value={dropoption.value}>{dropoption.label}</option>;
          })}
        </FormikDropDown>
      );

      break;
    case CONSTANTS.subSectionSelector:
      component = subcontainerField.map((field) => (
        <div className={field.class}>
          {field.type == "text"
            ? ComponentSelector(
                CONSTANTS.inputTextField,
                field.attribute,
                field.type,
                undefined
              )
            : ComponentSelector(
                CONSTANTS.inputDropDown,
                field.attribute,
                field.type,
                field.options
              )}
        </div>
      ));

      break;
  }

  return component;
};

export default FormMaker;
