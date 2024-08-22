import React from 'react';
import '../../css/App.css';
import { getGame, IGame } from '../../data/questions';
import { useParams } from 'react-router-dom';
import ListButtonWithArrow from '../navs/ListButtonWithArrow';
import HeaderBold from '../labels/HeaderBold';
import HeaderLight from '../labels/HeaderLight';
import NotFound from '../NotFound';

interface QuizProps {
  path?: string;
}

interface UrlParams extends Record<string, string | undefined> {
  game: string;
}

const Quiz: React.FC<QuizProps> = ({ path = '.' }) => {
  // Get the URL parameters
  const urlParams = useParams<UrlParams>();

  try {
    // Get the game data based on the 'game' parameter from the URL
    const game: IGame = getGame(urlParams.game);

    return (
      <div>
        <div className="container mb-4">
          <HeaderLight name="Вопросы к игре" />
          <HeaderBold name={`"${game.displayName}"`} />
        </div>
        <div className="container mb-4">
          {/* Render a list of topics as buttons */}
          {game.topics.map((el: any, index: number) => (
            <ListButtonWithArrow
              displayName={el.displayName}
              link={`${path}/${urlParams.game}/${el.name}`}
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
};

export default Quiz;
