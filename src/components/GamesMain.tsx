import "../css//App.css";
import { IGame, GAMES } from "../data/games";
import React from "react";
import ListButtonWithArrow from "./navs/ListButtonWithArrow";
import HeaderBoldCenter from "./labels/HeaderBoldCenter";
import ListItem from "./navs/ListItem";


function GamesMain(props: any) {
  let path = props.path ? props.path : "."
  return (
    <div>
      <div className="container mb-4">
        <HeaderBoldCenter name="Выберите игру" />
      </div>
      <div className="container">
        {GAMES.map((el: IGame, index: number) => (
          <ListButtonWithArrow displayName={el.displayName} link={path + "/"+ el.name} key={index} />
          ))}
        <ListItem displayName="Больше книг-игр уже скоро!" />
      </div>
    </div>
  );
}

export default GamesMain;
