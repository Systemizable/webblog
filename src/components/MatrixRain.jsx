import React, { useEffect, useRef } from 'react';
import './MatrixRain.css';

const GLYPHS = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜ0123456789<>[]{}/\\=+*$#%&';

const randomGlyph = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)];

/**
 * Canvas matrix rain used as a decorative section backdrop.
 * Pauses itself whenever it scrolls out of view or the tab is hidden,
 * and renders a single static frame under prefers-reduced-motion.
 */
const MatrixRain = ({ className = '', fontSize = 14, tickMs = 60 }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return undefined;

        const ctx = canvas.getContext('2d');
        if (!ctx) return undefined;

        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);

        let drops = [];
        let width = 0;
        let height = 0;
        let frame = null;
        let lastTick = 0;

        const resize = () => {
            const rect = canvas.getBoundingClientRect();
            width = rect.width;
            height = rect.height;
            if (width === 0 || height === 0) return;

            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            const columns = Math.ceil(width / fontSize);
            drops = Array.from({ length: columns }, () => Math.random() * -40);

            ctx.fillStyle = '#0A0E12';
            ctx.fillRect(0, 0, width, height);
        };

        const paint = () => {
            // Trailing fade rather than a hard clear -- this is what makes the tails
            ctx.fillStyle = 'rgba(10, 14, 18, 0.085)';
            ctx.fillRect(0, 0, width, height);
            ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;
            ctx.textBaseline = 'top';

            for (let i = 0; i < drops.length; i += 1) {
                const x = i * fontSize;
                const y = drops[i] * fontSize;

                if (y > -fontSize && y < height) {
                    ctx.fillStyle = '#D6FFEE';
                    ctx.fillText(randomGlyph(), x, y);

                    ctx.fillStyle = 'rgba(0, 255, 156, 0.5)';
                    ctx.fillText(randomGlyph(), x, y - fontSize);

                    ctx.fillStyle = 'rgba(0, 255, 156, 0.22)';
                    ctx.fillText(randomGlyph(), x, y - fontSize * 2);
                }

                if (y > height && Math.random() > 0.975) drops[i] = 0;
                drops[i] += 1;
            }
        };

        const loop = now => {
            frame = requestAnimationFrame(loop);
            if (now - lastTick < tickMs) return;
            lastTick = now;
            paint();
        };

        const start = () => {
            if (frame === null && !reduced) frame = requestAnimationFrame(loop);
        };

        const stop = () => {
            if (frame !== null) {
                cancelAnimationFrame(frame);
                frame = null;
            }
        };

        resize();

        if (reduced) {
            // One static frame so the panel still has texture
            for (let i = 0; i < 26; i += 1) paint();
            return () => {};
        }

        const observer = new IntersectionObserver(
            entries => entries.forEach(entry => (entry.isIntersecting ? start() : stop())),
            { threshold: 0 }
        );
        observer.observe(canvas);

        const resizeObserver = new ResizeObserver(() => resize());
        resizeObserver.observe(canvas);

        const onVisibility = () => (document.hidden ? stop() : start());
        document.addEventListener('visibilitychange', onVisibility);

        return () => {
            stop();
            observer.disconnect();
            resizeObserver.disconnect();
            document.removeEventListener('visibilitychange', onVisibility);
        };
    }, [fontSize, tickMs]);

    return <canvas ref={canvasRef} className={`matrix-rain ${className}`} aria-hidden="true" />;
};

export default MatrixRain;
