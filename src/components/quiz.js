import React from 'react';

class Quiz extends React.Component {

   
 constructor(props) {
        super(props);

        this.onAnswerClicked = this.onAnswerClicked.bind(this);
    }

    onAnswerClicked(answer) {
        this.props.onAnswerClickedHandler(answer.target.id)
        console.log(this.props.correct);
        console.log(answer);
        console.log(answer.target.id);

        let answerGiven = answer.target.id;
        let correctAnswer = this.props.correct;
        alert("You said " + answerGiven + "and the correct answer is " + correctAnswer);
    };

    render() {

        return (
        <div id = "choices" 
            className = "container">
            <div className = "row">
            <p style = {styles.question} >{this.props.question}</p>
            </div>
            <div className = "row">
            <button 
            id = "0"
            type = "button" 
            style = {styles.button} 
            onClick={this.onAnswerClicked} >
            {this.props.answers[0]}</button>
            </div>
            
            <div className = "row">
            <button 
            id = "1"
            type = "button" 
            style = {styles.button} 
            onClick={this.onAnswerClicked}>
            {this.props.answers[1]}</button>
            </div>

            <div className = "row">
            <button 
            id = "2"
            type = "button" 
            style = {styles.button} 
            onClick={this.onAnswerClicked} >
            {this.props.answers[2]}</button>
            </div>

            <div className = "row">
            <button 
            id = "3"
            type = "button" 
            style = {styles.button} 
            onClick={this.onAnswerClicked} >
            {this.props.answers[3]}</button>
            </div>

        </div>
        )
    }
}

const styles = {
       button: {
       margin: "10px",
       width: "400px",
       height: "50px",
       fontSize: 20,
    },

    question: {
        fontSize: 30
    }

};
export default Quiz;