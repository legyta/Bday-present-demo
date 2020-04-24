import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "./stylesheets/quiz.scss";
import quiz5 from "./images/quiz5.jpg";

function Quiz() {
  return (
    <div className="cards">
      <Link to="/quiz5"></Link>

      <Card>
        <Card.Body>
          <Card.Text>Nulla nec ultrices tellus?</Card.Text>
        </Card.Body>
        <Card.Img variant="top" src={quiz5} />
      </Card>

      <div className="options-quiz">
        <Button className="button-more-confetti">
          {" "}
          <Link to="/quiz4">Stibulum</Link>
        </Button>

        <Button className="button-home">
          {" "}
          <Link to="/quiz6">Di magnar</Link>
        </Button>
      </div>
    </div>
  );
}

export default Quiz;
