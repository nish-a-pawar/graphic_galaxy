import { Mail, Phone, MapPin, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Footer = () => (
  <footer className="bg-[#0D0F12] text-white pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        {/* Brand */}
        <div className="md:col-span-4">
          <Link to="/" className="flex items-center gap-2.5 mb-6 group">
            <img src={logo} alt="Graphic Galaxy" className="h-9 w-auto" />
            <span className="text-xl font-black tracking-tight">
              Graphic <span className="text-primary">Galaxy</span>
            </span>
          </Link>
          <p className="text-white/45 font-medium leading-relaxed text-sm mb-8">
            Elevating brands through premium graphic design and creative strategy. Based in Sangli, serving the galaxy.
          </p>
          <div className="flex gap-3">
            <a
              href="https://instagram.com/galaxy_graphics_ind"
              target="_blank"
              rel="noreferrer"
              className="interactive w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
              aria-label="Instagram"
            >
              <Share2 size={16} />
            </a>
            <a
              href="https://wa.me/918459763568"
              target="_blank"
              rel="noreferrer"
              className="interactive w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
              aria-label="WhatsApp"
            >
              <span className="text-xs font-bold">WA</span>
            </a>
            <a
              href="https://share.google/Mo2zWhichHtggjwSW"
              target="_blank"
              rel="noreferrer"
              className="interactive w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
              aria-label="Google Business"
            >
              <span className="text-xs font-bold text-blue-400">G</span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-2">
          <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white/30 mb-6">Navigation</h4>
          <ul className="space-y-3">
            {[
              { name: 'Services', path: '#services' },
              { name: 'Portfolio', path: '/portfolio-graphic-designer-sangli' },
              { name: 'About Us', path: '/about' },
              { name: 'Contact', path: '/contact' },
            ].map((l) => (
              <li key={l.name}>
                <Link to={l.path} className="text-white/50 hover:text-primary transition-colors text-sm font-medium">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="md:col-span-3">
          <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white/30 mb-6">Services</h4>
          <ul className="space-y-3">
            {['Logo Design', 'Packaging Design', 'Brochure Design', 'Flyer Design', 'Invitation Design'].map((s) => (
              <li key={s}>
                <span className="text-white/50 text-sm font-medium">{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-3">
          <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white/30 mb-6">Get in Touch</h4>
          <ul className="space-y-4">
            <li>
              <a href="mailto:graphicgalaxy2022@gmail.com" className="flex items-start gap-3 text-white/50 hover:text-primary transition-colors group">
                <Mail size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm font-medium break-all">graphicgalaxy2022@gmail.com</span>
              </a>
            </li>
            <li>
              <a href="tel:+918459763568" className="flex items-center gap-3 text-white/50 hover:text-primary transition-colors">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <span className="text-sm font-medium">+91 84597 63568</span>
              </a>
            </li>
            <li className="flex items-start gap-3 text-white/50">
              <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm font-medium leading-relaxed">Near Pramod Dairy, Vishrambag,<br />Sangli – 416416, Maharashtra</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/25 text-xs font-medium">
          © {new Date().getFullYear()} Graphic Galaxy. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link to="#" className="text-white/25 hover:text-white/60 transition-colors text-xs">Privacy Policy</Link>
          <Link to="#" className="text-white/25 hover:text-white/60 transition-colors text-xs">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
