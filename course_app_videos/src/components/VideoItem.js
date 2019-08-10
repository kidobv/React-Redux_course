import '../css/VideoItem.css'
import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {
    const { title, thumbnails} = video.snippet;
    return (
        //on the event handler we need to pass the video as a parameter to the callback function 
        //we don't want to call onVideoSelect() when the component is rendered so we need to use an arrow funciton
        //to give onClick event a callback
        <div onClick={() => onVideoSelect(video)} className = 'video-item item'>
            <img className='ui image' alt={title} src={thumbnails.high.url}></img>
            <div className='content'>
                <div className = 'header'>{title}</div>
            </div>
        </div>
    );
};
export default VideoItem;