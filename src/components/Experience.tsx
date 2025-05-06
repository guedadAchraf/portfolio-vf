import React from 'react';
import { Briefcase } from 'lucide-react';
import SectionTitle from './common/SectionTitle';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Ingénieur Freelance Java Angular",
      company: "upwork",
      period: "Juillet 2024 - Janvier 2025",
      description: [
        "Participation aux ateliers et conception d'une architecture microservices scalable",
        "Développement backend avec Spring Boot (API REST, sécurisation OAuth2/JWT, keycloak)",
        "Développement frontend Angular avec NGRX et optimisations UI/UX",
        "CI/CD avec jenkins, déploiement sur AWS (EC2, RDS, ecr, kubernetes)"
      ],
      technologies: ["Java 17", "Spring Boot", "Angular", "PostgreSQL", "OAuth2", "JWT", "Docker", "Kubernetes", "AWS", "GitLab CI/CD"]
    },
    {
      title: "Ingénieur Freelance Java JEE Angular",
      company: "SadaWeb, Marrakech",
      period: "Avril 2024 - Juillet 2024",
      description: [
        "Analyse des besoins et modélisation de la base de données MySQL",
        "Développement backend : gestion utilisateurs/produits, API REST, Spring Security, keycloak",
        "Développement frontend : affichage produits, gestion panier, consommation API",
        "Initiation à GitLab CI/CD, Docker et mise en production de l'application"
      ],
      technologies: ["Java 8", "Spring Boot", "Angular", "MySQL", "Spring Security", "GitLab CI/CD", "Docker"]
    },
    {
      title: "Ingénieur Freelance Java / Angular",
      company: "Upwork, Marrakech",
      period: "Octobre 2022 - Décembre 2023",
      description: [
        "Modélisation de la base de données et architecture microservices",
        "Développement backend : API REST sécurisées, moteur de rapports comptables, automatisation avec Spring Batch, gestion des factures",
        "Développement frontend : tableau de bord interactif, gestion avancée des factures",
        "CI/CD, conteneurisation et déploiement sur AWS (S3, RDS)"
      ],
      technologies: ["Java 17", "Spring Boot", "Angular 17", "PostgreSQL", "OAuth2", "JWT", "Spring Batch", "Docker", "Kubernetes", "AWS", "Jenkins CI/CD"]
    },
    {
      title: "Ingénieur Java Angular",
      company: "Capgemini, Casablanca",
      period: "Mai 2021 - Octobre 2022",
      description: [
        "Maintenance et correction d'anomalies en production et phase de test",
        "Développement backend : nouvelles API REST avec Spring Boot",
        "Amélioration de l'UX avec Angular et workflows automatisés",
        "Renforcement de la sécurité avec OAuth2, JWT et gestion avancée des permissions"
      ],
      technologies: ["Java 8", "Spring Boot", "Angular", "PostgreSQL", "Spring Security"]
    },
    {
      title: "Ingénieur Java Angular",
      company: "Freelance indépendant",
      period: "Janvier 2020 - Avril 2021",
      description: [
        "Conception et réalisation d'une application de galerie marchande"
      ],
      technologies: ["Java 8", "Spring Boot", "Angular", "PostgreSQL", "GitHub", "GitHub Actions"]
    },
    {
      title: "Ingénieur Java Angular",
      company: "Freelance indépendant",
      period: "Janvier 2019 - Décembre 2019",
      description: [
        "Conception et réalisation d'une application de gestion d'une agence de voyage"
      ],
      technologies: ["Java 8", "Spring Boot", "Angular", "PostgreSQL"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Professional Experience" 
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
                  <p className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-2">{exp.company}</p>
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