import "../css//App.css";
import { getGameTopic } from "../data/questions";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "./navs/BackButton";
import HeaderBold from "./labels/HeaderBold";
import HeaderLight from "./labels/HeaderLight";
import Answer from "./functional/Answer";
import NotFound from "./NotFound";

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

function shuffleArray(array: any[]): any[] {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}
function Question(props: any) {
  let urlParams = useParams();
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [allQuestionsShown, setAllQuestionsShown] = useState<boolean>(false);

  useEffect(() => {
    const topic = getGameTopic(urlParams.game, urlParams.topic);
    const shuffledQuestions = shuffleArray(topic.questions);
    setQuestions(shuffledQuestions);
    setCurrentQuestionIndex(0);
    setAllQuestionsShown(false);
  }, [urlParams.game, urlParams.topic]);

  const showNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setAllQuestionsShown(true);
    }
  };

  try {
    const topic = getGameTopic(urlParams.game, urlParams.topic);

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
              <div id="questionBody">Все вопросы из этой темы уже показаны.</div>
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
              <button
                id="switchQuestion"
                className="btn btn-scd"
                type="button"
                disabled
              >
                Все вопросы из этой темы уже показаны
              </button>
            ) : (
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
estion;
