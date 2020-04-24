import React from "react";
import { Link } from "react-router-dom";
import "./stylesheets/sleeping.scss";
import "./stylesheets/options.scss";
import sleep1 from "./images/sleep1.jpg";
import sleep2 from "./images/sleep2.JPG";
import sleep3 from "./images/sleep3.JPG";
import { Button } from "react-bootstrap";

function Sleeping() {
  return (
    <div className="sleep-section">
      <Link to="sleep"></Link>
      <div className="sleep1">
        <img src={sleep1} alt="sleep1" />
      </div>
      <div className="sleep2">
        <img src={sleep2} alt="sleep2" />
      </div>
      <div className="sleep3">
        <img src={sleep3} alt="sleep3" />
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
