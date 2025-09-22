import React, { useState } from 'react';
import "./Community.css";
import logo from '../assets/ishublogo.jpg';
import img2 from '../assets/img2.jpg';
import tech from '../assets/technerd.jpg';
import googins from '../assets/googins.jpg';



const tabs = [
  'General',
  'Announcements',
  'Project Showcase',
  'Tips & Resources',
  'memes'
];
const initialPosts = [
  {
    id: 1,
    avatar: logo,
    title: 'final project announcement',
    content: 'hi everyone first of all congratulations to all ofyou on the successful completion of this course',
    time: '2 days ago',
    likes: 34,
    comments: 96,
  },
  {
    id: 2,
    avatar: img2,
    title: 'Get ready for todays class',
    content: 'our class will start at 2LT',
    time: '5 min ago',
    likes: 74,
    comments: 55,
  },
  {
    id: 3,
    avatar: tech,
    title: ' how to Fetching API data in useEffect',
    content: 'How do I fetch API data using useEffect in React?',
    time: '8 hours ago',
    likes: 7,
    comments: 2,
  },
  {
    id: 4,
    avatar: googins,
    title: 'Dark mode toggle',
    content: 'how to implement dark mode toggle',
    time: '1 day ago',
    likes: 30,
    comments: 74,
  },
];
function Community() {
  const [posts, setPosts] = useState(initialPosts);

  const handleLike = (id) => {
    const updatedPosts = posts.map(post =>
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    );
    setPosts(updatedPosts);
  };
  return (
    <div className="community-page">
      {/* Header  */}
      <header className="header">
        <img  className='islogo'src={logo} alt="ishublogo" />iS Hub Frontend
        <div className="search">
          <input type="text" placeholder="Search ..." />
        </div>
      </header>
{/* Title */}
      <h1 className="title">Community</h1>
{/* Tabs */}
      <nav className="tabs">
        {tabs.map((tab, index) => (
          <button key={index}>{tab}</button>
        ))}
      </nav>
{/* Posts */}
      <section className="posts">
        {posts.map((post) => (
          <article className="post" key={post.id}>
            <img src={post.avatar} alt="profilepic" />
            <div className="content">
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <div className="info">
                <span>{post.time}</span>
                <button onClick={() => handleLike(post.id)}>
                  {post.likes} ❤️
                </button>
                <span>{post.comments} 💬</span>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

export default Community;
