import "../css//App.css";
import { getGame, getGameTopic } from "../data/questions";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListButtonWithArrow from "./navs/ListButtonWithArrow";
import HeaderBold from "./labels/HeaderBold";
import HeaderLight from "./labels/HeaderLight";
import NotFound from "./NotFound";

function Quiz(props: any) {
  // Get the 'path' prop from the component's props or set it to "."
  let path = props.path ? props.path : ".";

  // Get the URL parameters
  let urlParams = useParams();

  try {
    // Get the game data based on the 'game' parameter from the URL
    const game = getGame(urlParams.game);

    return (
      <div>
        <div className="container mb-4">
          {/* Display the header for the game */}
          <HeaderLight name="Вопросы к игре" />
          <HeaderBold name={'"' + game.displayName + '"'} />
        </div>
        <div className="container mb-4">
          {/* Render a list of topics as buttons */}
          {game.topics.map((el: any, index: number) => (
            <ListButtonWithArrow
              displayName={el.displayName}
              link={path + "/" + urlParams.game + "/" + el.name}
              key={index}
              // onClick={showNextQuestion} // This line seems to be commented out, so it's not used here
            />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    // If an error occurs while fetching game data, display the NotFound component
    console.error(error);
    return <NotFound />;
  }
}

export default Quiz;
