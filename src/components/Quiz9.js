import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "./stylesheets/quiz.scss";
import quiz9 from "./images/quiz9.JPG";

function Quiz() {
  return (
    <div className="cards">
      <Link to="/quiz9"></Link>

      <Card>
        <Card.Body>
          <Card.Text>
            Nothing changed. Is this lame quiz ever gonna end?
          </Card.Text>
        </Card.Body>
        <Card.Img variant="top" src={quiz9} />
      </Card>

      <div className="options-quiz">
        <Button className="button-more-confetti">
          {" "}
          <Link to="/quiz8">It will just be more painful</Link>
        </Button>

        <Button className="button-home">
          {" "}
          <Link to="/quiz10">There should be the end</Link>
        </Button>
      </div>
    </div>
  );
}

export default Quiz;
