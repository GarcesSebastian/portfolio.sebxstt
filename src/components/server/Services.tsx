"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Server, 
  Database, 
} from 'lucide-react';

const services = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "Crafting responsive, modern web interfaces using React, Next.js, and cutting-edge frontend technologies.",
    color: "text-green-500"
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Building robust server-side applications with Node.js, Express, and scalable architectures.",
    color: "text-blue-500"
  },
  {
    icon: Database,
    title: "Full-Stack Solutions",
    description: "End-to-end web application development with seamless integration of frontend, backend, and database technologies.",
    color: "text-purple-500"
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Web Development Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.2 
                }}
                className="bg-primary/5 p-6 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all"
              >
                <service.icon className={`${service.color} w-12 h-12 mb-4`} />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-custom">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;