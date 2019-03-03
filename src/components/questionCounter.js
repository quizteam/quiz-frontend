import React from 'react'

class QuestionCounter extends React.Component {

    render() {


        return (
        <div className = "d-flex justify-content-center">
        Question {this.props.num} of {this.props.total-1} 
        </div>
        );
    }

}

export default QuestionCounter;