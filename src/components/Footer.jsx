import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import {
  WHATSAPP_LINK,
  PHONE,
  EMAIL,
  INSTAGRAM,
  GOOGLE_REVIEW,
  ADDRESS,
  SERVICES
} from '../constants';

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
              { href: INSTAGRAM, label: 'Instagram', icon: (
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              )},
              { href: WHATSAPP_LINK, label: 'WhatsApp', icon: <MessageCircle size={18} /> },
              {
                href: GOOGLE_REVIEW, label: 'Google', icon: (
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                  </svg>
                )
              },
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
              { name: 'Services', path: '#services' },
              { name: 'Portfolio', path: '/portfolio-graphic-designer-sangli' },
              { name: 'About Us', path: '/about' },
              { name: 'Contact', path: '/contact' },
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
          <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
            {SERVICES.map((s) => (
              <li key={s.title}>
                <Link to={s.path} className="text-white/40 text-sm font-medium hover:text-amber-400 transition-colors whitespace-nowrap">
                  {s.footerLabel || s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-3">
          <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white/25 mb-6">Get in Touch</h4>
          <ul className="space-y-4">
            <li>
              <a href={`mailto:${EMAIL}`} className="flex items-start gap-3 text-white/40 hover:text-amber-400 transition-colors">
                <Mail size={15} className="text-amber-400 mt-0.5 shrink-0" />
                <span className="text-sm font-medium break-all">{EMAIL}</span>
              </a>
            </li>
            <li>
              <a href={`tel:${PHONE.replace(/\s+/g, '')}`} className="flex items-center gap-3 text-white/40 hover:text-amber-400 transition-colors">
                <Phone size={15} className="text-amber-400 shrink-0" />
                <span className="text-sm font-medium">{PHONE}</span>
              </a>
            </li>
            <li className="flex items-start gap-3 text-white/40">
              <MapPin size={15} className="text-amber-400 mt-0.5 shrink-0" />
              <span className="text-sm font-medium leading-relaxed whitespace-pre-line">{ADDRESS}</span>
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
