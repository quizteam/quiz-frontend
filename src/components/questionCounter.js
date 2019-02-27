import React from 'react'
import quizData from './quizData';

class QuestionCounter extends React.Component {

    render() {
        return (
        <div className = "container-fluid">
        Question {this.props.num} of {this.props.total} 
        </div>
        );
    }

}

export default QuestionCounter;