import React from 'react';

class Quiz extends React.Component {

   
 constructor(props) {
        super(props);

        

        this.onAnswerClicked = this.onAnswerClicked.bind(this);
        //this.rightAnswer = this.rightAnswer.bind(this);
        //this.wrongAnswer = this.wrongAnswer.bind(this);
        //this.ButtonProgress = this.ButtonProgress.bind(this);
    }

    //rightAnswer = () => {
      //  this.setState({ color: 'green' });

    //wrongAnswer = () => {
      //      this.setState({ color: 'red' });

    //ButtonProgress (button) {
      //  let rightAnswer = this.props.correct;
        //rightAnswer = this.setState ({ color: 'green'});
        //}
        //wrongAnswer = this.setState ({ color: 'red'});
    

    onAnswerClicked (answer){
        //these two lines compare the id of the clicked answer
        //to the correct answer, to see if the number is the same
        let answerGiven = answer.target.id;
        let correctAnswer = this.props.correct;

        console.log(this.props.color);
        
        //if it's the same, this code runs
        if (answerGiven == correctAnswer) {
            alert("You're right!"); 
            this.props.handleScoreIncrease();
            
            this.props.handleRightAnswer();

            console.log(this.props.handleRightAnswer);
            console.log(this.props.color);

            this.props.handleNextQuestion();
          
            //this.ButtonProgress.rightAnswer();
           
           // this.rightAnswer();

        //if the answer is incorrect, this code runs
        } else {
            alert ("That's not the right answer");

            this.props.handleNextQuestion();
            
        
        }
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
            style={styles.button}
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