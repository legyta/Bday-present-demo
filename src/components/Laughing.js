import React, { Component } from "react";
import "./stylesheets/laughing.scss";
import "./stylesheets/options.scss";
import { Link } from "react-router-dom";
import laughMain from "./images/laughMain.JPG";
import { Button } from "react-bootstrap";

export default function Laughing() {
  return (
    <div className="laugh-section">
      <Link to="laugh"></Link>

      <h1>You clicked here...</h1>
      <div className="image-options">
        <img src={laughMain} alt="laugh" />

        <div className="options">
          <div className="button-sleep-section">
            <Button className="button-sleep">
              {" "}
              <Link to="/sleep">Baby Animals</Link>
            </Button>

            <Button className="button-notsleep">
              {" "}
              <Link to="/notsleep">Furry Animals</Link>
            </Button>
          </div>
          <Button className="button-home">
            {" "}
            <Link to="/"> Just take me home 🙄</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
