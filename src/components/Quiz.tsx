import "../css//App.css";
import questions from "../data/questions.json";
import React from "react";
import { useParams } from "react-router-dom";
import ButtonWithArrow from "./navs/ButtonWithArrow";
import HeaderBold from "./labels/HeaderBold";
import HeaderLight from "./labels/HeaderLight";

function Quiz(props: any) {
  let path = props.path ? props.path : ".";
  let params = useParams();
  const [game] = questions.filter((el) => el.name === params.game);
  return (
    <div>
      <div className="container mb-3">
        <HeaderLight name="Вопросы к игре" />
        <HeaderBold name={'"' + game.displayName + '"'} />
      </div>
      <div className="container">
        {game.topics.map((el: any, index: number) => (
          <ButtonWithArrow
            displayName={el.displayName}
            link={path + "/" + game.name + "/" + el.name}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Quiz;
