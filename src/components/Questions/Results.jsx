import React, { useState } from 'react'
import App from '../../App';

const Results = ({answers}) => {

const [results, setResults] = useState(true)
const [startUp, setStartUp] = useState(false)

const handleClick = () => {
    setResults(!results)
    setStartUp(!startUp)
    window.location.reload(false);
}


if( answers <= 3) {
    return <div>{results && <div> <h3>You only scored {answers}! Did you not turn up to school?</h3><button className="answerBtn" onClick={handleClick}>Return Home</button></div>}</div>
} else if(answers >3 && answers <=6) {
    return <div>{results && <div><h3>You scored {answers}! Not bad but not good either, can do better!</h3><button className="answerBtn" onClick={handleClick}>Return Home</button></div>}</div>
} else if(answers >6 && answers <=9) {
    return <div>{results && <div><h3>You scored {answers}! That's a decent score, be proud of yourself!</h3><button className="answerBtn" onClick={handleClick}>Return Home</button></div>}</div>
} else {
    return <div>{results && <div><h3>Wow a perfect score of {answers}! Now that's impressive!</h3><button className="answerBtn" onClick={handleClick}>Return Home</button></div>}</div>
}

}

export default Results
