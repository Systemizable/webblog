import React from 'react';
import './Projects.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Requires a loader
import { Carousel } from 'react-responsive-carousel';

const Projects = () => (
    <section className="projects" id="projects">
        <h2>Projects</h2>
        <div className="carousel-container">
            <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                useKeyboardArrows
                autoPlay
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                        <button type="button" onClick={onClickHandler} title={label} className="arrow arrow-prev">
                            &#10094;
                        </button>
                    )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                        <button type="button" onClick={onClickHandler} title={label} className="arrow arrow-next">
                            &#10095;
                        </button>
                    )
                }
            >
                <div className="slide-container">
                    <img src={`${process.env.PUBLIC_URL}/math.png`} alt="Math Menu Operations" className="slide-image" />
                    <div className="difficulty-circle beginner" title="Beginner"></div>
                    <div className="text-container">
                        <h3>Math Menu Operations</h3>
                        <p>This is a simple project that represents my first ever coding project. Even though it's extremely basic, it holds a special place as the foundation of my programming journey.</p>
                    </div>
                </div>
                <div className="slide-container">
                    <img src={`${process.env.PUBLIC_URL}/arduino.png`} alt="Water Level Sensor" className="slide-image" />
                    <div className="difficulty-circle intermediate" title="Intermediate"></div>
                    <div className="text-container">
                        <h3>Water Level Sensor</h3>
                        <p>This is an introduction to engineering project. We were tasked, in any shape or form, to create a water level sensor that gave out signals when it reached certain levels. We opted for an Arduino, LCD, and sonic sensor, and found major success!</p>
                    </div>
                </div>
                <div className="slide-container">
                    <img src={`${process.env.PUBLIC_URL}/car.png`} alt="Car Renting Program" className="slide-image" />
                    <div className="difficulty-circle advanced" title="Advanced"></div>
                    <div className="text-container">
                        <h3>Car Renting Program</h3>
                        <p>This is a Programming 2 project. We were tasked to create in C++, a car rental program that would save user credentials, provide encryption for passwords, save rental details, and alter a PDF file containing rental info.</p>
                    </div>
                </div>
                <div className="slide-container">
                    <img src={`${process.env.PUBLIC_URL}/port.png`} alt="Portfolio Website" className="slide-image" />
                    <div className="difficulty-circle intermediate" title="Intermediate"></div>
                    <div className="text-container">
                        <h3>Portfolio Website</h3>
                        <p>This website will be added to my projects in the future, showcasing my skills and portfolio as a programmer.</p>
                    </div>
                </div>
            </Carousel>
        </div>
    </section>
);

export default Projects;
