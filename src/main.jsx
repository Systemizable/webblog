// main.jsx
import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import App from './App';
import './index.css';

const container = document.getElementById('root');

const tree = (
    <React.StrictMode>
        <App />
        <Analytics />
    </React.StrictMode>
);

// Production builds ship the page prerendered (scripts/prerender.mjs), so
// attach to that markup. The dev server serves an empty root instead.
if (container.firstElementChild) {
    hydrateRoot(container, tree);
} else {
    createRoot(container).render(tree);
}
