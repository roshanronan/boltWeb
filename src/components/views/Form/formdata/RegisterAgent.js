import styles from "./../applicantPersonalDetails.module.css";

const SignUpInputField1 = [
  //File upload option
  // {
  //   type: "text",
  //   class: styles.inputClass,
  //   attribute: {
  //     label: "Certified Highest Qualification",
  //     type: "file",
  //     docFlag: "1",
  //     name: "highetQulification",
  //     placeholder: "Upload Highest Qualification",
  //   },
  // },

  {
    type: "text",
    class: styles.inputClass,
    attribute: {
      label: " Name",
      type: "text",
      name: "name",
      placeholder: "Enter Full Name",
    },
  },

  {
    type: "text",
    class: styles.inputClass,
    attribute: {
      label: "Username",
      type: "text",
      name: "username",
      placeholder: "Enter User Name",
    },
  },
  {
    type: "text",
    class: styles.inputClass,
    attribute: {
      label: "Email Address",
      type: "email",
      name: "email",
      placeholder: "Enter Email",
    },
  },
  {
    type: "text",
    class: styles.inputClass,
    attribute: {
      label: "Password",
      type: "password",
      name: "password",
      placeholder: " Enter Password",
    },
  },
//   {
//     type: "text",
//     class: styles.inputClass,
//     attribute: {
//       label: "Confirm Password",
//       type: "password",
//       name: "confirmPass",
//       placeholder: " Confirm Password",
//     },
//   },

  {
    type: "dropdown",
    class: styles.inputClass,
    attribute: {
      label: "Team",
      name: "type",
      hasMethod:true
    },
    options: [
      { value: "Select", label: "Select Team" },
      
      ,
    ],
  },

  {
    type: "text",
    class: styles.inputClass,
    attribute: {
      label: "Mobile Number",
      type: "text",
      name: "mobileNumber",
      placeholder: " Mobile Number",
    },
  },
];

const SignUpInputField2 = [
  {
    type: "text",
    class: styles.inputClass,
    attribute: {
      label: "House Number",
      type: "text",
      name: "houseNumber",
      placeholder: "House Number",
      // hasHead: "Service Address",
    },
  },
  {
    type: "text",
    class: styles.inputClass,
    attribute: {
      label: "Street Prefix",
      type: "text",
      name: "streetPrefix",
      placeholder: "Street Prefix",
    },
  },
  {
    type: "text",
    class: styles.inputClass,
    attribute: {
      label: "Street Name",
      type: "text",
      name: "streetName",
      placeholder: "Street Name",
    },
  },
  {
    type: "text",
    class: styles.inputClass,
    attribute: {
      label: "Street Suffix",
      type: "text",
      name: "streetSuffix",
      placeholder: "Street Suffix",
    },
  },
  {
    type: "text",
    class: styles.inputClass,
    attribute: {
      label: "Apt./Suite Number",
      type: "text",
      name: "aptSuiteNumber",
      placeholder: "Apt./Suite Number",
    },
  },
  {
    type: "text",
    class: styles.inputClass,
    attribute: {
      label: "Service City",
      type: "text",
      name: "serviceCity",
      placeholder: "Service City",
    },
  },
  {
    type: "dropdown",
    class: styles.inputClass,
    attribute: {
      label: "Service State",
      name: "serviceState",
    },
    options: [
      { value: "", label: "Select Service State" },
      { value: "CA", label: "CA" },
    ],
  },
  {
    type: "text",
    class: styles.inputClass,
    attribute: {
      label: "Zip Code",
      type: "text",
      name: "zipcode",
      placeholder: "Zip Code",
    },
  },
];

const signUpPart1 = {
  // title: "Type Of Application",
  css: {
    width: "100%",
    height: "100%",
    backgroundImage: "linear-gradient(15deg, #4b79a1 0%, #283e51 100%)",
    margin: "20px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    // backgroundColor:"blue"
  },
  class: "personalDetailContainer",
  fields: SignUpInputField1,
};
const signUpPart2 = {
  title: "Agent Address",
  css: {
    width: "100%",
    height: "100%",
    backgroundImage: "linear-gradient(15deg, #4b79a1 0%, #283e51 100%)",
    margin: "20px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: " 'Nunito', sans-serif",
    letterSpacing: "2px",
    // backgroundColor:"blue"
  },
  class: "personalDetailContainer",
  fields: SignUpInputField2,
};

const agentSignUpPart1 = {
  title: "User Registration",
  css: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: "linear-gradient(15deg, #4b79a1 0%, #283e51 100%)",
    borderRadius: "8px",
    fontFamily: " 'Nunito', sans-serif",
    letterSpacing: "2px",
  },
  class: styles.applicantPersonalDetailContainer,
  subsection: [signUpPart1],
};

const agentSignUpPart2 = {
  // title: "Customer Sign Up Info",
  css: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: "linear-gradient(15deg, #4b79a1 0%, #283e51 100%)",
    borderRadius: "8px",
  },
  class: styles.applicantPersonalDetailContainer,
  subsection: [signUpPart2],
};

const section = [agentSignUpPart1];

export default section;
