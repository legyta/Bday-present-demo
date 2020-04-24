import React from "react";
import { Link } from "react-router-dom";
import "./stylesheets/sleeping.scss";
import "./stylesheets/options.scss";
import "./stylesheets/notsleeping.scss";
import notsleep1 from "./images/notsleep1.JPG";
import notsleep2 from "./images/notsleep2.JPG";
import notsleep3 from "./images/notsleep3.jpg";
import { Button } from "react-bootstrap";

function Sleeping() {
  return (
    <div className="sleep-section">
      <Link to="notsleep"></Link>
      <img src={notsleep1} alt="notsleep1" />
      <img src={notsleep2} alt="notsleep2" />
      <div className="notsleep3">
        <img src={notsleep3} alt="notsleep3" />
      </div>
      <div className="options">
        <Button className="button-home">
          {" "}
          <Link to="/laugh"> I want to go back</Link>
        </Button>
        <Button className="button-home">
          {" "}
          <Link to="/"> Take me home 🙄</Link>
        </Button>
      </div>
    </div>
  );
}

export default Sleeping;
