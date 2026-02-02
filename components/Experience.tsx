import React from 'react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto scroll-mt-24">
      <h2 className="text-5xl md:text-7xl font-black text-center mb-20">Professional <br />Experience</h2>
      
      <div className="space-y-16">
        {EXPERIENCE.map((exp, i) => (
          <div key={i} className="flex gap-8 group">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-blue-600 shadow-[0_0_15px_rgba(79,70,229,0.5)]"></div>
              <div className="w-px flex-grow bg-slate-800 mt-4 group-last:bg-transparent"></div>
            </div>
            
            <div className="pb-12 space-y-6">
              <div>
                <h3 className="text-3xl font-black mb-1">{exp.title}</h3>
                <p className="text-blue-500 font-bold">{exp.company}</p>
                <div className="inline-block mt-3 px-3 py-1 bg-white/5 rounded-full text-[10px] font-black text-slate-500 uppercase tracking-widest">{exp.period}</div>
              </div>
              
              <ul className="space-y-4 text-slate-400">
                {exp.points.map((p, pi) => (
                  <li key={pi} className="flex gap-2">
                    <span className="text-blue-600">▹</span> {p}
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-3">
                {exp.tags.map((tag, ti) => (
                  <span key={ti} className="px-4 py-2 bg-slate-900 border border-white/5 rounded-xl text-xs font-bold text-slate-300">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;