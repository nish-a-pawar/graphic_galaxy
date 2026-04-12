import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
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
          className="md:hidden text-text-dark p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-[90] md:hidden transition-transform duration-500 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full px-8 pt-24 pb-12 gap-6">
          {[
            { name: 'Services', path: '#services' },
            { name: 'Portfolio', path: '/portfolio-graphic-designer-sangli' },
            { name: 'About', path: '/about' },
            { name: 'Contact', path: '/contact' },
          ].map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-3xl font-black text-text-dark hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-auto">
            <a
              href="https://wa.me/918459763568?text=Hi, I need design service"
              target="_blank"
              rel="noreferrer"
              className="block w-full py-4 bg-primary text-white rounded-full font-bold text-lg text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
