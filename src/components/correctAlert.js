
import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

class CorrectAlert extends React.Component {

    render() {
        //const handleHideCorrectAlert = () => this.setState({ show: false });

        return (

            <Alert show = {this.props.visible} variant="success">
                <Alert.Heading>Well done!</Alert.Heading>
                <p>
                   That's the right answer.
                </p>
                <hr />
                <p className="mb-0">
                    More info here.
                </p>

                <div className="d-flex justify-content-end">
              <Button onClick={this.props.handleNextQuestion} variant="outline-success">
               Click to continue
              </Button>
            </div>
            </Alert>
    
        );
    };    
}
    
  export default CorrectAlert;



