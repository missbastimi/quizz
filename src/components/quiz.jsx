import React, { useState } from 'react';
const questionBank = [
  {
    question: 'Who is the president of Ghana?',
    options: ['John Dramani Mahama', 'Nana Addo Danquah'],
    answer: 'John Dramani Mahama',
  },
  {
    question: 'Who is the president of Ghana?',
    options: ['John Dramani Mahama', 'Nana Addo Danquah'],
    answer: 'John Dramani Mahama',
  },
  {
    question: 'Who is the president of Ghana?',
    options: ['John Dramani Mahama', 'Nana Addo Danquah'],
    answer: 'John Dramani Mahama',
  },
];

const initialAnswers = ['null', 'null', 'null'];

function Quiz() {
  const [userAnswers, setUserAnswers] = useState(initialAnswers);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  function handleSelectOption(option) {}

  return (
    <div>
      <h2>Question 1</h2>
      <p className="question">{questionBank[0].question}</p>

      {questionBank[0].options.map((option) => (
        <button className="option" onClick={() => handleSelectOption(option)}>
          {option}
        </button>
      ))}

      <p>Option Selected = {optionSelected}</p>

      <div className="nav-buttons">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
}

export default Quiz;
