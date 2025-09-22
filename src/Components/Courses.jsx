import React, { useState } from 'react';
import './Courses.css';

const videos = [
    
  {
    id: 'bFgnYj1WLE0',
    title: 'Frontend Session 1',
    duration: '1:08:12',
    thumbnail: 'https://img.youtube.com/vi/bFgnYj1WLE0/hqdefault.jpg',
  },
  {
    id: '59E05nJ8dps',
    title: 'Frontend Session 2',
    duration: '1:02:45',
    thumbnail: 'https://img.youtube.com/vi/59E05nJ8dps/hqdefault.jpg',
  },
  
  {
    id: 'WpMoZGtwz7I',
    title: 'Frontend Session 3',
    duration: '1:10:22',
    thumbnail: 'https://img.youtube.com/vi/WpMoZGtwz7I/hqdefault.jpg',
  },
  {
    id: 'u4tH9HDFCkw',
    title: 'Frontend Session 4',
    duration: '1:05:18',
    thumbnail: 'https://img.youtube.com/vi/u4tH9HDFCkw/hqdefault.jpg',
  },
  
  {
    id: 'WpMoZGtwz7I',
    title: 'Frontend Session 5',
    duration: '1:09:30',
    thumbnail: 'https://img.youtube.com/vi/WpMoZGtwz7I/hqdefault.jpg',
  },
  {
    id: 'Xcs_JvcJRqM',
    title: 'Frontend Session 6',
    duration: '1:13:37',
    thumbnail: 'https://img.youtube.com/vi/Xcs_JvcJRqM/hqdefault.jpg',
  },
];

export default function Courses() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  return (
    <div className="courses-container">
      <h1>Ishub Frontend Bootcamp Playlist</h1>
      <div className="video-player">
        <iframe
          title={selectedVideo.title}
          src={`https://www.youtube.com/embed/${selectedVideo.id}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <h2>🎞️ Playlist</h2>
      <div className="playlist-scroll">
        {videos.map((video, index) => (
          <div
            key={index}
            className={`video-card ${selectedVideo.id === video.id ? 'active' : ''}`}
            onClick={() => setSelectedVideo(video)}
          >
            <div className="thumbnail-wrapper">
              <img src={video.thumbnail} alt={video.title} />
              <div className="overlay">
                <span className="play-icon">▶</span>
                <span className="duration">{video.duration}</span>
              </div>
            </div>
            <p className="video-title">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
