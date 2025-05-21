
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Database, Globe, Cpu, Layers, ChevronRight } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <Code size={24} />,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap', 'TailwindCSS', 'Framer Motion', 'TypeScript']
    },
    {
      id: 'design',
      title: 'UI/UX Design',
      icon: <Palette size={24} />,
      skills: ['Figma', 'Adobe XD', 'User Research', 'Responsive Design']
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: <Database size={24} />,
      skills: ['PHP', 'Laravel', 'Livewire', 'Mysql', 'PostgreSQl', 'RESTful APIs', 'sqlLite']
    },
    {
      id: 'tools',
      title: 'Tools & Deployment',
      icon: <Globe size={24} />,
      skills: ['Git', 'GitHub',]
    },
    {
      id: 'other',
      title: 'Other Skills',
      icon: <Cpu size={24} />,
      skills: ['Performance Optimization', 'Accessibility', 'Technical Writing', ]
    },
    {
      id: 'soft',
      title: 'Soft Skills',
      icon: <Layers size={24} />,
      skills: ['Problem Solving', 'Communication', 'Teamwork', 'Time Management', 'Adaptability', 'Attention to Detail']
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
    <div className="py-20 bg-secondary/30">
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
              My <span className="gradient-text">Skills</span>
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
              I've worked with a variety of technologies and tools in the web development world. Here's an overview of my technical skills and expertise.
            </motion.p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {skillCategories.map((category) => (
              <motion.div
                key={category.id}
                variants={item}
                className="bg-card rounded-xl p-6 shadow-lg border card-hover"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {category.skills.map((skill, index) => (
                    <motion.span 
                      key={index} 
                      className="skill-pill"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.05,
                        type: "spring",
                        stiffness: 100
                      }}
                      viewport={{ once: true }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-16 bg-card rounded-xl p-8 border shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">My Development Process</h3>
              <p className="text-muted-foreground">How I approach projects from concept to completion</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: 1, title: "Discovery", description: "Understanding requirements and project goals" },
                { step: 2, title: "Planning", description: "Creating wireframes and technical specifications" },
                { step: 3, title: "Development", description: "Building the solution with clean, efficient code" },
                { step: 4, title: "Delivery", description: "Testing, refinement, and project handover" }
              ].map((phase) => (
                <motion.div 
                  key={phase.step}
                  className="relative"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: phase.step * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-primary/10 rounded-lg p-6 text-center h-full">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mx-auto mb-4">
                      {phase.step}
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{phase.title}</h4>
                    <p className="text-muted-foreground">{phase.description}</p>
                  </div>
                  
                  {phase.step < 4 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-primary">
                      <ChevronRight size={24} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
