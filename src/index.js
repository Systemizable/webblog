// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Analytics } from '@vercel/analytics/react';
import App from './App';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <App />
        <Analytics />
    </React.StrictMode>,
    document.getElementById('root')
);
