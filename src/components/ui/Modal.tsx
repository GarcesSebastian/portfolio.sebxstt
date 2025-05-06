import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
};

const Modal = ({ isOpen, title, icon, onClose, children }: ModalProps) => {
  return (
    <>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            className={`
              relative overflow-hidden rounded-2xl 
              border border-primary/10 hover:border-primary/30
              bg-gradient-to-br from-primary/5 to-primary/10
              max-w-2xl w-full max-h-[90vh] flex flex-col
              shadow-2xl z-10
            `}
          >
            <div className="relative z-10 p-6 border-b border-primary/10 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <span className="text-3xl">{icon}</span>
                <h3 className="font-bold text-2xl text-light group-hover:text-primary transition-colors">
                  {title}
                </h3>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="text-gray-custom hover:text-primary transition-colors"
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>

            <div className="relative z-10 p-4 overflow-auto flex flex-col gap-4">
              {children}
            </div>
          </motion.div>

          <div className="absolute inset-0 z-0" onClick={onClose}></div>
        </motion.div>
      )}
    </>
  );
};

export default Modal;