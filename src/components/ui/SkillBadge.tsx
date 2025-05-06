import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SkillBadgeProps {
  icon: LucideIcon;
  label: string;
  color: string;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ icon: Icon, label, color }) => (
  <motion.div 
    className="flex items-center gap-2 bg-primary/5 px-3 py-2 rounded-full"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Icon className={`w-4 h-4 ${color}`} />
    <span className="text-xs font-medium text-primary/70">{label}</span>
  </motion.div>
);