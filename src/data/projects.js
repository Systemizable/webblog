// Years are inferred from the last push on each GitHub repo -- close enough
// for ordering, but worth correcting if a project was actually built earlier.

export const projects = [
    {
        id: 'oop-job-portal',
        title: 'Job Portal',
        image: 'oop.webp',
        year: '2025',
        tagline: 'Auth, listings and documented endpoints, on Spring Boot.',
        description: 'A job portal built on Spring Boot with MongoDB behind it. It handles user authentication, job listings and the full application lifecycle, with the REST layer documented in Swagger and the codebase in JavaDoc.',
        stack: ['Java', 'Spring Boot', 'MongoDB', 'Swagger'],
        links: [
            { href: 'https://jobportal-952d.onrender.com/index.html', label: 'JavaDoc' },
            { href: 'https://github.com/Systemizable/JobPortal', label: 'Code' },
        ],
    },
    {
        id: 'election-analysis',
        title: 'Election Analysis & Prediction',
        image: 'election.webp',
        year: '2025',
        tagline: 'Municipal results, turned into a forecast.',
        description: "Analysis of Lebanon's latest municipal election results, extended into a forecast for the coming parliamentary race using the Lebanese Forces as a worked example. Built in Python, with plotting and prediction libraries doing the modelling.",
        stack: ['Python', 'Data Viz', 'Prediction'],
        links: [
            { href: 'https://github.com/Systemizable/election-analysis-predictor', label: 'Code' },
        ],
    },
    {
        id: 'sports-analysis',
        title: 'Sports Analysis App',
        image: 'saa.webp',
        year: '2025',
        tagline: 'Scraped stats, scored to settle the GOAT argument.',
        description: 'Scrapes player statistics from basketball and football sources, then scores them against each other to settle the GOAT argument with numbers rather than opinions. Python end to end, with the results rendered out to HTML and CSS.',
        stack: ['Python', 'Web Scraping', 'HTML/CSS'],
        links: [
            { href: 'https://github.com/Systemizable/SAA-Sports-Analysis-App', label: 'Code' },
        ],
    },
    {
        id: 'agricrop',
        title: 'AgriCrop',
        image: 'agri.webp',
        year: '2024',
        tagline: 'A farm marketplace where the tutorials sit next to the products.',
        description: 'A farming marketplace that keeps the products and the how-to content in the same place: a browsable catalogue of farming supplies alongside tutorials on the techniques they are used for.',
        stack: ['JavaScript', 'HTML/CSS'],
        links: [
            { href: 'https://agricrop.netlify.app', label: 'Live site' },
            { href: 'https://github.com/Systemizable/agricrop', label: 'Code' },
        ],
    },
    {
        id: 'ecommerce',
        title: 'Jarvis E-Com',
        image: 'ecom.webp',
        year: '2024',
        tagline: 'A storefront taken from empty folder to deployed.',
        description: 'A storefront built end to end: landing page, full product catalogue, and individual product views. One of the first larger builds I took all the way from an empty folder to a deployed site.',
        stack: ['JavaScript', 'HTML/CSS'],
        links: [
            { href: 'https://jarvis-ecom.netlify.app', label: 'Live site' },
        ],
    },
];

// Earlier coursework, kept as a compact list so it does not compete with
// the work above for attention.
export const archive = [
    {
        id: 'car-renting',
        title: 'Car Renting Program',
        note: 'C++ rental system with password encryption and PDF records',
        href: 'https://github.com/Systemizable/carrentingprogram',
        stack: ['C++'],
    },
    {
        id: 'water-level-sensor',
        title: 'Water Level Sensor',
        note: 'Arduino, LCD and ultrasonic sensor',
        href: 'https://github.com/Systemizable/waterlevelsensor',
        stack: ['C++', 'Arduino'],
    },
    {
        id: 'math-menu',
        title: 'Math Menu Operations',
        note: 'My first ever coding project',
        href: 'https://github.com/Systemizable/math-operations-menu',
        stack: ['C++'],
    },
    {
        id: 'portfolio',
        title: 'This portfolio',
        note: 'React, hand-rolled CSS',
        href: 'https://github.com/Systemizable/webblog',
        stack: ['React', 'JavaScript', 'CSS'],
    },
];

// Everything that can act as evidence for a skill, in one list.
export const allWork = [
    ...projects.map(p => ({
        id: p.id,
        title: p.title,
        stack: p.stack,
        href: (p.links && p.links[0] && p.links[0].href) || null,
    })),
    ...archive.map(a => ({
        id: a.id,
        title: a.title,
        stack: a.stack,
        href: a.href,
    })),
];

export default projects;
