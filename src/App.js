import React from "react";
import "./App.scss";
import Navigation from "./components/Navigation/Navigation";
import VideoList from "./components/VideoList/VideoList";
import MainVideo from "./components/MainVideo/MainVideo";
import { youtubeListApi } from "./service/service";

class App extends React.Component {
  state = {
    url: false,
    video: "",
    videos: {
      items: [],
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.video, "este es el estado");
    youtubeListApi(this.state.video).then((data) => {
      this.setState({
        videos: data,
      });
    });
    console.log("llamdo terminado");
  };

  handleChange = (e) => {
    this.setState({
      video: e.target.value,
    });
  };

  chooseVideo = (videos) => {
    console.log(videos);
    this.setState({
      url: videos,
    });
  };

  componentDidMount() {
    youtubeListApi().then((data) => {
      this.setState({
        videos: data,
      });
    });
  }

  render() {
    const videos = this.state.videos;
    return (
      <div className="App">
        <Navigation onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <VideoList videos={videos} chooseVideo={this.chooseVideo} />
        {this.state.url && <MainVideo url={this.state.url} />}
      </div>
    );
  }
}

export default App;
