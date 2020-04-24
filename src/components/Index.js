import React from "react";
import "./stylesheets/index.scss";
import { Link } from "react-router-dom";
import Confetti from "react-confetti";
import HappyB from "./HappyB";
import Options from "./Options";

export default function Index() {
  const { width, height } = window.innerWidth;

  return (
    <div className="index-title">
      {" "}
      <Link to="home"></Link>
      <Confetti width={width} height={height} />
      <h1>Everyone</h1>
      <HappyB />
      <Options />
    </div>
  );
}
