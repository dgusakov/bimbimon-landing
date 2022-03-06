import "../css//App.css";
import questions from "../data/questions.json";
import React from "react";
import { useParams } from "react-router-dom";
import BackButton from "./navs/BackButton";
import HeaderBold from "./labels/HeaderBold";
import HeaderLight from "./labels/HeaderLight";
import Answer from "./functional/Answer";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function refreshPage() {
  window.location.reload();
}

function Question(props: any) {
  let urlParams = useParams();
  console.log(urlParams);
  const [game] = questions.filter((el) => el.name === urlParams.game);
  const [topic] = game.topics.filter((el) => el.name === urlParams.topic);
  console.log(game);
  console.log(topic);
  const question = topic.questions[getRandomInt(topic.questions.length)];
  console.log(question);
  return (
    <div>
      <div className="container mt-2" id="back">
        <div className="row">
          <BackButton name="к темам" />
        </div>
      </div>
      <div className="container mt-2">
        <HeaderBold name={topic.name} />
        <HeaderLight name="Вопрос" />
        <div className="mt-3" id="question">
          <div id="questionBody">{question.q}</div>
        </div>
        <Answer answer={question.a} />
        <div className="d-grid gap-2">
          <button
            id="switchQuestion"
            className="btn btn-scd"
            type="button"
            onClick={refreshPage}
          >
            Другой вопрос
          </button>
        </div>
      </div>
    </div>
  );
}

export default Question;
