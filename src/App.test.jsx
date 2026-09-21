import { render, screen } from '@testing-library/react';
import App from './App';
import { render as renderToHtml } from './entry-server';

test('renders the name as the page heading', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Joseph Sfeir');
});

test('prerendered HTML carries the content crawlers index', () => {
    const doc = new DOMParser().parseFromString(renderToHtml(), 'text/html');
    const text = doc.body.textContent;

    // Raw text, as a crawler that ignores CSS reads it.
    expect(doc.querySelector('h1').textContent).toBe('Joseph Sfeir.');
    expect(text).toContain('Full-Stack Software Engineer · Simly');
    expect(text).toContain('Antonine University');
    expect(text).toContain('Job Portal');
});
