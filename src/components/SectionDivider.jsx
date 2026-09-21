import React from 'react';
import './SectionDivider.css';

/**
 * Transparent band between sections. Because the page matrix sits behind
 * everything, leaving this see-through gives the rain a clear moment
 * between the translucent section panels.
 */
const SectionDivider = ({ label }) => (
    <div className="section-divider">
        <span className="section-divider__label">{label}</span>
    </div>
);

export default SectionDivider;
