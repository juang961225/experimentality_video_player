import React from "react";
import "./VideoItem.scss";

class VideoItem extends React.Component {
  render() {
    // const { title, src } = this.props;
    return (
      <div onClick={() => {
        this.props.chooseVideo(this.props.url)
      }} className="item">
        <div className="item__video">
          <iframe
          title={this.props.title}
            width="120"
            height="90"
            src={this.props.src}
            allow="autoplay; encrypted-media"
          ></iframe>
        </div>
        <div className="item__title">
          <h2>
            {this.props.title}
          </h2>
        </div>
      </div>
    );
  }
}

export default VideoItem;
