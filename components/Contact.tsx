
import React from 'react';
import { USER_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-24 items-center">
        <div className="lg:w-1/2 space-y-12">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-display font-black text-white leading-tight">
              Let's build <br /><span className="text-gradient">Together</span>
            </h2>
            <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-md">
              Available for high-impact internships and creative collaborations.
            </p>
          </div>

          <div className="grid gap-8">
            <a href={`mailto:${USER_INFO.email}`} className="group flex items-center gap-6 p-6 glass-card rounded-3xl border-white/5 hover:border-indigo-500/50 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">Email</p>
                <p className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">{USER_INFO.email}</p>
              </div>
            </a>

            <a href={`tel:${USER_INFO.phone}`} className="group flex items-center gap-6 p-6 glass-card rounded-3xl border-white/5 hover:border-fuchsia-500/50 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-400 group-hover:bg-fuchsia-500 group-hover:text-white transition-all">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">Call</p>
                <p className="text-lg font-bold text-white group-hover:text-fuchsia-400 transition-colors">{USER_INFO.phone}</p>
              </div>
            </a>
          </div>
        </div>

        <div className="lg:w-1/2 w-full">
          <form className="glass-card p-12 rounded-[3rem] border-white/10 space-y-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:ring-2 focus:ring-indigo-500 focus:bg-indigo-500/5 transition-all outline-none placeholder:text-slate-600" placeholder="John Doe" />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:ring-2 focus:ring-indigo-500 focus:bg-indigo-500/5 transition-all outline-none placeholder:text-slate-600" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Project Details</label>
              <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:ring-2 focus:ring-indigo-500 focus:bg-indigo-500/5 transition-all outline-none placeholder:text-slate-600 resize-none" placeholder="Tell me about your project..."></textarea>
            </div>
            <button className="w-full py-5 bg-gradient-vivid text-white font-black rounded-2xl hover:shadow-[0_0_40px_rgba(99,102,241,0.5)] transition-all transform active:scale-[0.98]">
              Initiate Contact
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
