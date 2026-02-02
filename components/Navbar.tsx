import React from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
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
      const offset = 80; // Adjusted for better spacing
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
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#0a0a0c]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Name - Clicking navigates to Home */}
        <div 
          className="text-xl font-bold tracking-tighter text-white cursor-pointer select-none" 
          onClick={(e) => handleNavClick(e, 'home')}
        >
          MANOJ<span className="text-indigo-500">.</span>MS
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`text-[11px] lg:text-xs font-black uppercase tracking-widest transition-all duration-300 hover:text-white relative py-2 ${
                activeSection === item.id ? 'text-white' : 'text-slate-500'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 rounded-full"></span>
              )}
            </a>
          ))}
        </div>

        {/* Action Button - Navigates to Contact */}
        <a 
          href="#contact"
          onClick={(e) => handleNavClick(e, 'contact')}
          className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] lg:text-xs font-black uppercase tracking-widest rounded-full transition-all active:scale-95 shadow-lg shadow-indigo-600/20"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;