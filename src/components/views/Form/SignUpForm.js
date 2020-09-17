import React, { useRef, useEffect } from "react";
import { Formik, Form, useField } from "formik";
import styled from "@emotion/styled";
import * as Yup from "yup";

//addUser(name:String,username:String,email:String,password:String,userType: String,subType:String): String

const FormikTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>

      <input className="text-input" {...field} {...props} />

      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const FormikCheckBox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label className="checkbox">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const FormikDropDown = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledSelect {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  );
};

// Styled components ....
const StyledSelect = styled.select`
  color: blue;
`;

const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: "❌ ";
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;

const StyledLabel = styled.label`
  margin-top: 1rem;
`;

const SignUpForm = () => {
  // let email = React.createRef();
  // let password = React.createRef();

  // const inputEl = useRef(null);

  // textInput = React.createRef();
  // textInput = React.createRef();
  // textInput = React.createRef();

  return (
    <>
      <h1>SignUp!</h1>
      <Formik
        initialValues={
          {
            // firstName: "",
            // lastName: "",
            // email: "",
            // password: "",
            // acceptedTerms: false,
            // jobType: "",
            // gender: "",
          }
        }
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(async () => {
            alert(JSON.stringify(values, null, 2));

            setSubmitting(false);
          }, 400);
        }}
        // validationSchema={Yup.object({
        //   firstName: Yup.string()
        //     .max(15, "Must be 15 characters or less")
        //     .required("Required"),
        //   lastName: Yup.string()
        //     .max(20, "Must be 20 characters or less")
        //     .required("Required"),
        //   email: Yup.string()
        //     .email("Invalid email address")
        //     .required("Required"),
        //   acceptedTerms: Yup.boolean()
        //     .required("Required")
        //     .oneOf([true], "You must accept the terms and conditions."),
        //   jobType: Yup.string()
        //     .oneOf(
        //       ["designer", "development", "product", "other"],
        //       "Invalid Job Type"
        //     )
        //     .required("Required"),
        //   password: Yup.string().required("Required"),
        //   gender: Yup.string()
        //     .required("Required")
        //     .oneOf(["male", "female"], "Select one"),
        // })}
      >
        <Form>
          <FormikTextInput
            label="Name"
            name="Name"
            type="text"
            placeholder="Enter  Name"
          />
          <FormikTextInput
            label="user Name"
            name="userName"
            type="text"
            placeholder="Enter User Name"
          />
          <FormikTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="Your email"
          />
          <FormikTextInput
            label="Password"
            name="password"
            type="password"
            // ref={password}
          />

          <FormikDropDown label="Customer Type" name="customerType">
            <option value="">Select a coustomer type</option>
            <option value="BUYER">Buyer</option>
            <option value="SELLER">Seller</option>
            <option value="AGENT">Agent Manager</option>
          </FormikDropDown>
          <FormikCheckBox name="acceptedTerms">
            I accept the terms and conditions
          </FormikCheckBox>
          <button type="reset" style={{ margin: "30px", padding: "5px" }}>
            Reset
          </button>
          <button type="submit" style={{ margin: "30px", padding: "5px" }}>
            Submit
          </button>
          <button style={{ margin: "30px", padding: "5px" }}>All Users</button>
          <button style={{ margin: "30px", padding: "5px" }}> Login</button>
        </Form>
      </Formik>
    </>
  );
};

export { SignUpForm, FormikTextInput, FormikCheckBox, FormikDropDown };
