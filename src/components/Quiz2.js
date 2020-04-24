import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "./stylesheets/quiz.scss";
import quiz2 from "./images/quiz2.JPG";

function Quiz() {
  return (
    <div className="cards">
      <Link to="/quiz2"></Link>
      <Card>
        <Card.Body>
          <Card.Text>Cras ipsum erat, cursus vel magna?</Card.Text>
        </Card.Body>
        <Card.Img variant="top" src={quiz2} />
      </Card>

      <div className="options-quiz">
        <Button className="button-more-confetti">
          {" "}
          <Link to="/quiz3">Tempor dignissim nibh</Link>
        </Button>

        <Button className="button-home">
          {" "}
          <Link to="/quiz4">Tempor nibh</Link>
        </Button>
      </div>
    </div>
  );
}

export default Quiz;
