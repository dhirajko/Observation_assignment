import React, { Component } from "react";
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader } from "mdbreact";

class ImageModalPage extends Component {
  render() {
    const { species, display, picture, toggle } = this.props;
    return (
      <MDBContainer>
        <MDBModal isOpen={display} toggle={toggle} size="lg">
          <MDBModalHeader toggle={toggle}>
            <span className="text-capitalize">{species}</span>
          </MDBModalHeader>
          <MDBModalBody>
            <img src={picture} width="100%" alt="Not available"></img>
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ImageModalPage;
