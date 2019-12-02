import React, { Component } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCol,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBContainer,
  MDBRow
} from "mdbreact";
import moment from "moment";
import ImageModalPage from "./imageModel";
import MapModalPage from "./mapModal";
import Loader from "./Loading";

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      observations: [],
      imageModal: false,
      mapModal: false,
      picture: "",
      GPSLatitude: "",
      GPSLongitude: "",
      species: ""
    };
  }
  componentWillReceiveProps(props) {
    this.setState({ observations: props.observations });
  }

  imageModalToggle = () => {
    this.setState({
      imageModal: !this.state.imageModal
    });
  };
  mapModalToggle = () => {
    this.setState({
      mapModal: !this.state.mapModal
    });
  };

  sortBySpecies = () => {
    let sortedByName = this.state.observations.sort((first, second) => {
      let result = 0;
      if (first.species.toUpperCase() > second.species.toUpperCase()) {
        result = 1;
      } else if (first.species.toUpperCase() < second.species.toUpperCase()) {
        result = -1;
      }
      return result;
    });
    this.setState({ observations: sortedByName });
  };

  sortByDate = () => {
    let sortedByDate = this.state.observations.sort((first, second) => {
      let result = 0;
      if (
        moment(first.publishedDate).format("x") <
        moment(second.publishedDate).format("x")
      ) {
        result = 1;
      } else if (
        moment(first.publishedDate).format("x") >
        moment(second.publishedDate).format("x")
      ) {
        result = -1;
      }
      return result;
    });
    this.setState({ observations: sortedByDate });
  };

  render() {
    const { observations } = this.state;

    return (
      <div className="container-fluid mt-2">
        <div className="row">
          <MDBDropdown size="sm" className="mx-2">
            <MDBDropdownToggle caret>SORT BY :</MDBDropdownToggle>
            <MDBDropdownMenu color="danger" basic>
              <MDBDropdownItem onClick={this.sortBySpecies}>
                SPECIES
              </MDBDropdownItem>
              <MDBDropdownItem onClick={this.sortByDate}>DATE</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </div>
        <div className="row">
          {observations && observations.length > 0 ? (
            observations.map((data, index) => (
              <MDBCol key={index} md="6" lg="4" sm="6" xl="3" className="my-2 ">
                <MDBCard style={{ height: "100%" }}>
                  <div
                    className="card-img-center"
                    style={{
                      backgroundImage: `url(${data.picture})`
                    }}
                  ></div>
                  <MDBCardBody>
                    <MDBCardTitle>
                      <span className="text-capitalize">{data.species}</span>
                    </MDBCardTitle>

                    <table className="table table-sm table-borderless">
                      <tbody>
                        <tr>
                          <td className="float-left">Rarity</td>
                          <td>:</td>
                          <td className="float-left text-capitalize">
                            {data.rarity}
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="float-left"
                            style={{
                              textOverflow: "ellipsis",
                              overflow: "hidden",
                              whiteSpace: "nowrap"
                            }}
                          >
                            Published Date
                          </td>
                          <td>:</td>
                          <td
                            className="float-left"
                            style={{
                              textOverflow: "ellipsis",
                              overflow: "hidden",
                              whiteSpace: "nowrap"
                            }}
                          >
                            {moment(data.publishedDate).format("lll")}
                          </td>
                        </tr>
                        <tr>
                          <td className="float-left">Origin Time :</td>
                          <td>:</td>
                          <td className="float-left">
                            {data.DateTimeOriginal
                              ? moment(data.DateTimeOriginal).format("lll")
                              : ""}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="text-notes">{data.notes}</p>
                    <span
                      className="mr-3"
                      onClick={() => {
                        this.mapModalToggle();
                        this.setState({
                          species: data.species,
                          GPSLatitude: data.GPSLatitude,
                          GPSLongitude: data.GPSLongitude
                        });
                      }}
                    >
                      <img
                        className="icon"
                        src="https://img.icons8.com/color/48/000000/google-maps.png"
                        alt="No pic"
                      ></img>
                    </span>
                    <span
                      className="ml-3"
                      onClick={() => {
                        this.imageModalToggle();
                        this.setState({
                          species: data.species,
                          picture: data.picture
                        });
                      }}
                    >
                      <img
                        className="icon"
                        src="https://img.icons8.com/ios/50/000000/zoom-in.png"
                        alt="No pic"
                      ></img>
                    </span>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))
          ) : (
            <MDBContainer>
              <MDBRow center>
                <Loader></Loader>
              </MDBRow>
            </MDBContainer>
          )}
          <ImageModalPage
            species={this.state.species}
            display={this.state.imageModal}
            picture={this.state.picture}
            toggle={this.imageModalToggle}
          ></ImageModalPage>
          <MapModalPage
            species={this.state.species}
            display={this.state.mapModal}
            GPSLatitude={this.state.GPSLatitude}
            GPSLongitude={this.state.GPSLongitude}
            toggle={this.mapModalToggle}
          ></MapModalPage>
        </div>
      </div>
    );
  }
}

export default View;
