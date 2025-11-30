import React from 'react';
import { GraduationCap } from 'lucide-react';
import SectionTitle from './common/SectionTitle';

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  details?: string;
}

const Education: React.FC = () => {
  const education: EducationItem[] = [
    {
      institution: "Board Infinity",
      degree: " Certification - Frontend Development using Angular",
      period: "2023",
      details: "Certification  en développement web,avec Angular"
    },
   
   
    {
      institution: "EMSI",
      degree: "Méthodes Informatiques Appliquées à la Gestion des Entreprises",
      period: "2015 - 2018",
      details: "Formation en développement logiciel, bases de données, et gestion de projets informatiques."
    },
    {
      institution: "Faculté Polydisciplinaire",
      degree: "Diplôme des études universitaires professionnelles (DEUP) en Génie Logiciel",
      period: "2012 - 2015",
      details: "Fondamentaux de la programmation, structures de données, et conception logicielle."
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <SectionTitle 
<<<<<<< HEAD
          title="Formations" 
=======
          title="Formation" 
>>>>>>> 30-11-2025
          subtitle="Academic background"
          icon={<GraduationCap className="text-blue-600 dark:text-blue-400" size={28} />}
        />
        
        <div className="max-w-3xl mx-auto mt-12 space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 transition-transform hover:scale-105"
            >
              <div className="flex justify-between flex-wrap gap-2 mb-3">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white">{edu.institution}</h3>
                <span className="text-blue-600 dark:text-blue-400 font-medium">{edu.period}</span>
              </div>
              
              <p className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-3">{edu.degree}</p>
              
              {edu.details && (
                <p className="text-slate-600 dark:text-slate-400">{edu.details}</p>
              )}
            </div>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto mt-12">
          <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Languages</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-700 dark:text-slate-300">Français</span>
                  <span className="text-blue-600 dark:text-blue-400">Professionnel</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-700 dark:text-slate-300">Anglais</span>
                  <span className="text-blue-600 dark:text-blue-400">Professionnel</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-700 dark:text-slate-300">Allemand</span>
                  <span className="text-blue-600 dark:text-blue-400">Débutant A1</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full" style={{ width: '20%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;