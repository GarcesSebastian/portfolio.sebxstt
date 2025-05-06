'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Sebastian's innovative approach to web development transformed our platform. His ability to create efficient, scalable solutions is truly remarkable.",
    name: "Alex Rodriguez",
    title: "Tech Lead, InnovateX Solutions",
    avatar: "/profile.jpeg"
  },
];

const socialLinks = [
  { 
    icon: Github, 
    href: "https://github.com/GarcesSebastian", 
    color: "bg-gray-800", 
    hoverColor: "hover:bg-gray-700",
    label: "GitHub"
  },
  { 
    icon: Linkedin, 
    href: "https://linkedin.com/in/sebastiangarces", 
    color: "bg-blue-600", 
    hoverColor: "hover:bg-blue-700",
    label: "LinkedIn"
  },
  { 
    icon: Mail, 
    href: "mailto:sebastiangarces152@gmail.com", 
    color: "bg-primary", 
    hoverColor: "hover:bg-primary/80",
    label: "Email"
  }
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Connect With Me
          </h2>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  ${link.color} ${link.hoverColor} 
                  text-white p-3 rounded-full shadow-lg 
                  flex items-center justify-center 
                  group relative overflow-hidden
                `}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon className="w-6 h-6" />
                <span 
                  className={`
                    absolute bottom-full mb-2 bg-gray-800 text-white 
                    text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                  `}
                >
                  {link.label}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Testimonials Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: testimonial.id * 0.1 }}
                className="bg-primary/5 p-6 rounded-xl border border-primary/10 hover:border-primary/30 transition-all"
              >
                <Quote className="text-primary/50 w-8 h-8 mb-4" />
                <p className="text-gray-custom text-sm italic mb-4">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex items-center mt-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-primary/30">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-gray-custom">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;