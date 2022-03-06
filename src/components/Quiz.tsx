import "../css//App.css";
import { getGame } from "../data/questions";
import React from "react";
import { useParams } from "react-router-dom";
import ButtonWithArrow from "./navs/ButtonWithArrow";
import HeaderBold from "./labels/HeaderBold";
import HeaderLight from "./labels/HeaderLight";
import NotFound from "./NotFound";

function Quiz(props: any) {
  let path = props.path ? props.path : ".";
  let urlParams = useParams();
  try {
    const game = getGame(urlParams.game);
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
              link={path + "/" + urlParams.game + "/" + el.name}
              key={index}
            />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
    return <NotFound />;
  }
}

export default Quiz;
