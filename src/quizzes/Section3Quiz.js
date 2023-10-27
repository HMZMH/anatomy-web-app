import React, { Component } from 'react';
import './Quiz.css'; // Import the stylesheet

class Section3Quiz extends Component {
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
          question: "What is the major controlling and communicating system in the body?",
          options: ["Skeletal system", "Respiratory system", "Nervous system", "Circulatory system"],
          correctAnswer: "Nervous system",
        },
        {
          question: "What does the nervous system control, including thought, learning, and memory?",
          options: ["Digestion", "Homeostasis", "Mental activity", "Muscle contractions"],
          correctAnswer: "Mental activity",
        },
        {
          question: "What are the three general functions of the nervous system?",
          options: ["Sensory, Respiratory, and Motor", "Sensory, Digestive, and Endocrine", "Sensory, Integrative, and Motor", "Visual, Auditory, and Olfactory"],
          correctAnswer: "Sensory, Integrative, and Motor",
        },
        {
          question: "What do sensory receptors in the nervous system detect?",
          options: ["Changes in blood pressure", "Changes in heart rate", "Changes in pH levels", "Changes in temperature and light"],
          correctAnswer: "Changes in temperature and light",
        },
        {
          question: "How does the nervous system respond to sensory input?",
          options: ["By producing hormones", "By causing muscle contractions", "By digesting food", "By storing memories"],
          correctAnswer: "By causing muscle contractions",
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
            <h3>Nervous System Quiz</h3>
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

export default Section3Quiz;