import React from 'react';
import { CERTIFICATIONS } from '../constants';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 px-6 max-w-4xl mx-auto scroll-mt-24">
      <div className="text-center mb-20 space-y-4">
        <h2 className="text-5xl md:text-7xl font-black uppercase italic">Certifications</h2>
        <p className="text-slate-400">Validated skills from industry leaders.</p>
      </div>

      <div className="space-y-4">
        {CERTIFICATIONS.map((cert, i) => (
          <div key={i} className="glass-dark p-8 rounded-3xl border border-white/5 flex items-center gap-6 group hover:border-blue-500/50 transition-all">
            <div className="w-16 h-16 rounded-2xl bg-blue-900/20 flex items-center justify-center text-blue-500">
               <span className="material-icons-round text-3xl">lightbulb</span>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-1">{cert.title}</h4>
              <p className="text-sm text-slate-500">{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;