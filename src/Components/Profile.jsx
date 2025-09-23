import React, { useState } from 'react';
import './Profile.css';
import myimg from '../assets/myimg.jpg';
import { useNavigate } from 'react-router-dom';
function Profile() {
  const navigate = useNavigate();
  const [quizScore, setQuizScore] = useState(90);
  const [quizAttempts, setQuizAttempts] = useState(5);
  return (
    <div className="profile-container">
      {/* Header */}
      <header className="profile-header">
        <div className="logo">IS Hub Frontend Profile</div>
      </header>
      <main className="profile-main">
        {/* User Info */}
        <section className="user-info">
          <img src={myimg} alt="Profile" className="profile-picture" />
          <h2 className="user-name">Kalab Bilhatu</h2>
          <p className="user-email">Kalexkalab@gmail.com</p>
          <p className="user-bio">Web developer and lifelong learner</p>
          <p className="user-location">Ethiopia, Addis Ababa</p>
        </section>
        <section className="progress-section">
          {/* Enrolled Courses */}
          <div className="courses-progress">
            <h3>Enrolled Courses</h3>
            <ul className="course-list">
              <li>
                <span>HTML Basics</span>
                <div className="progress-bar" data-progress="75%"></div>
              </li>
              <li>
                <span>CSS Styling</span>
                <div className="progress-bar" data-progress="50%"></div>
              </li>
              <li>
                <span>JavaScript Essentials</span>
                <div className="progress-bar" data-progress="20%"></div>
              </li>
              <li>
                <span>React Fundamentals</span>
                <div className="progress-bar empty"></div>
              </li>
            </ul>
          </div>

          {/* Badges & Certificates */}
          <div className="badges-certificates">
            <h3>Badges & Certificates</h3>
            <ul className="badge-list">
              <li><span className="badge-icon">🥇</span><span>HTML Master</span></li>
              <li><span className="badge-icon">🧩</span><span>CSS Specialist</span></li>
              <li><span className="badge-icon">⚛️</span><span>React Certified</span></li>
            </ul>
          </div>
          {/* Take Quiz Button */}
          <button className="quiz-btn" onClick={() => navigate('/quiz')}>
            Take Quiz
          </button>

          {/* Quiz Scores */}
          <div className="quiz-scores">
            <h3>Quiz Scores</h3>
            <div className="score-row">
              <span className="score-label">Best Score 🏆</span>
              <span className="score-value">{quizScore}%</span>
            </div>
            <div className="score-row">
              <span className="score-label">Attempts 📝</span>
              <span className="score-value">{quizAttempts}</span>
            </div>
            <div className="score-row">
              <span className="score-label">Attendance 📅</span>
              <span className="score-value">12/15 sessions</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Profile;
