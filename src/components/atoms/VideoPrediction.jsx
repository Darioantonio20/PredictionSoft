import React from 'react';
import YouTube from 'react-youtube';
import "../../assets/style/VideoPrediction.css";

function VideoPrediction() {
    const videoId = 'MFuQ7DhkTDM'; // ID del video de YouTube
  
    const opts = {
      height: '400',
      width: '800',
      playerVars: {
        autoplay: 0,
      },
    };
  
    return (
        <>
            <div className="video-container">
                <YouTube videoId={videoId} opts={opts} />
            </div>
        </>
    );
}

export default VideoPrediction;
