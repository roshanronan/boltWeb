import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FormMaker from "./components/views/Form/FormMaker";
import RegisterCustomer from "./components/views/Form/formdata/AgentandStaff";
import NewLogin from "./components/views/NewLogin/login.js";
import RegisterAgent from "./components/views/Form/formdata/RegisterAgent";
import "particles.js/particles";
import Dashboard from "./components/Dashboard/Dashboard";
import Register from "./components/views/RegisterAgent/Register";
import DocumentLink from "./components/views/DocLink/DocumentLink";
import DocumentLink2 from "./components/views/DocLink/DocumentLink2";
import CreateTeam from "./components/views/CreateTeam/CreateTeam"
import DeleteTeam from "./components/views/DeleteTeam/DeleteTeam"
import DeleteUser from "./components/views/DeleteUser/DeleteUser"

const particlesJS = window.particlesJS;
const particlesJSON = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 700, //Denser the smaller the number.
      },
    },
    color: {
      //The color for every node, not the connecting lines.
      value: "#01579b", //Or use an array of colors like ["#9b0000", "#001378", "#0b521f"]
    },
    shape: {
      type: "circle", // Can show circle, edge (a square), triangle, polygon, star, img, or an array of multiple.
      stroke: {
        //The border
        width: 1,
        color: "#145ea8",
      },
      polygon: {
        //if the shape is a polygon
        nb_sides: 5,
      },
      image: {
        //If the shape is an image
        src: "",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.7,
      random: true,
    },
    size: {
      value: 10,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 200, //The radius before a line is added, the lower the number the more lines.
      color: "#007ecc",
      opacity: 0.5,
      width: 2,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "top", //Move them off the canvas, either "none", "top", "right", "bottom", "left", "top-right", "bottom-right" et cetera...
      random: true,
      straight: false, //Whether they'll shift left and right while moving.
      out_mode: "out", //What it'll do when it reaches the end of the canvas, either "out" or "bounce".
      bounce: false,
      attract: {
        //Make them start to clump together while moving.
        enable: true,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  //Negate the default interactivity
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "repulse",
      },
      onclick: {
        enable: false,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 800,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 800,
        size: 80,
        duration: 2,
        opacity: 0.8,
        speed: 3,
      },
      repulse: {
        distance: 400,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};
particlesJS("particles-js", particlesJSON);

const App = () => {
  return (
    <>
      <AppRouter />
    </>
  );
};

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/form">
          <FormMaker flag={1} section={RegisterCustomer} />
        </Route>
        {/* <Route path="/agent">
          <FormMaker flag={2} section={RegisterAgent} />
        </Route> */}
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/document2:id">          
          <DocumentLink2 />
        </Route>
        <Route path="/document:id">
          <DocumentLink />
        </Route>
        <Route path="/createTeam">
          <CreateTeam />
        </Route>
        <Route path="/deleteTeam">
          <DeleteTeam />
        </Route>
        <Route path="/deleteUser">
          <DeleteUser />
        </Route>

        <Route path="/">
          <NewLogin />
        </Route>
        {/* <Route path="register">
          <LandingPage />
        </Route>
        <Route path="form">
          <LandingPage />
        </Route> */}
      </Switch>
    </Router>
  );
};

export default App;
