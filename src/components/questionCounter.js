import React from 'react'

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