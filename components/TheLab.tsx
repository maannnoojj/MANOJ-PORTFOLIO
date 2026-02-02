import React from 'react';
import { DETAILED_PROJECTS } from '../constants';

const TheLab: React.FC = () => {
  const handleViewLink = (link?: string) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="py-32 px-6 bg-[#020205] relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-24 space-y-6 text-center">
          <p className="text-[11px] font-black text-indigo-500 uppercase tracking-[0.3em]">Engineering Laboratory</p>
          <h2 className="text-6xl md:text-9xl italic-black uppercase tracking-tighter text-white">THE LAB<span className="text-indigo-500">.</span></h2>
          <p className="text-slate-400 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Deployment-ready modules built with React, Node.js, and Generative AI.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-20">
          {DETAILED_PROJECTS.map((project, i) => (
            <div 
              key={i} 
              className="relative bg-[#05050a] border border-white/5 rounded-[2.5rem] p-12 md:p-16 flex flex-col items-center text-center group transition-all duration-500 hover:border-indigo-500/20 hover:shadow-[0_0_50px_rgba(99,102,241,0.05)]"
            >
              {/* Top Circular Icon */}
              <div className="w-24 h-24 rounded-full bg-[#0a0a14] border border-white/10 flex items-center justify-center mb-10 relative">
                <div className="absolute inset-0 rounded-full bg-indigo-500/5 group-hover:bg-indigo-500/10 transition-colors"></div>
                <span className="material-icons-round text-4xl text-slate-500 group-hover:text-indigo-400 transition-all duration-500 group-hover:scale-110">
                  {project.icon}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {project.tags.map((tag, t) => (
                  <span 
                    key={t} 
                    className="px-4 py-1.5 bg-[#12121c] border border-white/5 rounded-lg text-[9px] font-black text-slate-400 tracking-widest uppercase group-hover:border-indigo-500/20 group-hover:text-slate-200 transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Content */}
              <h3 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6 group-hover:text-indigo-500 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-400 text-lg md:text-xl font-medium max-w-3xl leading-relaxed mb-12 transition-all duration-500 group-hover:text-slate-300">
                {project.description}
              </p>
              
              {/* Technical Impact Box */}
              <div className="w-full max-w-2xl bg-[#08080f] border border-white/5 rounded-3xl p-8 md:p-10 text-left space-y-3 shadow-inner transition-all duration-500 group-hover:border-indigo-500/10">
                <p className="text-[10px] font-black text-indigo-500 uppercase tracking-widest opacity-80">Technical Impact</p>
                <p className="text-slate-300 text-lg font-medium italic leading-relaxed">
                  {project.technicalImpact}
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-6 mt-12 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <button 
                  onClick={() => handleViewLink(project.link)}
                  className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-black text-sm hover:bg-indigo-500 transition-all active:scale-95 uppercase tracking-widest shadow-lg shadow-indigo-600/20"
                >
                  Review Code
                </button>
                <button 
                  onClick={() => handleViewLink(project.link)}
                  className="w-12 h-12 border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/5 hover:text-indigo-500 transition-all text-slate-400"
                >
                  <span className="material-icons-round">open_in_new</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheLab;