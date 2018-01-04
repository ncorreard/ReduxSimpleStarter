import React from 'react';

const Video = (props) => {
  if (!props.video) return <div>Loading...</div>;
  return (
    <div>
      <h2>Selected video</h2>
      <div>{props.video.snippet.title}</div>
      <div>{props.video.snippet.description}</div>
    </div>
  );
}

export default Video;
