import '../../css/App.css';
import React, { useState } from 'react';
import HeaderLight from '../labels/HeaderLight';

function Answer(props: any) {
  // State to track whether the answer is visible or hidden
  const [showAnswer, setShowAnswer] = useState(false);

  // Function to toggle the visibility of the answer
  const toggleAnswer = () => {
    setShowAnswer((prevShowAnswer) => !prevShowAnswer);
  };

  return (
    <div>
      {/* The answer section, hidden by default if showAnswer is false */}
      <div id="answer" style={{ display: showAnswer ? 'block' : 'none' }}>
        <HeaderLight name="Ответ" />
        <div className="mt-3" id="question">
          <div id="answerBody">{props.children}</div>
        </div>
      </div>
      <div className="d-grid gap-2 mb-2 mt-4">
        {/* Button to show the answer when clicked, visible if showAnswer is false */}
        <button
          id="showAnswer"
          className="btn btn-main"
          type="button"
          onClick={toggleAnswer}
          style={{ display: showAnswer ? 'none' : 'block' }}
        >
          Узнать ответ
        </button>
        {/* Button to hide the answer when clicked, visible if showAnswer is true */}
        <button
          id="hideAnswer"
          className="btn btn-main"
          type="button"
          onClick={toggleAnswer}
          style={{ display: showAnswer ? 'block' : 'none' }}
        >
          Скрыть ответ
        </button>
      </div>
    </div>
  );
}

export default Answer;
