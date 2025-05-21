
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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
              About <span className="gradient-text">Me</span>
            </motion.h2>
            <motion.div 
              className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            ></motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img  alt="Professional portrait of John Doe" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1542837336-d14bdf342f9b" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full opacity-20"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
              <p className="text-muted-foreground mb-6">
                I'm a passionate web developer with over 3 years of experience creating beautiful, functional, and user-centered digital experiences. I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.
              </p>
              <p className="text-muted-foreground mb-6">
                When I'm not coding or pushing pixels, you'll find me exploring the outdoors, reading, or seeking inspiration in art and design.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <h4 className="font-semibold mb-2">Name:</h4>
                  <p className="text-muted-foreground">Ziad Mohamed Abdallah</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Email:</h4>
                  <p className="text-muted-foreground">ziadelgammal123@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Location:</h4>
                  <p className="text-muted-foreground">Nasr City, EGY</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Availability:</h4>
                  <p className="text-muted-foreground">Freelance & Full-time</p>
                </div>
              </div>
              
              <motion.a 
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium transition-transform hover:from-blue-700 hover:to-purple-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    window.scrollTo({
                      top: contactSection.offsetTop - 80,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                Let's Talk
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
