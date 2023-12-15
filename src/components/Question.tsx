import "../css//App.css";
import { getGameTopic } from "../data/questions";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "./navs/BackButton";
import HeaderBold from "./labels/HeaderBold";
import HeaderLight from "./labels/HeaderLight";
import Answer from "./functional/Answer";
import NotFound from "./NotFound";
import { refreshPage } from "../heplers";

// Function to generate a random integer between 0 and max (exclusive)
function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

// Function to shuffle an array randomly
function shuffleArray(array: any[]): any[] {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = getRandomInt(i + 1);
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function Question(props: any) {
  // Get the URL parameters
  let urlParams = useParams();

  // State variables
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [allQuestionsShown, setAllQuestionsShown] = useState<boolean>(false);

  // Load the questions for the current topic on component mount and when topic changes
  useEffect(() => {
    const topic = getGameTopic(urlParams.game, urlParams.topic);
    const shuffledQuestions = shuffleArray(topic.questions);
    setQuestions(shuffledQuestions);
    setCurrentQuestionIndex(0);
    setAllQuestionsShown(false);
  }, [urlParams.game, urlParams.topic]);

  // Function to handle the "Next Question" button click
  const showNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      // If there are more questions, show the next one
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      // If all questions have been shown, disable the button
      setAllQuestionsShown(true);
    }
  };

  try {
    const topic = getGameTopic(urlParams.game, urlParams.topic);

    // Check if there are no questions to show
    if (questions.length === 0) {
      return (
        <div>
          <div className="container mt-2" id="back">
            <div className="row">
              <BackButton name="к темам" />
            </div>
          </div>
          <div className="container mt-2">
            <HeaderBold name={topic.displayName} />
            <HeaderLight name="Вопрос" />
            <div className="mt-3" id="question">
              <div id="questionBody"> Вопросов по теме не найдено </div>
            </div>
          </div>
        </div>
      );
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
      <div>
        <div className="container mt-2" id="back">
          <div className="row">
            <BackButton name="к темам" />
          </div>
        </div>
        <div className="container mt-2">
          <HeaderBold name={topic.displayName} />
          <HeaderLight name="Вопрос" />
          <div className="mt-3" id="question">
            <div id="questionBody">{currentQuestion.question}</div>
          </div>
          <Answer>{currentQuestion.answer}</Answer>
          <div className="d-grid gap-2 mb-4">
            {allQuestionsShown ? (
              // If all questions have been shown, disable the button
              <div>
              <button
              id="restartQuiz"
              className="btn btn-scd btn-block"
              type="button"
              onClick={refreshPage}
            >
              Начать заново
            </button>
            </div>
            ) : (
              // Show the "Next Question" button
              <button
                id="switchQuestion"
                className="btn btn-scd"
                type="button"
                onClick={showNextQuestion}
              >
                Другой вопрос
              </button>
            )}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
    return <NotFound />;
  }
}

export default Question;
