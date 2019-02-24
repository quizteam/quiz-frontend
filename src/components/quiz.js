import React from 'react';

class Quiz extends React.Component {

   
    render() {

        return (
        <div className = "container">

            <div className = "row">
            <p style = {styles.question} >{this.props.question}</p>
            </div>
            <div className = "row">
            <button type = "button" style = {styles.button}>{this.props.answers[0]}</button>
            </div>
            
            <div className = "row">
            <button type = "button" style = {styles.button}>{this.props.answers[1]}</button>
            </div>

            <div className = "row">
            <button type = "button" style = {styles.button} >{this.props.answers[2]}</button>
            </div>

            <div className = "row">
            <button type = "button" style = {styles.button} >{this.props.answers[3]}</button>
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
       border: "2px",
       fontSize: 20,
    },

    question: {
        fontSize: 30
    }

};
export default Quiz;