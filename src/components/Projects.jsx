
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: "Maqam",
      description: "Maqam offers professional Hajj management solutions for agencies and pilgrims. We streamline the Hajj journey with reliable, efficient, and compliant services.",
      tags: ["PHP", "Laravel", "MySQL",],
      image: "https://maqqam.net/uploads/images/thumbnail/logo.png",
      link: "https://example.com/project1",
      github: "https://github.com/ziadMohamed00"
      
    },
    {
      id: 2,
      title: "single-commerce",
      description: "Single-Commerce is a simplified e-commerce platform for individual sellers or brands to manage and sell products online. It offers full control, easy setup, and a direct shopping experience for customers.",
      tags: ["React", "TailwindCSS", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1542744095-291d1f67b221",
      link: "https://example.com/project2",
      github: "https://github.com/ziadMohamed00"
    },
    {
      id: 3,
      title: "Cars App",
      description: "Z CARS is a frontend portfolio project by Ziad Mohamed, showcasing a car dealership interface. It allows users to browse various car models, filter by year, make, body style, and price, and view featured vehicles. The site includes placeholder text and images, indicating it's a design prototype rather than a fully functional application.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "https://is1-ssl.mzstatic.com/image/thumb/Purple30/v4/bc/9e/4e/bc9e4e1a-22f4-18fb-e81d-2fe72b5a8489/pr_source.png/1200x600wa.png",
      link: "https://ziadmohamed00.github.io/z-car/",
      github: "https://github.com/ziadMohamed00"
    },
    {
      id: 4,
      title: "Product Management System",
      description: "Product Management System developed by Ziad Mohamed. It's a client-side CRUD (Create, Read, Update, Delete) application built using HTML, CSS, and JavaScript, utilizing the browser's Local Storage for data persistence.",
      tags: ["JavaScript", "HTML", "CSS"],
      image: "https://blog.emb.global/wp-content/uploads/2024/07/What-is-a-Product-Management-System-Things-To-Know.webp",
      link: "https://ziadmohamed00.github.io/Crud-Javascript/",
      github: "https://github.com/ziadMohamed00"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              My <span className="gradient-text">Projects</span>
            </motion.h2>
            <motion.div 
              className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            ></motion.div>
            <motion.p
              className="text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Here are some of my recent projects. Each project is a unique piece of development that showcases my skills and passion for creating exceptional digital experiences.
            </motion.p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                className="bg-card rounded-xl overflow-hidden shadow-lg card-hover border"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img  
                    alt={`Screenshot of ${project.title} project`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    style={project.id === 1 ? { width: 300, margin: '0 auto' } : { width: '100%' }}
                    src={
                    project.image.startsWith('http')
                      ? project.image
                      : `/images/projects/${project.image}`
                    }
                    />          
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4">
                      <div className="flex space-x-3">
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                        >
                          <Github size={18} />
                          <span className="sr-only">GitHub Repository</span>
                        </a>
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                        >
                          <ExternalLink size={18} />
                          <span className="sr-only">Live Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="skill-pill"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="group text-primary"
                    onClick={() => setActiveProject(project)}
                  >
                    View Details
                    <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-12">
            <motion.a 
              href="https://github.com/ziadMohamed00" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-md bg-secondary text-foreground font-medium hover:bg-secondary/80 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={18} className="mr-2" />
              See More on GitHub
            </motion.a>
          </div>
        </div>
      </div>
      
      {/* Project Details Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className="bg-card rounded-xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video relative">
                <img  
                  alt={`Detailed view of ${activeProject.title} project`}
                  className="w-full h-full object-cover"
                 src="https://images.unsplash.com/photo-1542744095-291d1f67b221" />
                
                <button 
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  onClick={() => setActiveProject(null)}
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{activeProject.title}</h3>
                <p className="text-muted-foreground mb-6">{activeProject.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {activeProject.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="skill-pill"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={activeProject.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-md bg-secondary text-foreground font-medium hover:bg-secondary/80 transition-colors"
                  >
                    <Github size={18} className="mr-2" />
                    View Code
                  </a>
                  <a 
                    href={activeProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
