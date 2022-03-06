import "../css//App.css";
import questions from "../data/questions.json";
import React from "react";
import ButtonWithArrow from "./navs/ButtonWithArrow";
import HeaderBoldCenter from "./labels/HeaderBoldCenter";


function QuizMain(props: any) {
  let path = props.path ? props.path : "."
  return (
    <div>
      <div className="container mb-4">
        <HeaderBoldCenter name="Выберите игру" />
      </div>
      <div className="container">
        {questions.map((el: any, index: number) => (
          <ButtonWithArrow displayName={el.displayName} link={path + "/"+ el.name} index={index} />
          ))}
      </div>
    </div>
  );
}

export default QuizMain;
