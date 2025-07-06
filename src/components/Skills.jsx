import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGitlab, FaJenkins, FaDocker,
  FaTerminal, FaCode, FaDatabase, FaServer, FaNetworkWired,
  FaGithub, FaPython, FaAws, FaMicrosoft
} from 'react-icons/fa';

const skillIcons = {
  // DevOps Tools
  "GitLab": <FaGitlab className="text-orange-500 text-2xl" />,
  "Jenkins": <FaJenkins className="text-red-500 text-2xl" />,
  "Docker": <FaDocker className="text-blue-400 text-2xl" />,
  "Kubernetes": <FaDocker className="text-blue-500 text-2xl" />,
  "Terraform": <FaServer className="text-purple-500 text-2xl" />,
  "Prometheus": <FaServer className="text-red-400 text-2xl" />,
  "Grafana": <FaServer className="text-orange-400 text-2xl" />,
  "GitHub": <FaGithub className="text-gray-200 text-2xl" />,

  // Cloud Technologies
  "AWS": <FaAws className="text-orange-400 text-2xl" />,
  "EC2": <FaServer className="text-orange-400 text-2xl" />,
  "S3": <FaDatabase className="text-orange-400 text-2xl" />,
  "VPC": <FaNetworkWired className="text-blue-400 text-2xl" />,
  "CloudFront": <FaNetworkWired className="text-orange-400 text-2xl" />,
  "RDS": <FaDatabase className="text-blue-400 text-2xl" />,
  "Lambda": <FaCode className="text-orange-400 text-2xl" />,
  "Azure": <FaMicrosoft className="text-blue-500 text-2xl" />,
  "IaC": <FaServer className="text-purple-500 text-2xl" />,

  // Scripting & Languages
  "Bash": <FaTerminal className="text-green-400 text-2xl" />,
  "Groovy": <FaCode className="text-green-500 text-2xl" />,
  "SQL": <FaDatabase className="text-blue-400 text-2xl" />,
  "Linux": <FaServer className="text-yellow-400 text-2xl" />,
  "CLI": <FaTerminal className="text-green-400 text-2xl" />,
  "Python": <FaPython className="text-blue-500 text-2xl" />,
  "YAML": <FaCode className="text-blue-300 text-2xl" />,

  // Other Technologies
  "CI/CD": <FaGitlab className="text-blue-600 text-2xl" />,
  "Putty": <FaTerminal className="text-purple-400 text-2xl" />,
  "TOAD": <FaDatabase className="text-blue-400 text-2xl" />,
  "OEM": <FaServer className="text-blue-500 text-2xl" />,
  "ServiceNow": <FaServer className="text-blue-400 text-2xl" />,
  "ITIL": <FaServer className="text-purple-400 text-2xl" />
};

const SkillBadge = ({ name }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 w-24 h-24 justify-center"
    >
      <div className="mb-2">
        {skillIcons[name] || <FaCode className="text-blue-400 text-2xl" />}
      </div>
      <span className="text-xs text-center text-white">{name}</span>
    </motion.div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "DevOps Tools",
      skills: ["GitLab", "Jenkins", "Docker", "Kubernetes", "Terraform", "Prometheus", "Grafana", "GitHub"]
    },
    {
      title: "Cloud Technologies",
      skills: ["AWS", "EC2", "S3", "VPC", "CloudFront", "RDS", "Lambda", "Azure", "IaC"]
    },
    {
      title: "Scripting & Languages",
      skills: ["Bash", "Groovy", "SQL", "Linux", "CLI", "Python", "YAML"]
    },
    {
      title: "Other Technologies",
      skills: ["CI/CD", "Putty", "TOAD", "OEM", "ServiceNow", "ITIL"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My technical proficiency across various DevOps and cloud computing domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <SkillBadge
                    key={i}
                    name={skill}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;