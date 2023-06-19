import React, { useEffect, useState } from 'react';
import StartUp from './components/StartUp/StartUp';
import QuestionList from './components/Questions/QuestionList';
import Timer from './components/Timer/Timer';
import axios from 'axios';
import './App.css'


const testQuestions = [
  {
      category: "Science & Nature",
      type: "multiple",
      difficulty: "easy",
      question: "How many planets are in our Solar System?",
      correct_answer: "Eight",
      incorrect_answers: [
          "Nine",
          "Seven",
          "Ten"
      ]
  },
  {
      category: "Science & Nature",
      type: "multiple",
      difficulty: "medium",
      question: "All the following metal elements are liquids at or near room temperature EXCEPT:",
      correct_answer: "Beryllium",
      incorrect_answers: [
          "Gallium",
          "Caesium",
          "Mercury"
      ]
  },
  {
      category: "Science & Nature",
      type: "multiple",
      difficulty: "medium",
      question: "How many officially recognized dwarf planets in the solar system are named after Polynesian deities?",
      correct_answer: "2",
      incorrect_answers: [
          "0",
          "1",
          "5"
      ]
  },
  {
      category: "Science & Nature",
      type: "multiple",
      difficulty: "hard",
      question: "Which horizon in a soil profile consists of bedrock?",
      correct_answer: "R",
      incorrect_answers: [
          "O",
          "B",
          "D"
      ]
  },
  {
      category: "Science & Nature",
      type: "boolean",
      difficulty: "hard",
      question: "It was once believed that injecting shark cartilage into people would prevent them from contracting cancer.",
      correct_answer: "True",
      incorrect_answers: [
          "False"
      ]
  },
  {
      category: "Science & Nature",
      type: "boolean",
      difficulty: "easy",
      question: "Salt is 100% composed of Sodium.",
      correct_answer: "False",
      incorrect_answers: [
          "True"
      ]
  },
  {
      category: "Science & Nature",
      type: "multiple",
      difficulty: "easy",
      question: "Human cells typically have how many copies of each gene?",
      correct_answer: "2",
      incorrect_answers: [
          "1",
          "4",
          "3"
      ]
  },
  {
      category: "Science & Nature",
      type: "multiple",
      difficulty: "easy",
      question: "What is the standard atomic weight of a Plutonium nucleus?",
      correct_answer: "244",
      incorrect_answers: [
          "94",
          "481",
          "128"
      ]
  },  
]

function App() {
    const [questions, setQuestions] = useState([]);

    //Fetch API Data
    const fetchData = async () => {
      try {
        const response = await axios.get("https://opentdb.com/api.php?amount=10&category=17");
      await setQuestions(response.data.results)
      } catch(error){
        console.log(error)
      }      
    }

    useEffect(() => {
      fetchData()
    },[])

    //Set State of startup screen

    const [quizDisplay, setQuizDisplay] = useState(false)
    const [startUpDisplay, setStartUpDisplay] = useState(true)

    const handleClick = () => {
      setQuizDisplay(!quizDisplay)
      setStartUpDisplay(!startUpDisplay)
    }


  return (
    <div className="App">
      {startUpDisplay && <StartUp />}
      {startUpDisplay && <button id="homeBtn" type='submit' onClick={handleClick}>Begin Quiz</button>}
      {quizDisplay && <QuestionList questions={questions}/>}
    </div>
  )
}

export default App


