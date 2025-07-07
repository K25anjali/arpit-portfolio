import React, { useEffect, useRef } from 'react';

const MotionBlurCursor = () => {
    const count = 20;
    const boxesRef = useRef([]);
    const mouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const coords = Array.from({ length: count }, () => ({ x: 0, y: 0 }));

        const animate = () => {
            let x = mouse.current.x;
            let y = mouse.current.y;

            coords.forEach((coord, i) => {
                coord.x += (x - coord.x) * 0.3;
                coord.y += (y - coord.y) * 0.3;
                const el = boxesRef.current[i];
                if (el) {
                    el.style.left = `${coord.x}px`;
                    el.style.top = `${coord.y}px`;
                }
                x = coord.x;
                y = coord.y;
            });

            requestAnimationFrame(animate);
        };

        const move = (e) => {
            mouse.current = { x: e.pageX, y: e.pageY };
        };

        window.addEventListener('mousemove', move);
        animate();

        return () => window.removeEventListener('mousemove', move);
    }, []);

    return (
        <>
            {Array.from({ length: count }).map((_, i) => (
                <div
                    key={i}
                    ref={(el) => (boxesRef.current[i] = el)}
                    className="pointer-events-none fixed w-4 h-4 bg-indigo-400/10 rounded-full backdrop-blur-md z-[9999]"
                />
            ))}
        </>
    );
};

export default MotionBlurCursor;
