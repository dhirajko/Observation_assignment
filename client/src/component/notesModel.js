import React, { Component } from "react";
import { MDBContainer, MDBModal, MDBModalHeader } from "mdbreact";

class NotesModal extends Component {
  render() {
    const { information, toggle, display } = this.props;
    return (
      <MDBContainer>
        <MDBModal isOpen={display} toggle={toggle} size="lg">
          <MDBModalHeader toggle={toggle}>
            <span className="text-capitalize">Notes</span>
          </MDBModalHeader>
          <span className="p-3 data-notes">{information}</span>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default NotesModal;
