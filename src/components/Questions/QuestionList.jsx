import React, { useState } from 'react';
import Results from './Results'

let questionNumber = 0;
let correctAnswers = 0;

function QuestionList(questions) {

  let [count, setCount] = useState(1)
  const [currentQuestion, setCurrentQuestion] = useState(questions.questions[0].question)
  const [options, setOptions] = useState([...questions.questions[0].incorrect_answers, questions.questions[0].correct_answer])
  
  let correctAnswer = questions.questions[count - 1].correct_answer;
  
  

  function randomArrayShuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  const [results, setResults] = useState(false)
  const [quiz, setQuiz] = useState(true)


  const handleClick = (e) => {
    if(questionNumber < questions.questions.length && count <= 7){
      questionNumber += 1;
      setCount(count +=1);
      const nextQuestion = questions.questions[questionNumber].question;
      const nextOptions = [...questions.questions[questionNumber].incorrect_answers, questions.questions[questionNumber].correct_answer]
      setCurrentQuestion(nextQuestion)
      setOptions(nextOptions);
    } else {
      questionNumber = 0;
      setResults(!results)
      setQuiz(!quiz)
    }
    if(e.target.value == correctAnswer){
      correctAnswers += 1
    }    
  }

  return (
      <div>{quiz && <div className='questionCounter'>
      <h3>Question {count}/{questions.questions.length}</h3>
      </div>}
      {quiz && <div className="question">
        <h3>{currentQuestion}</h3>
      </div>}
      {quiz && <div className="answers">
        <ul>
        {randomArrayShuffle(options).map((q) => ((
            <li key={q}><button className="answerBtn" value={q} onClick={handleClick}>{q}</button></li>
        )))}
        </ul>
      </div>}
      {results && <Results answers={correctAnswers}/>}
    </div>
  )
}

export default QuestionList
