// components/AnimatedCursor.js
import React, { useEffect, useState } from 'react';

const AnimatedCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hidden, setHidden] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);

    useEffect(() => {
        const addEventListeners = () => {
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseenter', onMouseEnter);
            document.addEventListener('mouseleave', onMouseLeave);
            document.addEventListener('mousedown', onMouseDown);
            document.addEventListener('mouseup', onMouseUp);
        };

        const removeEventListeners = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseenter', onMouseEnter);
            document.removeEventListener('mouseleave', onMouseLeave);
            document.removeEventListener('mousedown', onMouseDown);
            document.removeEventListener('mouseup', onMouseUp);
        };

        const onMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const onMouseLeave = () => {
            setHidden(true);
        };

        const onMouseEnter = () => {
            setHidden(false);
        };

        const onMouseDown = () => {
            setClicked(true);
        };

        const onMouseUp = () => {
            setClicked(false);
        };

        addEventListeners();

        // Handle link hover states
        const handleLinkHoverEvents = () => {
            document.querySelectorAll('a, button, .cursor-pointer').forEach((el) => {
                el.addEventListener('mouseover', () => setLinkHovered(true));
                el.addEventListener('mouseout', () => setLinkHovered(false));
            });
        };

        handleLinkHoverEvents();

        return () => {
            removeEventListeners();
        };
    }, []);

    return (
        <div
            className={`cursor ${hidden ? 'opacity-0' : 'opacity-100'} ${clicked ? 'scale-75' : 'scale-100'
                } ${linkHovered ? 'scale-150 bg-opacity-10' : ''}`}
            style={{
                position: 'fixed',
                left: `${position.x}px`,
                top: `${position.y}px`,
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                backgroundColor: 'rgba(59, 130, 246, 0.5)',
                pointerEvents: 'none',
                zIndex: 9999,
                transform: 'translate(-50%, -50%)',
                transition: 'transform 0.15s ease, width 0.2s ease, height 0.2s ease, background-color 0.2s ease',
                mixBlendMode: 'exclusion'
            }}
        />
    );
};

export default AnimatedCursor;