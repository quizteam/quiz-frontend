import React, { Component } from 'react';
import Header from './components/header';
import QuestionCounter from './components/questionCounter';
import Score from './components/score';
import Quiz from './components/quiz';
import quizData from './components/quizData';
import FinalScoreAlert from './components/finalScore';
import CorrectAlert from './components/correctAlert';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      total: quizData.length,
      score: 0,
      //I think we might need separate state for all the alerts here, otherwise
      //we will be updating all of the alerts at once 
      visible: false,
      correctAlertVisible: false
    };
    this.scoreIncrease = this.scoreIncrease.bind(this);
    this.createQuestion = this.createQuestion.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.incorrectAnswer = this.incorrectAnswer.bind(this);
    this.correctAnswer = this.correctAnswer.bind(this);
    this.clearCorrectAlert = this.clearCorrectAlert.bind(this);
    this.restartQuiz = this.restartQuiz.bind(this);

  }

createQuestion(num) {
    this.setState({
        question: quizData[num].question,
        answers: [quizData[num].answers[0], quizData[num].answers[1], quizData[num].answers[2], quizData[num].answers[3]],
        correct: quizData[num].correct,
        advice: quizData[num].advice,
        num: this.state.num + 1
    });
}

showFinalScore() {
  let {score} = this.state;
  alert("Your score is " + score);
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

//this function is now being passed into the alert, rather than quiz.js
//this is to make sure the function fires only when the alert is dismissed
//we probably don't need an if/else here as it's being handled in render below
nextQuestion() {
  let { num, total} = this.state;

  if (num < total) {
    //this line hides the correct alert again by setting state to false
    this.clearCorrectAlert();
    this.createQuestion(num);
  }
};
//I've given correct answer its own state, rather than just using visible, so that
//we can control the alerts individually
correctAnswer() {
  this.setState({
    correctAlertVisible: true
  })
}

//this function sets state to false, triggered by nextQuestion
clearCorrectAlert() {
  this.setState({
    correctAlertVisible: false
  })
}

restartQuiz() {
 alert("The quiz should restart now");
 this.setState({
   num: 0,
   score: 0,
   total: quizData.length
 })
 this.componentWillMount();
}

incorrectAnswer() {
  this.setState({
 visible: true
  })
}
  render() {
    let {num, total, question, answers, correct, score, correctAlertVisible, advice} = this.state;

    if (num == total) {
      return <FinalScoreAlert score = {score} restartQuiz = {this.restartQuiz} />
    } else {

    return (
      
      <div className="container">
        <Header />
        <Quiz 
        question = {question} 
        answers = {answers} 
        correct = {correct} 
        onAnswerClickedHandler = {this.answerQuestion} 
        handleScoreIncrease = {this.scoreIncrease} 
        num = {num} 
        handleIncorrectAnswer = {this.incorrectAnswer}
        handleCorrectAnswer = {this.correctAnswer}
        handleNextQuestion = {this.nextQuestion} />
        <QuestionCounter num = {num} total = {total}/>
        <Score score = {score} />
        <CorrectAlert advice = {advice} visible = {correctAlertVisible} handleNextQuestion = {this.nextQuestion}/>
        
      </div>
    );
    };
  };
}


export default App;
