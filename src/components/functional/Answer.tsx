import "../../css//App.css";
import React from "react";
import HeaderLight from "../labels/HeaderLight";

function Answer(props: any) {
  const [showAnswer, setShowAnswer] = React.useState(false);
  const showAnswerFunc = () => setShowAnswer(true);
  return (
    <div>
      <div id="answer" style={{ display: showAnswer ? "block" : "none" }}>
        <HeaderLight name="Ответ" />
        <div className="mt-3" id="question">
          <div id="answerBody">{props.children}</div>
        </div>
      </div>
      <div className="d-grid gap-2 mb-2 mt-4">
        <button
          id="showAnswer"
          className="btn btn-main"
          type="button"
          onClick={showAnswerFunc}
          style={{ display: showAnswer ? "none" : "block" }}
        >
          Узнать ответ
        </button>
      </div>
    </div>
  );
}

export default Answer;
