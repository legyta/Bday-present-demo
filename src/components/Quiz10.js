import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "./stylesheets/quiz.scss";
import quiz10 from "./images/quiz10.JPG";
import Confetti from "react-confetti";

function Quiz() {
  const { width, height } = window.innerWidth;

  return (
    <div className="cards">
      <Link to="/quiz10"></Link>
      <Confetti width={width} height={height} />
      <Card>
        <Card.Body>
          <Card.Text>
            Hooooooray! You finally won! I know it's tiring...
          </Card.Text>
        </Card.Body>
        <Card.Img variant="top" src={quiz10} />
      </Card>

      <div className="options-quiz">
        <Button className="button-more-confetti">
          {" "}
          <Link to="/quiz1">Let's play this again!</Link>
        </Button>

        <Button className="button-home">
          {" "}
          <Link to="/">OMG take me home</Link>
        </Button>
      </div>
    </div>
  );
}

export default Quiz;
