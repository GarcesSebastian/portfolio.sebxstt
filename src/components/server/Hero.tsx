'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Server, Globe, Database, Award } from 'lucide-react';

import { SkillBadge } from '@/components/ui/SkillBadge';

const Hero: React.FC = () => {
  const isAvailable = true;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid md:grid-cols-2 items-center gap-8">
          <div className="text-left space-y-6">
          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center gap-3"
            >
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-primary text-base md:text-lg font-medium"
              >
                Sebastian Garces
              </motion.h2>

              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                ${isAvailable ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'}`}>
                <Briefcase className="w-3 h-3 mr-1" />
                {isAvailable ? 'Disponible' : 'Ocupado'}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              Desarrollador Web
              <br />
              <span className="gradient-text">Full Stack</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-custom text-sm md:text-base max-w-md"
            >
              Apasionado por crear soluciones web innovadoras que resuelven problemas del mundo real. Experimentado en hackathons y maratones, especializado en desarrollar algoritmos eficientes y productos digitales transformadores.            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-2 mt-4"
            >
              <SkillBadge icon={Server} label="Backend" color="text-blue-500" />
              <SkillBadge icon={Globe} label="Frontend" color="text-green-500" />
              <SkillBadge icon={Database} label="Database" color="text-purple-500" />
              <SkillBadge icon={Award} label="Resolución de Problemas" color="text-red-500" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-2 gap-3 md:gap-4 mt-4 max-w-md"
            >
              <div className="bg-primary/5 p-2 md:p-4 rounded-lg text-center">
                <h3 className="text-xl md:text-2xl font-bold text-primary">+3</h3>
                <p className="text-xs text-gray-600">Años de Experiencia</p>
              </div>
              <div className="bg-primary/5 p-2 md:p-4 rounded-lg text-center">
                <h3 className="text-xl md:text-2xl font-bold text-primary">+5</h3>
                <p className="text-xs text-gray-600">Proyectos Completados</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center md:justify-end mt-6 md:mt-0"
          >
            <div className="w-48 h-48 md:w-80 md:h-80 rounded-full border-4 border-primary/50 overflow-hidden shadow-lg">
              <img 
                src="/profile.jpeg" 
                alt="Sebastian Garces" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;