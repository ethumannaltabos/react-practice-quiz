
import { useState } from "react";
import Results from "./results";

function Quiz() {
    const questionBank = [
        {
            question: "What is the capital of Ohio?",
            options: ["Cincinnati", "New York", "Columbus", "Cleveland"],
            answer: "Columbus",
        },
        {
            question: "How many states are in the US?",
            options: ["13", "50", "100", "1"],
            answer: "50",
        },
        {
            question: "What is 8 divided by 2?",
            options: ["8", "2", "10", "4"],
            answer: "4",
        },
    ]

    const initialAnswers = [null, null, null]
    const [userAnswers, setUserAnswers] = useState(initialAnswers)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const selectedAnswer = userAnswers[currentQuestion]
    const [isQuizFinished, setIsQuizFinished] = useState(false)

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
        setUserAnswers(initialAnswers)
        setCurrentQuestion(0)
        setIsQuizFinished(false)
    }

    if (isQuizFinished) {
        return (
            <Results 
                userAnswers={userAnswers} 
                questionBank={questionBank} 
                restartQuiz={restartQuiz}
            />
        )
    }

    return (
        <div> 
            <h2> Question {currentQuestion + 1}</h2>
            <p className="question"> {questionBank[currentQuestion].question} </p>

            {questionBank[currentQuestion].options.map((option) => (
                <button className={"option" + (selectedAnswer == option ? " selected" : "")} onClick={() => handleSelectOption(option)}> {option} </button>
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