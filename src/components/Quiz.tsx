import "../css//App.css";
import { getGame, getGameTopic } from "../data/questions";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListButtonWithArrow from "./navs/ListButtonWithArrow";
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
        <div className="container mb-4">
          <HeaderLight name="Вопросы к игре" />
          <HeaderBold name={'"' + game.displayName + '"'} />
        </div>
        <div className="container mb-4">
          {game.topics.map((el: any, index: number) => (
            <ListButtonWithArrow
              displayName={el.displayName}
              link={path + "/" + urlParams.game + "/" + el.name}
              key={index}
              //onClick={showNextQuestion}
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
