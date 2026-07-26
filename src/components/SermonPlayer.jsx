import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, RotateCcw, Video, Headset, Maximize2, SkipForward } from 'lucide-react';

export default function SermonPlayer({ sermon }) {
  const [mediaType, setMediaType] = useState('audio'); // 'audio' or 'video'
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);

  const audioRef = useRef(null);
  const videoRef = useRef(null);

  const activeRef = mediaType === 'video' ? videoRef : audioRef;

  // Toggle Play / Pause
  const togglePlay = () => {
    const media = activeRef.current;
    if (!media) return;

    if (isPlaying) {
      media.pause();
    } else {
      // Pause the other media if switching
      if (mediaType === 'audio' && videoRef.current) videoRef.current.pause();
      if (mediaType === 'video' && audioRef.current) audioRef.current.pause();
      media.play().catch(err => console.log('Playback error:', err));
    }
    setIsPlaying(!isPlaying);
  };

  // Sync state on change of sermon or media type
  useEffect(() => {
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
    }
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.load();
    }
  }, [sermon, mediaType]);

  // Set duration when metadata loads
  const handleLoadedMetadata = () => {
    const media = activeRef.current;
    if (media) {
      setDuration(media.duration || 0);
    }
  };

  // Update current time on play progress
  const handleTimeUpdate = () => {
    const media = activeRef.current;
    if (media) {
      setCurrentTime(media.currentTime || 0);
    }
  };

  // Format time (e.g. 03:45)
  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Handle progress bar click
  const handleSeek = (e) => {
    const seekTime = parseFloat(e.target.value);
    const media = activeRef.current;
    if (media) {
      media.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  // Handle volume change
  const handleVolumeChange = (e) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    setIsMuted(vol === 0);
    const media = activeRef.current;
    if (media) {
      media.volume = vol;
      media.muted = vol === 0;
    }
  };

  // Toggle Mute
  const toggleMute = () => {
    const newMute = !isMuted;
    setIsMuted(newMute);
    const media = activeRef.current;
    if (media) {
      media.muted = newMute;
      media.volume = newMute ? 0 : volume;
    }
  };

  // Change playback speed
  const changeSpeed = () => {
    const speeds = [1, 1.25, 1.5, 2];
    const currentIndex = speeds.indexOf(playbackRate);
    const nextIndex = (currentIndex + 1) % speeds.length;
    const newRate = speeds[nextIndex];
    setPlaybackRate(newRate);
    const media = activeRef.current;
    if (media) {
      media.playbackRate = newRate;
    }
  };

  // Go back 10s
  const skipBackward = () => {
    const media = activeRef.current;
    if (media) {
      media.currentTime = Math.max(0, media.currentTime - 10);
    }
  };

  // Go forward 10s
  const skipForward = () => {
    const media = activeRef.current;
    if (media) {
      media.currentTime = Math.min(duration, media.currentTime + 10);
    }
  };

  // Request fullscreen for video
  const requestFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen(); // Safari
      }
    }
  };

  if (!sermon) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }} className="glass-card">
        Select a message to start playing.
      </div>
    );
  }

  return (
    <div className="glass-card" style={{ overflow: 'hidden', padding: 0 }}>
      {/* Player Top Selector */}
      <div style={{ display: 'flex', borderBottom: '1px solid var(--border-color)', backgroundColor: 'rgba(0,0,0,0.2)' }}>
        <button
          onClick={() => setMediaType('audio')}
          style={{
            flex: 1,
            padding: '1rem',
            background: mediaType === 'audio' ? 'rgba(230, 200, 117, 0.1)' : 'transparent',
            border: 'none',
            color: mediaType === 'audio' ? 'var(--accent-gold)' : 'var(--text-muted)',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            borderBottom: mediaType === 'audio' ? '2px solid var(--accent-gold)' : 'none'
          }}
        >
          <Headset size={18} /> Listen to Audio
        </button>
        {sermon.videoUrl && (
          <button
            onClick={() => setMediaType('video')}
            style={{
              flex: 1,
              padding: '1rem',
              background: mediaType === 'video' ? 'rgba(230, 200, 117, 0.1)' : 'transparent',
              border: 'none',
              color: mediaType === 'video' ? 'var(--accent-gold)' : 'var(--text-muted)',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              borderBottom: mediaType === 'video' ? '2px solid var(--accent-gold)' : 'none'
            }}
          >
            <Video size={18} /> Watch Sermon Video
          </button>
        )}
      </div>

      {/* Screen area */}
      <div style={{ position: 'relative', width: '100%', backgroundColor: '#000', display: 'flex', justifyContent: 'center', alignItems: 'center', aspectRatio: mediaType === 'video' ? '16/9' : '21/9' }}>
        {mediaType === 'video' ? (
          <video
            ref={videoRef}
            src={sermon.videoUrl}
            onClick={togglePlay}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            style={{ width: '100%', height: '100%', objectFit: 'contain', cursor: 'pointer' }}
          />
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center', width: '100%', height: '100%', background: 'linear-gradient(135deg, #131c31 0%, #0b1120 100%)' }}>
            <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'rgba(230, 200, 117, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-color)', marginBottom: '1rem' }}>
              <Headset size={32} className="text-gold" />
            </div>
            <h4 style={{ color: 'var(--text-light)', fontFamily: 'var(--font-serif)', marginBottom: '0.25rem' }}>{sermon.title}</h4>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{sermon.preacher} • {sermon.scripture}</span>
            <audio
              ref={audioRef}
              src={sermon.audioUrl}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              style={{ display: 'none' }}
            />
          </div>
        )}

        {/* Overlay big play button when paused */}
        {!isPlaying && (
          <button
            onClick={togglePlay}
            style={{
              position: 'absolute',
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent-gold)',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--bg-dark)',
              boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
              transition: 'transform 0.2s',
              zIndex: 5
            }}
            className="play-overlay"
          >
            <Play size={32} fill="currentColor" style={{ marginLeft: '4px' }} />
          </button>
        )}
      </div>

      {/* Control Console */}
      <div style={{ padding: '1.5rem', backgroundColor: 'rgba(19, 28, 49, 0.95)' }}>
        {/* Progress Bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <span style={{ fontSize: '0.8rem', width: '40px', textAlign: 'right', color: 'var(--text-muted)' }}>{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max={duration || 100}
            value={currentTime}
            onChange={handleSeek}
            style={{
              flex: 1,
              height: '4px',
              cursor: 'pointer',
              accentColor: 'var(--accent-gold)'
            }}
          />
          <span style={{ fontSize: '0.8rem', width: '40px', color: 'var(--text-muted)' }}>{formatTime(duration)}</span>
        </div>

        {/* Main Controls row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
          {/* Skip buttons and Play/Pause */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <button onClick={skipBackward} style={{ background: 'none', border: 'none', color: 'var(--text-light)', cursor: 'pointer' }} title="Back 10s">
              <RotateCcw size={20} />
            </button>
            <button
              onClick={togglePlay}
              style={{
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-gold)',
                color: 'var(--bg-dark)',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" style={{ marginLeft: '2px' }} />}
            </button>
            <button onClick={skipForward} style={{ background: 'none', border: 'none', color: 'var(--text-light)', cursor: 'pointer' }} title="Forward 10s">
              <SkipForward size={20} />
            </button>
          </div>

          {/* Title in center (Desktop only) */}
          <div style={{ display: 'none', flexDirection: 'column', flex: 1, paddingLeft: '1.5rem' }} className="console-title">
            <span style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-light)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '300px' }}>
              {sermon.title}
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              {sermon.preacher}
            </span>
          </div>

          {/* Volume, Speed, and Fullscreen */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            {/* Speed Toggler */}
            <button
              onClick={changeSpeed}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--border-color)',
                borderRadius: '4px',
                padding: '0.25rem 0.5rem',
                color: 'var(--accent-gold)',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
              title="Change speed"
            >
              {playbackRate}x
            </button>

            {/* Volume controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <button onClick={toggleMute} style={{ background: 'none', border: 'none', color: 'var(--text-light)', cursor: 'pointer' }}>
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                style={{ width: '70px', height: '4px', accentColor: 'var(--accent-gold)', cursor: 'pointer' }}
              />
            </div>

            {/* Maximize (only for Video) */}
            {mediaType === 'video' && (
              <button onClick={requestFullScreen} style={{ background: 'none', border: 'none', color: 'var(--text-light)', cursor: 'pointer' }} title="Full screen">
                <Maximize2 size={20} />
              </button>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .play-overlay:hover {
          transform: scale(1.1);
        }
        @media (min-width: 768px) {
          .console-title {
            display: flex !important;
          }
        }
      `}</style>
    </div>
  );
}
