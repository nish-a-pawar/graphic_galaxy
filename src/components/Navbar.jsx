import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown, Share2, Mail, Globe } from 'lucide-react';
import logo from '../assets/images/logo.png';

const services = [
  { name: 'Logo Design', path: '/logo-design-in-sangli' },
  { name: 'Packaging Design', path: '/packaging-design-in-sangli' },
  { name: 'Social Media Design', path: '/social-media-design-sangli' },
  { name: 'Brochure Design', path: '/brochure-design-sangli' },
  { name: 'Flyer Design', path: '/flyer-design-sangli' },
  { name: 'Invitation Design', path: '/invitation-design-sangli' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
      isScrolled ? 'py-3 bg-white/80 backdrop-blur-xl shadow-sm border-b border-border' : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <img src={logo} alt="Graphic Galaxy Logo" className="h-9 w-auto group-hover:scale-105 transition-transform duration-300" />
          <span className="text-lg font-black tracking-tight text-text-dark">
            Graphic <span className="text-primary">Galaxy</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-semibold text-text-dark/70 hover:text-primary transition-colors">
              Services
              <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white border border-border rounded-2xl shadow-2xl shadow-text-dark/10 w-56 py-2 z-50">
                {services.map((s) => (
                  <Link
                    key={s.path}
                    to={s.path}
                    className="block px-5 py-2.5 text-sm text-text-dark/70 hover:text-primary hover:bg-primary/5 transition-colors font-medium"
                    onClick={() => setServicesOpen(false)}
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {[
            { name: 'Portfolio', path: '/portfolio-graphic-designer-sangli' },
            { name: 'About', path: '/about' },
            { name: 'Contact', path: '/contact' },
          ].map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm font-semibold text-text-dark/70 hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/918459763568?text=Hi, I need design service"
            target="_blank"
            rel="noreferrer"
            className="interactive group px-5 py-2.5 bg-text-dark text-white rounded-full font-bold text-sm flex items-center gap-2 hover:bg-primary transition-all duration-300 shadow-md hover:shadow-primary/25"
          >
            Get Quote
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden p-1 z-[200] transition-colors duration-500 ${isMobileMenuOpen ? 'text-white' : 'text-text-dark'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-text-dark z-[150] md:hidden transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Animated background shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

        <div className="flex flex-col h-full overflow-y-auto px-8 pt-24 pb-12 relative z-10">
          <div className="flex flex-col gap-1">
            <p className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4 opacity-60">Navigation</p>
            
            {/* Services Accordion in Mobile */}
            <div className="border-b border-white/10 pb-4">
              <button 
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full flex justify-between items-center text-4xl font-black text-white hover:text-primary transition-colors text-left py-2"
              >
                Services
                <ChevronDown className={`transition-transform duration-500 ${servicesOpen ? 'rotate-180' : ''}`} size={30} />
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${servicesOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col gap-4 pl-4 border-l-2 border-primary/30">
                  {services.map((s) => (
                    <Link
                      key={s.path}
                      to={s.path}
                      className="text-xl font-bold text-white/70 hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {[
              { name: 'Portfolio', path: '/portfolio-graphic-designer-sangli' },
              { name: 'About', path: '/about' },
              { name: 'Contact', path: '/contact' },
            ].map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-4xl font-black text-white hover:text-primary transition-colors border-b border-white/10 py-5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-8">
            <div>
              <p className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-6 opacity-60">Get in touch</p>
              <div className="flex gap-6">
                <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all">
                  <Share2 size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all">
                  <Globe size={20} />
                </a>
                <a href="mailto:hello@graphicgalaxy.com" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <a
              href="https://wa.me/918459763568?text=Hi, I need design service"
              target="_blank"
              rel="noreferrer"
              className="w-full py-5 bg-primary text-text-dark rounded-2xl font-black text-xl text-center shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
