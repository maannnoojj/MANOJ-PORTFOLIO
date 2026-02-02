import React, { useEffect, useState } from 'react';

interface Stage {
  id: string;
  label: string;
  description: string;
}

const STAGES: Stage[] = [
  { id: 'home', label: 'Entrance', description: 'The Beginning' },
  { id: 'about', label: 'Identity', description: 'My Story' },
  { id: 'skills', label: 'Arsenal', description: 'The Toolkit' },
  { id: 'projects', label: 'Creations', description: 'The Lab' },
  { id: 'resume', label: 'Resume', description: 'Formal Document' },
  { id: 'experience', label: 'Journey', description: 'Work History' },
  { id: 'education', label: 'Academics', description: 'Formal Learning' },
  { id: 'certifications', label: 'Credentials', description: 'Verified' },
  { id: 'contact', label: 'Connection', description: 'Get In Touch' }
];

const ScrollRoadmap: React.FC<{ activeSection: string }> = ({ activeSection }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: id === 'home' ? 0 : offsetPosition,
        behavior: 'smooth'
      });
      
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <div className="fixed right-4 lg:right-10 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center">
      <div className="absolute top-0 bottom-0 w-px bg-white/5 left-1/2 -translate-x-1/2"></div>
      
      <div 
        className="absolute top-0 w-px bg-gradient-to-b from-indigo-500 via-blue-500 to-emerald-500 left-1/2 -translate-x-1/2 transition-all duration-150 ease-linear origin-top"
        style={{ height: `${scrollProgress}%` }}
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_20px_rgba(99,102,241,0.8)]"></div>
      </div>

      <div className="flex flex-col space-y-12 relative py-4">
        {STAGES.map((stage) => {
          const isActive = activeSection === stage.id;
          return (
            <a 
              key={stage.id}
              href={`#${stage.id}`}
              onClick={(e) => handleClick(e, stage.id)}
              className="relative flex items-center justify-center group/item outline-none"
            >
              <div className={`absolute right-12 whitespace-nowrap transition-all duration-500 transform ${
                isActive 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-4 pointer-events-none group-hover/item:opacity-100 group-hover/item:translate-x-0'
              }`}>
                <div className="flex flex-col items-end pointer-events-none">
                  <span className={`text-[9px] uppercase tracking-[0.3em] font-black ${isActive ? 'text-indigo-400' : 'text-slate-500'}`}>
                    {stage.label}
                  </span>
                  <span className={`text-[11px] font-bold ${isActive ? 'text-white' : 'text-slate-500'}`}>
                    {stage.description}
                  </span>
                </div>
              </div>

              <div className="relative p-2 cursor-pointer">
                <div className={`relative z-10 w-2.5 h-2.5 rounded-full border-2 transition-all duration-500 ${
                  isActive 
                    ? 'bg-indigo-500 border-indigo-400 scale-125' 
                    : 'bg-slate-900 border-white/20 group-hover/item:border-white/40'
                }`}>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollRoadmap;