import React from 'react';
import AuthContainer from './pages/Sign-up_login/AuthContainer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import HostelPage from './pages/hostel-pages/hostel-pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/auth" element={<AuthContainer />}></Route>
      <Route path="/hostels" element={<HostelPage />}></Route>
    </Routes>
  );
};

export default App;
