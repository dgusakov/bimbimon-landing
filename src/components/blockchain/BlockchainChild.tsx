import "../../css/App.css";
import "../../css/Blockchain.css";
import { useState } from "react";
import Block from "./Block";
import HeaderBoldCenter from "../labels/HeaderBoldCenter";
import { refreshPage } from "../../heplers/index";
import { BigBlock } from "./Block";
import confetti from 'canvas-confetti';

// BlockchainChild component
function BlockchainChild(props: any) {
  const [win, setWin] = useState(false);
  const youWin = () => setWin(true);

  const [loss, setLoss] = useState(false);
  const youLoose = () => setLoss(true);

  // State to keep track of the blocks clicked by the user
  const [clicked, setClicked] = useState("");

  // State to show or hide the hint
  const [hint, setHint] = useState(false);

  // Function to check if a block is activated (clicked)
  const isActivated = (index: string) => {
    return clicked.includes(index);
  };

  const updateLastClicked = (index: string) => {
    return () => {
      // Check if the block is already activated (clicked)
      const isActive = isActivated(index);
  
      if (isActive) {
        const newClicked = clicked.replace(index, "");
        setClicked(newClicked);
      } else {
        // If the block is not activated, add it to the clicked sequence
        const newClicked = clicked + index;
        setClicked(newClicked);
  
        // Check if the clicked sequence matches the correct sequence (props.seq)
        if (newClicked.length >= 4) {
          if (newClicked === props.seq) {
            youWin();
            confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }});
          } else {
            youLoose();
          }
        }
      }
    };
  };
  
  // Function to reset the game states
  const resetStates = () => {
    setWin(false);
    setLoss(false);
    setClicked("");
  };
  
  // Render the BlockchainChild component
  return (
    <div className="container">
      {/* Display the game if the user has not won or lost */}
      <div className="container" style={{ display: !win && !loss ? "block" : "none" }}>
        <HeaderBoldCenter name="Click on blocks in the correct order" />
        <div className="container block-grid justify-content-center mb-2">
          {/* Render the four blocks with Block component */}
          <Block
            className="tile-red block m-2"
            id="1"
            onClick={updateLastClicked("1")}
            group={props.group}
            activated={isActivated("1")}
          />
          <Block
            className="tile tile-green block m-2"
            id="2"
            onClick={updateLastClicked("2")}
            group={props.group}
            activated={isActivated("2")}
          />
          <Block
            className="tile tile-blue block m-2"
            id="3"
            onClick={updateLastClicked("3")}
            group={props.group}
            activated={isActivated("3")}
          />
          <Block
            className="tile tile-yellow block m-2"
            id="4"
            onClick={updateLastClicked("4")}
            group={props.group}
            activated={isActivated("4")}
          />
        </div>
      </div>
      
      <div className="conatiner block-grid justify-content-center mb-2" >
        {/* Show the "Take a hint" button */}
        <div className="btn-for-startOver-and-hint" style={{ display: !win && !loss ? "block" : "none" }}>
          <button
            id="showAnswer"
            className="btn btn-scd"
            type="button"
            onClick={() => setHint(prev => !prev)}
          >
            {hint ? 'Hide hint' : 'Take a hint'}
          </button>
        </div>
        {/* Show the "Start over" button */}
        <div className="btn-for-startOver-and-hint" style={{ display: !win && !loss ? "block" : "none" }}>
          <button
            className="btn btn-scd"
            type="button"
            onClick={refreshPage}
          >
            Start over
          </button>
        </div>
      
        {/* Show the hint if it is enabled */}
        {hint && <div className="container" style={{ display: !win && !loss ? "block" : "none" }}>
          <HeaderBoldCenter name={`The correct order is ${props.seq}`} />
        </div>}
      </div>
      
      {/* Display the "Correct!" message and big block when the user wins */}
      <div className="container" style={{ display: win ? "block" : "none" }}>
        <HeaderBoldCenter name="Correct!" />
        <div className="container big-block">
          <div className="container big-block-wrapper">
            <BigBlock group={props.group} />
          </div>
        </div>
        <div className="d-grid gap-2 mb-2 mt-4">
          {/* Show the "New game" button */}
          <button
            id="showAnswer"
            className="btn btn-main"
            type="button"
            onClick={refreshPage}
          >
            New game
          </button>
        </div>
      </div>
      
      {/* Display the "Oops! Wrong block order..." message when the user loses */}
      <div className="container" style={{ display: loss ? "block" : "none" }}>
        <HeaderBoldCenter name="Oops! Wrong block order..." />
        <div className="d-grid gap-2 mb-2 mt-4">
          {/* Show the "Try again" button */}
          <button
            id="showAnswer"
            className="btn btn-main"
            type="button"
            onClick={resetStates}
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlockchainChild;
