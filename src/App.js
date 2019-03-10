import React, { Component } from "react";
import Channel from "./components/Channel";
import Pagination from "react-js-pagination";

import "bootstrap/dist/css/bootstrap.css";
if (typeof window !== "undefined") {
  window.jQuery = window.$ = require("jquery");
  require("bootstrap");
}

class App extends Component {
  state = {
    data: {},
    activePage: 1
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
    console.log("data updated");
  };

  handlePageChange = pageNumber => {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  };

  render() {
    let result = [];
    const n = 10; //number of channels per page
    if (this.state.data[0] !== undefined) {
      for (
        let i = (this.state.activePage - 1) * n;
        i <= n * this.state.activePage - 1;
        i++
      ) {
        result.push(
          <Channel channelData={this.state.data[i]} key={i} index={i} />
        );
      }
    }
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
          {result}
        </div>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={5000}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default App;
