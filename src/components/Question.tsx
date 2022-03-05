import "../css//App.css";
import questions from "../data/questions.json";
import React from "react";
import { useParams } from "react-router-dom";
import { Row } from "react-bootstrap";
import NotFound from "./NotFound";

function Question(props: any) {
    console.log(useParams())
  return (
    <div>
      <span>Тут будет вопрос</span>
    </div>
  );
}

export default Question;
