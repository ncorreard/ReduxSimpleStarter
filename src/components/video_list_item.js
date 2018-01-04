import React from 'react';

const VideoListItem = (props) => {
  return (
    <div onClick={() => props.onVideoSelected(props.video)}>
      <li>Video {props.video.snippet.title}</li>
    </div>
  );
}

export default VideoListItem;
