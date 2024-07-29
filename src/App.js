// App.js
import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Git from './components/Git';
import Footer from './components/Footer';
import Certificates from './components/Certificates';
import './App.css';

function App() {
        return (
            <div className="App">
                    <Header/>
                    <Hero/>
                    <Skills/>
                    <Projects/>
                    <About/>
                    <Footer/>
                    <Analytics/>
            </div>
        );
}

export default App;
