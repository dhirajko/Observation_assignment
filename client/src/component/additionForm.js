import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import { Formik } from "formik";

class AddForm extends Component {
  state = {
    fileName: "Choose file",
    picture: "",
    species: "",
    rarity: "",
    notes: ""
  };

  handleFileChange = e => {
    this.setState({
      picture: e.target.files[0],
      fileName: e.target.files[0].name
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  resetState = () => {
    this.setState({
      fileName: "Choose file",
      picture: "",
      species: "",
      rarity: "",
      notes: ""
    });
  };

  render() {
    const { handleSubmit } = this.props;
    const { species, notes, fileName } = this.state;
    return (
      <MDBContainer className="mt-3">
        <MDBCard>
          <MDBCardBody>
            <MDBRow center>
              <MDBCol md="6">
                <Formik
                  onSubmit={this.handleSubmit}
                  // validate={validateForm}
                >
                  {({ isValidating }) => (
                    <form
                      onSubmit={this.handleSubmit}
                      encType="multipart/form-data"
                    >
                      <p className="h4 text-center mb-4">Observation Details</p>
                      <label
                        htmlFor="defaultFormContactNameEx"
                        className=" float-left"
                      >
                        Species
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={species}
                        onChange={this.handleChange}
                        name="species"
                        placeholder="Enter species name ..."
                      />
                      <br />
                      <label className=" float-left"> Rarity</label>
                      <select
                        className="browser-default custom-select"
                        onChange={this.handleChange}
                        name="rarity"
                      >
                        <option></option>
                        <option value="common">Common</option>
                        <option value="rare">Rare</option>
                        <option value="extremely rare">Extremely Rare</option>
                      </select>
                      <br />
                      <br />
                      <label className=" float-left">Your notes</label>
                      <textarea
                        type="text"
                        id="defaultFormContactMessageEx"
                        className="form-control"
                        value={notes}
                        onChange={this.handleChange}
                        name="notes"
                        placeholder="Enter details of species..."
                        rows="3"
                      />
                      <br />
                      <label
                        htmlFor="defaultFormContactMessageEx"
                        className=" float-left"
                        onClick={() => alert("ok")}
                      >
                        Picture
                      </label>
                      <div className="input-group">
                        <div className="custom-file">
                          <input
                            type="file"
                            className="custom-file-input"
                            onChange={this.handleFileChange}
                            name="picture"
                          />
                          <label className="custom-file-label">
                            {fileName}
                          </label>
                        </div>
                      </div>
                    </form>
                  )}
                </Formik>
                <div className="text-center mt-4 ">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      handleSubmit(this.state).then(response => {
                        this.resetState();
                      });
                    }}
                    disabled={
                      this.state.picture === "" ||
                      this.state.species === "" ||
                      this.state.rarity === "" ||
                      this.state.notes === ""
                    }
                  >
                    <i className="far fa-save fa-lg"> </i>
                  </button>

                  <button
                    className="btn btn-danger  "
                    onClick={() => {
                      this.resetState();
                      window.location = "/";
                    }}
                  >
                    <i className="fa fa-times fa-lg"></i>
                  </button>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    );
  }
}

export default AddForm;
