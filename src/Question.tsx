import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";

type QuestionType = {
  title: string;
  info: string;
};

interface QuestionProps {
  question: QuestionType;
}

export default function Question({ question }: QuestionProps) {
  const [isOpen, setOpen] = useState(false);

  return (
    <section>
      <div className={isOpen ? "open" : "closed"}>
        <Card className="text-center">
          <Card.Body>
            <Card.Header>{question.title}</Card.Header>
          </Card.Body>
          <Button variant="primary" onClick={() => setOpen(!isOpen)}>
            {isOpen ? "-" : "+"}
          </Button>
        </Card>
      </div>
      {isOpen && <p>{question.info}</p>}
    </section>
  );
}
