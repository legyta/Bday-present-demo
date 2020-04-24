import React from "react";
import "./stylesheets/index.scss";
import "./stylesheets/confetti.scss";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Confetti from "react-confetti";

export default function ConfettiPage() {
  const { width, height } = window.innerWidth;

  return (
    <div className="index-title">
      {" "}
      <Link to="confetti"></Link>
      <Confetti width={width} height={height} />
      <div className="options">
        <Button className="button-confetti">
          <Link to="/">Take me home</Link>
        </Button>
      </div>
    </div>
  );
}
