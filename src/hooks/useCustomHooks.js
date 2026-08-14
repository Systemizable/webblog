import { useEffect, useRef, useState } from 'react';

const prefersReducedMotion = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Adds `is-visible` to the element the first time it scrolls into view.
 * Children marked `.reveal-item` stagger off the parent via --i.
 */
export const useReveal = (threshold = 0.12) => {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return undefined;

        if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
            el.classList.add('is-visible');
            return undefined;
        }

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold, rootMargin: '0px 0px -60px 0px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return ref;
};

/** Types `text` out one character at a time. */
export const useTypewriter = (text, speed = 70, startDelay = 350) => {
    const [output, setOutput] = useState('');
    const [done, setDone] = useState(false);

    useEffect(() => {
        if (prefersReducedMotion()) {
            setOutput(text);
            setDone(true);
            return undefined;
        }

        setOutput('');
        setDone(false);

        let index = 0;
        let interval;

        const start = setTimeout(() => {
            interval = setInterval(() => {
                index += 1;
                setOutput(text.slice(0, index));
                if (index >= text.length) {
                    clearInterval(interval);
                    setDone(true);
                }
            }, speed);
        }, startDelay);

        return () => {
            clearTimeout(start);
            clearInterval(interval);
        };
    }, [text, speed, startDelay]);

    return { output, done };
};

/** Pulls an element gently toward the cursor while hovered. */
export const useMagnetic = (strength = 0.3) => {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return undefined;
        if (prefersReducedMotion()) return undefined;
        if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined;

        const handleMove = event => {
            const rect = el.getBoundingClientRect();
            const dx = event.clientX - (rect.left + rect.width / 2);
            const dy = event.clientY - (rect.top + rect.height / 2);
            el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
        };

        const handleLeave = () => {
            el.style.transform = '';
        };

        el.addEventListener('mousemove', handleMove);
        el.addEventListener('mouseleave', handleLeave);

        return () => {
            el.removeEventListener('mousemove', handleMove);
            el.removeEventListener('mouseleave', handleLeave);
        };
    }, [strength]);

    return ref;
};

/** Counts 0 -> target once the element enters the viewport. */
export const useCountUp = (target, duration = 1200) => {
    const [value, setValue] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return undefined;

        if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
            setValue(target);
            return undefined;
        }

        let frame;
        let startTime;

        const step = now => {
            if (!startTime) startTime = now;
            const progress = Math.min((now - startTime) / duration, 1);
            // easeOutCubic
            setValue(Math.round(target * (1 - Math.pow(1 - progress, 3))));
            if (progress < 1) frame = requestAnimationFrame(step);
        };

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        frame = requestAnimationFrame(step);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.4 }
        );

        observer.observe(el);

        return () => {
            observer.disconnect();
            if (frame) cancelAnimationFrame(frame);
        };
    }, [target, duration]);

    return [value, ref];
};
