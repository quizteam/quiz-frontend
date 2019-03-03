import React from 'react'

class Score extends React.Component {

    render() {
        return (
        <div className = "d-flex justify-content-center p-1">
        <button type="button" class= 'btn btn-info' disabled>
        Your Score: {this.props.score}
        </button>    
        </div>
        )
    }
}

export default Score;