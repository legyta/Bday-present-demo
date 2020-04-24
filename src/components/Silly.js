import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "./stylesheets/options.scss";
import silly1 from "./images/silly1.webp";
import silly2 from "./images/silly2.webp";
import silly3 from "./images/silly3.webp";
import silly4 from "./images/silly4.webp";
import silly5 from "./images/silly5.webp";
import silly6 from "./images/silly6.webp";
import silly7 from "./images/silly7.webp";
import silly8 from "./images/silly8.webp";
import silly9 from "./images/silly9.webp";
import silly10 from "./images/silly10.webp";
import silly11 from "./images/silly11.webp";
import silly12 from "./images/silly12.webp";
import silly13 from "./images/silly13.webp";
import silly14 from "./images/silly14.gif";
import silly15 from "./images/silly15.webp";
import silly18 from "./images/silly18.webp";
import silly19 from "./images/silly19.webp";
import silly20 from "./images/silly20.gif";
import silly21 from "./images/silly21.webp";
import silly22 from "./images/silly22.webp";
import silly23 from "./images/silly23.gif";
import silly24 from "./images/silly24.webp";

function Silly() {
  return (
    <div className="cards">
      <Link to="/silly"></Link>
      <h1>Happy Birthday Everyone!</h1>
      <img src={silly1} alt="silly1" />
      <img src={silly2} alt="silly2" />
      <img src={silly3} alt="silly3" />
      <img src={silly4} alt="silly4" />
      <img src={silly5} alt="silly5" />
      <img src={silly6} alt="silly6" />
      <img src={silly7} alt="silly7" />
      <img src={silly8} alt="silly8" />
      <img src={silly9} alt="silly9" />
      <img src={silly10} alt="silly10" />
      <img src={silly11} alt="silly11" />
      <img src={silly12} alt="silly12" />
      <img src={silly13} alt="silly13" />
      <img src={silly14} alt="silly14" />
      <img src={silly15} alt="silly15" />
      <img src={silly18} alt="silly18" />
      <img src={silly19} alt="silly19" />
      <img src={silly20} alt="silly20" />
      <img src={silly21} alt="silly21" />
      <img src={silly22} alt="silly22" />
      <img src={silly23} alt="silly23" />
      <img src={silly24} alt="silly24" />

      <div className="options">
        <Button className="button-home">
          {" "}
          <Link to="/">Go back</Link>
        </Button>
      </div>
    </div>
  );
}

export default Silly;
