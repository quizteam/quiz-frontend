
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class IncorrectAlert extends React.Component {
  
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
                   {this.props.provideIncorrectText}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h4>That's the wrong answer!</h4>
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
            backgroundColor: "#FF0000",
            color: "white",
          }
        }
  
  export default IncorrectAlert;


 



