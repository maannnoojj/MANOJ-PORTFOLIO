
import React from 'react';
// Fix: Use ACADEMIC_JOURNEY which is the correct export name in constants.ts
import { ACADEMIC_JOURNEY } from '../constants';

const Education: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col items-center text-center mb-24 space-y-4">
        <h2 className="text-4xl md:text-6xl font-display font-black text-white">Learning <span className="text-gradient">Path</span></h2>
        <p className="text-slate-400 max-w-2xl text-lg font-medium italic">"Education is the passport to the future."</p>
      </div>

      <div className="max-w-5xl mx-auto space-y-16">
        {/* Fix: Map over ACADEMIC_JOURNEY */}
        {ACADEMIC_JOURNEY.map((edu, index) => (
          <div key={index} className="relative group">
            {/* Background Accent */}
            <div className={`absolute -inset-4 rounded-[3rem] blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-10 ${index % 2 === 0 ? 'bg-indigo-500' : 'bg-fuchsia-500'}`}></div>
            
            <div className={`relative z-10 flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/2">
                <div className="glass-card p-10 rounded-[2.5rem] border-white/5 transition-all group-hover:translate-y-[-4px]">
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] border ${index % 2 === 0 ? 'text-indigo-400 border-indigo-400/30 bg-indigo-400/10' : 'text-fuchsia-400 border-fuchsia-400/30 bg-fuchsia-400/10'}`}>
                      {edu.period}
                    </span>
                    {edu.grade && <span className="text-sm font-black text-white opacity-40 group-hover:opacity-100 transition-opacity">{edu.grade}</span>}
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2">{edu.institution}</h3>
                  <p className="text-indigo-400/80 font-bold mb-4">{edu.degree}</p>
                </div>
              </div>
              
              <div className="hidden md:flex flex-col items-center">
                <div className="w-1 h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
                <div className={`w-4 h-4 rounded-full border-4 border-[#0a0a0f] shadow-[0_0_15px_rgba(255,255,255,0.3)] ${index % 2 === 0 ? 'bg-indigo-500' : 'bg-fuchsia-500'}`}></div>
                <div className="w-1 h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
              </div>

              <div className="hidden md:block w-1/2 text-left px-10">
                 {/* Fix: Use ACADEMIC_JOURNEY length */}
                 <p className="text-white/5 text-8xl font-black select-none">0{ACADEMIC_JOURNEY.length - index}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;