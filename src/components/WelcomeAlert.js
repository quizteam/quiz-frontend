import React from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

class WelcomeAlert extends React.Component {
    constructor(props) {
      super(props);

      this.state = { show: true };
    }

    render() {
      const handleHide = () => this.setState({ show: false });
      return (
        <>
          <Alert show={this.state.show} variant="success" >
            <Alert.Heading>Welcome to the Tech Returners Quiz!</Alert.Heading>
            <p>
             This quiz will test your knowlegde learnt over the past 15 weeks on the BBC Step into Tech Programme. Each Question will have four multiple choice answers. And your final score will be presented at the end of the quiz.
            </p>
            <hr />
            <div className="d-flex justify-content-end center-block">
              <Button onClick={handleHide} variant="outline-success">
                Begin Quiz
              </Button>
            </div>
          </Alert>
        </>
      );
    }
  }



export default WelcomeAlert; 
