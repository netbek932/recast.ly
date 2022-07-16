import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '../lib/searchYouTube.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videoData: [],
      currentVideo: exampleVideoData[0]
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(selectedVideo) {
    this.setState({currentVideo: selectedVideo});
  }

  componentDidMount() {
    searchYouTube()
      .then(res => res.json())
      .then(res => {
        this.setState({videoData: res, currentVideo: res[0]});
      });

  }

  search(query) {
    searchYouTube()
      .then(res => res.json())
      .then(res => {
        this.setState({videoData: res, currentVideo: res[0]});
      });

  }


  render () {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em><Search search={this.search} /></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em><VideoPlayer video={this.state.currentVideo} /></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em> <VideoList videos={exampleVideoData} handleClick={this.handleClick} /> </h5></div>
          </div>
        </div>
      </div>
    );
  }
}




// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
