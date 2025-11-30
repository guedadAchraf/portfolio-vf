import React from 'react';
import { Briefcase } from 'lucide-react';
import SectionTitle from './common/SectionTitle';

interface ExperienceItem {
  title: string;
  company:  string | JSX.Element;
  period: string;
  description: string[];
  technologies: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Ingénieur Full stack Node js (nest js) /Angular",
      company: (
      <span>
        Jbujb - Marrakech{" "}
        <a
          href="https://www.jbujb.ma"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          www.jbujb.ma
        </a>
            <br />


      </span>
    ),
      period: "Octobre 2025 - Présent",
      description: [
        "Participation aux ateliers et conception d'une architecture microservices scalable",
        "Développement backend avec nest js  (API REST, sécurisation OAuth2/JWT, keycloak)",
        "Développement frontend Angular avec NGRX (REDUX) et optimisations UI/UX",
        "CI/CD avec jenkins, déploiement sur VPS"
      ],
      technologies: ["Nest js ", "Node js ", "Angular", "Mongodb", "OAuth2", "JWT", "Docker", "Kubernetes", "IAAS VPS", "GitLab"]
    },

    {
      title: "Ingénieur Freelance -  Java JEE React ts",
      company: (
      <span>
        self employee  - Ouarzazate{" "}
        <a
          href="https://yakoub-5bd60.web.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          www.DJOCO-vercel.web.app
        </a>
             


      </span> ) ,
      period: "Juillet 2024 - Octobre 2025",
      description: [
        " Analyse des besoins et modélisation de la base de données RDS ",
        "Développement backend : gestion utilisateurs/produits, API REST, Spring Security, keycloak",
        "Développement frontend : affichage produits, gestion panier, consommation API",
        "Initiation à GitLab CI/CD, Docker et mise en production de l'application"
      ],
      technologies: ["Java 17", "Spring Boot", "Angular", "RDS-MySQL", "Spring Security", "GitLab CI/CD", "Docker"]
    },
     
    {
      title: "Ingénieur  Java JEE Angular",
      company: (
      <span>
        Sadaweb- Marrakech{" "}
        <a
          href=" https://boutique-kalidou.fr/fr/https://boutique-kalidou.fr/fr/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          https://boutique-kalidou.fr/fr/
        </a>
             


      </span> ),
      period: "Avril 2024 - Juillet 2024",
      description: [
        "Analyse des besoins et participation à la refonte vers l'architecture microservice ",
        "Développement backend : gestion utilisateurs/produits, API REST, Spring Security, keycloak",
        "Développement frontend : affichage produits, gestion panier, consommation API",
        "Initiation à GitLab CI/CD, Docker et mise en production de l'application"
      ],
      technologies: ["Java 8", "Spring Boot", "Angular", "MySQL", "Spring Security", "GitLab CI/CD", "Docker"]
    },
     
    {
      title: "Ingénieur Java JEE  Angular",
      company: (
      <span>
        Capgemini  - Casablanca{" "}
        <a
          href="https://www.totalenergies.fr/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          https://www.totalenergies.fr/
        </a>
             


      </span> ),
      period: "Mai 2021 - Mars 2024",
      description: [
        "Maintenance et correction d'anomalies en production et phase de staging",
        "Développement backend : build - nouvelles API REST avec Spring Boot",
        "Amélioration de l'UX avec Angular ",
        "Renforcement de la sécurité avec OAuth2, JWT et gestion avancée des permissions"
      ],
      technologies: ["Java 8", "Spring Boot", "Angular", "PostgreSQL", "Spring Security"]
    },
   
  
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="experiences professionelles" 
          subtitle="My career journey"
          icon={<Briefcase className="text-blue-600 dark:text-blue-400" size={28} />}
        />
        
        <div className="max-w-6xl mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full flex flex-col"
              >
                <div className="flex flex-col mb-2">
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-1">{exp.title}</h3>
                  <div className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-2">{exp.company}</div>
                  <span className="text-blue-600 dark:text-blue-400 font-medium mb-4">{exp.period}</span>
                </div>
                
                <ul className="mb-4 space-y-2 flex-grow">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                      <span className="text-slate-700 dark:text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {exp.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;