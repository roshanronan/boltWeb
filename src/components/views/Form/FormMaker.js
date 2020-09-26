import React, { Component, useEffect } from "react";
import { FormikTextInput, FormikCheckBox, FormikDropDown } from "./SignUpForm";
import { Formik, Form, useField, yupToFormErrors } from "formik";
import styles from "./applicantPersonalDetails.module.css";
import { gql, useMutation, useLazyQuery } from "@apollo/client";
import Swal from "sweetalert2";
import { client } from "./../../../index";
import Config from "./../../../Config/config";
import * as Yup from "yup";
let teamNameText = undefined;
let filename = undefined;

const CONSTANTS = {
  inputTextField: 1,
  inputDropDown: 2,
  subSectionSelector: 3,
};

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

const GetTeamName = gql`
  query {
    getTeamName
  }
`;

const GETUSERDETAILS = gql`
  query GetUserDetail($token: String) {
    GetUserDetail(token: $token) {
      name
      rateCode
      stateAccess
    }
  }
`;

let formComplete = React.createRef();

class FormMaker extends Component {
  //Yha p all teams api call kr without team argument
  // handleDropDown = async () => {

  // };
  state = {
    teamName: "",
    stateAccess: "",
    rateCode: "",
    sameBtnClick:false,
  };

  saveState = () => {};

  componentDidMount = async () => {
    let res = await client.query({
      query: GetTeamName,
    });
    res = res.data.getTeamName;
    console.log("team of user ", res);
    this.setState({ teamName: res });
    formComplete.current[0].value = res;
    // console.log("team name rrrr",this.state.teamName)

    let res1 = await client.query({
      query: GETUSERDETAILS,
      variables: { token: localStorage.getItem("SessionToken") },
    });
    res1 = res1.data.GetUserDetail;
    console.log("team of user ", res1);
    // this.setState({ teamName: res1 });
    formComplete.current[8].value = res1.stateAccess;
    this.state.stateAccess = res1.stateAccess;
    formComplete.current[9].value = res1.rateCode;
    this.state.rateCode = res1.rateCode;
    if (formComplete.current[8].value === "CA") {
      formComplete.current[10].value = "Pacific Gas and Electric";
      formComplete.current[13].disabled = true;
    } else {
      formComplete.current[10].value = "Nipsco";
      formComplete.current[13].disabled = false;
    }

  
  };
  

  apiHandler = async (data) => {
    console.log("up file name", filename);
    let flag = this.props.flag;
    let response;
    data.filename = filename != undefined ? filename : "";
    data.formType = this.state.teamName;
    data.state = this.state.stateAccess;
    data.rateCode = this.state.rateCode;
    if (this.state.stateAccess == "CA") {
      data.utility = "Pacific Gas and Electric";
    } else {
      data.utility = "Nipsco";
    }
    
    if(this.state.sameBtnClick){
      data.billingHouseNumber=data.houseNumber
      data.billingStreetPrefix=data.streetPrefix
      data.billingStreetName=data.streetName
      data.billingStreetSuffix=data.streetSuffix
      data.billingAptSuiteNumber=data.aptSuiteNumber
      data.billingServiceCity=data.serviceCity
      data.billingServiceState=data.serviceState
      data.billingZipcode=data.zipcode
    }

    console.log("data in api handler", data);

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
    }
    console.log("rsponse++++++++++++++", response);

    if (response == "success") {
      Swal.fire({
        title: "Registered  !",
        text: "successfully",
        icon: "success",
      }).then((result) => {
        if (result.value) {
          window.location = "/form";
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
              formType:
                this.state.teamName != undefined ? this.state.teamName : "",
              language: "english",
              d2dTelephonic: "D2D",
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(async () => {
                let data = JSON.stringify(values, null, 2);

                data = JSON.parse(data);
                if (this.state.submitClicked) {
                  // alert(data);
                  this.apiHandler(data);
                }
                setSubmitting(false);
              }, 400);
            }}
            // validationSchema={Yup.object().shape({
            //   repId:Yup.string().required("Required"),
            //   firstName: Yup.string()
            // .max(15, "Must be 15 characters or less")
            // .required("Required"),
            // })}
          >
            <Form
              ref={formComplete}
              style={{ padding: 0, backgroundColor: "transparent" }}
            >
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
                                  <>
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
                                    {subcontainer.title == "Billing Address" ? (
                                      <button
                                        style={{ margin: "10px" }}
                                        onClick={() => {
                                          this.setState({sameBtnClick:true})
                                          console.log(
                                            "-------see this at all cost-------",
                                            formComplete.current[16].value
                                          );

                                          formComplete.current[25].value =
                                            formComplete.current[16].value;
                                          formComplete.current[26].value =
                                            formComplete.current[17].value;
                                          formComplete.current[27].value =
                                            formComplete.current[18].value;
                                          formComplete.current[28].value =
                                            formComplete.current[19].value;
                                          formComplete.current[29].value =
                                            formComplete.current[20].value;
                                          formComplete.current[30].value =
                                            formComplete.current[21].value;
                                          formComplete.current[31].value =
                                            formComplete.current[22].value;
                                          formComplete.current[32].value =
                                            formComplete.current[23].value;
                                        }}
                                      >
                                        Same as Service Address
                                      </button>
                                    ) : (
                                      ""
                                    )}
                                  </>
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
                <button
                  className={styles.commonbtn}
                  type="submit"
                  onClick={() => {
                    this.setState({ submitClicked: true });
                  }}
                >
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
  filename = event.target.files[0].name;
  console.log("=-==-===-==-=-=-=-=====-==", formComplete.current[14].value);
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
              onClick={async () => {
                const data = new FormData();
                data.append("file", file);

                let response = await fetch(
                  Config.API_URL +
                    "/upload?tk=" +
                    localStorage.getItem("SessionToken") +
                    "&docFlag=" +
                    attributes.docFlag,
                  { method: "post", body: data }
                );

                console.log("respose when upload", response.status);
                if (response.status == 200) {
                  Swal.fire({
                    title: "File Uploaded !",
                    text: "successfully",
                    icon: "success",
                  });
                } else {
                  console.log("error response", response.status);
                  Swal.fire({
                    title: "Error !",
                    text: response.status,
                    icon: "error",
                  });
                }
              }}
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
          // ref={}
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
          {console.log("test team Name", teamNameText)}
          {dropdownOptions.map((dropoption) => {
            return (
              <option value={dropoption.value}>
                {teamNameText !== undefined ? teamNameText : dropoption.label}
              </option>
            );
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
