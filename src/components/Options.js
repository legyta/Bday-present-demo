import React from "react";
import "./stylesheets/options.scss";
import { Button } from "react-bootstrap";
import flower from "./images/flower.png";
import { Link } from "react-router-dom";

export default function Options() {
  return (
    <div className="options">
      <h1>What do you feel like?</h1>
      <div className="button1">
        <Button className="button-quiz">
          <Link to="/quiz1">Taking a quiz</Link>
        </Button>
        <Button className="button-mel">
          {" "}
          <Link to="/melancholy">Getting melancholic</Link>
        </Button>
      </div>
      <img src={flower} alt="flower" />
      <div className="button2">
        <Button className="button-laugh">
          {" "}
          <Link to="/laugh">Laughing</Link>
        </Button>
        <Button className="button-look">
          {" "}
          <Link to="/silly">Looking at silly things</Link>
        </Button>
      </div>
    </div>
  );
}
