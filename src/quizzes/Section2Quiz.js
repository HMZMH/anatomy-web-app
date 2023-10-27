import React, { Component } from 'react';
import './Quiz.css'; // Import the stylesheet

class Section2Quiz extends Component {
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
          question: "What is the primary function of muscle fibers in the muscular system?",
          options: ["Contractions", "Storing energy", "Blood circulation", "Protecting organs"],
          correctAnswer: "Contractions",
        },
        {
          question: "What is responsible for nearly all movement in the body?",
          options: ["Skeletal muscles", "Bones", "Tendons", "Joints"],
          correctAnswer: "Skeletal muscles",
        },
        {
          question: "Apart from obvious movements like walking and running, what other movements do skeletal muscles produce?",
          options: ["Facial expressions", "Digestion", "Heartbeat", "Breathing"],
          correctAnswer: "Facial expressions",
        },
        {
          question: "How do muscles contribute to maintaining posture?",
          options: ["By storing heat", "By expanding and contracting", "By making fine adjustments", "By cushioning organs"],
          correctAnswer: "By making fine adjustments",
        },
        {
          question: "What is an important by-product of muscle metabolism?",
          options: ["Energy production", "Blood circulation", "Heat production", "Growth of bones"],
          correctAnswer: "Heat production",
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
          <div className='quiz-start'>
            <h3>Muscular System Quiz</h3>
            <button className="start-button" onClick={this.startQuiz}>
              Start Quiz
            </button>
          </div>
        ) : !quizCompleted ? (
          <div>
            <p className="question">Question {currentQuestion + 1} of {questions.length}:</p>
            <br/>
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
            <table className="answers">
              <thead>
                <tr>
                  <th>Question</th>
                  <th>Your Answer</th>
                  <th>Correct Answer</th>
                </tr>
              </thead>
              <tbody>
                {answers.map((answer, index) => (
                  <tr key={index} className={answer.correct ? 'correct-answer' : 'wrong-answer'}>
                    <td>{answer.question}</td>
                    <td>{answer.selected}</td>
                    <td>{questions[index].correctAnswer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="start-button" onClick={this.restartQuiz}>
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Section2Quiz;