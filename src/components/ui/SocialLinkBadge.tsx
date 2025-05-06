import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SocialLinkBadgeProps {
  icon: LucideIcon;
  label: string;
  href: string;
  color: string;
}

export const SocialLinkBadge: React.FC<SocialLinkBadgeProps> = ({ 
  icon: Icon, 
  label, 
  href, 
  color 
}) => (
  <motion.a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-2 bg-primary/5 px-3 py-2 rounded-full"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Icon className={`w-4 h-4 ${color}`} />
    <span className="text-xs font-medium text-gray-700">{label}</span>
  </motion.a>
);