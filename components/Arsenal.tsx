import React, { useState, useEffect, useRef } from 'react';
import { GROUPED_SKILLS } from '../constants';

const Arsenal: React.FC = () => {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-24">
        <h2 className="text-6xl md:text-8xl italic-black mb-6 uppercase tracking-tight">Arsenal <span className="text-indigo-500">& Expertise</span></h2>
        <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">High-proficiency skills validated through project deployment and competitive benchmarks.</p>
      </div>

      <div className="space-y-24">
        <SkillGroup title="Frontend" skills={GROUPED_SKILLS.frontend} />
        <SkillGroup title="Backend" skills={GROUPED_SKILLS.backend} />
        <div className="grid lg:grid-cols-2 gap-24">
          <SkillGroup title="AI Systems" skills={GROUPED_SKILLS.ai} />
          <SkillGroup title="Tools" skills={GROUPED_SKILLS.tools} />
        </div>
        <SkillGroup title="Soft Skills" skills={GROUPED_SKILLS.soft} />
      </div>
    </section>
  );
};

const SkillGroup = ({ title, skills }: { title: string, skills: any[] }) => {
  const [isVisible, setIsVisible] = useState(false);
  const groupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (groupRef.current) {
      observer.observe(groupRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={groupRef} className="space-y-10">
      <div className="flex items-center gap-5">
        <div className="px-5 py-2 border border-white/10 rounded-xl text-[11px] font-black uppercase tracking-[0.3em] bg-white/5">{title}</div>
        <div className="h-px flex-grow bg-white/5"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
        {skills.map((skill, i) => (
          <div key={i} className="group">
            <div className="flex justify-between items-center mb-3">
              <span className="text-[11px] font-black tracking-widest text-slate-400 group-hover:text-white transition-colors">{skill.name}</span>
              <span className={`text-[11px] font-black text-indigo-500 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                {skill.value}%
              </span>
            </div>
            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
              <div 
                className="h-full bg-indigo-500 rounded-full transition-all duration-1000 ease-out" 
                style={{ width: isVisible ? `${skill.value}%` : '0%' }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Arsenal;