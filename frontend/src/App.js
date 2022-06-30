import React from "react";
import MusicaTabela from "./MusicaTabela";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      api_musica: []
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          api_musica: json,
        });
      });
  }

  render() {
    const { api_musica } = this.state;

    return (
      <div className="container">
        <h1>Músicas</h1>
        <MusicaTabela musicas={api_musica} />
        <ReactJkMusicPlayer audioLists={api_musica} autoPlay={false} />
      </div>
    );
  }
}

export default App;
