import React, { Component } from "react";
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader } from "mdbreact";

class MapModalPage extends Component {
  render() {
    const { species, display, GPSLatitude, GPSLongitude, toggle } = this.props;
    return (
      <MDBContainer>
        <MDBModal isOpen={display} toggle={toggle} size="lg">
          <MDBModalHeader toggle={toggle}>Location</MDBModalHeader>
          <MDBModalBody>
            {GPSLongitude && GPSLatitude ? (
              <div style={{ width: "100%" }}>
                <iframe
                  title={species}
                  src={`https://maps.google.com/maps?q=${GPSLatitude}, ${GPSLongitude}&z=15&output=embed`}
                  width="100%"
                  height="350px"
                  frameBorder="0"
                ></iframe>
              </div>
            ) : (
              <h3>GPS Location Not Available</h3>
            )}
            <br />
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default MapModalPage;
