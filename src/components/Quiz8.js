import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "./stylesheets/quiz.scss";
import quiz8 from "./images/quiz8.JPG";

function Quiz() {
  return (
    <div className="cards">
      <Link to="/quiz8"></Link>

      <Card>
        <Card.Body>
          <Card.Text>I suffered enough, can this game end now?</Card.Text>
        </Card.Body>
        <Card.Img variant="top" src={quiz8} />
      </Card>

      <div className="options-quiz">
        <Button className="button-more-confetti">
          {" "}
          <Link to="/quiz9">Don't you like my games?</Link>
        </Button>

        <Button className="button-home">
          {" "}
          <Link to="/quiz10">Sure, but only cause it's your birthday!</Link>
        </Button>
      </div>
    </div>
  );
}

export default Quiz;
