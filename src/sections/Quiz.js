import React, { Component } from 'react';
import './Quiz.css'; // Import the stylesheet

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quizStarted: false,
      quizCompleted: false,
      score: 0,
      currentQuestion: 0,
      startTime: null,
      endTime: null,
      answers: [],
      questions: [
        {
          question: "What makes up the human skeletal system?",
          options: ["Bones", "Muscles", "Skin", "Ligaments"],
          correctAnswer: "Bones",
        },
        {
          question: "How much of the body's weight does the skeletal system account for?",
          options: ["10%", "20%", "30%", "40%"],
          correctAnswer: "20%",
        },
        {
          question: "What is the function of bones in the skeletal system?",
          options: ["To store oxygen", "To protect soft organs", "To generate electricity", "To produce hormones"],
          correctAnswer: "To protect soft organs",
        },
        {
          question: "What do bones work with as lever systems for body movement?",
          options: ["Blood vessels", "Nerves", "Muscles", "Skin"],
          correctAnswer: "Muscles",
        },
        {
          question: "Where does hematopoiesis primarily occur?",
          options: ["In the brain", "In the liver", "In the red marrow of bones", "In the lungs"],
          correctAnswer: "In the red marrow of bones",
        },
        {
          question: "What is the primary function of the red marrow in bones?",
          options: ["To store fat", "To produce hormones", "To generate electricity", "Hematopoiesis"],
          correctAnswer: "Hematopoiesis",
        },
        {
          question: "Which component of the skeletal system provides a rigid framework for the body?",
          options: ["Cartilage", "Muscles", "Ligaments", "Skeleton"],
          correctAnswer: "Skeleton",
        },
      ],
    };
  }

  startQuiz = () => {
    this.setState({ quizStarted: true, startTime: new Date() });
  };

  handleAnswerClick = (selectedOption) => {
    const { currentQuestion, questions, score, answers } = this.state;
    const correctAnswer = questions[currentQuestion].correctAnswer;

    answers.push({
      question: questions[currentQuestion].question,
      selected: selectedOption,
      correct: selectedOption === correctAnswer,
    });

    if (selectedOption === correctAnswer) {
      this.setState({
        score: score + 1,
      });
    }

    if (currentQuestion < questions.length - 1) {
      this.setState({
        currentQuestion: currentQuestion + 1,
      });
    } else {
      // Quiz completed, record end time
      this.setState({ quizCompleted: true, endTime: new Date() });
    }
  };

  restartQuiz = () => {
    this.setState({
      quizStarted: false,
      quizCompleted: false,
      score: 0,
      currentQuestion: 0,
      startTime: null,
      endTime: null,
      answers: [],
    });
  };

  render() {
    const { quizStarted, quizCompleted, currentQuestion, questions, score, answers, startTime, endTime } = this.state;

    return (
      <div className="container">
        {!quizStarted ? (
          <div>
            <h3>Quiz</h3>
            <button className="start-button" onClick={this.startQuiz}>
              Start
            </button>
          </div>
        ) : !quizCompleted ? (
          <div>
            <p className="question">Question {currentQuestion + 1} of {questions.length}:</p>
            <p>{questions[currentQuestion].question}</p>
            <ul className="options">
              {questions[currentQuestion].options.map((option, index) => (
                <li className='quiz-item' key={index} onClick={() => this.handleAnswerClick(option)}>
                  {option}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <h4>Performance Report</h4>
            <p className="score">Your Score: {score} out of {questions.length}</p>
            {startTime && endTime && (
              <p className="time-taken">
                Time Taken: {((endTime - startTime) / 1000).toFixed(2)} seconds
              </p>
            )}
            <div className="answers">
              {answers.map((answer, index) => (
                <div key={index} className={answer.correct ? 'correct-answer' : 'wrong-answer'}>
                  <p>{answer.question}</p>
                  <p>Your Answer: {answer.selected}</p>
                  <p>Correct Answer: {questions[index].correctAnswer}</p>
                </div>
              ))}
            </div>
            <button className="start-button" onClick={this.restartQuiz}>
              Restart
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Quiz;
