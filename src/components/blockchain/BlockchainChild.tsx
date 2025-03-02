import "../../css/App.css";
import "../../css/Blockchain.css";
import { useState, useEffect } from "react";
import Block, { BigBlock } from "./Block";
import HeaderBoldCenter from "../labels/HeaderBoldCenter";
import { refreshPage } from "../../heplers/index";
import type { BlockGroup } from '../../data/blockchain';
import confetti from 'canvas-confetti';

interface BlockchainChildProps {
  seq: string;
  group: number;
  difficulty: 'easy' | 'hard';
  onDifficultyChange: (difficulty: 'easy' | 'hard') => void;
  blockGroups: BlockGroup[];
}

interface GameStats {
  score: number;
  timeElapsed: number;
  difficulty: 'easy' | 'hard';
}

function BlockchainChild({ seq, group, difficulty, onDifficultyChange, blockGroups }: BlockchainChildProps) {
  const [win, setWin] = useState(false);
  const [loss, setLoss] = useState(false);
  const [clicked, setClicked] = useState("");
  const [hint, setHint] = useState(false);
  const [showWrongAnimation, setShowWrongAnimation] = useState(false);
  const [gameStats, setGameStats] = useState<GameStats>({
    score: 0,
    timeElapsed: 0,
    difficulty: difficulty
  });
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [showAnimation, setShowAnimation] = useState(false);

  // Timer effect
  useEffect(() => {
    if (!win && !loss) {
      const interval = setInterval(() => {
        setGameStats(prev => ({
          ...prev,
          timeElapsed: prev.timeElapsed + 1
        }));
      }, 1000);
      setTimer(interval);
      return () => clearInterval(interval);
    }
  }, [win, loss]);

  const isActivated = (index: string) => clicked.includes(index);

  const calculateScore = (timeElapsed: number, difficulty: GameStats['difficulty']) => {
    const baseScore = 1000;
    const timeDeduction = timeElapsed * 10;
    const difficultyMultiplier = {
      easy: 1,
      hard: 2
    }[difficulty];
    
    return Math.max(0, Math.floor((baseScore - timeDeduction) * difficultyMultiplier));
  };

  const updateLastClicked = (index: string) => {
    return () => {
      setShowAnimation(true);
      setTimeout(() => setShowAnimation(false), 300);

      const isActive = isActivated(index);
  
      if (isActive) {
        const newClicked = clicked.replace(index, "");
        setClicked(newClicked);
      } else {
        const newClicked = clicked + index;
        setClicked(newClicked);
  
        if (newClicked.length >= seq.length) {
          if (newClicked === seq) {
            const finalScore = calculateScore(gameStats.timeElapsed, gameStats.difficulty);
            setGameStats(prev => ({ ...prev, score: finalScore }));
            youWin();
          } else {
            youLoose();
          }
          if (timer) clearInterval(timer);
        }
      }
    };
  };

  const youWin = () => {
    setWin(true);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FFD700', '#FFA500', '#FF4500']
    });
  };

  const youLoose = () => {
    setShowWrongAnimation(true);
    setTimeout(() => {
      setShowWrongAnimation(false);
      setLoss(true);
    }, 600);
  };

  const resetStates = () => {
    setWin(false);
    setLoss(false);
    setClicked("");
    setGameStats(prev => ({
      ...prev,
      timeElapsed: 0,
      score: 0
    }));
    setHint(false);
  };

  const changeDifficulty = (newDifficulty: 'easy' | 'hard') => {
    setGameStats(prev => ({ ...prev, difficulty: newDifficulty }));
    onDifficultyChange(newDifficulty);
    resetStates();
  };

  // Render the BlockchainChild component
  return (
    <div className="container">
      <div className="difficulty-selector mb-3" style={{ display: !win && !loss ? "block" : "none" }}>
        <div className="difficulty-title">
          <h2>Difficulty: {difficulty.toUpperCase()}</h2>
        </div>
        <div className="btn-group">
          <button 
            className={`btn ${difficulty === 'easy' ? 'btn-main' : 'btn-outline-main'}`} 
            onClick={() => changeDifficulty('easy')}
          >
            Easy
          </button>
          <button 
            className={`btn ${difficulty === 'hard' ? 'btn-main' : 'btn-outline-main'}`} 
            onClick={() => changeDifficulty('hard')}
          >
            Hard
          </button>
        </div>
      </div>

      <div className="game-stats mb-3" style={{ display: !win && !loss ? "block" : "none" }}>
        <div className="timer">Time: {gameStats.timeElapsed}s</div>
      </div>

      <div className="container" style={{ display: !win && !loss ? "block" : "none" }}>
        <div className="game-instruction">
          Click on blocks in the correct order
        </div>
        <div className={`container block-grid justify-content-center mb-2 ${showAnimation ? 'pulse-animation' : ''} ${showWrongAnimation ? 'shake-animation' : ''}`}>
          <Block
            className="tile-red block m-2"
            id="1"
            onClick={updateLastClicked("1")}
            group={group}
            activated={isActivated("1")}
            difficulty={difficulty}
            blockGroups={blockGroups}
          />
          <Block
            className="tile tile-green block m-2"
            id="2"
            onClick={updateLastClicked("2")}
            group={group}
            activated={isActivated("2")}
            difficulty={difficulty}
            blockGroups={blockGroups}
          />
          <Block
            className="tile tile-blue block m-2"
            id="3"
            onClick={updateLastClicked("3")}
            group={group}
            activated={isActivated("3")}
            difficulty={difficulty}
            blockGroups={blockGroups}
          />
          <Block
            className="tile tile-yellow block m-2"
            id="4"
            onClick={updateLastClicked("4")}
            group={group}
            activated={isActivated("4")}
            difficulty={difficulty}
            blockGroups={blockGroups}
          />
        </div>
      </div>
      
      <div className="buttons-and-hint-container" style={{ display: !win && !loss ? "flex" : "none" }}>
        <div className="btn-for-startOver-and-hint">
          <button
            id="showAnswer"
            className="btn btn-main"
            type="button"
            onClick={() => setHint(prev => !prev)}
          >
            {hint ? 'Hide hint' : 'Take a hint'}
          </button>
          <button
            className="btn btn-main"
            type="button"
            onClick={refreshPage}
          >
            Start over
          </button>
        </div>
      
        {hint && <div className="hint-container">
          <p className="hint-label">Click the blocks in this order:</p>
          <div className="sequence-display">
            {seq.split('').map((num, index) => (
              <div key={index} className="sequence-number">
                {num}
              </div>
            ))}
          </div>
          <p className="hint-label">Take your time - you've got this!</p>
        </div>}
      </div>
      
      {/* Display the "Correct!" message and big block when the user wins */}
      <div className="container" style={{ display: win ? "block" : "none" }}>
        <div className="win-message">
          <h2>Correct!</h2>
        </div>
        <div className="score-display mb-3">
          <h3>Final Score: {gameStats.score}</h3>
          <p>Time: {gameStats.timeElapsed}s</p>
          <p>Difficulty: {gameStats.difficulty}</p>
        </div>
        <div className="container big-block">
          <div className="container big-block-wrapper">
            <BigBlock group={group} blockGroups={blockGroups} />
          </div>
        </div>
        <div className="d-grid gap-2 mb-2 mt-4">
          <button
            className="btn btn-main"
            type="button"
            onClick={refreshPage}
          >
            New game
          </button>
        </div>
      </div>
      
      {/* Display the "Almost there!" message when the user loses */}
      <div className="container" style={{ display: loss ? "block" : "none" }}>
        <div className="loss-message">
          <h2>Almost there!</h2>
        </div>
        <div className="loss-display mb-3">
          <p>Your sequence: <span className="user-sequence">{clicked}</span></p>
          <p>Correct sequence: <span className="correct-sequence">{seq}</span></p>
          <p className="encouragement">Keep trying - you're getting closer!</p>
          <div className="stats-summary">
            <p>Time spent: {gameStats.timeElapsed}s</p>
            <p>Difficulty: {gameStats.difficulty}</p>
          </div>
        </div>
        <div className="d-grid gap-2 mb-2 mt-4">
          <button
            className="btn btn-main"
            type="button"
            onClick={resetStates}
          >
            Try again
          </button>
          <button
            className="btn btn-outline-main"
            type="button"
            onClick={refreshPage}
          >
            New game
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlockchainChild;
