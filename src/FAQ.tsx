import Question from "./Question";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import React from "react";

type InformationType = {
  id : number,
  title: string;
  info: string;
};

export default function App() {
  return (
    <Card style={{ width: '400px' }} className="text-center">
       <Card.Title className="mt-3">Frequently Asked Questions</Card.Title>
        <ListGroup variant="flush">
          {information.map((info) => (
            <ListGroup.Item>
              <Question key={info.id} question={info} />
            </ListGroup.Item>
          ))}
        </ListGroup>
    </Card>
  );
}

const information : InformationType[] = [
  {
    id: 1,
    title: "Give me some info please.",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
  },
  {
    id: 2,
    title: "How much does it cost?",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
  },
  {
    id: 3,
    title: "What is the average delivery time?",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
  },
];
