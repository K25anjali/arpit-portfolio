import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi';
import arpitPhoto from '../assets/arpit-photo.png';
import MotionBlurCursor from './MotionBlurCursor';

const Hero = () => {
  const socialLinks = [
    { icon: <FiGithub className="w-6 h-6" />, href: 'https://github.com/TechwithArpit', label: 'GitHub' },
    { icon: <FiLinkedin className="w-6 h-6" />, href: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
    { icon: <FiMail className="w-6 h-6" />, href: 'mailto:arpit.sri2011@gmail.com', label: 'Email' },
  ];

  // Typewriter effect for name
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  const textArray = [
    'Arpit Shrivastava',
    'DevOps Engineer',
    'Cloud Specialist'
  ];

  useEffect(() => {
    // Cursor blink effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    // Typewriter effect
    let i = 0;
    let currentString = textArray[currentIndex];
    const typingInterval = setInterval(() => {
      if (i < currentString.length) {
        setDisplayedText(currentString.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);

        // Move to next string or loop back
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
          setDisplayedText('');
          setIsTyping(true);
        }, 2000);
      }
    }, 150);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [currentIndex]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden cursor-none">


      <MotionBlurCursor />

      {/* Spotlight SVG */}
      <svg
        className="animate-spotlight pointer-events-none absolute top-0 right-0 z-50 h-[169%] w-[138%] lg:w-[84%] opacity-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 3787 2842"
        fill="none"
      >
        <g filter="url(#filter)">
          <ellipse
            cx="1924.71"
            cy="273.501"
            rx="1924.71"
            ry="273.501"
            transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
            fill="#3b82f6"
            fillOpacity="0.21"
          ></ellipse>
        </g>
        <defs>
          <filter
            id="filter"
            x="0.860352"
            y="0.838989"
            width="3785.16"
            height="2840.26"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              stdDeviation="151"
              result="effect1_foregroundBlur_1065_8"
            ></feGaussianBlur>
          </filter>
        </defs>
      </svg>

      {/* Sticky Social Icons - Right Center */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col items-center"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-gray-400 hover:text-blue-400 hover:bg-gray-800/50 rounded-full transition-all duration-300 backdrop-blur-sm"
              aria-label={link.label}
              whileHover={{
                scale: 1.2,
                rotate: 10,
                backgroundColor: "rgba(30, 58, 138, 0.3)"
              }}
              whileTap={{ scale: 0.9 }}
            >
              {link.icon}
            </motion.a>
          ))}
          <div className="h-16 w-0.5 bg-gray-600"></div>
        </motion.div>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 w-full mt-10">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 mx-auto">
              {/* Glowing orb behind image */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 animate-spin-slow"
                style={{
                  maskImage: 'linear-gradient(transparent, transparent, white, transparent)'
                }}
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              {/* Profile image */}
              <motion.img
                src={arpitPhoto}
                alt="Arpit Srivastava"
                className="relative z-20 w-full h-full rounded-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-500 border-4 border-gray-800/50"
                whileHover={{
                  scale: 1.05,
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 0.5
                }}
              />
            </div>
          </motion.div>

          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight min-h-[4rem]">
              {/* For the name (first item in array) */}
              {currentIndex === 0 ? (
                <>
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {displayedText.substring(0, 5)}
                  </motion.span>{' '}
                  <motion.span
                    className="text-white"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {displayedText.substring(5)}
                  </motion.span>
                </>
              ) : (
                // For other items (titles)
                <motion.span
                  className={`${currentIndex === 1
                    ? 'text-blue-400'
                    : 'text-purple-400'
                    }`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {displayedText}
                </motion.span>
              )}

              {/* Blinking cursor */}
              {isTyping && showCursor && (
                <motion.span
                  className="ml-1 inline-block w-1 h-12 bg-blue-400"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                  }}
                />
              )}
            </h1>
            <motion.h2
              className="text-xl md:text-2xl font-semibold mb-8 text-blue-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              whileHover={{
                scale: 1.02,
                color: "#60a5fa",
                transition: { duration: 0.3 }
              }}

            >
              <motion.span
                className="inline-block px-3 py-1 bg-blue-900/30 rounded-full border border-blue-500/30 mr-2"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.8, type: "spring", stiffness: 300 }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(30, 58, 138, 0.5)",
                  transition: { duration: 0.3 }
                }}
              >
                DevOps
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
              >
                Engineer & Cloud Specialist
              </motion.span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            <motion.p
              className="text-lg text-gray-300 mb-8 max-w-5xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.4, duration: 0.5 }}
              whileHover={{
                color: "#ffffff",
                transition: { duration: 0.3 }
              }}
            >
              I build robust cloud infrastructure and automate deployment pipelines to deliver scalable,
              high-performance applications.
            </motion.p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="#contact"
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 flex items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.6, duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Contact Me</span>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.a>
              <motion.a
                href="#projects"
                className="px-6 py-2.5 border border-blue-400 text-blue-400 hover:bg-blue-900/10 rounded-full font-medium transition-all duration-300 flex items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.8, duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(30, 58, 138, 0.2)",
                  borderColor: "#60a5fa",
                  color: "#93c5fd",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View Work</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;