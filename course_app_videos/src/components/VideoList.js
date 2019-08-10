import '../css/VideoList.css'
import React from 'react';
import VideoItem from './VideoItem';


const VideoList = ({ videos, onVideoSelect}) => { //here instead of receiving props I can get just videos straight from the props
    const vids = videos.map ((video) =>{ 
        return <VideoItem key={video.id.videoId} 
        video={video} onVideoSelect={onVideoSelect}/>; //nested callback from parent APP component onVideoSelect
    })
    
    return (
        <div className='ui relaxed divided list'>
            {vids}
        </div>
    );
};
export default VideoList;