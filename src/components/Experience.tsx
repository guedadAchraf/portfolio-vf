import React from 'react';
import { Briefcase } from 'lucide-react';
import SectionTitle from './common/SectionTitle';

// Import des logos des entreprises
import upworkLogo from '../../assets/logos/upwork.svg';
import sadawebLogo from '../../assets/logos/sadaweb.svg';
import orangeLogo from '../../assets/logos/orange.svg';
import capgeminiLogo from '../../assets/logos/capgemini.svg';
import freelanceLogo from '../../assets/logos/freelance.svg';

interface ExperienceItem {
  title: string;
  company:  string | JSX.Element;
  period: string;
  description: string[];
  technologies: string[];
  projectSummary?: string;
  tasks?: string[];
  link?: string;
  logo: string;
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Ingénieur Java JEE Angular - Missions freelance",
      company: "Freelance",
      period: "Juillet 2024 - Présent",
      description: [
        "Plateforme de réservation dans un restaurant (Yakoub - Ouarzazate)"
      ],
      link: "https://yakoub-5bd60.web.app/",
      technologies: ["Java", "Spring Boot", "Angular", "Web Development"],
      logo: freelanceLogo
    },

    {
      title: "Ingénieur Java JEE Angular",
      company: "SadaWeb, Marrakech",
      period: "Avril 2024 - Juillet 2024",
      description: [
        "Développement et maintenance d'une application e-commerce Kalidou"
      ],
      projectSummary: "Kalidou est une application e-commerce moderne développée pour faciliter la vente en ligne de produits physiques. Elle permet aux utilisateurs de naviguer par catégorie, ajouter des produits au panier, passer des commandes, effectuer des paiements sécurisés via Stripe, et suivre l'état de leur commande. L'interface d'administration permet de gérer les utilisateurs, les produits, les commandes et les promotions. Le projet repose sur une architecture robuste utilisant Spring Boot pour le back-end et Angular pour le front-end, avec une base de données MySQL. La sécurité est assurée via JWT et la gestion des rôles (admin/client). L'application est déployée via Docker, avec une intégration continue CI/CD et hébergée sur AWS.",
      technologies: ["Java 8", "Spring Boot", "Angular", "MySQL", "Spring Security", "GitLab CI/CD", "Docker"],
      tasks: [
        "Conception et développement d'API REST sécurisées avec Spring Boot",
        "Mise en œuvre de la sécurité avec Spring Security, OAuth2, JWT, Keycloak",
        "Utilisation d'Angular Material, PrimeNG, RxJS, NGRX pour la gestion d'état",
        "Intégration des appels API et gestion des formulaires complexes",
        "Gestion des rôles et permissions côté interface (admin, client, etc.)",
        "SSO - Single Sign On"
      ],
      logo: sadawebLogo
    },
     
    {
      title: "Ingénieur Java Angular",
      company: "Orange Obs, Rabat Sale Al Jadida",
      period: "Octobre 2022 - Janvier 2023",
      description: [
        "Développement d'une plateforme de gestion des abonnements télécom"
      ],
      projectSummary: "Conception, TMA, et développement d'une plateforme web destinée à gérer les abonnements fixes, mobiles et internet pour les clients B2C et B2B. L'application permettait la souscription en ligne, le suivi de consommation, la facturation automatisée et la gestion des réclamations. L'architecture reposait sur un ensemble de microservices orchestrés via Spring Cloud et exposant des APIs REST, avec une interface Angular moderne et responsive. L'intégration des paiements électroniques et de la signature digitale permettait une automatisation complète du parcours client.",
      technologies: ["Java 17", "Spring Boot", "Spring Cloud", "Angular 14", "MySQL", "Redis", "Docker", "Kubernetes", "OVH Cloud", "Jenkins"],
      tasks: [
        "Conception et modélisation des microservices de gestion des abonnements et facturation",
        "Développement backend : APIs sécurisées avec Spring Security (OAuth2 et JWT), gestion des paiements et intégration d'API tierces (banques, SMS gateway)",
        "Développement frontend Angular : interfaces de souscription, dashboards clients"
      ],
      logo: orangeLogo
    },
    {
      title: "Ingénieur Java Angular",
      company: "Capgemini, Casablanca",
      period: "Mai 2021 - Octobre 2022",
      description: [
        "Maintenance et développement pour TotalEnergies"
      ],
      projectSummary: "Participation à la maintenance évolutive et corrective des applications internes de TotalEnergies, couvrant divers domaines métier (logistique, finance, RH). Les missions incluaient la correction d'anomalies, le développement de nouvelles fonctionnalités, l'optimisation des performances et le renforcement de la sécurité. L'environnement technique reposait sur Java 8, Spring Boot, Angular et PostgreSQL, avec des pratiques DevOps (CI/CD avec Jenkins, conteneurisation via Docker) pour garantir la fiabilité, la sécurité et la haute disponibilité des services.",
      technologies: ["Java 8", "Spring Boot", "Angular", "PostgreSQL", "Spring Security"],
      tasks: [
        "Maintenance et correction d'anomalies en production et phase de test",
        "Développement backend : nouvelles API REST avec Spring Boot"
      ],
      logo: capgeminiLogo
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Expériences professionnelles" 
          subtitle="Mon parcours professionnel"
          icon={<Briefcase className="text-blue-600 dark:text-blue-400" size={28} />}
        />
        
        <div className="max-w-6xl mx-auto mt-12 space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <img 
                    src={exp.logo} 
                    alt={`Logo ${exp.company}`} 
                    className="w-10 h-10 rounded-lg shadow-sm"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-white">{exp.title}</h3>
                    <p className="text-lg font-medium text-slate-700 dark:text-slate-300">{exp.company}</p>
                  </div>
                </div>
                <span className="text-blue-600 dark:text-blue-400 font-medium mb-4">{exp.period}</span>
              </div>
              
                             <div className="mb-4">
                 <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Mission :</h4>
                 <ul className="space-y-2">
                   {exp.description.map((item, i) => (
                     <li key={i} className="flex items-start">
                       <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                       <span className="text-slate-700 dark:text-slate-300">{item}</span>
                     </li>
                   ))}
                 </ul>
                 {exp.link && (
                   <div className="mt-3">
                     <span className="text-slate-700 dark:text-slate-300">Lien: </span>
                     <a 
                       href={exp.link}
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline"
                     >
                       {exp.link}
                     </a>
                   </div>
                 )}
               </div>

              {exp.projectSummary && (
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Résumé du projet :</h4>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{exp.projectSummary}</p>
                </div>
              )}

              {exp.tasks && (
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Mes tâches :</h4>
                  <ul className="space-y-2">
                    {exp.tasks.map((task, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                        <span className="text-slate-700 dark:text-slate-300">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">Technologies :</h4>
                <div className="flex flex-wrap gap-2">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;