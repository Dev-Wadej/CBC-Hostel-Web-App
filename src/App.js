import React from 'react';
import AuthContainer from './pages/Sign-up_login/AuthContainer';
import Header from './pages/home-page/header';
import Hostels from './pages/home-page/hostels';
import About from './pages/home-page/about';
import BackImg from './pages/home-page/back-image';
import Admins from './pages/home-page/admin';
import Activity from './pages/home-page/activity';
import Contact from './pages/home-page/contact';
import Bottom from './pages/home-page/bottom';
import Footer from './pages/home-page/footer';

const App = () => {
  return (
    <div>
        <AuthContainer/>
        <div className='homepage'>
          <Header/>
          <main className='react-hold'>
            <Hostels/>
            <About/>
            <BackImg/>
            <Admins/>
            <Activity/>
            <Contact/>
          </main>
          <Bottom/>
          <Footer/>
        </div>
    </div>
  )
}

export default App