import React, { Component } from "react";

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
        <h1>hi</h1>
      </div>
    );
  }
}

export default App;
