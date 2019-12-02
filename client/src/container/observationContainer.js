import React, { Component } from "react";
import View from "../component/observation";
import axios from "axios";

export class ObservationContainer extends Component {
  state = {
    observations: []
  };
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/observation", {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(response => {
        this.setState({ observations: response.data });
      })
      .catch(err => {
        console.log(err.response.data);
      });
  }
  searchAllObservation = () => {};

  render() {
    return <View observations={this.state.observations}></View>;
  }
}

export default ObservationContainer;
