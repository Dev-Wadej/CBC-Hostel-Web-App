import React from 'react';
import About from '../home-page/about';
import Activity from '../home-page/activity';
import Admins from '../home-page/admin';
import BackImg from '../home-page/back-image';
import Bottom from '../home-page/bottom';
import Contact from '../home-page/contact';
import Footer from '../home-page/footer';
import Header from '../home-page/header';
import Hostels from '../home-page/hostels';

const Home = () => {
  return (
    <>
      <div className="homepage">
        <Header />
        <main className="react-hold">
          <Hostels />
          <About />
          <BackImg />
          <Admins />
          <Activity />
          <Contact />
        </main>
        <Bottom />
        <Footer />
      </div>
    </>
  );
};

export default Home;
