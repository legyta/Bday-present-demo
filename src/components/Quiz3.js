import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "./stylesheets/quiz.scss";
import quiz3 from "./images/quiz3.JPG";

function Quiz() {
  return (
    <div className="cards">
      <Link to="/quiz3"></Link>

      <Card>
        <Card.Body>
          <Card.Text>Donec sit amet purus?</Card.Text>
        </Card.Body>
        <Card.Img variant="top" src={quiz3} />
      </Card>

      <div className="options-quiz">
        <Button className="button-more-confetti">
          {" "}
          <Link to="/quiz2">Bante pellentesque</Link>
        </Button>

        <Button className="button-home">
          {" "}
          <Link to="/quiz5">Curabitur vulputate</Link>
        </Button>
      </div>
    </div>
  );
}

export default Quiz;
