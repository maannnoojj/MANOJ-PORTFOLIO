import React from 'react';
import { USER_INFO } from '../constants';

interface HeroProps {
  onViewResume?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onViewResume }) => {
  const handleDownload = () => {
    window.open(USER_INFO.resumeUrl, '_blank');
  };

  const handleScrollToWork = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="pt-40 lg:pt-52 pb-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="flex-1 text-left z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-950/20 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-10">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            AVAILABLE FOR OPPORTUNITIES
          </div>

          {/* Large Name Display */}
          <h1 className="text-[70px] md:text-[110px] font-black leading-[0.9] tracking-tighter mb-10">
            <span className="text-white block">I'm</span>
            <span className="text-indigo-500 uppercase">MANOJ<br />M S</span>
          </h1>

          {/* Role with Icon */}
          <div className="flex items-center gap-4 text-slate-300 mb-10">
            <span className="text-indigo-500 text-xl font-bold flex items-center justify-center">&lt; &gt;</span>
            <p className="text-xl md:text-2xl font-medium">{USER_INFO.role}</p>
          </div>

          {/* Bio with Side border */}
          <div className="max-w-xl border-l-2 border-slate-800 pl-6 mb-12">
            <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed italic">
              {USER_INFO.profile}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-5">
            <button 
              onClick={handleScrollToWork}
              className="bg-gradient-to-r from-indigo-400 to-blue-600 hover:from-indigo-500 hover:to-blue-700 text-white px-10 py-5 rounded-2xl flex items-center gap-3 font-black transition-all shadow-[0_10px_30px_rgba(99,102,241,0.3)] active:scale-95 group"
            >
              View My Work <span className="material-icons-round transition-transform group-hover:translate-x-1">arrow_forward</span>
            </button>
            <button 
              onClick={handleDownload}
              className="px-10 py-5 bg-[#0a0a0a] border border-white/10 rounded-2xl flex items-center gap-3 font-black text-white hover:bg-white/5 transition-all active:scale-95"
            >
              <span className="material-icons-round text-xl">vertical_align_bottom</span> Download CV
            </button>
          </div>
        </div>

        {/* Right Side: Circular Image */}
        <div className="flex-shrink-0 relative">
          <div className="absolute -inset-10 bg-indigo-500/10 rounded-full blur-[100px] animate-pulse"></div>
          
          <div className="relative w-64 h-64 lg:w-[380px] lg:h-[380px] rounded-full p-2 border border-white/10 overflow-hidden group">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#111]">
              <img 
                src={USER_INFO.profileImage} 
                alt={USER_INFO.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
            </div>
          </div>
        </div>

      </div>

      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-900/10 to-transparent -z-10"></div>
    </section>
  );
};

export default Hero;