import "../css//App.css";
import { getGameTopic } from "../data/questions";
import React from "react";
import { useParams } from "react-router-dom";
import BackButton from "./navs/BackButton";
import HeaderBold from "./labels/HeaderBold";
import HeaderLight from "./labels/HeaderLight";
import Answer from "./functional/Answer";
import NotFound from "./NotFound";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function refreshPage() {
  window.location.reload();
}

function Question(props: any) {
  let urlParams = useParams();
  try {
    const topic = getGameTopic(urlParams.game, urlParams.topic);
    const question = topic.questions[getRandomInt(topic.questions.length)];
    return (
      <div>
        <div className="container mt-2" id="back">
          <div className="row">
            <BackButton name="к темам" />
          </div>
        </div>
        <div className="container mt-2">
          <HeaderBold name={topic.displayName} />
          <HeaderLight name="Вопрос" />
          <div className="mt-3" id="question">
            <div id="questionBody">{question.question}</div>
          </div>
          <Answer answer={question.answer} />
          <div className="d-grid gap-2 mb-4">
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
  } catch (error) {
    console.error(error);
    return <NotFound />;
  }
}

export default Question;
