import { ExternalLink, PlayCircle } from "lucide-react";
import { Atom, Code, Gamepad2, Github, Images, Microscope } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import { Layers } from 'lucide-react';
import DemoModal from "@/components/ui/Modal";
import { Project, Demo } from "@/types/Projects";

interface ProjectHighlightProps {
    project: Project;
    isExpanded: boolean;
    onToggle: () => void;
}

const ProjectHighlight = ({ project, isExpanded, onToggle }: ProjectHighlightProps) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedDemo, setSelectedDemo] = useState<Demo | null>(null);

    const renderProjectIcon = () => {
        if (project.logo) {
        return (
            <img 
            src={project.logo} 
            alt={`${project.title} logo`} 
            className="w-auto h-10 object-contain rounded-full"
            />
        );
        }

        switch(project.id) {
        case 'radial-js': return <Layers className="w-6 h-6 text-primary" />;
        case 'portfolio': return <Code className="w-6 h-6 text-primary" />;
        default: return <Atom className="w-6 h-6 text-primary" />;
        }
    };

    const renderDemoIcon = (type: string, difficulty: string) => {
        const icons = {
        'games': {
            'Beginner': '🎳',
            'Intermediate': '🏓',
            'Advanced': '🚀'
        },
        'physics': {
            'Beginner': '🧩',
            'Intermediate': '🔬',
            'Advanced': '💡',
            'Expert': '🌀'
        }
        };

        return icons[type as keyof typeof icons]?.[difficulty as keyof typeof icons[keyof typeof icons]] || '🎯';
    };

    const renderIcon = (type: string) => {
        switch(type) {
        case 'games': return <Gamepad2 className="w-4 h-4 mr-2 text-primary" />;
        case 'physics': return <Microscope className="w-4 h-4 mr-2 text-primary" />;
        default: return null;
        }
    };

    const handleLaunchDemo = () => {
        if (selectedDemo) {
            window.open(selectedDemo.link, '_blank');
        }
    };

    return (
        <>
            {selectedImage && (
                <div 
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
                    onClick={() => setSelectedImage(null)}
                >
                    <motion.img 
                        src={selectedImage} 
                        alt="Project Screenshot" 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-2xl"
                    />
                </div>
            )}

            {selectedDemo && (
                <DemoModal
                    isOpen={!!selectedDemo} 
                    title={selectedDemo.title.es} 
                    icon={renderDemoIcon(selectedDemo.type, selectedDemo.difficulty.es)} 
                    onClose={() => setSelectedDemo(null)} 
                >
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2 mb-4">
                            <span className="bg-primary/5 px-3 py-1 text-xs rounded-full border border-primary/20 text-primary">
                            {selectedDemo.difficulty.en} Level
                            </span>
                            <div className="flex-grow border-t border-primary/10 mx-2"></div>
                            <span className="text-gray-custom text-xs">
                            {selectedDemo.type.charAt(0).toUpperCase() + selectedDemo.type.slice(1)} Demo
                            </span>
                        </div>
            
                        <p className="text-gray-custom leading-relaxed">
                            {selectedDemo.description.en}
                        </p>
            
                        {selectedDemo.technologies && (
                            <div className="mt-4">
                            <h4 className="text-sm font-semibold text-primary mb-2">
                                Technologies:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {selectedDemo.technologies.map((tech: string) => (
                                <span 
                                    key={tech} 
                                    className="px-3 py-1 text-xs bg-primary/5 text-primary rounded-full border border-primary/20 transition-colors"
                                >
                                    {tech}
                                </span>
                                ))}
                            </div>
                            </div>
                        )}
                    </div>

                    <div className="relative z-10 border-t pt-4 border-primary/10 flex justify-end items-center">
                        <motion.button
                            onClick={handleLaunchDemo}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="
                            px-4 py-2 text-xs
                            bg-primary/5 text-primary 
                            border border-primary/20
                            rounded-full
                            hover:bg-primary/10 
                            transition-colors
                            flex items-center gap-2
                            "
                        >
                            <PlayCircle className="w-4 h-4" />
                            Launch Demo
                        </motion.button>
                    </div>
                </DemoModal>
            )}

            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                onClick={onToggle}
                className={`
                    project-card relative overflow-hidden rounded-2xl 
                    ${isExpanded 
                        ? 'col-span-1 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2' 
                        : 'col-span-1'}
                    transition-all duration-500 ease-in-out
                    border border-primary/10 hover:border-primary/30
                    group
                    cursor-pointer
                `}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                
                <div className="relative z-10 p-6 h-auto flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center space-x-3">
                            {renderProjectIcon()}
                            <h3 className={`
                                font-bold text-light group-hover:text-primary transition-colors
                                ${isExpanded ? 'text-xl md:text-2xl' : 'text-xl'}
                            `}>
                                {project.title.es}
                            </h3>
                        </div>
                        
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-gray-custom hover:text-primary transition-colors"
                        >
                            <Code className={`${isExpanded ? 'w-6 h-6' : 'w-5 h-5'}`} />
                        </motion.button>
                    </div>
                    
                    <p className={`
                        text-gray-custom mb-4 
                        ${isExpanded 
                        ? 'line-clamp-3 md:line-clamp-4' 
                        : 'line-clamp-3'}
                    `}>
                        {project.description.es}
                    </p>
                    
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="space-y-4"
                            >
                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-primary mb-2 flex items-center">
                                        <Layers className="mr-2 w-4 h-4" /> Key Features:
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {(project.features.es || project.features.en || [])
                                        .slice(0, 4)
                                        .map((feature: string) => (
                                            <div 
                                                key={feature} 
                                                className="bg-primary/5 px-3 py-2 rounded-md text-xs text-gray-custom"
                                            >
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {project.gallery && project.gallery.length > 0 && (
                                    <div className="mb-4 pb-4">
                                        <h4 className="text-sm font-semibold text-primary mb-2 flex items-center">
                                            <Images className="mr-2 w-4 h-4" /> Project Gallery:
                                        </h4>

                                        <div className="flex flex-wrap gap-2">
                                            {project.gallery.map((image, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="w-16 h-16 overflow-hidden rounded-md"
                                                    whileHover={{ scale: 1.1 }}
                                                >
                                                    <img 
                                                        src={image} 
                                                        alt={`${project.title.es} screenshot ${index + 1}`} 
                                                        onClick={() => setSelectedImage(image)}
                                                        className="w-full h-full object-cover cursor-pointer hover:brightness-110 transition-all"
                                                    />
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {project.gallery.length === 0 && (
                                    <div className="mb-4">
                                        <h4 className="text-sm font-semibold text-primary mb-2 flex items-center">
                                            <Images className="mr-2 w-4 h-4" /> No images available
                                        </h4>
                                    </div>
                                )}

                                {project.demos && (
                                    <div>
                                        {['games', 'physics'].map((demoType: string) => (
                                            project.demos[demoType as keyof typeof project.demos] && (
                                                <div key={demoType} className="mb-4">
                                                    <h4 className="text-sm font-semibold text-primary mb-2 flex items-center">
                                                        {renderIcon(demoType)} {demoType.charAt(0).toUpperCase() + demoType.slice(1)} Demos:
                                                    </h4>
                                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                                                        {project.demos[demoType as keyof typeof project.demos].map((demo: Demo, index: number) => {
                                                            return(
                                                                <motion.div 
                                                                    key={index} 
                                                                    onClick={() => setSelectedDemo({...demo, type: demoType})}
                                                                    whileHover={{ scale: 1.05 }}
                                                                    className="bg-primary/5 p-2 rounded-md text-xs cursor-pointer hover:bg-primary/10 transition-colors"
                                                                >
                                                                    <div className="flex items-center mb-1">
                                                                        <span className="mr-2 text-lg">
                                                                            {renderDemoIcon(demoType, demo.difficulty.es)}
                                                                        </span>
                                                                        <span className="font-semibold truncate">
                                                                            {demo.title.es}
                                                                        </span>
                                                                    </div>

                                                                    <div className="flex items-center text-gray-custom">
                                                                        <span className="text-xs bg-primary/10 px-2 py-0.5 rounded-full mr-2">
                                                                            {demo.difficulty.es}
                                                                        </span>
                                                                        <p className="truncate">
                                                                            {demo.description.es}
                                                                        </p>
                                                                    </div>
                                                                </motion.div>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            )
                                        ))}
                                    </div>
                                )}

                                {!project.demos && (
                                    <div className="mb-4">
                                        <h4 className="text-sm font-semibold text-primary mb-2 flex items-center">
                                            <Layers className="mr-2 w-4 h-4" /> No demos available
                                        </h4>
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                    
                    {project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                            {project.tags.slice(0, isExpanded ? project.tags.length : 3).map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 text-xs bg-primary/5 text-primary rounded-full border border-primary/20 transition-colors group-hover:border-primary/40"
                            >
                                {tag}
                            </span>
                            ))}
                        </div>
                    )}
                    
                    {Object.keys(project.links).length > 0 && (
                        <div className="flex gap-4 mt-auto">
                            {project.links.github !== '#' && (
                                <motion.a
                                    href={project.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="text-gray-custom hover:text-primary transition-colors"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Github className="w-5 h-5" />
                                </motion.a>
                            )}

                            {project.links.live !== '#' && (
                                <motion.a
                                    href={project.links.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="text-gray-custom hover:text-primary transition-colors"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <ExternalLink className="w-5 h-5" />
                                </motion.a>
                            )}
                        </div>
                    )}
                </div>
            </motion.div>
        </>
    );
};

export default ProjectHighlight;