import React from "react";
import VideoItem from './VideoItem'
import "./VideoList.scss";

class VideoList extends React.Component {

  render() {
    return (
      <div className='container'>
      {this.props.videos.items.map((item,index) => {
        return(
          <VideoItem
            key={index}
            title = {item.snippet.title}
            src = {item.snippet.thumbnails.default.url}
            url = {item}
            chooseVideo={this.props.chooseVideo}
          />
        )
      })}
      </div>
    );
  }
}


// las props son propiedades que le coloco a mi componente , imaginate que tu puedes diseñar tags eso seria el componente ya que se escribe como una y esta etiqueta tiene propiedades que yo voy colocando como necesite y estos valores de las propiedades los puedo utilizar con (this.props.mipropiedad) pero tambien puedo utilizar state que es muy similiar y para utilizar los datos que tengo en mi state utilizo (this.state.miLlaveDeEstado)


export default VideoList;
