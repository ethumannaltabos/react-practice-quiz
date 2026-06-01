
import { useEffect, useState } from "react";
import Results from "./results";
import axios from "axios";

function Quiz({ returnHome }) {

    const [questionBank, setQuestionBank] = useState([])
    const [userAnswers, setUserAnswers] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const selectedAnswer = userAnswers[currentQuestion]
    const [isQuizFinished, setIsQuizFinished] = useState(false)

    useEffect(() => {
        axios.get("/questions.json")
            .then((response) => {
                setQuestionBank(response.data)
                setUserAnswers(new Array(response.data.length).fill(null))
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    function handleSelectOption(option) {
        const newUserAnswers = [...userAnswers]
        newUserAnswers[currentQuestion] = option
        setUserAnswers(newUserAnswers)
    }

    function goToNext() {
        if (currentQuestion == (questionBank.length - 1)) {
            setIsQuizFinished(true)
        } else {
            setCurrentQuestion(currentQuestion + 1)
        }
    }

    function goToPrev() {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1)
        }
    }

    function restartQuiz() {
        setUserAnswers(new Array(questionBank.length).fill(null))
        setCurrentQuestion(0)
        setIsQuizFinished(false)
    }

    if (questionBank.length === 0) {
        return <p>No questions found.</p>
    }

    if (isQuizFinished) {
        return (
            <Results 
                userAnswers={userAnswers} 
                questionBank={questionBank} 
                restartQuiz={restartQuiz}
                returnHome={returnHome}
            />
        )
    }

    return (
        <div> 
            <h2> Question {currentQuestion + 1}</h2>
            <p className="question"> {questionBank[currentQuestion].question} </p>

            {questionBank[currentQuestion].options.map((option) => (
                <button
                    key={option}
                    className={"option" + (selectedAnswer == option ? " selected" : "")}
                    onClick={() => handleSelectOption(option)}
                >
                    {option}
                </button>
            ))}

            <div className="nav-buttons">
                <button onClick={goToPrev} disabled={currentQuestion == 0}> Previous </button>
                <button onClick={goToNext} disabled={!selectedAnswer} >
                    {currentQuestion == (questionBank.length - 1) ? "Finish Quiz" : "Next"} </button>
            </div>

        </div>
    )
}

export default Quiz