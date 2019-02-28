import React from 'react';

class Quiz extends React.Component {

   
 constructor(props) {
        super(props);

        this.onAnswerClicked = this.onAnswerClicked.bind(this);
    };



    onAnswerClicked (answer) {
    
        let answerGiven = answer.target.id;
        let correctAnswer = this.props.correct;

        if (answerGiven == correctAnswer) {
            alert("You're right! We can add an additional message here too!"); 
            this.props.handleScoreIncrease();
        
            this.props.handleNextQuestion();

        } else {
            alert ("That's not the right answer. We can add some more info here, we could bring in something from the json file to give the right answer");
            this.props.handleIncorrectAnswer();
            this.props.handleNextQuestion();
        };
    };

    render() {

        let  style= {
            margin: "10px",
            width: "400px",
            height: "50px",
            fontSize: 20
        }

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
            className="btn btn-success"
            ref = {this.buttonRef}
            style={style}
            onClick={this.onAnswerClicked} >
            {this.props.answers[0]}</button>
            </div>
            
            <div className = "row">
            <button 
            id = "1"
            className="btn btn-danger"
            type = "button" 
            style={style}
            onClick={this.onAnswerClicked}>
            {this.props.answers[1]}</button>
            </div>

            <div className = "row">
            <button 
            id = "2"
            className="btn btn-success"
            type = "button" 
            style={style}
            onClick={this.onAnswerClicked} >
            {this.props.answers[2]}</button>
            </div>

            <div className = "row">
            <button 
            id = "3"
            className="btn btn-success"
            type = "button" 
            style={style}
            onClick={this.onAnswerClicked} >
            {this.props.answers[3]}</button>
            </div>

        </div>
        )
    }
}

const styles = {
     
    question: {
        fontSize: 30
    }

};
export default Quiz;