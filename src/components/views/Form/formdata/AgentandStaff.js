import styles from "./../applicantPersonalDetails.module.css";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

const SignUpInputField1 = [
  // {
  //   type: "dropdown",
  //   class: styles.inputClass,
  //   attribute: {
  //     label: "",
  //     name: "formType",
  //   },
  //   options: [
  //     { value: "", label: "" },
  //   ],
  // },
  {
    type: "text",
    class: styles.inputClass,
    attribute: {
      label: "Team Name",
      type: "text",
      name: "fromType",
      // disabled:true
    },
  },
  {
    type: "text",
    class: styles.inputClass,
    attribute: {
      label: "Rep Id",
      type: "text",
      name: "repId",
      required: "true",
      placeholder: "Rep Id",
    },
  },
  {
    type: "dropdown",
    class: styles.inputClass,
    attribute: {
      label: "Language",
      name: "language",
      required: "true",
    },
    options: [
      { value: "", label: "Select Language" },
      { value: "english", label: "English" },
      { value: "spanish", label: "Spanish" },
    ],
  },
  {
    type: "text",
    class: styles.inputClass,
    attribute: {
      label: " Customer First Name",
      type: "text",
      name: "firstName",
      required: "true",
      placeholder: "Customer First Name",
    },
  },

  {
    type: "text",
    class: styles.inputClass,
    attribute: {
      label: "Customer Last Name",
      type: "text",
      name: "lastName",
      required: "true",
      placeholder: "Customer Last Name",
    },
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
  {
    type: "text",
    class: styles.inputClass,
    attribute: {
      label: "Email Address",
      type: "email",
      name: "email",
      required: "true",
      placeholder: "Enter Email",
    },
  },
  {
    type: "dropdown",
    class: styles.inputClass,
    attribute: {
      label: "D2D/Telephonic",
      name: "d2dTelephonic",
      required: "true",
    },
    options: [
      // { value: "", label: "Select D2D/Telephonic" },
      { value: "D2D", label: "D2D" },
    ],
  },
  {
    type: "dropdown",
    class: styles.inputClass,
    attribute: {
      label: "State",
      name: "state",
      required: "true",
      // disabled:true
    },
    options: [
      { value: "", label: "Select State" },
      { value: "CA", label: "CA" },
      { value: "IN", label: "IN" },
    ],
  },

  {
    type: "dropdown",
    class: styles.inputClass,
    attribute: {
      label: "Rate Code",
      name: "rateCode",
      required: "true",
      // disabled:true
    },
    options: [
      { value: "", label: "Select Rate Code" },
      { value: "green", label: "GREEN" },
      { value: "brown", label: "BROWN" },
    ],
  },
  //===============
  {
    type: "dropdown",
    class: styles.inputClass,
    attribute: {
      label: "Utility",
      name: "utility",
      required: true,
      // disabled:true
    },
    options: [
      { value: "", label: "Select Utility" },
      { value: "Pacific Gas and Electric", label: "Pacific Gas and Electric" },
      { value: "Nipsco", label: "Nipsco" },
    ],
  },
  {
    type: "dropdown",
    class: styles.inputClass,
    attribute: {
      label: "Plan",
      name: "plan",
      // required:"true",
    },
    options: [{ value: "", label: "--None--" }],
  },
  {
    type: "text",
    class: styles.inputClass,
    attribute: {
      label: "Account Number",
      type: "text",
      name: "accountNumber",
      required: "true",
      placeholder: "Account Number",
    },
  },
  {
    type: "text",
    class: styles.inputClass,
    attribute: {
      label: "Meter Number",
      type: "text",
      name: "meterNumber",
      placeholder: "Meter Number",
    },
  },

  {
    type: "text",
    class: styles.inputClass,
    attribute: {
      label: "Picture of Custormer",
      type: "file",
      docFlag: "1",
      name: "profilePic",
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
      required: "true",
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
      required: "true",
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
      required: "true",
      placeholder: "Service City",
    },
  },
  {
    type: "dropdown",
    class: styles.inputClass,
    attribute: {
      label: "Service State",
      name: "serviceState",
      required: "true",
    },
    options: [
      { value: "", label: "Select Service State" },
      { value: "CA", label: "CA" },
      { value: "IN", label: "IN" },
    ],
  },
  {
    type: "text",
    class: styles.inputClass,
    attribute: {
      label: "Zip Code",
      type: "text",
      name: "zipcode",
      required: "true",
      placeholder: "Zip Code",
    },
  },
];

const SignUpInputField3 = [
  // {
  //   type: "text",
  //   class: styles.inputClass,
  //   attribute: {
  //     label:"Same as Service Address",
  //     type: "checkbox",
  //     name: "billingAddress",
  //   },
  // },
  {
    type: "text",
    class: styles.inputClass,
    attribute: {
      label: "House Number",
      type: "text",
      name: "billingHouseNumber",
      placeholder: "House Number",
      // hasHead: "Billing Address",
    },
  },
  {
    type: "text",
    class: styles.inputClass,
    attribute: {
      label: "Street Prefix",
      type: "text",
      name: "billingStreetPrefix",
      placeholder: "Street Prefix",
    },
  },
  {
    type: "text",
    class: styles.inputClass,
    attribute: {
      label: "Street Name",
      type: "text",
      name: "billingStreetName",
      placeholder: "Street Name",
    },
  },
  {
    type: "text",
    class: styles.inputClass,
    attribute: {
      label: "Street Suffix",
      type: "text",
      name: "billingStreetSuffix",
      placeholder: "Street Suffix",
    },
  },
  {
    type: "text",
    class: styles.inputClass,
    attribute: {
      label: "Apt./Suite Number",
      type: "text",
      name: "billingAptSuiteNumber",
      placeholder: "Apt./Suite Number",
    },
  },
  {
    type: "text",
    class: styles.inputClass,
    attribute: {
      label: "Service City",
      type: "text",
      name: "billingServiceCity",
      placeholder: "Service City",
    },
  },
  {
    type: "dropdown",
    class: styles.inputClass,
    attribute: {
      label: "Service State",
      name: "billingServiceState",
    },
    options: [
      { value: "", label: "Select Service State" },
      { value: "CA", label: "CA" },
      { value: "IN", label: "IN" },
    ],
  },
  {
    type: "text",
    class: styles.inputClass,
    attribute: {
      label: "Zip Code",
      type: "text",
      name: "billingZipCode",
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
  title: "Service Address",
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

const signUpPart3 = {
  title: "Billing Address",
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
  fields: SignUpInputField3,
};
const customerSignUpPart1 = {
  title: "Customer Sign Up Info",
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

const customerSignUpPart2 = {
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
const customerSignUpPart3 = {
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
  subsection: [signUpPart3],
};

const section = [customerSignUpPart1, customerSignUpPart2, customerSignUpPart3];

export default section;
