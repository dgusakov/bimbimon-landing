import "../css//App.css";
import { IGame, Questions } from "../data/questions"; // Import the IGame interface and the Questions array
import React from "react";
import ListButtonWithArrow from "./navs/ListButtonWithArrow";
import HeaderBoldCenter from "./labels/HeaderBoldCenter"; 
import ListItem from "./navs/ListItem";

// Component QuizMain, displaying the list of games
function QuizMain(props: any) {
  let path = props.path ? props.path : "."; // Define the path for links to games (can be passed through props)

  return (
    <div>
      <div className="container mb-4">
        <HeaderBoldCenter name="Выберите игру" /> {/* Header with bold styling and centered alignment */}
      </div>
      <div className="container">
        {Questions.map((el: IGame, index: number) => (
          // Display a button with an arrow for each game from the Questions array
          <ListButtonWithArrow displayName={el.displayName} link={path + "/"+ el.name} key={index} />
        ))}
        <ListItem displayName="<Больше книг-игр уже скоро>!" />
      </div>
    </div>
  );
}

export default QuizMain;
