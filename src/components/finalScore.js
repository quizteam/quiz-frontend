
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class FinalScoreAlert extends React.Component {

  render() {
    return (
      <Modal
        show="true"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header style={styles.modal}>
          <Modal.Title id="contained-modal-title-vcenter">
            Quiz Complete!
                  </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Your score is {this.props.score} out of {this.props.total-1} </h4>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.restartQuiz}>Try again</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}


const styles = {
  modal: {
    backgroundColor: "#6f42C1",
    color: "white",
  }
}

export default FinalScoreAlert;






/*import React from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

class FinalScoreAlert extends React.Component {

      render() {

        return (
          <>
            <Alert show={this.props.visible} variant="success">
              <Alert.Heading>Your final score is:</Alert.Heading>
              <p>
              {this.props.score}
              </p>
              <hr />
              <div className="d-flex justify-content-end">
                <Button onClick={this.props.restartQuiz} variant="outline-success">
                 Reset Quiz
                </Button>
              </div>
            </Alert>
          </>
        );
      }
    }



export default FinalScoreAlert;*/






