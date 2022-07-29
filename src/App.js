import React from 'react';
import AuthContainer from './pages/Sign-up_login/AuthContainer';
import Header from './pages/home-page/header';
import Hostels from './pages/home-page/hostels';
import About from './pages/home-page/about';

const App = () => {
  return (
    <div>
        <AuthContainer/>
        <Header/>
        <main className='react-hold'>
          <Hostels/>
          <About/>
        </main>
    </div>
  )
}

export default App