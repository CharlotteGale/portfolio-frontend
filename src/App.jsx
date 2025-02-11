import { useState } from 'react';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import BannerImage from './components/BannerImage.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Languages from './components/Languages.jsx';
import Tools from './components/Tools.jsx';
import Contact from './components/ContactForm.jsx';
import Connect from './components/Connect.jsx';
import Footer from './components/Footer.jsx';

import './assets/styles/index.css';
import './assets/styles/App.css';


const App = () => {

  return (
    <div className='app-container'>
      <Navbar />
      <main className='main-content'>
        <Header />
        <BannerImage />
        <About />
        <Projects />
        <Languages />
        <Tools />
        <Contact />
        <Connect />
        <Footer />
      </main>
      
    </div>
  )
}

export default App
