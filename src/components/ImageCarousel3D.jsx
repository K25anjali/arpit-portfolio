import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ImageCarousel3D = () => {
  const [radius, setRadius] = useState(240);
  const [autoRotate] = useState(true);
  const [rotateSpeed] = useState(-60);
  const [imgWidth] = useState(120);
  const [imgHeight] = useState(170);

  const dragContainerRef = useRef(null);
  const spinContainerRef = useRef(null);
  const controls = useAnimation();

  const devOpsTools = [
    { name: 'Docker', logo: 'https://cdn.worldvectorlogo.com/logos/docker.svg' },
    { name: 'Kubernetes', logo: 'https://cdn.worldvectorlogo.com/logos/kubernetes.svg' },
    { name: 'Terraform', logo: 'https://cdn.worldvectorlogo.com/logos/terraform-enterprise.svg' },
    { name: 'Ansible', logo: 'https://cdn.worldvectorlogo.com/logos/ansible.svg' },
    { name: 'Jenkins', logo: 'https://cdn.worldvectorlogo.com/logos/jenkins.svg' },
    { name: 'Git', logo: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg' },
    { name: 'AWS', logo: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg' },
    { name: 'Azure', logo: 'https://cdn.worldvectorlogo.com/logos/microsoft-azure-1.svg' },
    { name: 'GCP', logo: 'https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg' },
    { name: 'Prometheus', logo: 'https://cdn.worldvectorlogo.com/logos/prometheus.svg' },
    { name: 'Grafana', logo: 'https://cdn.worldvectorlogo.com/logos/grafana.svg' },
    { name: 'Helm', logo: 'https://cdn.worldvectorlogo.com/logos/helm.svg' }
  ];

  const [tX, setTX] = useState(0);
  const [tY, setTY] = useState(10);
  const [desX, setDesX] = useState(0);
  const [desY, setDesY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    init();
  }, [radius]);

  const init = (delayTime) => {
    const aEle = spinContainerRef.current?.children;
    if (!aEle) return;

    for (let i = 0; i < aEle.length; i++) {
      aEle[i].style.transform = `rotateY(${i * (360 / aEle.length)}deg) translateZ(${radius}px)`;
      aEle[i].style.transition = 'transform 1s';
      aEle[i].style.transitionDelay = delayTime || `${(aEle.length - i) / 4}s`;
    }
  };

  const applyTransform = (x, y) => {
    let newY = y;
    if (newY > 180) newY = 180;
    if (newY < 0) newY = 0;

    controls.start({
      rotateX: -newY,
      rotateY: x,
      transition: { duration: 0.1 }
    });
  };

  const playSpin = (yes) => {
    if (spinContainerRef.current) {
      spinContainerRef.current.style.animationPlayState = yes ? 'running' : 'paused';
    }
  };

  useEffect(() => {
    if (autoRotate && spinContainerRef.current) {
      const animationName = rotateSpeed > 0 ? 'spin' : 'spinRevert';
      spinContainerRef.current.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
    }
  }, [autoRotate, rotateSpeed]);

  const handlePointerDown = (e) => {
    setIsDragging(true);
    if (dragContainerRef.current?.timer) {
      clearInterval(dragContainerRef.current.timer);
    }

    const sX = e.clientX;
    const sY = e.clientY;

    const handlePointerMove = (e) => {
      if (!isDragging) return;

      const nX = e.clientX;
      const nY = e.clientY;

      const newDesX = nX - sX;
      const newDesY = nY - sY;

      setTX(prev => prev + newDesX * 0.1);
      setTY(prev => prev + newDesY * 0.1);
      setDesX(newDesX);
      setDesY(newDesY);

      applyTransform(tX, tY);
    };

    const handlePointerUp = () => {
      setIsDragging(false);
      dragContainerRef.current.timer = setInterval(() => {
        setDesX(prev => prev * 0.95);
        setDesY(prev => prev * 0.95);
        setTX(prev => prev + desX * 0.1);
        setTY(prev => prev + desY * 0.1);

        applyTransform(tX, tY);
        playSpin(false);

        if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
          clearInterval(dragContainerRef.current.timer);
          playSpin(true);
        }
      }, 17);

      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', handlePointerUp);
    };

    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerup', handlePointerUp);
  };

  const handleWheel = (e) => {
    const delta = e.deltaY ? -e.deltaY / 20 : -e.detail;
    setRadius(prev => Math.max(100, Math.min(400, prev + delta)));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="h-[80vh] w-full touch-none overflow-hidden flex  perspective-1000 preserve-3d"
        onWheel={handleWheel}
      >
        <motion.div
          ref={dragContainerRef}
          className="relative flex mx-auto my-auto preserve-3d"
          style={{
            transformStyle: 'preserve-3d',
            width: `${imgWidth}px`,
            height: `${imgHeight}px`
          }}
          animate={controls}
          initial={{ rotateX: -10 }}
          onPointerDown={handlePointerDown}
        >
          <div
            ref={spinContainerRef}
            className="relative flex mx-auto my-auto preserve-3d"
            style={{
              width: `${imgWidth}px`,
              height: `${imgHeight}px`,
              transformStyle: 'preserve-3d'
            }}
          >
            {devOpsTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                className="absolute left-0 top-0 w-full h-full flex flex-col items-center justify-center"
                style={{
                  transformStyle: 'preserve-3d',
                }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="relative group">
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="w-full h-full object-contain shadow-sm shadow-white hover:shadow-md hover:shadow-blue-400 transition-all duration-300"
                    style={{
                      boxReflect: 'below 10px linear-gradient(transparent, transparent, rgba(0,0,0,0.3))'
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {tool.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div
            className="absolute top-full left-1/2 bg-radial-gradient"
            style={{
              width: `${radius * 3}px`,
              height: `${radius * 3}px`,
              transform: 'translate(-50%, -50%) rotateX(90deg)',
              background: 'radial-gradient(center center, farthest-side, rgba(153,153,153,0.2), transparent)'
            }}
          />
        </motion.div>
      </div>

      <div className="mt-8 text-white text-center">
        <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
          {devOpsTools.map(tool => (
            <div key={tool.name} className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-lg">
              <img src={tool.logo} alt={tool.name} className="h-6 w-6 object-contain" />
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        @keyframes spin {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
        @keyframes spinRevert {
          from { transform: rotateY(360deg); }
          to { transform: rotateY(0deg); }
        }
      `}</style>
    </div>
  );
};

export default ImageCarousel3D;