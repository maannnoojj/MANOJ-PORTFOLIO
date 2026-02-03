import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';

// --- TYPES ---
interface Project {
  title: string;
  description: string;
  category: string;
  tags: string[];
}

interface DetailedProject extends Project {
  id: string;
  technicalImpact: string;
  icon: string;
  link?: string;
  tech: string[];
}

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  grade?: string;
}

interface Certificate {
  title: string;
  issuer?: string;
}

// --- CONSTANTS ---
const USER_INFO = {
  name: "MANOJ M S",
  role: "B.E. Computer Science Engineering & Web Developer",
  profile: "A dedicated and disciplined Information Engineering student with a strong sense of responsibility, aiming to build a rewarding career in Information Technology and problem-solving.",
  email: "iammanojms2006@gmail.com",
  phone: "9241357135",
  linkedin: "manojsrinivasanms",
  github: "maannnoojj",
  leetcode: "MANOJ_1112",
  profileImage: "https://i.ibb.co/vCbWYmtg/Whats-App-Image-2026-01-30-at-7-28-39-PM.jpg",
  resumeUrl: "https://github.com/maannnoojj/resume-", 
  stats: [
    { label: "PROJECTS", value: "4+" },
    { label: "INTERNSHIPS", value: "2" },
    { label: "AI CERTS", value: "2" }
  ]
};

const DETAILED_PROJECTS: DetailedProject[] = [
  {
    id: "handwritten-notes",
    title: "Handwritten to Smart Notes",
    description: "A mini project focused on digitizing handwritten content into structured digital notes using OCR technology.",
    category: "OCR",
    tags: ["PYTHON", "OCR", "NLP"],
    tech: ["PYTHON", "TESSERACT", "NLP"],
    technicalImpact: "Achieved 95% OCR accuracy on varied handwriting styles.",
    icon: "notes",
    link: 'https://benevolent-axolotl-efa12d.netlify.app/'
  },
  {
    id: "vehicle-mgmt",
    title: "Vehicle Management System",
    description: "A comprehensive system using sensor connections for real-time monitoring and management of vehicle data.",
    category: "IOT",
    tags: ["FLUTTERFLOW"],
    tech: ["IOT", "FLUTTERFLOW", "FIREBASE"],
    technicalImpact: "Optimized sensor data transmission efficiency by 40%.",
    icon: "cable",
    link: 'https://github.com/maannnoojj'
  },
  {
    id: "ai-buddy",
    title: "AI Buddy Time Management",
    description: "An intelligent time-tracking and scheduling assistant designed to optimize student productivity.",
    category: "AI",
    tags: ["REACT", "GEMINI AI", "NODE.JS","FLUTTERFLOW"],
    tech: ["REACT", "GEMINI AI", "NODE.JS"],
    technicalImpact: "Integrated Gemini API for adaptive scheduling logic.",
    icon: "mic",
    link: 'https://github.com/maannnoojj/JARVIS.git'
  },
  {
    id: "farmer-assistant",
    title: "Farmer Query Assistant",
    description: "An AI-driven bot helping farmers identify crop diseases and providing agricultural advice via image processing.",
    category: "AI",
    tags: ["COMPUTER VISION", "ML", "AZURE AI"],
    tech: ["AZURE AI", "ML", "COMPUTER VISION"],
    technicalImpact: "Supported multi-modal image analysis for crop disease detection.",
    icon: "wb_sunny",
    link: 'https://github.com/maannnoojj'
  }
];

const EXPERIENCE = [
  {
    title: "Full-Stack Web Development Intern",
    company: "Prodigy Infotech",
    period: "Winter 2025",
    points: [
      "Engineered responsive web architectures using the MERN stack.",
      "Optimized database queries in MongoDB resulting in a 30% improvement in API response times."
    ],
    tags: ["Built a custom CRM dashboard", "Implemented OAuth 2.0 security"]
  },
  {
    title: "Web Development Intern",
    company: "InternPe",
    period: "Summer 2025",
    points: [
      "Developed a series of fundamental web projects to sharpen front-end engineering skills.",
      "Implemented interactive user interfaces and utility applications using modern web standards."
    ],
    tags: ["Calculator Project", "Interactive To-Do List", "Personal Landing Page"]
  }
];

