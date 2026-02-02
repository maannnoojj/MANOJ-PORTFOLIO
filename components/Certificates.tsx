
import React from 'react';
// Fix: Use CERTIFICATIONS which is the correct export name in constants.ts
import { CERTIFICATIONS } from '../constants';

const Certificates: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-display font-black text-white">Proven <span className="text-gradient">Skills</span></h2>
          <p className="text-slate-400 max-w-xl text-lg font-medium">
            Continuous learning through industry certifications and competitive hackathons.
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Fix: Map over CERTIFICATIONS */}
        {CERTIFICATIONS.map((cert, index) => (
          <div 
            key={index} 
            className="group relative glass-card p-8 rounded-3xl border-white/5 flex flex-col gap-6 overflow-hidden glow-hover transition-all duration-500"
          >
            {/* Background Decoration */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/5 rounded-full group-hover:scale-[2] transition-transform duration-700"></div>
            
            <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-gradient-vivid rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04M12 21.75c-3.125 0-6.136-1.149-8.485-3.237A11.944 11.944 0 012.25 12c0-3.313 1.344-6.313 3.515-8.485C8.136 1.394 11.125.25 14.25.25s6.114 1.144 8.485 3.265C24.906 5.687 26.25 8.687 26.25 12c0 3.313-1.344 6.313-3.515 8.485C20.386 22.856 17.375 24 14.25 24z" />
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
              </svg>
            </div>
            
            <div className="relative z-10">
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors leading-tight">
                {cert.title}
              </h4>
              <p className="text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                {cert.issuer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;