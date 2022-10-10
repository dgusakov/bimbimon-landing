import "../../css/App.css";
import "../../css/Blockchain.css";
import React from "react";
import Block from "./Block";
import HeaderBoldCenter from "../labels/HeaderBoldCenter";
import { refreshPage } from "../../heplers/index";

function BlockchainChild(props: any) {
  const [win, setWin] = React.useState(false);
  const youWin = () => setWin(true);
  const [loss, setLoss] = React.useState(false);
  const youLoose = () => setLoss(true);
  const [clicked, setClicked] = React.useState("");
  const updateLastClicked = (index: string) => {
    return () => {
      const newClicked = clicked + index;
      setClicked(newClicked);
      console.log(newClicked);
      console.log(props.seq);
      if (newClicked.length >= 4) {
        if (newClicked === props.seq) {
          youWin();
        } else {
          youLoose();
        }
      }
    };
  };
  const resetStates = () => {
    setWin(false);
    setLoss(false);
    setClicked("");
  };
  const isActivated = (index: string) => {
    return clicked.includes(index);
  };
  return (
    <div className="container">
      <div
        className="container"
        style={{ display: !win && !loss ? "block" : "none" }}
      >
        <HeaderBoldCenter name="Click on blocks in the correct order" />
        <div className="container block-grid justify-content-center mb-2">
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
      <div className="container" style={{ display: win ? "block" : "none" }}>
        <HeaderBoldCenter name="Correct!" />
        <div className="container block-grid justify-content-center mb-2">
          <Block className="block-line m-2" id="5" group={props.group} />
        </div>
        <div className="d-grid gap-2 mb-2 mt-4">
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
      <div className="container" style={{ display: loss ? "block" : "none" }}>
        <HeaderBoldCenter name="Oops! Wrong block order..." />
        <div className="d-grid gap-2 mb-2 mt-4">
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