const GROUPED_SKILLS = {
  frontend: [
    { name: "REACT", value: 85 },
    { name: "HTML", value: 95 },
    { name: "CSS", value: 90 },
    { name: "JS", value: 88 },
    { name: "TYPESCRIPT", value: 80 }
  ],
  backend: [
    { name: "C PROGRAMMING", value: 92 },
    { name: "PYTHON PROGRAMMING", value: 88 },
    { name: "JAVA PROGRAMMING", value: 85 },
    { name: "NODE.JS", value: 78 }
  ],
  ai: [
    { name: "CHATGPT", value: 95 }
  ],
  tools: [
    { name: "MICROSOFT OFFICE", value: 98 },
    { name: "TEXT PROCESSOR", value: 85 },
    { name: "MS POWERPOINT", value: 95 },
    { name: "MS WORD", value: 95 }
  ],
  soft: [
    { name: "TEAM WORK", value: 90 },
    { name: "TIME MANAGEMENT", value: 92 },
    { name: "EFFECTIVE COMMUNICATION", value: 88 },
    { name: "CRITICAL THINKING", value: 85 }
  ]
};

const ACADEMIC_JOURNEY: EducationItem[] = [
  {
    institution: "SNS College of Engineering",
    degree: "B.E. Computer Science and Engineering",
    period: "2024 - 2028",
    grade: "CGPA: 80%"
  },
  {
    institution: "Jawahar Navodaya Vidyalaya, Mysore",
    degree: "Higher Secondary Education (HSC)",
    period: "2023 - 2024",
    grade: "79%"
  },
  {
    institution: "Jawahar Navodaya Vidyalaya, Mysore",
    degree: "Secondary School Education (SSLC)",
    period: "2021 - 2022",
    grade: "81%"
  }
];

const CERTIFICATIONS: Certificate[] = [
  { title: "Java Certificate Holder", issuer: "Oracle/Various • 2024" },
  { title: "C Programming Certification", issuer: "Various • 2024" },
  { title: "20+ Courses Completed", issuer: "PrepInsta • 2024" },
  { title: "Hackathon Certificate CICADA'25", issuer: "College Event • 2025" },
  { title: "Code O Clock", issuer: "Competitive Programming • 2024" }
];

// --- COMPONENTS ---

const Navbar: React.FC<{ activeSection: string }> = ({ activeSection }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Arsenal' },
    { id: 'projects', label: 'Lab' },
    { id: 'resume', label: 'Resume' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: id === 'home' ? 0 : offsetPosition, behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#0a0a0c]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tighter text-white cursor-pointer select-none" onClick={(e) => handleNavClick(e, 'home')}>
          MANOJ<span className="text-indigo-500">.</span>MS
        </div>
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
          {navItems.map(item => (
            <a key={item.id} href={`#${item.id}`} onClick={(e) => handleNavClick(e, item.id)} className={`text-[11px] lg:text-xs font-black uppercase tracking-widest transition-all duration-300 hover:text-white relative py-2 ${activeSection === item.id ? 'text-white' : 'text-slate-500'}`}>
              {item.label}
              {activeSection === item.id && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 rounded-full"></span>}
            </a>
          ))}
        </div>
        <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] lg:text-xs font-black uppercase tracking-widest rounded-full transition-all active:scale-95 shadow-lg shadow-indigo-600/20">Hire Me</a>
      </div>
    </nav>
  );
};

