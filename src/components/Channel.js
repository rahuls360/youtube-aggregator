import React from "react";

class Channel extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-12 well">
          <div className="col-sm-1">
            <h3>{this.props.channelData["Rank"]}</h3>
          </div>
          <div className="col-sm-3">
            <h3>{this.props.channelData["Name"]}</h3>
          </div>
          <div className="col-sm-2">
            <h3>{this.props.channelData["Grade"]}</h3>
          </div>
          <div className="col-sm-2">
            <h3>{this.props.channelData["Subscribers"]}</h3>
          </div>
          <div className="col-sm-2">
            <h3>{this.props.channelData["Uploads"]}</h3>
          </div>
          <div className="col-sm-2">
            <h3>{this.props.channelData["Views"]}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Channel;
