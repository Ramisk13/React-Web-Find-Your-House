import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from './Home';
import AboutUs from './About';
import Favorites from './favorites';
import Login from './Login';
import Register from './Register'
import ContactUs from './Contact';
import AddPost from './AddPost';
import PostDetails from '../components/postDetails';
import UserProfile from './UserDetails';

function App() {
  return (
    <BrowserRouter>
      <Navbar />    
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post-details" element={<PostDetails />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
