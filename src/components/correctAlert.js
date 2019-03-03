
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class CorrectAlert extends React.Component {

        render() {
            return (
              <Modal
                show = {this.props.visible}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header style = {styles.modal}>
                  <Modal.Title id="contained-modal-title-vcenter">
                   Well done!
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h4>That's the right answer!</h4>
                  <h5>
                    {this.props.advice}
                  </h5>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.props.handleNextQuestion}>Next Question</Button>
                </Modal.Footer>
              </Modal>
            );
          }
        }


        const styles = {
          modal: {
            backgroundColor: "#32CD32",
            color: "white",
          }
        }
  
  export default CorrectAlert;


 



