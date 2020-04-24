import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "./stylesheets/quiz.scss";
import quiz1 from "./images/quiz1.JPG";

function Quiz() {
  return (
    <div className="cards">
      <Link to="/quiz1"></Link>
      <div className="quiz-title">
        <h1>Test your memory and find a way out of this quiz!</h1>
      </div>
      <Card>
        <Card.Body>
          <Card.Text>Aenean fringilla quis sapien?</Card.Text>
        </Card.Body>
        <Card.Img variant="top" src={quiz1} />
      </Card>

      <div className="options-quiz">
        <Button className="button-a">
          {" "}
          <Link to="/quiz2">Nam mattis</Link>
        </Button>

        <Button className="button-b">
          {" "}
          <Link to="/quiz3">Aenean fringilla</Link>
        </Button>
      </div>
    </div>
  );
}

export default Quiz;
