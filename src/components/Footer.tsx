import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Achraf Guedad</h2>
            <p className="text-slate-300">Java JEE / Angular Developer</p>
          </div>
          
          <div className="flex space-x-4 mb-6 md:mb-0">
          <a
  href="https://github.com/guedadAchraf?tab=repositories"
  target="_blank"
  rel="noopener noreferrer"
  className="p-2 rounded-full bg-slate-800 hover:bg-blue-600 transition-colors"
>
  <Github size={20} />
</a>

            <a
  href="https://www.linkedin.com/in/achraf-guedad-b3461515b/"
  target="_blank"
  rel="noopener noreferrer"
  className="p-2 rounded-full bg-slate-800 hover:bg-blue-600 transition-colors"
>
  <Linkedin size={20} />
</a>

            
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 mb-4 md:mb-0">
            &copy; {currentYear} Achraf Guedad. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#about" className="text-slate-400 hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="text-slate-400 hover:text-blue-400 transition-colors">Skills</a>
            <a href="#experience" className="text-slate-400 hover:text-blue-400 transition-colors">Experience</a>
            <a href="#contact" className="text-slate-400 hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;