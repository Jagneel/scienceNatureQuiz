import React from 'react';
import './allResults.css'

const AllResults = ({ questions, userAnswers }) => {

    const questionElements = questions.map((question, index) => (
        <div className={userAnswers[index] == question.correct_answer ? 'result-question' : 'incorrect'} key={index}>
            <h3>Question {index + 1}</h3>
            <h4 dangerouslySetInnerHTML={{ __html: question.question }}></h4>
            <div className="answer-section">
                <p>You answered: {userAnswers[index]}</p>
                <p>Correct answer: <span dangerouslySetInnerHTML={{ __html: question.correct_answer }}></span></p>
            </div>
        </div>
    ));

    return <div>{questionElements}</div>;
};

export default AllResults;
