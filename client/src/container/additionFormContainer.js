import React, { Component } from "react";
import AddForm from "../component/additionForm";
import { notification } from "../component/Toast";
import axios from "axios";

export class AdditionFormContainer extends Component {
  handleSubmit = payload => {
    notification("info", "saving...");
    const formData = new FormData();
    formData.append("species", payload.species);
    formData.append("rarity", payload.rarity);
    formData.append("notes", payload.notes);
    formData.append("picture", payload.picture);
    return axios
      .post("http://localhost:5000/api/observation", formData, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(response => {
        notification("success", "added successfully");
        window.location = "/";
      })
      .catch(err => {
        notification("error", "failed");
      });
  };

  render() {
    return <AddForm handleSubmit={this.handleSubmit}></AddForm>;
  }
}

export default AdditionFormContainer;
