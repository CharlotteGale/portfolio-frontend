import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import Footer from './components/Footer.jsx';

import './assets/styles/index.css';
import './assets/styles/App.css';

const App = () => {

  return (
    <div className='app-container'>
      <Navbar />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </main>
    </div>
  )
}

export default App
