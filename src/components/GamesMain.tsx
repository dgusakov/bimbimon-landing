import React from 'react';
import '../css/App.css';
import { IGame, GAMES } from '../data/games';
import ListButtonWithArrow from './navs/ListButtonWithArrow';
import HeaderBoldCenter from './labels/HeaderBoldCenter';
import ListItem from './navs/ListItem';

interface GamesMainProps {
  path?: string;
}

const GamesMain: React.FC<GamesMainProps> = ({ path = '.' }) => {
  return (
    <div>
      <div className="container mb-4">
        <HeaderBoldCenter name="Выберите игру" />
      </div>
      <div className="container">
        {GAMES.map((game: IGame, index: number) => (
          <ListButtonWithArrow
            displayName={game.displayName}
            link={`${path}/${game.name}`}
            key={index}
          />
        ))}
        <ListItem displayName="Больше книг-игр уже скоро!" />
      </div>
    </div>
  );
};

export default GamesMain;
