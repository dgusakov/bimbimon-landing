import '../css/App.css';
import { IGame, Questions } from '../data/questions';
import ListButtonWithArrow from './navs/ListButtonWithArrow';
import HeaderBoldCenter from './labels/HeaderBoldCenter';
import ListItem from './navs/ListItem';

interface QuizMainProps {
  path?: string;
}

// Component QuizMain, displaying the list of games
function QuizMain({ path = '.' }: QuizMainProps) {
  return (
    <div>
      <div className="container mb-4">
        <HeaderBoldCenter name="Выберите игру" />
      </div>
      <div className="container">
        {Questions.map((el: IGame, index: number) => (
          // Display a button with an arrow for each game from the Questions array
          <ListButtonWithArrow
            displayName={el.displayName}
            link={`${path}/${el.name}`}
            key={index}
          />
        ))}
        <ListItem displayName="Больше книг-игр уже скоро!" />
      </div>
    </div>
  );
}

export default QuizMain;
