// App.jsx
import React, { useState } from 'react';
import { config as faConfig } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Header from './components/Header';
import MatrixRain from './components/MatrixRain';
import SectionDivider from './components/SectionDivider';
import Hero from './components/Hero';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

// Ship Font Awesome's CSS in the bundle instead of injecting it at runtime,
// so prerendered icons are sized correctly before JavaScript loads.
faConfig.autoAddCss = false;

function App() {
    // Which skill is currently being traced through the build log.
    // Lives here because Skills sets it and Projects reads it.
    const [activeSkill, setActiveSkill] = useState(null);

    return (
        <div className="App">
            <MatrixRain className="matrix-rain--page" fontSize={14} tickMs={70}/>
            <Header/>
            <Hero/>
            <SectionDivider label="> cd ~/skills"/>
            <Skills activeSkill={activeSkill} onSkillToggle={setActiveSkill}/>
            <SectionDivider label="> cd ~/projects"/>
            <Projects activeSkill={activeSkill} onClearSkill={() => setActiveSkill(null)}/>
            <SectionDivider label="> cd ~/services"/>
            <Services/>
            <SectionDivider label="> cd ~/contact"/>
            <Footer/>
        </div>
    );
}

export default App;
