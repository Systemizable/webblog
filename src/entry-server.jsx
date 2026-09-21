// entry-server.jsx
// Build-time only: renders the page to HTML for scripts/prerender.mjs.
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

export const render = () =>
    renderToString(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
