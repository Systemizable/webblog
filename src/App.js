import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <hr className="separator" />
            <Hero />
            <hr className="separator" />
            <About />
            <hr className="separator" />
            <Education />
            <hr className="separator" />
            <Skills />
            <hr className="separator" />
            <Projects />
            <hr className="separator" />
            <Blog />
            <hr className="separator" />
            <Footer />
        </div>
    );
}

export default App;
