import React from 'react';
import './styles/App.css';
import './styles/contact.css';
import './styles/tech.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import MyWork from './components/MyWork';
import Technologies from './components/Technologies'
import Contact from './components/ContactMe'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home />
      <AboutMe />
      <MyWork />
      <Technologies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
