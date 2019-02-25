import React, { Component } from 'react';
import Header from './components/header';
import QuestionCounter from './components/questionCounter';
import Score from './components/score';
import Quiz from './components/quiz';
import quizData from './components/quizData';


console.log(quizData);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      total: quizData.length,
      score: 0
    };
    this.answerquestion = this.answerQuestion.bind(this);
  }

  createQuestion(num) {
    this.setState({
        question: quizData[num].question,
        answers: [quizData[num].answers[0], quizData[num].answers[1], quizData[num].answers[2], quizData[num].answers[3]],
        correct: quizData[num].correct,
        num: this.state.num + 1
    });
}

componentWillMount() {
  let { num } = this.state;
  this.createQuestion(num);
}

answerQuestion(answer) {
  
  alert("You answered" + answer);
  
  /*if (answer === this.state.correct) {
    alert("You're right!");
  } else {
    alert("That's not right.");
  }*/
 
 };

  render() {
    let {num, total, question, answers, correct, score} = this.state;

    return (
      <div className="container">
        <Header />
        <Quiz question = {question} answers = {answers} correct = {correct} onAnswerClickedHandler = {this.answerQuestion}/>
        <QuestionCounter num = {num} total = {total}/>
        <Score score = {score} />
      </div>
    );
  };
}


export default App;
