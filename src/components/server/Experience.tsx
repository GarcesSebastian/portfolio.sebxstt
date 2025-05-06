"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Briefcase, 
  Calendar, 
  ChevronRight, 
  MapPin, 
  CodeIcon, 
  Star 
} from 'lucide-react';

const experiences = [
  {
    id: 1,
    type: 'work',
    role: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    period: "2022 - Present",
    location: "San Francisco, CA",
    description: "Led development of enterprise-scale applications using React and Node.js",
    achievements: [
      "Improved application performance by 60%",
      "Led a team of 5 developers",
      "Implemented microservices architecture",
      "Reduced deployment time by 40%"
    ],
    technologies: ["React", "Node.js", "AWS", "MongoDB"],
    icon: Briefcase
  },
  {
    id: 2,
    type: 'hackathon',
    title: "Global AI Hackathon",
    role: "First Place Winner",
    period: "August 2022",
    location: "New York, NY",
    description: "Developed an innovative AI-powered solution for urban mobility",
    achievements: [
      "Created a machine learning model for traffic prediction",
      "Built a real-time routing application",
      "Collaborated with a cross-functional team",
      "Presented solution to industry experts"
    ],
    technologies: ["Python", "TensorFlow", "React Native", "Google Cloud"],
    icon: CodeIcon
  },
  {
    id: 3,
    type: 'marathon',
    title: "Silicon Valley Marathon",
    role: "Participant",
    period: "October 2021",
    location: "San Jose, CA",
    description: "Completed full marathon raising funds for tech education",
    achievements: [
      "Finished marathon in 4 hours 15 minutes",
      "Raised $5,000 for STEM education programs",
      "Demonstrated personal resilience and endurance",
      "Networked with tech community runners"
    ],
    technologies: ["Strava", "Fitness Tracking"],
    icon: Briefcase
  },
  {
    id: 4,
    type: 'work',
    role: "Full Stack Developer",
    company: "Digital Innovations",
    period: "2020 - 2022",
    location: "Remote",
    description: "Developed and maintained multiple client projects",
    achievements: [
      "Built scalable e-commerce platforms",
      "Integrated payment gateways",
      "Optimized database queries",
      "Implemented CI/CD pipelines"
    ],
    technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
    icon: Briefcase
  }
];

const getIconColor = (type: string) => {
  switch(type) {
    case 'work': return 'text-blue-500';
    case 'hackathon': return 'text-purple-500';
    case 'marathon': return 'text-green-500';
    default: return 'text-primary';
  }
};

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState<number | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const expansionVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section 
      id="experience" 
      className="py-20 relative overflow-hidden bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text"
          >
            Journey & Experiences
          </motion.h2>

          <div className="relative">
            {/* Responsive Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block" />

            {/* Experience Items */}
            <motion.div 
              className="space-y-8 md:space-y-12"
              variants={containerVariants}
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className={`
                    relative flex flex-col md:flex-row items-center gap-4 md:gap-8
                    ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}
                  `}
                >
                  {/* Timeline Dot - Hidden on mobile */}
                  <div className={`
                    hidden md:block absolute left-0 md:left-1/2 transform -translate-x-1/2
                    w-4 h-4 rounded-full bg-primary border-4 border-dark 
                    ${getIconColor(exp.type)}
                  `} />

                  {/* Content Card */}
                  <motion.div
                    className={`
                      w-full md:w-[calc(50%-2rem)] p-4 md:p-6 
                      bg-primary/5 rounded-xl border 
                      border-primary/10 hover:border-primary/30 
                      transition-all duration-300 group
                      cursor-pointer relative overflow-hidden
                    `}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
                    }}
                    onClick={() => setSelectedExp(selectedExp === exp.id ? null : exp.id)}
                  >
                    {/* Subtle Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative">
                      {/* Header Section */}
                      <div className="flex items-center gap-3 mb-2">
                        <exp.icon className={`w-5 h-5 ${getIconColor(exp.type)}`} />
                        <h3 className="text-lg md:text-xl font-bold">
                          {exp.role || exp.title}
                        </h3>
                      </div>
                      
                      {/* Meta Information */}
                      <div className="flex flex-wrap items-center gap-2 text-gray-custom mb-3 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-custom mb-4 text-sm">
                        {exp.company || exp.title}
                      </p>

                      {/* Expandable Content */}
                      <AnimatePresence>
                        {selectedExp === exp.id && (
                          <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={expansionVariants}
                            className="space-y-4"
                          >
                            {/* Achievements */}
                            <div className="space-y-2">
                              <h4 className="font-semibold text-primary flex items-center text-sm">
                                <Star className="w-4 h-4 mr-2" /> Key Highlights:
                              </h4>
                              <ul className="space-y-2 text-sm">
                                {exp.achievements.map((achievement, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                                    <span className="text-gray-custom">{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Technologies */}
                            {exp.technologies && (
                              <div>
                                <h4 className="font-semibold text-primary mb-2 flex items-center text-sm">
                                  <CodeIcon className="w-4 h-4 mr-2" /> Technologies:
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {exp.technologies.map((tech, i) => (
                                    <span
                                      key={i}
                                      className="px-2 py-1 text-xs bg-primary/5 text-primary rounded-full
                                        border border-primary/20"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;