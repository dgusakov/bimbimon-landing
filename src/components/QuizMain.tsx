import "../css//App.css";
import questions from "../data/questions.json";
import React from "react";
import { Row } from "react-bootstrap";

function QuizMain(props: any) {
  let path = props.path ? props.path : "."
  return (
    <div>
      <div className="container mt-3 mb-5">
        <span className="header-light">Выберите игру</span>
      </div>
      <div className="container">
        {questions.map((el: any, index: number) => (
            <div className="row" key={index}>
            <a
              href={path + "/"+ el.name}
              className="text-black text-link"
            >
              <div className="row">
                <div className="col-auto">{el.displayName}</div>
                <div className="col col-1 px-1">&#8594;</div>
              </div>
              <hr className="mt-1" />
            </a>
          </div>
          ))}
      </div>
    </div>
  );
}

export default QuizMain;
