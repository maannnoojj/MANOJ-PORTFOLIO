import React, { useEffect, useRef, useState } from 'react';
import { DETAILED_PROJECTS, USER_INFO } from '../constants';

const ProjectCard: React.FC<{ project: typeof DETAILED_PROJECTS[0] }> = ({ project }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`group relative bg-[#0a0a0c] border border-white/5 rounded-[2rem] overflow-hidden hover:border-indigo-500/50 transition-all duration-500 flex flex-col h-full transform hover:-translate-y-3 hover:shadow-[0_40px_80px_-20px_rgba(99,102,241,0.2)] ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      {/* Visual Header with Grid Pattern */}
      <div className="aspect-[16/8] flex items-center justify-center relative bg-slate-950 overflow-hidden">
        {/* Animated Scanning Grid */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent"></div>
        
        <div className={`relative z-10 p-5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 shadow-2xl ${
          isVisible ? 'animate-icon-float' : ''
        }`}>
          {project.id === 'handwritten-notes' && (
            <span className="material-icons-round text-4xl text-indigo-400">notes</span>
          )}
          {project.id === 'vehicle-mgmt' && (
            <span className="material-icons-round text-4xl text-blue-400">cable</span>
          )}
          {project.id === 'farmer-assistant' && (
            <span className="material-icons-round text-4xl text-emerald-400">wb_sunny</span>
          )}
          {project.id === 'ai-buddy' && (
            <span className="material-icons-round text-4xl text-purple-400">mic</span>
          )}
        </div>
      </div>

      <div className="px-10 pb-10 flex flex-col flex-grow relative -mt-6">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map(t => (
            <span key={t} className="px-3 py-1 bg-white/5 text-slate-400 text-[9px] font-black uppercase tracking-widest rounded-lg border border-white/5 group-hover:border-indigo-500/30 transition-colors">
              {t}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-black text-white mb-4 group-hover:text-indigo-400 transition-colors tracking-tight">
          {project.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-8">
          {project.description}
        </p>
        
        {project.technicalImpact && (
          <div className="p-5 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 mb-8 backdrop-blur-sm">
            <h4 className="text-[9px] font-black text-indigo-400 uppercase tracking-widest mb-2">Technical Impact</h4>
            <p className="text-slate-400 italic text-xs font-medium">{project.technicalImpact}</p>
          </div>
        )}

        <div className="mt-auto pt-4 flex gap-3">
          <a 
            href={project.link || "#"} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-indigo-600 text-white text-xs font-black uppercase tracking-widest hover:bg-indigo-500 transition-all active:scale-[0.98] shadow-lg shadow-indigo-600/10"
          >
            Review Code
          </a>
          <button 
            onClick={() => project.link && window.open(project.link, '_blank')}
            className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
          >
             <span className="material-icons-round text-xl">open_in_new</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section className="py-24 bg-[#08080a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="text-left">
            <div className="text-indigo-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4">Engineering Laboratory</div>
            <h2 className="text-5xl font-black text-white mb-4 italic tracking-tighter uppercase">THE LAB<span className="text-indigo-600">.</span></h2>
            <p className="text-slate-400 max-w-xl text-lg font-medium">
              Deployment-ready modules built with React, Node.js, and Generative AI.
            </p>
          </div>
          <a href={`https://github.com/${USER_INFO.github}`} target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-white/10 rounded-full text-white text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-all flex items-center">
            View GitHub Archive
            <span className="material-icons-round ml-3 text-sm">east</span>
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {DETAILED_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;