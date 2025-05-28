
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <motion.a 
                href="#home" 
                className="text-2xl font-bold gradient-text inline-block mb-4"
                whileHover={{ scale: 1.05 }}
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  });
                }}
              >
                Portfolio
              </motion.a>
              <p className="text-muted-foreground mb-6 max-w-md">
                Creating exceptional digital experiences through clean code and thoughtful design. Let's build something amazing together.
              </p>
              <div className="flex space-x-4">
                <motion.a 
                  href="https://github.com/ziadMohamed00" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <Github size={18} />
                  <span className="sr-only">GitHub</span>
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/ziad-mohamed-49aa12243/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <Linkedin size={18} />
                  <span className="sr-only">LinkedIn</span>
                </motion.a>
                <motion.a 
                  href="https://x.com/ziadMoh80966118" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <Twitter size={18} />
                  <span className="sr-only">Twitter</span>
                </motion.a>
              </div>
            </div>
            
            <div>
              <p className="font-semibold mb-4">Quick Links</p>
              <ul className="space-y-2">
                {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        const section = document.getElementById(item.toLowerCase());
                        if (section) {
                          window.scrollTo({
                            top: section.offsetTop - 80,
                            behavior: 'smooth'
                          });
                        }
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <p className="font-semibold mb-4">Contact Info</p>
              <ul className="space-y-2">
                <li className="text-muted-foreground">
                  <span className="block">Email:</span>
                  <a href="mailto:ziadelgammal123@gmail.com" className="hover:text-primary transition-colors">
                    ziadelgammal123@gmail.com
                  </a>
                </li>
                <li className="text-muted-foreground">
                  <span className="block">Phone:</span>
                  <a href="tel:+201144964505" className="hover:text-primary transition-colors">
                    +20 (114) 496-4505
                  </a>
                </li>
                <li className="text-muted-foreground">
                  <span className="block">Location:</span>
                  <span>Nasr City, EGY</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © {currentYear} Ziad Mohamed. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center">
              Made with <Heart size={14} className="mx-1 text-red-500" /> by Ziad Mohamed
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
