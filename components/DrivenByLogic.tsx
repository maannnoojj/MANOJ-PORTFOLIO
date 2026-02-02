
import React from 'react';
import { USER_INFO } from '../constants';

const DrivenByLogic: React.FC = () => {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="lg:w-3/5 space-y-10">
          <div className="flex items-center gap-5">
            <div className="w-16 h-px bg-blue-600"></div>
            <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em]">Engineering Profile</p>
          </div>
          <h2 className="text-5xl md:text-8xl font-black leading-none tracking-tighter">
            Driven by Logic, <br />
            <span className="text-blue-500">Perfected by Design.</span>
          </h2>
          <div className="space-y-6 text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-3xl">
            <p>
              Currently pursuing <span className="text-white font-bold">B.E. Computer Science Engineering</span> at <span className="text-white font-bold">SNS College of Engineering</span>, my journey in technology is fueled by a mission to build systems that are both revolutionary and human-centric.
            </p>
            <p>
              I specialize in bridging the gap between <span className="text-blue-500 font-bold">Full-Stack Development</span> and <span className="text-blue-500 font-bold">Applied AI</span>. My approach combines rigorous engineering discipline with an eye for exceptional user experience.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 pt-10">
            <div>
              <p className="text-5xl italic-black mb-1">95%</p>
              <p className="text-[10px] font-black text-slate-500 tracking-widest uppercase">Logic Accuracy</p>
            </div>
            <div>
              <p className="text-5xl italic-black mb-1">MERN</p>
              <p className="text-[10px] font-black text-slate-500 tracking-widest uppercase">Core Stack</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-5xl italic-black mb-1">24/7</p>
              <p className="text-[10px] font-black text-slate-500 tracking-widest uppercase">System Focus</p>
            </div>
          </div>
        </div>

        <div className="lg:w-2/5">
          <div className="glass-dark p-12 rounded-[3.5rem] border border-white/5 space-y-12">
            <div>
              <p className="text-[11px] font-black text-blue-500 uppercase tracking-[0.2em] mb-8">Core Competencies</p>
              <ul className="space-y-6">
                {['Full-Stack Architecture', 'Generative AI Integration', 'Real-time IoT Monitoring'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                    <span className="font-bold text-xl text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-10 border-t border-white/5">
              <p className="text-slate-400 italic text-lg leading-relaxed mb-8">
                "My engineering philosophy is rooted in the belief that great software isn't just about code—it's about creating value through efficiency and accessibility."
              </p>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full border-2 border-white/10 p-0.5 overflow-hidden">
                   <img src={USER_INFO.profileImage} className="w-full h-full object-cover rounded-full" alt={USER_INFO.name} />
                </div>
                <div>
                  <p className="font-black text-white text-base">{USER_INFO.name}</p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Systems Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrivenByLogic;
