import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DrivenByLogic from './components/DrivenByLogic';
import Arsenal from './components/Arsenal';
import Projects from './components/Projects';
import ResumeCTA from './components/ResumeCTA';
import Experience from './components/Experience';
import AcademicJourney from './components/AcademicJourney';
import Certifications from './components/Certifications';
import Connect from './components/Connect';
import ResumeOverlay from './components/ResumeOverlay';
import ScrollRoadmap from './components/ScrollRoadmap';

const App: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Observer for Active Navigation Section
    const navObserverOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    };

    const navObserverCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const navObserver = new IntersectionObserver(navObserverCallback, navObserverOptions);

    // Observer for Visual Reveals
    const revealObserverOptions = {
      root: null,
      threshold: 0.1
    };

    const revealObserverCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    };

    const revealObserver = new IntersectionObserver(revealObserverCallback, revealObserverOptions);

    const sectionIds = ['home', 'about', 'skills', 'projects', 'resume', 'experience', 'education', 'certifications', 'contact'];
    
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        navObserver.observe(el);
        // Only apply reveal to main content sections
        if (id !== 'home') revealObserver.observe(el);
      }
    });

    return () => {
      navObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-indigo-500/30 relative">
      <div id="home" className="absolute top-0 left-0 w-px h-px pointer-events-none"></div>
      
      <Navbar activeSection={activeSection} />
      <ScrollRoadmap activeSection={activeSection} />
      
      <main className="relative">
        <div id="about" className="reveal">
          <Hero onViewResume={() => setIsResumeOpen(true)} />
          <DrivenByLogic />
        </div>
        
        <div id="skills" className="reveal">
          <Arsenal />
        </div>
        
        <div id="projects" className="reveal">
          <Projects />
        </div>
        
        <div id="resume" className="reveal">
          <ResumeCTA onViewResume={() => setIsResumeOpen(true)} />
        </div>
        
        <div id="experience" className="reveal">
          <Experience />
        </div>
        
        <div id="education" className="reveal">
          <AcademicJourney />
        </div>
        
        <div id="certifications" className="reveal">
          <Certifications />
        </div>
        
        <div id="contact" className="reveal">
          <Connect />
        </div>
      </main>

      <ResumeOverlay 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />

      <footer className="py-12 border-t border-white/5 text-center text-slate-500 text-xs font-black uppercase tracking-[0.2em]">
        <p>© {new Date().getFullYear()} MANOJ M S • ENGINEERED FOR EXCELLENCE</p>
      </footer>
    </div>
  );
};

export default App;