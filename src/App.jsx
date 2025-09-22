import { useState } from 'react';
import Login from './Components/Login';
import Community from './Components/Community';
import Footer from './Components/Footer';
import Mentors from'./Components/Mentors';
import Resources1 from './Components/Resources';
import Profile from './Components/Profile';
import Courses from './Components/Courses';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {isLoggedIn ? (
       <> 
       
       <Courses/>
      <Profile/>
       <Community/>
       <Mentors/>
       <Resources1/>
       <Footer/>
       </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
}

export default App;
