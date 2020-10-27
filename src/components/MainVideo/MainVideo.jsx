import React from "react";
import "./MainVideo.scss";

class MainVideo extends React.Component {
  render(){
    return (
      <div className='iframe'>
        <div className="iframe__container-video">
        <iframe className="iframe__video"
          src={`http://www.youtube.com/embed/${this.props.url.id.videoId}`}
          allowFullScreen
          title="Video Player"></iframe>
        </div>
          <h2 className='iframe__title'>{this.props.url.snippet.title}</h2>
    <p className='iframe__text'>{this.props.url.snippet.description}</p>
      </div>
    )
  }
}
export default MainVideo;
