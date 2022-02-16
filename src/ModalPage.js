import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalPage extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: true,
    };
  }

  handlerToggle() {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
    this.props.handleModal(!this.state.modalIsOpen);
  }

  render() {
    const { modalIsOpen } = this.state;
    const { name } = this.props.data[0];
    console.log(this.props.data);
    const { known_for } = this.props.data[0];
    const { popularity } = this.props.data[0];

    return (
      <>
        <Modal isOpen={modalIsOpen} toggle={() => this.handlerToggle()}>
          <ModalHeader>{name}</ModalHeader>
          <ModalBody className="modalBody">
            <p>{popularity}</p>
          </ModalBody>
          <ModalFooter>this is modal footer</ModalFooter>
        </Modal>
      </>
    );
  }
}

export default ModalPage;
