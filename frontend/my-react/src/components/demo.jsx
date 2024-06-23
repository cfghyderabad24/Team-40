import React, { useRef } from 'react';
import YouTube from 'react-youtube';

function Video() {
  const videoId = 'ZeS9yXJa13Q';
  const playerRef = useRef(null);

  const onReady = (event) => {
    playerRef.current = event.target;
  };

  const playVideo = () => {
    playerRef.current.playVideo();
  };

  const pauseVideo = () => {
    playerRef.current.pauseVideo();
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f5f5f5',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ maxWidth: '600px', width: '100%', marginBottom: '20px' }}>
        <YouTube videoId={videoId} onReady={onReady} />
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={playVideo} style={{
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          backgroundColor: '#4c56af',
          color: 'white',
          fontSize: '16px',
          cursor: 'pointer'
        }}>Play</button>
        <button onClick={pauseVideo} style={{
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          backgroundColor: '#4c56af',
          color: 'white',
          fontSize: '16px',
          cursor: 'pointer'
        }}>Pause</button>
      </div>
    </div>
  );
}

export default Video;