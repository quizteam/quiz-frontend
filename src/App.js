import React, { Component } from 'react';
import Header from './components/header';
import QuestionCounter from './components/questionCounter';
import Score from './components/score';
import Quiz from './components/quiz';
import quizData from './components/quizData';
import FinalScore from './components/finalScore';


console.log(quizData);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      total: quizData.length,
      score: 0
    };
    this.scoreIncrease = this.scoreIncrease.bind(this);
    this.createQuestion = this.createQuestion.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  createQuestion(num) {
    this.setState({
        question: quizData[num].question,
        answers: [quizData[num].answers[0], quizData[num].answers[1], quizData[num].answers[2], quizData[num].answers[3]],
        correct: quizData[num].correct,
        num: this.state.num + 1
    });
}

scoreIncrease() {
  this.setState({
    score: this.state.score +1
  });
}

componentWillMount() {
  let { num } = this.state;
  this.createQuestion(num);
}

nextQuestion() {
  let { num, total} = this.state;

  if (num === total) {
    alert("The quiz is finished");
  } else {
    alert("Let's see the next question")
    this.createQuestion(num);
  };
};


  render() {
    let {num, total, question, answers, correct, score} = this.state;

    return (
      <div className="container">
        <Header />
        <Quiz 
        question = {question} 
        answers = {answers} 
        correct = {correct} 
        onAnswerClickedHandler = {this.answerQuestion} 
        handleScoreIncrease = {this.scoreIncrease} 
        handleNextQuestion = {this.nextQuestion}
        num = {num} />
        <QuestionCounter num = {num} total = {total}/>
        <Score score = {score} />
        <FinalScore />
      </div>
    );
  };
}


export default App;
