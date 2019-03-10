import React from "react";

class Channel extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12 well">
          <div className="col-md-1">
            <h3>{this.props.channelData["Rank"]}</h3>
          </div>
          <div className="col-md-3">
            <h3>{this.props.channelData["Channel name"]}</h3>
          </div>
          <div className="col-md-2">
            <h3>{this.props.channelData["Grade"]}</h3>
          </div>
          <div className="col-md-2">
            <h3>{this.props.channelData["Subscribers"]}</h3>
          </div>
          <div className="col-md-2">
            <h3>{this.props.channelData["Video Uploads"]}</h3>
          </div>
          <div className="col-md-2">
            <h3>{this.props.channelData["Video views"]}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Channel;
