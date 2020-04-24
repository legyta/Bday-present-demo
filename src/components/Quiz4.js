import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "./stylesheets/quiz.scss";
import quiz4 from "./images/quiz4.JPG";

function Quiz() {
  return (
    <div className="cards">
      <Link to="/quiz4"></Link>

      <Card>
        <Card.Body>
          <Card.Text>Fusce malesuada imperdiet nibh?</Card.Text>
        </Card.Body>
        <Card.Img variant="top" src={quiz4} />
      </Card>

      <div className="options-quiz">
        <Button className="button-more-confetti">
          {" "}
          <Link to="/quiz5">Esuere lectus pretium ege</Link>
        </Button>

        <Button className="button-home">
          {" "}
          <Link to="/quiz7">Rretium eget</Link>
        </Button>
      </div>
    </div>
  );
}

export default Quiz;
