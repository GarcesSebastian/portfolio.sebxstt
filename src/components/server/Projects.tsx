'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';

import config from '@/utils/config.json';
import ProjectHighlight from '../client/ProjectHighlight';
import { Project } from '@/types/Projects';
const Projects: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const projects = config.projects as unknown as Project[];

  const toggleProjectExpansion = (projectId: string) => {
    setExpandedProject(prev => prev === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Proyectos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectHighlight
                key={project.id}
                project={project as unknown as Project}
                isExpanded={expandedProject === project.id}
                onToggle={() => toggleProjectExpansion(project.id)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;