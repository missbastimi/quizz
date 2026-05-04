import React, { useState } from 'react';
import Results from './results';

const questionBank = [
  {
    question: 'Who is the president of Ghana?',
    options: ['John Dramani Mahama', 'Nana Addo Danquah'],
    answer: 'John Dramani Mahama',
    id: 1,
  },
  {
    question: 'HTML + JS =',
    options: ['XML', 'JSX'],
    answer: 'JSX',
    id: 2,
  },
  {
    question: '5+3=',
    options: ['53', '8'],
    answer: '8',
    id: 3,
  },
];

function Quiz() {
  const initialAnswers = [null, null, null];
  const [userAnswers, setUserAnswers] = useState(initialAnswers);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const selectedAnswer = userAnswers[currentQuestion];

  function handleSelectOption(option) {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = option;

    setUserAnswers(newUserAnswers);
  }

  function goToNext() {
    if (currentQuestion === questionBank.length - 1) {
      setIsQuizFinished(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  }
  function goToPrev() {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }

  function restartQuiz() {
    setUserAnswers(initialAnswers);
    setCurrentQuestion(0);
    setIsQuizFinished(false);
  }

  if (isQuizFinished) {
    return (
      <Results
        userAnswers={userAnswers}
        questionBank={questionBank}
        restartQuiz={restartQuiz}
      />
    );
  }

  return (
    <div>
      <h2>Question {currentQuestion + 1}</h2>

      <p className="question">{questionBank[currentQuestion].question}</p>

      {questionBank[currentQuestion].options.map((option) => (
        <button
          key={questionBank.id}
          className={'option' + (selectedAnswer === option ? 'selected' : '')}
          onClick={() => handleSelectOption(option)}
        >
          {option}
        </button>
      ))}

      <div className="nav-buttons">
        <button onClick={goToPrev} disabled={currentQuestion === 0}>
          Previous
        </button>
        <button onClick={goToNext} disabled={!selectedAnswer}>
          {currentQuestion === questionBank.length - 1 ? 'finish quiz' : 'next'}
        </button>
      </div>
    </div>
  );
}

export default Quiz;
