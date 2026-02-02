import React, { useState } from 'react';
import { USER_INFO } from '../constants';

const Connect: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, email, subject, message } = formData;
    
    // Constructing the mailto link
    const mailtoLink = `mailto:${USER_INFO.email}?subject=${encodeURIComponent(subject || 'Inquiry from Portfolio')}&body=${encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n\n` +
      `Message:\n${message}`
    )}`;

    // Trigger the email client
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-32 px-6 bg-black border-t border-white/5 scroll-mt-20">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
        <div className="lg:w-2/5 space-y-12">
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-5xl md:text-7xl font-black leading-none uppercase italic">Connect <br /><span className="text-indigo-500">Manoj.</span></h2>
            <p className="text-slate-400 text-lg font-medium leading-relaxed">
              I'm ready to contribute to high-impact projects. Let's start a conversation about how I can bring value to your team.
            </p>
          </div>

          <div className="grid gap-6">
            <ContactLink icon="mail" label="EMAIL ME" value={USER_INFO.email} href={`mailto:${USER_INFO.email}`} />
            <ContactLink icon="link" label="LINKEDIN" value={USER_INFO.linkedin} href={`https://linkedin.com/in/${USER_INFO.linkedin}`} />
            <ContactLink icon="code" label="GITHUB" value={USER_INFO.github} href={`https://github.com/${USER_INFO.github}`} />
          </div>
        </div>

        <div className="lg:w-3/5">
          <form onSubmit={handleSubmit} className="bg-[#05050a] p-10 md:p-14 rounded-[3rem] border border-white/5 space-y-8 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-white/10 rounded-2xl p-6 text-white focus:ring-1 focus:ring-indigo-600 outline-none placeholder:text-slate-800 transition-all" 
                  placeholder="John Doe" 
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-white/10 rounded-2xl p-6 text-white focus:ring-1 focus:ring-indigo-600 outline-none placeholder:text-slate-800 transition-all" 
                  placeholder="john@example.com" 
                />
              </div>
            </div>
            
            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Subject</label>
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-black border border-white/10 rounded-2xl p-6 text-white focus:ring-1 focus:ring-indigo-600 outline-none placeholder:text-slate-800 transition-all" 
                placeholder="Inquiry / Collaboration" 
              />
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6} 
                className="w-full bg-black border border-white/10 rounded-2xl p-6 text-white focus:ring-1 focus:ring-indigo-600 outline-none placeholder:text-slate-800 resize-none transition-all" 
                placeholder="How can I help you today?"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-5 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-500 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-xs active:scale-95"
            >
              Send Message <span className="material-icons-round">east</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const ContactLink = ({ icon, label, value, href }: any) => (
  <a href={href} target="_blank" rel="noopener" className="flex items-center gap-6 group p-4 rounded-3xl hover:bg-white/5 transition-all">
    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-indigo-600/20 transition-colors">
      <span className="material-icons-round text-slate-500 group-hover:text-indigo-500">{icon}</span>
    </div>
    <div>
      <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">{label}</p>
      <p className="text-base font-bold text-white transition-colors">{value}</p>
    </div>
  </a>
);

export default Connect;