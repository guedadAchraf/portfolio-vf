import React, { useState } from 'react';
import { Mail, Phone, Send, MapPin } from 'lucide-react';
import SectionTitle from './common/SectionTitle';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset submitted state after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Contact" 
          subtitle="Coordonnées"
          icon={<Mail className="text-blue-600 dark:text-blue-400" size={28} />}
        />
        
        <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">Contactez moi</h3>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-full text-blue-600 dark:text-blue-400">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="text-lg font-medium text-slate-800 dark:text-white">Numéro de téléphone</h4>
                <a href="tel:+212617611753" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  +212 6 17 61 17 53
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-full text-blue-600 dark:text-blue-400">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-lg font-medium text-slate-800 dark:text-white">Email</h4>
                <a href="mailto:guedad.achraf@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  guedad.achraf@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-full text-blue-600 dark:text-blue-400">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-lg font-medium text-slate-800 dark:text-white">Localisation</h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Casablanca , Maroc
                </p>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default Contact;