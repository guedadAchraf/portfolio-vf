import { Mail, Phone, ArrowDown } from 'lucide-react';
import achrafImage from '../../assets/achraf.jpg';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Achraf Guedad';
  
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 my-4 md:my-8">
          <div className="md:w-1/2 mb-8 md:mb-0">
            {/* Content remains unchanged */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-slate-800 dark:text-white">
              <span className="block">Bonjour, je suis</span>
              <span className="text-blue-600 dark:text-blue-400">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium mb-6 text-slate-600 dark:text-slate-300">
<<<<<<< HEAD
            Développeur Java JEE / Angular | Devops: docker,kubernetes | Cloud: Aws 
            Amazon 
            </h2>
            <p className="text-lg mb-8 text-slate-700 dark:text-slate-400 max-w-xl">
              Je suis spécialisé dans le développement d'applications robustes et évolutives utilisant Java, Spring Boot et Angular.
              <br />
              Fort d'une expérience en Devops et cloud, notamment avec docker kubernetes jenkins, AWS Amazon.
=======
              Développeur  Full stack Java JEE (Jakarta) / Angular-React
            </h2>
            <p className="text-lg mb-8 text-slate-700 dark:text-slate-400 max-w-xl">
              Je suis spécialisé dans le développement d'applications robustes et évolutives utilisant Java, Spring Boot,Angular,et React (js/ts). Fort d'une expérience en Devops et cloud, notamment avec docker kubernetes jenkins, AWS AMAZON.
>>>>>>> 30-11-2025
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="mailto:guedad.achraf@gmail.com" className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Mail size={20} />
                guedad.achraf@gmail.com
              </a>
              <a href="tel:+212617611753" className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Phone size={20} />
                +212 6 17 61 17 53
              </a>
            </div>
            <div className="flex gap-4">
              <button onClick={scrollToContact} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors">
                Me Contacter
              </button>
             
            </div>
          </div>
          
          <div className="md:w-2/5 flex justify-center my-8">
            <div className="relative group">
              {/* Extra large outer decorative border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 transform group-hover:scale-105 transition-all duration-300 w-80 h-80 -z-10 mx-auto my-auto"></div>
              
              {/* Thick middle border layer */}
              <div className="absolute inset-0 rounded-full bg-white dark:bg-slate-800 m-3 w-74 h-74 -z-5 mx-auto my-auto shadow-md"></div>
              
              {/* Actual image with thick border */}
              <div className="relative overflow-hidden rounded-full w-64 h-79 border-[30px] border-white dark:border-slate-800 shadow-lg mx-auto mt-8 mb-4" id="picture">
                <img 
                  src={achrafImage} 
                  alt="Achraf Guedad" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                {/* Stronger inner shadow for depth */}
                <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.2)]"></div>
              </div>
              
              {/* Enhanced floating elements */}
              <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900 opacity-80 group-hover:opacity-100 transition-opacity duration-300 -z-20"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-blue-200 dark:bg-blue-800 opacity-80 group-hover:opacity-100 transition-opacity duration-300 -z-20"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <ArrowDown size={32} className="text-blue-600 dark:text-blue-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;