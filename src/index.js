import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import Video from './components/video';

const YOUTUBE_API_KEY='AIzaSyBo9N6O216hxESzTpE742wMVHcFTMc78cQ';

class App extends React.Component {


   constructor(props) {
     super(props);
     this.state = { videos: [], selected: null };
     this.search('Victor Hugo');
   }

  search(term) {
    console.log(`search ${term}`);
    YTSearch( {
      key:YOUTUBE_API_KEY,
      term:term}, 
      (videos) => this.setState({videos:videos,selected:videos[0]}));
  }

  render() {
   return (
      <div>
         <SearchBar onSearchBarTermChange={ (term) => this.search(term)} />
         <Video video={this.state.selected} />
         <VideoList 
            onVideoSelected={(selected)=>this.setState({selected})} 
            videos={this.state.videos}/>
      </div>
   );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
