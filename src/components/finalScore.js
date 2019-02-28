import React from 'react';

class finalScore extends React.Component {

    render() {
        return (
            <div className="row">
                <p>Your Final Score Is: {this.props.score}</p>
                </div>
        )
    }
};


export default finalScore; 