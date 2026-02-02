import React, { useState, useEffect, useRef } from 'react';
import { GROUPED_SKILLS } from '../constants';

const Skills: React.FC = () => {
  const skillGroups = [
    { title: 'Frontend', skills: GROUPED_SKILLS.frontend, icon: '💻' },
    { title: 'Backend', skills: GROUPED_SKILLS.backend, icon: '⚙️' },
    { title: 'AI & Tools', skills: [...GROUPED_SKILLS.ai, ...GROUPED_SKILLS.tools], icon: '✨' },
    { title: 'Soft Skills', skills: GROUPED_SKILLS.soft, icon: '🤝' }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-1/3 space-y-8">
          <h2 className="text-4xl md:text-6xl font-display font-black text-white">Mastered <br /><span className="text-gradient">Tools</span></h2>
          <p className="text-slate-400 leading-relaxed text-lg font-medium">
            Bridging the gap between complex logic and user-friendly applications with a versatile technical stack.
          </p>
          <div className="grid grid-cols-2 gap-4">
             <div className="glass-card p-4 rounded-2xl border-white/5">
                <p className="text-3xl font-black text-white">4+</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Languages</p>
             </div>
             <div className="glass-card p-4 rounded-2xl border-white/5">
                <p className="text-3xl font-black text-white">10+</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Tech Stack</p>
             </div>
          </div>
        </div>
        
        <div className="lg:w-2/3 grid md:grid-cols-2 gap-10">
          {skillGroups.map((group, index) => (
            <SkillCard key={index} group={group} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const SkillCard = ({ group, index }: { group: any, index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
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
    <div ref={cardRef} className="glass-card p-10 rounded-[2.5rem] border-white/5 glow-hover transition-all">
      <h3 className="text-2xl font-black mb-10 flex items-center gap-4 text-white">
        <span className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl ${index % 2 === 0 ? 'bg-indigo-500/20 text-indigo-400' : 'bg-fuchsia-500/20 text-fuchsia-400'}`}>
          {group.icon}
        </span>
        {group.title}
      </h3>
      <div className="space-y-8">
        {group.skills.map((skill: any, i: number) => (
          <div key={i} className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-slate-200">{skill.name}</span>
              <span className="text-[10px] font-black text-slate-500 uppercase">{skill.value >= 90 ? 'Pro' : 'Exp'}</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all duration-1000 ease-out ${index % 2 === 0 ? 'bg-indigo-500' : 'bg-fuchsia-500'}`} 
                style={{ 
                  width: isVisible ? `${skill.value}%` : '0%',
                  transitionDelay: `${i * 100}ms` 
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;