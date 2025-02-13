import React from 'react';
import { motion } from 'framer-motion';

function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }, (_, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={`https://via.placeholder.com/300?text=Project+${index + 1}`}
                alt={`Project ${index + 1}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Project {index + 1}</h3>
                <p className="text-gray-600">
                  A brief description of the project. Highlight key features and technologies used.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

