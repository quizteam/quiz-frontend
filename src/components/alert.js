import React from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

class AlertDismissable extends React.Component {
    constructor(props) {
      super(props);
  
      
    }
  
    render() {
      const handleHide = () => this.setState({ show: false });
      return (
        <>
          <Alert show={this.props.visible} variant="success">
            <Alert.Heading>Welcome to the Tech Returners Quiz!</Alert.Heading>
            <p>
             This is an alert box that we could use either at the start or at the end with the final score displayed.
            </p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={handleHide} variant="outline-success">
                Close or Reset?
              </Button>
            </div>
          </Alert>
        </>
      );
    }
  }


  
export default AlertDismissable;