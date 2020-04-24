import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "./stylesheets/quiz.scss";
import quiz7 from "./images/quiz7.JPG";

function Quiz() {
  return (
    <div className="cards">
      <Link to="/quiz7"></Link>

      <Card>
        <Card.Body>
          <Card.Text>Nulla non metus at nisi tincidunt elementum?</Card.Text>
        </Card.Body>
        <Card.Img variant="top" src={quiz7} />
      </Card>

      <div className="options-quiz">
        <Button className="button-more-confetti">
          {" "}
          <Link to="/quiz6">Sed</Link>
        </Button>

        <Button className="button-home">
          {" "}
          <Link to="/quiz9">Nulla non</Link>
        </Button>
      </div>
    </div>
  );
}

export default Quiz;
