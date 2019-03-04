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
            
            this.props.handleCorrectAnswer();
            
            this.props.handleChooseText();
            
            this.props.handleScoreIncrease();
            
            //going to try passing these on to the alert button to trigger when the button is clicked
            //this.props.handleNextQuestion();

        } else {
            /*alert ("That's not the right answer. We can add some more info here, we could bring in something from the json file to give the right answer");*/
            this.props.handleIncorrectAnswer();
            this.props.handleChooseWords();
        };
    };


    
    render() {

        let  style= {
            margin: "10px",
            width: "500px",
            height: "80px",
            fontSize: 22,
            boxShadow: "none",
            fontWeight: "bold"
        }

        return (
        <div id = "choices" 
            className = "container">
            <div className = "d-flex justify-content-center">
            <p style = {styles.question} >{this.props.question}</p>
            </div>
            <div className = "d-flex justify-content-center">
            <button 
            id = "0"
            className="btn btn-outline-info"  
            ref = {this.buttonRef}
            style={style}
            onClick={this.onAnswerClicked} >
            {this.props.answers[0]}</button>
            </div>
            
            <div className = "d-flex justify-content-center">
            <button 
            id = "1"
            className="btn btn-outline-info"
            style={style}
            onClick={this.onAnswerClicked}>
            {this.props.answers[1]}</button>
            </div>

            <div className = "d-flex justify-content-center">
            <button 
            id = "2"
            className="btn btn-outline-info"
            style={style}
            onClick={this.onAnswerClicked} >
            {this.props.answers[2]}</button>
            </div>

            <div className = "d-flex justify-content-center">
            <button 
            id = "3"
            className="btn btn-outline-info"
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
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold"
    }



};
export default Quiz;
