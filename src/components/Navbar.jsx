import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import logo from '../assets/images/logo.png';

const services = [
  { name: 'Logo Design',         path: '/logo-design-in-sangli' },
  { name: 'Packaging Design',    path: '/packaging-design-in-sangli' },
  { name: 'Social Media Design', path: '/social-media-design-sangli' },
  { name: 'Brochure Design',     path: '/brochure-design-sangli' },
  { name: 'Flyer Design',        path: '/flyer-design-sangli' },
  { name: 'Invitation Design',   path: '/invitation-design-sangli' },
];

const Navbar = () => {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [dropOpen, setDropOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
      scrolled
        ? 'py-3 bg-[#0B0F14]/90 backdrop-blur-xl border-b border-[#2D3748]'
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <img src={logo} alt="Graphic Galaxy" className="h-9 w-auto group-hover:scale-105 transition-transform duration-300" />
          <span className="text-lg font-black tracking-tight text-white">
            Graphic <span className="text-amber-400">Galaxy</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {/* Services dropdown */}
          <div className="relative" onMouseEnter={() => setDropOpen(true)} onMouseLeave={() => setDropOpen(false)}>
            <button className="flex items-center gap-1 text-sm font-semibold text-white/70 hover:text-amber-400 transition-colors">
              Services
              <ChevronDown size={14} className={`transition-transform duration-200 ${dropOpen ? 'rotate-180' : ''}`} />
            </button>
            {dropOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 glass-dark rounded-2xl w-56 py-2 z-50">
                {services.map((s) => (
                  <Link
                    key={s.path}
                    to={s.path}
                    className="block px-5 py-2.5 text-sm text-white/60 hover:text-amber-400 hover:bg-amber-400/5 transition-colors font-medium"
                    onClick={() => setDropOpen(false)}
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {[
            { name: 'Portfolio', path: '/portfolio-graphic-designer-sangli' },
            { name: 'About',     path: '/about' },
            { name: 'Contact',   path: '/contact' },
          ].map((l) => (
            <Link
              key={l.name}
              to={l.path}
              className="text-sm font-semibold text-white/70 hover:text-amber-400 transition-colors relative group"
            >
              {l.name}
              <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/918459763568?text=Hi, I need design service"
            target="_blank"
            rel="noreferrer"
            className="interactive btn-amber group px-5 py-2.5 flex items-center gap-2 text-sm"
          >
            Get Quote
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-1 z-[200] text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`fixed inset-0 bg-[#0B0F14] z-[150] md:hidden transition-all duration-500 ${
        menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Glow blobs */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-400/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="flex flex-col h-full px-8 pt-24 pb-12 relative z-10 overflow-y-auto">
          <div className="flex flex-col gap-1">
            {[
              { name: 'Services',  path: '#services' },
              { name: 'Portfolio', path: '/portfolio-graphic-designer-sangli' },
              { name: 'About',     path: '/about' },
              { name: 'Contact',   path: '/contact' },
            ].map((l) => (
              <Link
                key={l.name}
                to={l.path}
                className="text-4xl font-black text-white hover:text-amber-400 transition-colors border-b border-white/10 py-5"
                onClick={() => setMenuOpen(false)}
              >
                {l.name}
              </Link>
            ))}
          </div>
          <div className="mt-auto pt-10">
            <a
              href="https://wa.me/918459763568?text=Hi, I need design service"
              target="_blank"
              rel="noreferrer"
              className="block w-full py-4 btn-amber text-center text-xl font-black rounded-2xl"
              onClick={() => setMenuOpen(false)}
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
