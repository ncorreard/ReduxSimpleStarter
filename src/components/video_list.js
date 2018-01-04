import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  if (!props.videos) 
    return <div>Loading...</div>;

  const videoItems = props.videos.map( (video) => (
    <VideoListItem 
      onVideoSelected={props.onVideoSelected}
      key={video.etag} 
      video={video} />
  ) );
  return (
    <ul>
       {videoItems}
    </ul>
  );
}

export default VideoList;
