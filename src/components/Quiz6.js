import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "./stylesheets/quiz.scss";
import quiz6 from "./images/quiz6.JPG";

function Quiz() {
  return (
    <div className="cards">
      <Link to="/quiz6"></Link>

      <Card>
        <Card.Img variant="top" src={quiz6} />
        <Card.Body>
          <Card.Text>Quisque in blandit lacus?</Card.Text>
        </Card.Body>
      </Card>

      <div className="options-quiz">
        <Button className="button-more-confetti">
          {" "}
          <Link to="/quiz7">Bemper erat</Link>
        </Button>

        <Button className="button-home">
          {" "}
          <Link to="/quiz8">Class aptent</Link>
        </Button>
      </div>
    </div>
  );
}

export default Quiz;
