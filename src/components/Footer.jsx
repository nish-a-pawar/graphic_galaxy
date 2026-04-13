import { Mail, Phone, MapPin, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Footer = () => (
  <footer className="bg-[#020617] text-white pt-20 pb-10 border-t border-[#2D3748]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

        {/* Brand */}
        <div className="md:col-span-4">
          <Link to="/" className="flex items-center gap-2.5 mb-6 group">
            <img src={logo} alt="Graphic Galaxy" className="h-9 w-auto" />
            <span className="text-xl font-black tracking-tight">
              Graphic <span className="text-amber-400">Galaxy</span>
            </span>
          </Link>
          <p className="text-white/35 font-medium leading-relaxed text-sm mb-8">
            Elevating brands through premium graphic design and creative strategy. Based in Sangli, serving the galaxy.
          </p>
          <div className="flex gap-3">
            {[
              { href: 'https://instagram.com/galaxy_graphics_ind', label: 'IG', icon: <Share2 size={15} /> },
              { href: 'https://wa.me/918459763568', label: 'WA', icon: <span className="text-xs font-black">WA</span> },
              { href: 'https://share.google/Mo2zWhichHtggjwSW', label: 'G', icon: <span className="text-xs font-black text-blue-400">G</span> },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank" rel="noreferrer"
                className="interactive w-10 h-10 bg-white/5 border border-[#2D3748] rounded-xl flex items-center justify-center hover:bg-amber-400 hover:border-amber-400 hover:text-[#0B0F14] transition-all duration-300"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="md:col-span-2">
          <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white/25 mb-6">Navigation</h4>
          <ul className="space-y-3">
            {[
              { name: 'Services',  path: '#services' },
              { name: 'Portfolio', path: '/portfolio-graphic-designer-sangli' },
              { name: 'About Us',  path: '/about' },
              { name: 'Contact',   path: '/contact' },
            ].map((l) => (
              <li key={l.name}>
                <Link to={l.path} className="text-white/40 hover:text-amber-400 transition-colors text-sm font-medium">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="md:col-span-3">
          <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white/25 mb-6">Services</h4>
          <ul className="space-y-3">
            {['Logo Design', 'Packaging Design', 'Brochure Design', 'Flyer Design', 'Invitation Design'].map((s) => (
              <li key={s}>
                <span className="text-white/40 text-sm font-medium hover:text-amber-400 transition-colors cursor-default">{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-3">
          <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white/25 mb-6">Get in Touch</h4>
          <ul className="space-y-4">
            <li>
              <a href="mailto:graphicgalaxy2022@gmail.com" className="flex items-start gap-3 text-white/40 hover:text-amber-400 transition-colors">
                <Mail size={15} className="text-amber-400 mt-0.5 shrink-0" />
                <span className="text-sm font-medium break-all">graphicgalaxy2022@gmail.com</span>
              </a>
            </li>
            <li>
              <a href="tel:+918459763568" className="flex items-center gap-3 text-white/40 hover:text-amber-400 transition-colors">
                <Phone size={15} className="text-amber-400 shrink-0" />
                <span className="text-sm font-medium">+91 84597 63568</span>
              </a>
            </li>
            <li className="flex items-start gap-3 text-white/40">
              <MapPin size={15} className="text-amber-400 mt-0.5 shrink-0" />
              <span className="text-sm font-medium leading-relaxed">Near Pramod Dairy, Vishrambag,<br />Sangli – 416416, Maharashtra</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/20 text-xs font-medium">© {new Date().getFullYear()} Graphic Galaxy. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="#" className="text-white/20 hover:text-amber-400 transition-colors text-xs">Privacy Policy</Link>
          <Link to="#" className="text-white/20 hover:text-amber-400 transition-colors text-xs">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
