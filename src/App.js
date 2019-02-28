import React, { Component } from 'react';
import Header from './components/header';
import QuestionCounter from './components/questionCounter';
import Score from './components/score';
import Quiz from './components/quiz';
import quizData from './components/quizData';
import FinalScore from './components/finalScore';
import AlertDismissable from './components/alert';



console.log(quizData);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      total: quizData.length,
      score: 0,
      visible: false
    };
    this.scoreIncrease = this.scoreIncrease.bind(this);
    this.createQuestion = this.createQuestion.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.incorrectAnswer = this.incorrectAnswer.bind(this);

  }

  createQuestion(num) {
    this.setState({
        question: quizData[num].question,
        answers: [quizData[num].answers[0], quizData[num].answers[1], quizData[num].answers[2], quizData[num].answers[3]],
        correct: quizData[num].correct,
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

nextQuestion() {
  let { num, total} = this.state;

  if (num === total) {
    alert("The quiz is finished");
  } else {
    this.createQuestion(num);
  };
};

incorrectAnswer() {
  this.setState({
    visible: true
  })
}
  render() {
    let {num, total, question, answers, correct, score, visible} = this.state;

  

    return (
      <div className="container">
        <AlertDismissable visible = {visible} />
        <Header />
        <Quiz 
        handleRightAnswer = {this.rightAnswer}
        question = {question} 
        answers = {answers} 
        correct = {correct} 
        onAnswerClickedHandler = {this.answerQuestion} 
        handleScoreIncrease = {this.scoreIncrease} 
        handleNextQuestion = {this.nextQuestion}
        num = {num} 
        handleIncorrectAnswer = {this.incorrectAnswer}
      />
        
        <QuestionCounter num = {num} total = {total}/>
        <Score score = {score} />
        <FinalScore score = {score}/>
      </div>
    );
  };
}


export default App;
