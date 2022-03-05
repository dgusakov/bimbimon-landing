import "../css//App.css";
import questions from "../data/questions.json";
import React from "react";
import { useParams } from "react-router-dom";
import { Row } from "react-bootstrap";
import NotFound from "./NotFound";

function Quiz(props: any) {
  let path = props.path ? props.path : "."
  let params = useParams();
  const [game] = questions.filter((el) => el.name == params.game);
  return (
    <div>
      <div className="container mt-3">
        <span className="header-light">Вопросы к игре</span>
      </div>
      <div className="container mb-4 mt-1">
        <span className="header-bold">&quot;{game.displayName}&quot;</span>
      </div>
      <div className="container">
        {game.topics.map((el: any, index: number) => (
          <div className="row" key={index}>
            <a href={path + "/" + game.name + "/" + el.name} className="text-black text-link">
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

export default Quiz;
