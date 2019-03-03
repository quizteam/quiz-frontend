import React, { Component } from 'react';
import Header from './components/header';
import QuestionCounter from './components/questionCounter';
import Score from './components/score';
import Quiz from './components/quiz';
import quizData from './components/quizData';
import FinalScoreAlert from './components/finalScore';
import CorrectAlert from './components/correctAlert';
import WelcomeAlert from './components/WelcomeAlert';

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
      correctAlertVisible: false,
      correctText: '',
      WelcomeAlertVisible: false
    };
    this.scoreIncrease = this.scoreIncrease.bind(this);
    this.createQuestion = this.createQuestion.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.incorrectAnswer = this.incorrectAnswer.bind(this);
    this.correctAnswer = this.correctAnswer.bind(this);
    this.clearCorrectAlert = this.clearCorrectAlert.bind(this);
    this.restartQuiz = this.restartQuiz.bind(this);
    this.chooseText = this.chooseText.bind(this);
  }

  chooseText() {
    let correctOptions = ["Well done!", "Great!", "Nice work!", "Yeah!", "You're correct!", "Yes!"];
    let a = Math.floor(Math.random()*5);
    this.setState({
      correctText: correctOptions[a]
    })
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
  this.setState({
    num: 0,
    score: 0
  })
 
alert(this.state.num);
 //need to restart quiz but state is not updating and error also thrown.

}

incorrectAnswer() {
  this.setState({
 visible: true
  })
}
  render() {
    let {num, total, question, answers, correct, score, correctAlertVisible, advice, correctText, WelcomeAlertVisible} = this.state;


    if (num == total) {
      return <FinalScoreAlert score = {score} restartQuiz = {this.restartQuiz} />
     
    } else {

    return (
      
      <div className="container">
        <Header />
        <WelcomeAlert visible ={WelcomeAlertVisible}/>
        <Quiz 
        question = {question} 
        answers = {answers} 
        correct = {correct} 
        onAnswerClickedHandler = {this.answerQuestion} 
        handleScoreIncrease = {this.scoreIncrease} 
        num = {num} 
        handleIncorrectAnswer = {this.incorrectAnswer}
        handleCorrectAnswer = {this.correctAnswer}
        handleNextQuestion = {this.nextQuestion} 
        handleChooseText = {this.chooseText} />
        <QuestionCounter num = {num} total = {total}/>
        <Score score = {score} />
        <CorrectAlert provideCorrectText = {correctText} advice = {advice} visible = {correctAlertVisible} handleNextQuestion = {this.nextQuestion}/>
        
      </div>
    );
    };
  };
}


export default App;
