import React from 'react';
import { ACADEMIC_JOURNEY } from '../constants';

const AcademicJourney: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 bg-[#030303] scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black text-center mb-20 uppercase italic">Academic <span className="text-blue-500">Journey</span></h2>
        
        <div className="space-y-12">
          {ACADEMIC_JOURNEY.map((edu, i) => (
            <div key={i} className="flex gap-8">
               <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full border-2 border-blue-600"></div>
                <div className="w-px flex-grow bg-slate-800 mt-4 last:bg-transparent"></div>
              </div>
              <div className="flex-grow glass-dark p-8 md:p-12 rounded-[2.5rem] border border-white/5 space-y-6 transition-all hover:border-blue-500/30">
                <h3 className="text-2xl md:text-3xl font-black leading-tight">{edu.institution}</h3>
                <div className="space-y-4">
                  <p className="text-blue-500 flex items-center gap-2">
                    <span className="material-icons-round text-sm">school</span>
                    <span className="font-bold">{edu.degree}</span>
                  </p>
                  <p className="text-slate-400 font-bold">{edu.period}</p>
                </div>
                <div className="inline-block px-4 py-2 bg-blue-900/20 border border-blue-500/20 rounded-xl">
                  <span className="text-xs font-black text-slate-400 uppercase tracking-widest mr-4">Score:</span>
                  <span className="text-green-500 font-bold">{edu.grade}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicJourney;