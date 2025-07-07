import React, { useEffect, useRef } from 'react';
import { FiCalendar, FiBriefcase, FiBookOpen } from 'react-icons/fi';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    title: "Bachelor's in Mechanical Engineering",
    institution: "Sam Higginbottom University of Agriculture Technology & Sciences",
    period: "2017 – 2021"
  },
  {
    title: "Sr. Secondary",
    institution: "Vishnu Bhagwan Public School & College",
    period: "2016 (CBSE)"
  },
  {
    title: "Secondary Education",
    institution: "Vishnu Bhagwan Public School & College",
    period: "2014 (CBSE)"
  }
];

const experiences = [
  {
    title: "Associate DevOps Engineer",
    company: "Cognizant Technology Solutions",
    period: "Feb 2025 – Present",
    description: "Implementing CI/CD pipelines, cloud infrastructure, and automation solutions"
  },
  {
    title: "Oracle DBA (LLEngineer)",
    company: "Cognizant",
    period: "Previous Role",
    description: "Managed database systems and performed optimization tasks"
  }
];

const Experience = () => {
  const eduRef = useRef(null);
  const expRef = useRef(null);
  return (
    <section id="experience" className="bg-[#0e0e0e] text-white py-24 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent text-center mb-4">
          Qualifications
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-center mb-20">
          A journey through roles and responsibilities shaping my career in DevOps and cloud engineering.
        </p>

        <div className="grid md:grid-cols-2 gap-12 relative">
          {/* Vertical line decoration */}
          <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500/20 via-purple-500/50 to-blue-500/20 -translate-x-1/2"></div>

          {/* Experience */}
          <div ref={expRef} className="z-10">
            <div className="flex items-center gap-3 mb-10 p-4 bg-gradient-to-r from-purple-900/20 to-purple-900/5 rounded-lg border border-purple-900/30">
              <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20">
                <FiBriefcase className="text-purple-400 text-xl" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Experience</h3>
            </div>

            <div className="space-y-8 relative">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item pl-8 relative before:absolute before:left-[15px] before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b from-purple-500 to-purple-300">
                  <div className="absolute left-1 top-0 w-6 h-6 flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-700 rounded-full border-2 border-[#0e0e0e] z-10">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="bg-gray-900/50 hover:bg-gray-900/70 transition-all duration-300 p-6 rounded-xl border border-gray-800/50 shadow-lg">
                    <h4 className="font-bold text-white text-lg">{exp.title}</h4>
                    <p className="text-purple-300 font-medium mb-2">{exp.company}</p>
                    {exp.description && (
                      <p className="text-gray-400 text-sm mb-3">{exp.description}</p>
                    )}
                    <div className="flex items-center gap-2 text-purple-400 text-sm font-medium">
                      <FiCalendar className="text-purple-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div ref={eduRef} className="z-10">
            <div className="flex items-center gap-3 mb-10 p-4 bg-gradient-to-r from-blue-900/20 to-blue-900/5 rounded-lg border border-blue-900/30">
              <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <FiBookOpen className="text-blue-400 text-xl" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Education</h3>
            </div>

            <div className="space-y-8 relative">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item pl-8 relative before:absolute before:left-[15px] before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b from-blue-500 to-blue-300">
                  <div className="absolute left-1 top-0 w-6 h-6 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 rounded-full border-2 border-[#0e0e0e] z-10">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="bg-gray-900/50 hover:bg-gray-900/70 transition-all duration-300 p-6 rounded-xl border border-gray-800/50 shadow-lg">
                    <h4 className="font-bold text-white text-lg">{edu.institution}</h4>
                    <p className="text-blue-300 font-medium mb-2">{edu.title}</p>
                    <div className="flex items-center gap-2 text-blue-400 text-sm font-medium">
                      <FiCalendar className="text-blue-400" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;