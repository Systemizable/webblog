// App.js
import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

function App() {
        return (
            <div className="App">
                    <Header/>
                    <Hero/>
                    <Skills/>
                    <Projects/>
                    <Services/>
                    <Footer/>
                    <Analytics/>
            </div>
        );
}

export default App;
