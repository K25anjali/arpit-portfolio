// components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Automated CI/CD Pipeline",
      description: "Designed and implemented an automated CI/CD pipeline using Jenkins integrated with GitHub to streamline development and deployment processes for multi-tier applications.",
      technologies: ["Jenkins", "GitHub", "CI/CD", "Automation"],
      link: "#",
      github: "https://github.com/TechwithArpit",
      image: "bg-gradient-to-br from-blue-600/20 to-purple-600/20"
    },
    {
      id: 2,
      title: "Flask App Deployment",
      description: "Created a Dockerized Flask application with CSS/HTML frontend and deployed through GitLab Runners on AWS instances.",
      technologies: ["AWS", "Docker", "Flask", "GitLab"],
      link: "https://github.com/TechwithArpit/flask-project-Arpit",
      github: "https://github.com/TechwithArpit/flask-project-Arpit",
      image: "bg-gradient-to-br from-purple-600/20 to-pink-600/20"
    },
    {
      id: 3,
      title: "Infrastructure Automation",
      description: "Automated infrastructure operations using GitLab, Jenkins, Terraform and Kubernetes with AWS for scalable solutions.",
      technologies: ["Terraform", "Kubernetes", "AWS", "Prometheus"],
      link: "#",
      github: "https://github.com/TechwithArpit",
      image: "bg-gradient-to-br from-blue-600/20 to-emerald-600/20"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            My Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Selected work showcasing my expertise in DevOps, cloud infrastructure, and automation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm"
            >
              {/* Project image/background */}
              <div className={`h-48 ${project.image} flex items-center justify-center`}>
                <div className="text-5xl font-bold text-white/10">{project.title.split(' ')[0].charAt(0)}</div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-5">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-800 rounded-full text-xs text-blue-300 border border-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    >
                      <FiGithub className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    >
                      <FiExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </a>
                  )}
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <a
                  href={project.link || project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-center font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;