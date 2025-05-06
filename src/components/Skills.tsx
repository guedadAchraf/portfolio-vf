import React from 'react';
import { Code, Database, Server, Monitor, GitBranchPlus, Workflow } from 'lucide-react';
import SectionTitle from './common/SectionTitle';

interface Skill {
  name: string;
  level: number; // 1-5
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Langages de Programmation',
      icon: <Code size={24} />,
      skills: [
        { name: 'Java (8, 17)', level: 5 },
        { name: 'TypeScript', level: 4 },
        { name: 'JavaScript', level: 4 },
        { name: 'Python', level: 3 },
        { name: 'Groovy', level: 3 },
        { name: 'Bash', level: 2 },
      ]
    },
    {
      title: 'Frameworks',
      icon: <Workflow size={24} />,
      skills: [
        { name: 'Spring Boot', level: 5 },
        { name: 'Spring Cloud', level: 4 },
        { name: 'Angular', level: 5 },
        { name: 'React', level: 3 },
        { name: 'Node.js', level: 3 },
        { name: 'Next.js', level: 3 },
        { name: 'Django', level: 2 },
      ]
    },
    {
      title: 'Bases de Données',
      icon: <Database size={24} />,
      skills: [
        { name: 'MySQL', level: 4 },
        { name: 'PostgreSQL', level: 4 },
        { name: 'Oracle 11G/12C', level: 3 },
        { name: 'MongoDB', level: 3 },
      ]
    },
    {
      title: 'DevOps',
      icon: <Server size={24} />,
      skills: [
        { name: 'Docker', level: 4 },
        { name: 'Kubernetes', level: 3 },
        { name: 'Jenkins', level: 4 },
        { name: 'GitLab CI/CD', level: 4 },
        { name: 'GitHub Actions', level: 3 },
        { name: 'Azure', level: 3 },
        { name: 'GCP Cloud', level: 2 },
      ]
    },
    {
      title: 'Architecture',
      icon: <GitBranchPlus size={24} />,
      skills: [
        { name: 'Microservices', level: 4 },
        { name: 'Monolithique', level: 5 },
        { name: 'Multi-modules', level: 5 },
     
      ]
    },
    {
      title: 'Agile',
      icon: <Monitor size={24} />,
      skills: [
        { name: 'Scrum', level: 4 },
        { name: 'Kanban', level: 4 },
        { name: 'Jira', level: 4 },
        { name: 'Confluence', level: 3 },
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Compétences & Expertise" 
          subtitle="Ce que je peux apporter"
          icon={<Code className="text-blue-600 dark:text-blue-400" size={28} />}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 transition-transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-md bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-700 dark:text-slate-300">{skill.name}</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full"
                        style={{ width: `${skill.level * 20}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;