const ScrollRoadmap: React.FC<{ activeSection: string }> = ({ activeSection }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const STAGES = [
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

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: id === 'home' ? 0 : offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-4 lg:right-10 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center">
      <div className="absolute top-0 bottom-0 w-px bg-white/5 left-1/2 -translate-x-1/2"></div>
      <div className="absolute top-0 w-px bg-gradient-to-b from-indigo-500 via-blue-500 to-emerald-500 left-1/2 -translate-x-1/2 transition-all duration-150 ease-linear origin-top" style={{ height: `${scrollProgress}%` }}>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_20px_rgba(99,102,241,0.8)]"></div>
      </div>
      <div className="flex flex-col space-y-12 relative py-4">
        {STAGES.map((stage) => {
          const isActive = activeSection === stage.id;
          return (
            <a key={stage.id} href={`#${stage.id}`} onClick={(e) => handleClick(e, stage.id)} className="relative flex items-center justify-center group/item outline-none">
              <div className={`absolute right-12 whitespace-nowrap transition-all duration-500 transform ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none group-hover/item:opacity-100 group-hover/item:translate-x-0'}`}>
                <div className="flex flex-col items-end pointer-events-none">
                  <span className={`text-[9px] uppercase tracking-[0.3em] font-black ${isActive ? 'text-indigo-400' : 'text-slate-500'}`}>{stage.label}</span>
                  <span className={`text-[11px] font-bold ${isActive ? 'text-white' : 'text-slate-500'}`}>{stage.description}</span>
                </div>
              </div>
              <div className="relative p-2 cursor-pointer">
                <div className={`relative z-10 w-2.5 h-2.5 rounded-full border-2 transition-all duration-500 ${isActive ? 'bg-indigo-500 border-indigo-400 scale-125' : 'bg-slate-900 border-white/20 group-hover/item:border-white/40'}`}></div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

const Hero: React.FC<{ onViewResume: () => void }> = ({ onViewResume }) => {
  const handleDownload = () => window.open(USER_INFO.resumeUrl, '_blank');
  const handleScrollToWork = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-40 lg:pt-52 pb-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-left z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-950/20 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-10">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>AVAILABLE FOR OPPORTUNITIES
          </div>
          <h1 className="text-[70px] md:text-[110px] font-black leading-[0.9] tracking-tighter mb-10">
            <span className="text-white block">I'm</span>
            <span className="text-indigo-500 uppercase">MANOJ<br />M S</span>
          </h1>
          <div className="flex items-center gap-4 text-slate-300 mb-10">
            <span className="text-indigo-500 text-xl font-bold flex items-center justify-center">&lt; &gt;</span>
            <p className="text-xl md:text-2xl font-medium">{USER_INFO.role}</p>
          </div>
          <div className="max-w-xl border-l-2 border-slate-800 pl-6 mb-12">
            <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed italic">{USER_INFO.profile}</p>
          </div>
          <div className="flex flex-wrap gap-5">
            <button onClick={handleScrollToWork} className="bg-gradient-to-r from-indigo-400 to-blue-600 hover:from-indigo-500 hover:to-blue-700 text-white px-10 py-5 rounded-2xl flex items-center gap-3 font-black transition-all shadow-[0_10px_30px_rgba(99,102,241,0.3)] active:scale-95 group">
              View My Work <span className="material-icons-round transition-transform group-hover:translate-x-1">arrow_forward</span>
            </button>
            <button onClick={handleDownload} className="px-10 py-5 bg-[#0a0a0a] border border-white/10 rounded-2xl flex items-center gap-3 font-black text-white hover:bg-white/5 transition-all active:scale-95">
              <span className="material-icons-round text-xl">vertical_align_bottom</span> Download CV
            </button>
          </div>
        </div>
        <div className="flex-shrink-0 relative">
          <div className="absolute -inset-10 bg-indigo-500/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="relative w-64 h-64 lg:w-[380px] lg:h-[380px] rounded-full p-2 border border-white/10 overflow-hidden group">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#111]">
              <img src={USER_INFO.profileImage} alt={USER_INFO.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-900/10 to-transparent -z-10"></div>
    </section>
  );
};

const DrivenByLogic: React.FC = () => (
  <section className="py-32 px-6 max-w-7xl mx-auto">
    <div className="flex flex-col lg:flex-row gap-20">
      <div className="lg:w-3/5 space-y-10">
        <div className="flex items-center gap-5"><div className="w-16 h-px bg-blue-600"></div><p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em]">Engineering Profile</p></div>
        <h2 className="text-5xl md:text-8xl font-black leading-none tracking-tighter">Driven by Logic, <br /><span className="text-blue-500">Perfected by Design.</span></h2>
        <div className="space-y-6 text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-3xl">
          <p>Currently pursuing <span className="text-white font-bold">B.E. Computer Science Engineering</span> at <span className="text-white font-bold">SNS College of Engineering</span>, my journey in technology is fueled by a mission to build systems that are both revolutionary and human-centric.</p>
          <p>I specialize in bridging the gap between <span className="text-blue-500 font-bold">Full-Stack Development</span> and <span className="text-blue-500 font-bold">Applied AI</span>. My approach combines rigorous engineering discipline with an eye for exceptional user experience.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 pt-10">
          <div><p className="text-5xl italic-black mb-1">95%</p><p className="text-[10px] font-black text-slate-500 tracking-widest uppercase">Logic Accuracy</p></div>
          <div><p className="text-5xl italic-black mb-1">MERN</p><p className="text-[10px] font-black text-slate-500 tracking-widest uppercase">Core Stack</p></div>
          <div className="col-span-2 md:col-span-1"><p className="text-5xl italic-black mb-1">24/7</p><p className="text-[10px] font-black text-slate-500 tracking-widest uppercase">System Focus</p></div>
        </div>
      </div>
      <div className="lg:w-2/5">
        <div className="glass-dark p-12 rounded-[3.5rem] border border-white/5 space-y-12">
          <div>
            <p className="text-[11px] font-black text-blue-500 uppercase tracking-[0.2em] mb-8">Core Competencies</p>
            <ul className="space-y-6">{['Full-Stack Architecture', 'Generative AI Integration', 'Real-time IoT Monitoring'].map((item, i) => (
              <li key={i} className="flex items-center gap-4"><span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span><span className="font-bold text-xl text-white/90">{item}</span></li>
            ))}</ul>
          </div>
          <div className="pt-10 border-t border-white/5">
            <p className="text-slate-400 italic text-lg leading-relaxed mb-8">"My engineering philosophy is rooted in the belief that great software isn't just about code—it's about creating value through efficiency and accessibility."</p>
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full border-2 border-white/10 p-0.5 overflow-hidden"><img src={USER_INFO.profileImage} className="w-full h-full object-cover rounded-full" alt={USER_INFO.name} /></div>
              <div><p className="font-black text-white text-base">{USER_INFO.name}</p><p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Systems Engineer</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SkillGroup = ({ title, skills }: { title: string, skills: any[] }) => {
  const [isVisible, setIsVisible] = useState(false);
  const groupRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } }, { threshold: 0.2 });
    if (groupRef.current) observer.observe(groupRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={groupRef} className="space-y-10">
      <div className="flex items-center gap-5"><div className="px-5 py-2 border border-white/10 rounded-xl text-[11px] font-black uppercase tracking-[0.3em] bg-white/5">{title}</div><div className="h-px flex-grow bg-white/5"></div></div>
      <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">{skills.map((skill, i) => (
        <div key={i} className="group">
          <div className="flex justify-between items-center mb-3">
            <span className="text-[11px] font-black tracking-widest text-slate-400 group-hover:text-white transition-colors">{skill.name}</span>
            <span className={`text-[11px] font-black text-indigo-500 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>{skill.value}%</span>
          </div>
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-indigo-500 rounded-full transition-all duration-1000 ease-out" style={{ width: isVisible ? `${skill.value}%` : '0%' }}></div></div>
        </div>
      ))}</div>
    </div>
  );
};

const Arsenal: React.FC = () => (
  <section className="py-32 px-6 max-w-6xl mx-auto">
    <div className="text-center mb-24"><h2 className="text-6xl md:text-8xl italic-black mb-6 uppercase tracking-tight">Arsenal <span className="text-indigo-500">& Expertise</span></h2><p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">High-proficiency skills validated through project deployment and competitive benchmarks.</p></div>
    <div className="space-y-24">
      <SkillGroup title="Frontend" skills={GROUPED_SKILLS.frontend} />
      <SkillGroup title="Backend" skills={GROUPED_SKILLS.backend} />
      <div className="grid lg:grid-cols-2 gap-24"><SkillGroup title="AI Systems" skills={GROUPED_SKILLS.ai} /><SkillGroup title="Tools" skills={GROUPED_SKILLS.tools} /></div>
      <SkillGroup title="Soft Skills" skills={GROUPED_SKILLS.soft} />
    </div>
  </section>
);

const ProjectCard: React.FC<{ project: DetailedProject }> = ({ project }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.1 });
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef} className={`group relative bg-[#0a0a0c] border border-white/5 rounded-[2rem] overflow-hidden hover:border-indigo-500/50 transition-all duration-500 flex flex-col h-full transform hover:-translate-y-3 hover:shadow-[0_40px_80px_-20px_rgba(99,102,241,0.2)] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
      <div className="aspect-[16/8] flex items-center justify-center relative bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent"></div>
        <div className={`relative z-10 p-5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 shadow-2xl ${isVisible ? 'animate-icon-float' : ''}`}>
          <span className="material-icons-round text-4xl text-indigo-400">{project.icon}</span>
        </div>
      </div>
      <div className="px-10 pb-10 flex flex-col flex-grow relative -mt-6">
        <div className="flex flex-wrap gap-2 mb-6">{project.tech.map(t => (<span key={t} className="px-3 py-1 bg-white/5 text-slate-400 text-[9px] font-black uppercase tracking-widest rounded-lg border border-white/5 group-hover:border-indigo-500/30 transition-colors">{t}</span>))}</div>
        <h3 className="text-2xl font-black text-white mb-4 group-hover:text-indigo-400 transition-colors tracking-tight">{project.title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-8">{project.description}</p>
        <div className="p-5 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 mb-8 backdrop-blur-sm"><h4 className="text-[9px] font-black text-indigo-400 uppercase tracking-widest mb-2">Technical Impact</h4><p className="text-slate-400 italic text-xs font-medium">{project.technicalImpact}</p></div>
        <div className="mt-auto pt-4 flex gap-3">
          <a href={project.link || "#"} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-indigo-600 text-white text-xs font-black uppercase tracking-widest hover:bg-indigo-500 transition-all active:scale-[0.98] shadow-lg shadow-indigo-600/10">Review Code</a>
          <button onClick={() => project.link && window.open(project.link, '_blank')} className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"><span className="material-icons-round text-xl">open_in_new</span></button>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => (
  <section id="projects" className="py-24 bg-[#08080a]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div className="text-left"><div className="text-indigo-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4">Engineering Laboratory</div><h2 className="text-5xl font-black text-white mb-4 italic tracking-tighter uppercase">THE LAB<span className="text-indigo-600">.</span></h2><p className="text-slate-400 max-w-xl text-lg font-medium">Deployment-ready modules built with React, Node.js, and Generative AI.</p></div>
        <a href={`https://github.com/${USER_INFO.github}`} target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-white/10 rounded-full text-white text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-all flex items-center">View GitHub Archive <span className="material-icons-round ml-3 text-sm">east</span></a>
      </div>
      <div className="grid md:grid-cols-2 gap-10">{DETAILED_PROJECTS.map((project) => (<ProjectCard key={project.id} project={project} />))}</div>
    </div>
  </section>
);

const ResumeCTA: React.FC<{ onViewResume: () => void }> = ({ onViewResume }) => {
  const handleAction = () => window.open(USER_INFO.resumeUrl, '_blank');
  return (
    <section id="resume" className="py-24 px-6 text-center max-w-3xl mx-auto border-t border-white/5 scroll-mt-24">
      <h2 className="text-5xl md:text-7xl font-black italic uppercase leading-none mb-2">Professional</h2>
      <h2 className="text-5xl md:text-7xl font-black italic uppercase leading-none text-blue-600 mb-8">Resume</h2>
      <p className="text-slate-400 text-lg mb-12">Review my professional qualifications and academic background directly or visit GitHub for the formal document.</p>
      <div className="space-y-4">
        <button onClick={onViewResume} className="w-full py-5 bg-white text-black font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-slate-200 transition-colors"><span className="material-icons-round">visibility</span> Interactive Portfolio Resume</button>
        <button onClick={handleAction} className="w-full py-5 bg-blue-600 text-white font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-blue-500 transition-colors"><span className="material-icons-round">open_in_new</span> View & Download on GitHub</button>
      </div>
    </section>
  );
};

const Experience: React.FC = () => (
  <section id="experience" className="py-24 px-6 max-w-4xl mx-auto scroll-mt-24">
    <h2 className="text-5xl md:text-7xl font-black text-center mb-20 uppercase italic">Professional <br /><span className="text-blue-500">Experience</span></h2>
    <div className="space-y-16">{EXPERIENCE.map((exp, i) => (
      <div key={i} className="flex gap-8 group">
        <div className="flex flex-col items-center"><div className="w-4 h-4 rounded-full bg-blue-600 shadow-[0_0_15px_rgba(79,70,229,0.5)]"></div><div className="w-px flex-grow bg-slate-800 mt-4 group-last:bg-transparent"></div></div>
        <div className="pb-12 space-y-6">
          <div><h3 className="text-3xl font-black mb-1">{exp.title}</h3><p className="text-blue-500 font-bold">{exp.company}</p><div className="inline-block mt-3 px-3 py-1 bg-white/5 rounded-full text-[10px] font-black text-slate-500 uppercase tracking-widest">{exp.period}</div></div>
          <ul className="space-y-4 text-slate-400">{exp.points.map((p, pi) => (<li key={pi} className="flex gap-2"><span className="text-blue-600">▹</span> {p}</li>))}</ul>
          <div className="flex flex-wrap gap-3">{exp.tags.map((tag, ti) => (<span key={ti} className="px-4 py-2 bg-slate-900 border border-white/5 rounded-xl text-xs font-bold text-slate-300">{tag}</span>))}</div>
        </div>
      </div>
    ))}</div>
  </section>
);

const AcademicJourney: React.FC = () => (
  <section id="education" className="py-24 px-6 bg-[#030303] scroll-mt-24">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-5xl md:text-7xl font-black text-center mb-20 uppercase italic">Academic <span className="text-blue-500">Journey</span></h2>
      <div className="space-y-12">{ACADEMIC_JOURNEY.map((edu, i) => (
        <div key={i} className="flex gap-8">
          <div className="flex flex-col items-center"><div className="w-4 h-4 rounded-full border-2 border-blue-600"></div><div className="w-px flex-grow bg-slate-800 mt-4 last:bg-transparent"></div></div>
          <div className="flex-grow glass-dark p-8 md:p-12 rounded-[2.5rem] border border-white/5 space-y-6 transition-all hover:border-blue-500/30">
            <h3 className="text-2xl md:text-3xl font-black leading-tight">{edu.institution}</h3>
            <div className="space-y-4"><p className="text-blue-500 flex items-center gap-2"><span className="material-icons-round text-sm">school</span><span className="font-bold">{edu.degree}</span></p><p className="text-slate-400 font-bold">{edu.period}</p></div>
            <div className="inline-block px-4 py-2 bg-blue-900/20 border border-blue-500/20 rounded-xl"><span className="text-xs font-black text-slate-400 uppercase tracking-widest mr-4">Score:</span><span className="text-green-500 font-bold">{edu.grade}</span></div>
          </div>
        </div>
      ))}</div>
    </div>
  </section>
);

const Certifications: React.FC = () => (
  <section id="certifications" className="py-24 px-6 max-w-4xl mx-auto scroll-mt-24">
    <div className="text-center mb-20 space-y-4"><h2 className="text-5xl md:text-7xl font-black uppercase italic">Certifications</h2><p className="text-slate-400">Validated skills from industry leaders.</p></div>
    <div className="space-y-4">{CERTIFICATIONS.map((cert, i) => (
      <div key={i} className="glass-dark p-8 rounded-3xl border border-white/5 flex items-center gap-6 group hover:border-blue-500/50 transition-all">
        <div className="w-16 h-16 rounded-2xl bg-blue-900/20 flex items-center justify-center text-blue-500"><span className="material-icons-round text-3xl">lightbulb</span></div>
        <div><h4 className="text-xl font-bold mb-1">{cert.title}</h4><p className="text-sm text-slate-500">{cert.issuer}</p></div>
      </div>
    ))}</div>
  </section>
);

const Connect: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { setFormData(prev => ({ ...prev, [e.target.name]: e.target.value })); };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${USER_INFO.email}?subject=${encodeURIComponent(formData.subject || 'Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };
  const ContactLink = ({ icon, label, value, href }: any) => (
    <a href={href} target="_blank" rel="noopener" className="flex items-center gap-6 group p-4 rounded-3xl hover:bg-white/5 transition-all">
      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-indigo-600/20 transition-colors"><span className="material-icons-round text-slate-500 group-hover:text-indigo-500">{icon}</span></div>
      <div><p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">{label}</p><p className="text-base font-bold text-white transition-colors">{value}</p></div>
    </a>
  );
  return (
    <section id="contact" className="py-32 px-6 bg-black border-t border-white/5 scroll-mt-20">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
        <div className="lg:w-2/5 space-y-12">
          <div className="space-y-6 text-center lg:text-left"><h2 className="text-5xl md:text-7xl font-black leading-none uppercase italic">Connect <br /><span className="text-indigo-500">Manoj.</span></h2><p className="text-slate-400 text-lg font-medium leading-relaxed">I'm ready to contribute to high-impact projects. Let's start a conversation.</p></div>
          <div className="grid gap-6"><ContactLink icon="mail" label="EMAIL ME" value={USER_INFO.email} href={`mailto:${USER_INFO.email}`} /><ContactLink icon="link" label="LINKEDIN" value={USER_INFO.linkedin} href={`https://linkedin.com/in/${USER_INFO.linkedin}`} /><ContactLink icon="code" label="GITHUB" value={USER_INFO.github} href={`https://github.com/${USER_INFO.github}`} /></div>
        </div>
        <div className="lg:w-3/5">
          <form onSubmit={handleSubmit} className="bg-[#05050a] p-10 md:p-14 rounded-[3rem] border border-white/5 space-y-8 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3"><label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Full Name</label><input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-black border border-white/10 rounded-2xl p-6 text-white outline-none focus:ring-1 focus:ring-indigo-600" placeholder="John Doe" /></div>
              <div className="space-y-3"><label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Email Address</label><input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-black border border-white/10 rounded-2xl p-6 text-white outline-none focus:ring-1 focus:ring-indigo-600" placeholder="john@example.com" /></div>
            </div>
            <div className="space-y-3"><label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Subject</label><input type="text" name="subject" value={formData.subject} onChange={handleChange} required className="w-full bg-black border border-white/10 rounded-2xl p-6 text-white outline-none focus:ring-1 focus:ring-indigo-600" placeholder="Inquiry" /></div>
            <div className="space-y-3"><label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Message</label><textarea name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full bg-black border border-white/10 rounded-2xl p-6 text-white outline-none focus:ring-1 focus:ring-indigo-600 resize-none" placeholder="Message..."></textarea></div>
            <button type="submit" className="w-full py-5 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-500 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-xs">Send Message <span className="material-icons-round">east</span></button>
          </form>
        </div>
      </div>
    </section>
  );
};

const ResumeOverlay: React.FC<{ isOpen: boolean, onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
      <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={onClose} />
      <div className="relative w-full max-w-4xl h-full bg-white text-slate-900 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300">
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-3"><span className="material-icons-round text-blue-600">description</span><h2 className="font-black text-sm uppercase tracking-widest text-slate-500">Digital Resume Viewer</h2></div>
          <div className="flex items-center gap-3"><button onClick={() => window.open(USER_INFO.resumeUrl, '_blank')} className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold uppercase">View on GitHub</button><button onClick={onClose} className="w-10 h-10 rounded-xl bg-slate-200 flex items-center justify-center"><span className="material-icons-round">close</span></button></div>
        </div>
        <div className="flex-grow overflow-y-auto p-8 md:p-16 bg-slate-100">
          <div className="max-w-3xl mx-auto bg-white shadow-xl p-8 md:p-12 min-h-[1100px] border border-slate-200">
            <div className="border-b-4 border-slate-900 pb-8 mb-8"><h1 className="text-4xl font-black mb-2">{USER_INFO.name}</h1><p className="text-blue-600 font-bold mb-4">{USER_INFO.role}</p><div className="flex flex-wrap gap-4 text-xs font-medium text-slate-500"><span>{USER_INFO.email}</span><span>{USER_INFO.phone}</span><span>Coimbatore, India</span></div></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2 space-y-10">
                <section><h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Summary</h3><p className="text-slate-700 leading-relaxed italic">"{USER_INFO.profile}"</p></section>
                <section><h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Experience</h3><div className="space-y-8">{EXPERIENCE.map((exp, i) => (<div key={i}><h4 className="font-black text-lg">{exp.title}</h4><p className="text-blue-600 font-bold text-sm mb-2">{exp.company} | {exp.period}</p><ul className="list-disc pl-5 text-slate-600 text-sm">{exp.points.map((p, pi) => <li key={pi}>{p}</li>)}</ul></div>))}</div></section>
                <section><h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Education</h3><div className="space-y-4">{ACADEMIC_JOURNEY.map((edu, i) => (<div key={i} className="text-sm"><p className="font-bold">{edu.institution}</p><p className="text-slate-600">{edu.degree} — <span className="text-blue-600 font-bold">{edu.grade}</span></p><p className="text-[10px] text-slate-400">{edu.period}</p></div>))}</div></section>
              </div>
              <div className="space-y-10">
                <section><h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Skills</h3><div className="flex flex-wrap gap-2">{Object.values(GROUPED_SKILLS).flat().map((s, i) => (<span key={i} className="px-2 py-1 bg-slate-100 text-[9px] font-bold rounded">{s.name}</span>))}</div></section>
                <section><h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Certifications</h3><div className="space-y-2">{CERTIFICATIONS.map((c, i) => (<div key={i} className="text-[10px] font-bold">{c.title}</div>))}</div></section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- APP ---

const App: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const navObserver = new IntersectionObserver((entries) => entries.forEach(entry => { if (entry.isIntersecting) setActiveSection(entry.target.id); }), { rootMargin: '-30% 0px -60% 0px' });
    const revealObserver = new IntersectionObserver((entries) => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('reveal-visible'); }), { threshold: 0.1 });
    const sectionIds = ['home', 'about', 'skills', 'projects', 'resume', 'experience', 'education', 'certifications', 'contact'];
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) { navObserver.observe(el); if (id !== 'home') revealObserver.observe(el); }
    });
    return () => { navObserver.disconnect(); revealObserver.disconnect(); };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-indigo-500/30 relative">
      <div id="home" className="absolute top-0 left-0 w-px h-px pointer-events-none"></div>
      <Navbar activeSection={activeSection} />
      <ScrollRoadmap activeSection={activeSection} />
      <main className="relative">
        <div id="about" className="reveal"><Hero onViewResume={() => setIsResumeOpen(true)} /><DrivenByLogic /></div>
        <div id="skills" className="reveal"><Arsenal /></div>
        <div id="projects" className="reveal"><Projects /></div>
        <div id="resume" className="reveal"><ResumeCTA onViewResume={() => setIsResumeOpen(true)} /></div>
        <div id="experience" className="reveal"><Experience /></div>
        <div id="education" className="reveal"><AcademicJourney /></div>
        <div id="certifications" className="reveal"><Certifications /></div>
        <div id="contact" className="reveal"><Connect /></div>
      </main>
      <ResumeOverlay isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      <footer className="py-12 border-t border-white/5 text-center text-slate-500 text-xs font-black uppercase tracking-[0.2em]">
        <p>© {new Date().getFullYear()} MANOJ M S • ENGINEERED FOR EXCELLENCE</p>
      </footer>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) { ReactDOM.createRoot(rootElement).render(<React.StrictMode><App /></React.StrictMode>); }
