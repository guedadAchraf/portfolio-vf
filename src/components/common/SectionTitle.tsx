import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, icon }) => {
  return (
    <div className="text-center mb-12">
      {icon && <div className="flex justify-center mb-4">{icon}</div>}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-2">{title}</h2>
      <p className="text-slate-600 dark:text-slate-400 text-lg">{subtitle}</p>
      <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></div>
    </div>
  );
};

export default SectionTitle;