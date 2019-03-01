import React from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

class AlertDismissable extends React.Component {
   
  
    render() {
      const handleHide = () => this.setState({ show: false });
      return (
        <>
          <Alert show={this.props.visible} variant="success">
            <Alert.Heading>Your final score is:</Alert.Heading>
            <p>
             kjlhjhgjhkjhk
            </p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={handleHide} variant="outline-success">
               Reset Quiz
              </Button>
            </div>
          </Alert>
        </>
      );
    }
  }


  
export default AlertDismissable;