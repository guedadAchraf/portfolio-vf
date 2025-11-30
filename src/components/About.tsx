import React from 'react';
import { UserCircle2 } from 'lucide-react';
import SectionTitle from './common/SectionTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="À Propos" 
          subtitle="Apprenez à me connaître"
          icon={<UserCircle2 className="text-blue-600 dark:text-blue-400" size={28} />}
        />
        
        <div className="max-w-3xl mx-auto mt-12">
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
          Développeur Full Stack expérimenté, spécialisé en Java, Spring Boot, Angular,React  et DevOps, avec 5 ans d’expérience dans le développement de solutions web robustes et évolutives. Ayant travaillé aussi bien pour des SSII que des startups, j’ai participé à des projets variés allant de la TMA à la conception de plateformes complètes, incluant des services de géolocalisation, de comptabilité, et des applications orientées microservices avec Spring Cloud et Docker/Kubernetes.

Autonome, rigoureux et passionné par les technologies modernes, je combine mes compétences
 backend et frontend avec des pratiques DevOps pour assurer un cycle de développement 
 fluide et une livraison continue. Je suis également à l’aise dans des environnements 
 internationaux et je cherche activement des opportunités sur site,en télétravail,ou hybride sur la ville 
 de Casablanca ou Rabat. 
          </p>
          
          
          
        </div>
      </div>
    </section>
  );
};

export default About;