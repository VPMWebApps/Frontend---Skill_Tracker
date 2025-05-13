import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar.jsx'
import Home from './Component/Home.jsx'
import MySkills from './Component/MySkills.jsx'
import Courses from './Component/Courses.jsx'
import Profile from './Component/Profile.jsx'
const App = () => {
  return (
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MySkills" element={<MySkills />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App;