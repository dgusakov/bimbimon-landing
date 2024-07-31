import '../css/App.css';
import { getGame, ITopic } from '../data/games';
import React from 'react';
import { useParams } from 'react-router-dom';
import HeaderBold from './labels/HeaderBold';
import HeaderLight from './labels/HeaderLight';
import TextWithHeader from './text/TextWithHeader';
import NotFound from './NotFound';

function Game(props: any) {
  let urlParams = useParams();
  try {
    const game = getGame(urlParams.game);
    return (
      <div>
        <div className="container mb-4">
          <HeaderLight name="Интерактивная игра" />
          <HeaderBold name={'"' + game.displayName + '"'} />
        </div>
        <div className="container mb-4">
          {game.content.map((topic: ITopic) => (
            <TextWithHeader name={topic.title} body={topic.body} />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
    return <NotFound />;
  }
}

export default Game;
