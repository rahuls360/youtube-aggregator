import React, { Component } from "react";
import Channel from "./components/Channel";

import "bootstrap/dist/css/bootstrap.css";
if (typeof window !== "undefined") {
  window.jQuery = window.$ = require("jquery");
  require("bootstrap");
}

class App extends Component {
  state = {
    data: {}
  };

  componentWillMount() {
    var csvFilePath = require("./data.csv");
    var Papa = require("papaparse/papaparse.min.js");
    Papa.parse(csvFilePath, {
      header: true,
      download: true,
      skipEmptyLines: true,
      complete: this.updateData
    });
  }

  updateData = result => {
    const data = result.data;
    this.setState({ data: data });
    console.log(data);
  };

  render() {
    return (
      <div className="App">
        <h1 className="text-center">List of Channels</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-12 well  well-title">
              <div className="col-md-1">
                <h3>Rank</h3>
              </div>
              <div className="col-md-3">
                <h3>Channel name</h3>
              </div>
              <div className="col-md-2">
                <h3>Grade</h3>
              </div>
              <div className="col-md-2">
                <h3>Subscribers</h3>
              </div>
              <div className="col-md-2">
                <h3>Video Uploads</h3>
              </div>
              <div className="col-md-2">
                <h3>Video views</h3>
              </div>
            </div>
          </div>
          {Object.keys(this.state.data).map(key => {
            return (
              <Channel
                channelData={this.state.data[key]}
                key={key}
                index={key}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
