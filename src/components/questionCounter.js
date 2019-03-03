import React from 'react'

class QuestionCounter extends React.Component {

    render() {

        return (
        <div className = "d-flex justify-content-center p-1">
        <button type="button" class= 'btn btn-info' disabled>
        Question {this.props.num} of {this.props.total-1}
        </button>  
        </div>
        )
    }
    

};

export default QuestionCounter;