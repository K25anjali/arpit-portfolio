import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export function PointerHighlight({
    children,
    rectangleClassName = "",
    pointerClassName = "",
    containerClassName = ""
}) {
    const containerRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (containerRef.current) {
            const { width, height } = containerRef.current.getBoundingClientRect();
            setDimensions({ width, height });
        }

        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                const { width, height } = entry.contentRect;
                setDimensions({ width, height });
            }
        });

        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                resizeObserver.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <div className={`relative w-fit ${containerClassName}`} ref={containerRef}>
            {children}
            {dimensions.width > 0 && dimensions.height > 0 && (
                <motion.div
                    className="pointer-events-none absolute inset-0 z-0"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <motion.div
                        className={`absolute inset-0 border border-purple-500 ${rectangleClassName}`}
                        initial={{ width: 0, height: 0 }}
                        whileInView={{
                            width: dimensions.width,
                            height: dimensions.height,
                        }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                        }}
                    />

                    {/* White triangle pointer */}
                    <motion.div
                        className={`absolute w-0 h-0 border-l-[8px] border-r-[8px] border-b-[12px] 
              border-l-transparent border-r-transparent border-b-white 
              rotate-[-90deg] ${pointerClassName}`}
                        initial={{ opacity: 0 }}
                        whileInView={{
                            opacity: 1,
                            x: dimensions.width + 6,
                            y: dimensions.height + 6,
                        }}
                        transition={{
                            opacity: { duration: 0.1, ease: "easeInOut" },
                            duration: 1,
                            ease: "easeInOut",
                        }}
                    />
                </motion.div>
            )}
        </div>
    );
}
