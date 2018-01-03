import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoListItem from './components/video_list_item'
import VideoDetail from './components/video_detail'

const YOUTUBE_API_KEY='AIzaSyBo9N6O216hxESzTpE742wMVHcFTMc78cQ'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { videos: [], selectedVideo: null };
    this.search('Alexandre Dumas');
  }

  search(term) {
    YTSearch( {
      key:YOUTUBE_API_KEY,
      term:term
      }, 
      videos => this.setState({ videos:videos, selectedVideo: videos[0] }) );
  }

  render() {
     return (<div>
        <SearchBar onSearch={ (term)=>this.search(term) } />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList onVideoSelect={(selectedVideo)=>this.setState({selectedVideo})} videos={this.state.videos} />
     </div>
     );
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'));

