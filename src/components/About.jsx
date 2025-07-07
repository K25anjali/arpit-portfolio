import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiPhone, FiCode, FiCloud, FiCpu } from 'react-icons/fi';
import { TbBrandDocker } from 'react-icons/tb';
import { SiTerraform, SiJenkins, SiAmazonaws, SiKubernetes } from 'react-icons/si';
import color from '../assets/colors.mp4';
import { PointerHighlight } from './PointerHighlight';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const services = [
    {
      title: "Cloud Architectures",
      description: "Designing scalable AWS/GCP infrastructures with Terraform",
      icon: <FiCloud className="w-6 h-6 text-blue-400" />,
      tech: [<SiAmazonaws key="aws" className="text-orange-500" />, <SiTerraform key="tf" className="text-purple-500" />]
    },
    {
      title: "CI/CD Automation",
      description: "Building deployment pipelines with Jenkins & GitHub Actions",
      icon: <FiCode className="w-6 h-6 text-blue-400" />,
      tech: [<SiJenkins key="jenkins" className="text-red-500" />]
    },
    {
      title: "Container Orchestration",
      description: "Implementing Kubernetes clusters for microservices",
      icon: <FiCpu className="w-6 h-6 text-blue-400" />,
      tech: [<TbBrandDocker key="docker" className="text-blue-400" />, <SiKubernetes key="k8s" className="text-blue-600" />]
    }
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden pt-20 bg-transparent"
    // style={{
    //   background: `linear-gradient(135deg, 
    //     rgba(10,10,10,1) 0%, 
    //     rgba(26,26,46,1) 50%, 
    //     rgba(10,10,30,1) 100%)`
    // }}
    >
      <div className="w-full relative pb-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600">
            About Me
          </h2>
        </motion.div>
        <div className='relative w-full'>
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={color} type="video/mp4" />
            </video>
          </div>
          {isMounted && ( // Only render content after mount
            <div className="flex flex-col lg:flex-row gap-12 items-start z-10 max-w-7xl mx-auto py-14">
              <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="space-y-6">
                  <p className="text-xl text-gray-300 leading-relaxed">
                    I am <span className="text-blue-400 font-medium text-xl">Associate DevOps Engineer</span> at Cognizant, specializing in cloud-native solutions and automation frameworks for enterprise insurance systems.
                  </p>

                  <p className="text-xl text-gray-300 leading-relaxed">
                    I architect <span className="text-purple-400">infrastructure as code</span> solutions that reduce deployment times by 60% while improving system reliability through observability-driven development.
                  </p>

                  <div className="flex flex-wrap gap-3 mt-8">
                    {[
                      { name: 'AWS', color: 'bg-orange-500', text: 'text-white' },
                      { name: 'Terraform', color: 'bg-purple-600', text: 'text-white' },
                      { name: 'Kubernetes', color: 'bg-blue-600', text: 'text-white' },
                      { name: 'Docker', color: 'bg-blue-400', text: 'text-white' },
                      { name: 'Jenkins', color: 'bg-red-500', text: 'text-white' },
                      { name: 'ArgoCD', color: 'bg-gray-800', text: 'text-blue-400' },
                      { name: 'GitHub Actions', color: 'bg-gray-800', text: 'text-gray-300' },
                      { name: 'Ansible', color: 'bg-gray-800', text: 'text-red-500' }
                    ].map((tech, i) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className={`px-4 py-2 ${tech.color} ${tech.text} rounded-full border border-gray-700 hover:shadow-lg transition-all flex items-center gap-2`}
                        whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59, 130, 246, 0.3)' }}
                      >
                        {tech.name === 'AWS' && <SiAmazonaws className="text-white" />}
                        {tech.name === 'Terraform' && <SiTerraform className="text-white" />}
                        {tech.name === 'Kubernetes' && <SiKubernetes className="text-white" />}
                        {tech.name === 'Docker' && <TbBrandDocker className="text-white" />}
                        {tech.name === 'Jenkins' && <SiJenkins className="text-white" />}
                        <span>{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="lg:w-1/2 w-full"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="space-y-6">
                  {services.map((service, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.15 }}
                      className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-blue-400/50 transition-all relative overflow-hidden"
                      whileHover={{ y: -5 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0"
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />

                      <div className="relative z-10 flex items-start">
                        <div className="p-3 mr-4 bg-blue-500/20 rounded-lg">
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                            {service.title}
                            <div className="flex gap-1 ml-2">
                              {service.tech.map((Icon, idx) => (
                                <span key={idx} className="text-lg">{Icon}</span>
                              ))}
                            </div>
                          </h3>
                          <p className="text-gray-300">{service.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  <div className="mt-8">

                    <PointerHighlight>
                      <button className=" text-white px-4 py-2 rounded">
                        Let's Build Something
                      </button>
                    </PointerHighlight>

                    {/* <a
                      href="#contact"
                      className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-medium text-white hover:shadow-lg hover:shadow-blue-500/20 transition-all"
                    >
                      <span>Let's Build Something</span>
                    </a> */}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;