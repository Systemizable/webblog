// App.js
import React from 'react';
import Header from './components/Header';
import MatrixRain from './components/MatrixRain';
import SectionDivider from './components/SectionDivider';
import Hero from './components/Hero';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div className="App">
            <MatrixRain className="matrix-rain--page" fontSize={14} tickMs={70}/>
            <Header/>
            <Hero/>
            <SectionDivider label="> cd ~/skills"/>
            <Skills/>
            <SectionDivider label="> cd ~/projects"/>
            <Projects/>
            <SectionDivider label="> cd ~/services"/>
            <Services/>
            <SectionDivider label="> cd ~/contact"/>
            <Footer/>
        </div>
    );
}

export default App;
