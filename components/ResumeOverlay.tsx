
import React from 'react';
import { USER_INFO, EXPERIENCE, ACADEMIC_JOURNEY, GROUPED_SKILLS, CERTIFICATIONS } from '../constants';

interface ResumeOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeOverlay: React.FC<ResumeOverlayProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleGitHubAction = () => {
    window.open(USER_INFO.resumeUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-xl animate-in fade-in duration-300" 
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl h-full bg-white text-slate-900 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300">
        
        {/* Header/Actions */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-3">
            <span className="material-icons-round text-blue-600">description</span>
            <h2 className="font-black text-sm uppercase tracking-widest text-slate-500">Digital Resume Viewer</h2>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={handleGitHubAction}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700 transition-colors"
            >
              <span className="material-icons-round text-sm">open_in_new</span>
              VIEW ON GITHUB
            </button>
            <button 
              onClick={onClose}
              className="w-10 h-10 rounded-xl bg-slate-200 flex items-center justify-center hover:bg-red-100 hover:text-red-600 transition-all"
            >
              <span className="material-icons-round">close</span>
            </button>
          </div>
        </div>

        {/* Scrollable Document Area */}
        <div className="flex-grow overflow-y-auto p-8 md:p-16 bg-slate-100">
          <div className="max-w-3xl mx-auto bg-white shadow-xl p-8 md:p-12 min-h-[1100px] border border-slate-200">
            
            {/* Resume Header */}
            <div className="border-b-4 border-slate-900 pb-8 mb-8">
              <h1 className="text-4xl font-black tracking-tighter mb-2">{USER_INFO.name}</h1>
              <p className="text-blue-600 font-bold mb-4">{USER_INFO.role}</p>
              <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm font-medium text-slate-500">
                <span className="flex items-center gap-2">
                  <span className="material-icons-round text-xs">email</span> {USER_INFO.email}
                </span>
                <span className="flex items-center gap-2">
                  <span className="material-icons-round text-xs">phone</span> {USER_INFO.phone}
                </span>
                <span className="flex items-center gap-2">
                  <span className="material-icons-round text-xs">place</span> Coimbatore, India
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Main Content (Left) */}
              <div className="md:col-span-2 space-y-10">
                
                <section>
                  <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 mb-4 flex items-center gap-2">
                    <span className="w-6 h-px bg-slate-200"></span> Profile Summary
                  </h3>
                  <p className="text-slate-700 leading-relaxed italic">"{USER_INFO.profile}"</p>
                </section>

                <section>
                  <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">
                    <span className="w-6 h-px bg-slate-200"></span> Experience
                  </h3>
                  <div className="space-y-8">
                    {EXPERIENCE.map((exp, i) => (
                      <div key={i}>
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-black text-lg">{exp.title}</h4>
                          <span className="text-xs font-bold text-slate-400">{exp.period}</span>
                        </div>
                        <p className="text-blue-600 font-bold text-sm mb-3">{exp.company}</p>
                        <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
                          {exp.points.map((p, pi) => <li key={pi}>{p}</li>)}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">
                    <span className="w-6 h-px bg-slate-200"></span> Education
                  </h3>
                  <div className="space-y-6">
                    {ACADEMIC_JOURNEY.map((edu, i) => (
                      <div key={i}>
                        <div className="flex justify-between items-start">
                          <h4 className="font-bold">{edu.institution}</h4>
                          <span className="text-xs font-bold text-slate-400">{edu.period}</span>
                        </div>
                        <p className="text-sm text-slate-600">{edu.degree} — <span className="text-blue-600 font-bold">{edu.grade}</span></p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Sidebar Content (Right) */}
              <div className="space-y-10">
                
                <section>
                  <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">
                    <span className="w-6 h-px bg-slate-200"></span> Technical
                  </h3>
                  <div className="space-y-4">
                    {Object.entries(GROUPED_SKILLS).map(([key, skills]) => (
                      <div key={key}>
                        <p className="text-[10px] font-black text-slate-400 uppercase mb-2">{key}</p>
                        <div className="flex flex-wrap gap-2">
                          {(skills as any[]).map((s, si) => (
                            <span key={si} className="px-2 py-1 bg-slate-100 text-[10px] font-bold rounded">
                              {s.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">
                    <span className="w-6 h-px bg-slate-200"></span> Certifications
                  </h3>
                  <div className="space-y-4">
                    {CERTIFICATIONS.map((cert, i) => (
                      <div key={i} className="text-xs">
                        <p className="font-bold text-slate-800">{cert.title}</p>
                        <p className="text-slate-400">{cert.issuer}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">
                    <span className="w-6 h-px bg-slate-200"></span> Links
                  </h3>
                  <div className="space-y-3 text-xs font-bold">
                    <p className="text-slate-500">LinkedIn: <span className="text-blue-600">/in/{USER_INFO.linkedin}</span></p>
                    <p className="text-slate-500">GitHub: <span className="text-blue-600">/{USER_INFO.github}</span></p>
                    <p className="text-slate-500">LeetCode: <span className="text-blue-600">/{USER_INFO.leetcode}</span></p>
                  </div>
                </section>
              </div>
            </div>

            {/* Footer Sign-off */}
            <div className="mt-16 pt-8 border-t border-slate-100 text-center">
              <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Digitally Generated Portfolio Content • 2025</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeOverlay;
