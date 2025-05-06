"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Server, 
  Globe, 
  Database, 
  Award, 
  Terminal, 
  Layers 
} from 'lucide-react';

import { SkillBadge } from '@/components/ui/SkillBadge';

const skillCategories = [
  {
    category: 'Languages',
    skills: [
      { name: 'TypeScript', icon: Code, color: 'text-blue-500' },
      { name: 'JavaScript', icon: Terminal, color: 'text-yellow-500' },
      { name: 'Java', icon: Server, color: 'text-red-500' },
      { name: 'PHP', icon: Code, color: 'text-purple-500' },
      { name: 'Lua', icon: Layers, color: 'text-indigo-500' }
    ]
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      { name: 'React', icon: Globe, color: 'text-cyan-500' },
      { name: 'Node.js', icon: Server, color: 'text-green-500' },
      { name: 'Express', icon: Code, color: 'text-gray-500' },
      { name: 'Astro', icon: Layers, color: 'text-orange-500' },
      { name: 'Tailwind CSS', icon: Code, color: 'text-teal-500' }
    ]
  },
  {
    category: 'Databases & Tools',
    skills: [
      { name: 'MySQL', icon: Database, color: 'text-blue-600' },
      { name: 'MariaDB', icon: Database, color: 'text-pink-500' },
      { name: 'Git', icon: Award, color: 'text-red-500' },
      { name: 'GitHub', icon: Code, color: 'text-gray-800' },
      { name: 'Postman', icon: Globe, color: 'text-orange-600' }
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: categoryIndex * 0.2 
                }}
                className="bg-primary/5 p-6 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all"
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05 }}
                      className="group"
                    >
                      <SkillBadge 
                        icon={skill.icon} 
                        label={skill.name} 
                        color={skill.color} 
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 text-center max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              What I Bring to the Table
            </h3>
            <p className="text-gray-custom text-base md:text-lg">
              With a passion for innovative web development, I specialize in creating scalable 
              and efficient digital solutions. My expertise spans full-stack development, 
              cloud architecture, and performance optimization, always focusing on delivering 
              high-quality, user-centric applications.
            </p>

            <div className="mt-8 grid md:grid-cols-3 gap-4">
              {[
                "Full-stack Development",
                "Cloud & DevOps",
                "Performance Optimization"
              ].map((capability) => (
                <div 
                  key={capability} 
                  className="bg-primary/5 p-4 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <p className="text-primary font-semibold">{capability}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;