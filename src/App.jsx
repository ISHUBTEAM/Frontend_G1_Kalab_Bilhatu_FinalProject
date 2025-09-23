import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Community from './Components/Community';
import Footer from './Components/Footer';
import Mentors from './Components/Mentors';
import Resources1 from './Components/Resources';
import Profile from './Components/Profile';
import Courses from './Components/Courses';
import Quiz from './Components/Quiz';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => setIsLoggedIn(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <>
                <Courses />
                <Profile />
                <Community />
                <Mentors />
                <Resources1 />
                <Footer />
              </>
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
