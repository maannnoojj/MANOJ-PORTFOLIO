import React from 'react';
import { USER_INFO } from '../constants';

interface ResumeCTAProps {
  onViewResume?: () => void;
}

const ResumeCTA: React.FC<ResumeCTAProps> = ({ onViewResume }) => {
  const handleAction = () => {
    window.open(USER_INFO.resumeUrl, '_blank');
  };

  return (
    <section id="resume" className="py-24 px-6 text-center max-w-3xl mx-auto border-t border-white/5 scroll-mt-24">
      <h2 className="text-5xl md:text-7xl font-black italic uppercase leading-none mb-2">Professional</h2>
      <h2 className="text-5xl md:text-7xl font-black italic uppercase leading-none text-blue-600 mb-8">Resume</h2>
      <p className="text-slate-400 text-lg mb-12">
        Review my professional qualifications and academic background directly or visit GitHub for the formal document.
      </p>
      
      <div className="space-y-4">
        <button 
          onClick={onViewResume}
          className="w-full py-5 bg-white text-black font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-slate-200 transition-colors"
        >
          <span className="material-icons-round">visibility</span> Interactive Portfolio Resume
        </button>
        <button 
          onClick={handleAction}
          className="w-full py-5 bg-blue-600 text-white font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-blue-500 transition-colors"
        >
          <span className="material-icons-round">open_in_new</span> View & Download on GitHub
        </button>
      </div>
    </section>
  );
};

export default ResumeCTA;