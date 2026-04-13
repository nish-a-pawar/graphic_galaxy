import { useState } from 'react';
import Navbar  from '../components/Navbar';
import Footer  from '../components/Footer';
import { Mail, Phone, MapPin, Share2 } from 'lucide-react';
import { PHONE, EMAIL, ADDRESS, INSTAGRAM, GOOGLE_REVIEW, WHATSAPP_LINK } from '../constants';

const Contact = () => {
  const [form, setForm] = useState({ name: '', message: '' });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleWhatsApp = (e) => {
    e.preventDefault();
    const baseUrl = WHATSAPP_LINK.split('?text=')[0];
    window.open(`${baseUrl}?text=Hi, I'm ${form.name}%0AMessage: ${form.message}`, '_blank');
  };

  return (
    <div className="bg-[#0B0F14]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, #111827, #0B0F14)' }} />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-400/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="text-sm font-bold text-amber-400 uppercase tracking-[0.3em] mb-4">Get In Touch</p>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Let's <span className="text-gradient-amber">Talk.</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto font-medium">
            Looking for a graphic designer in Sangli? We'd love to hear about your project.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#111827]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* Form */}
          <form onSubmit={handleWhatsApp} className="bg-[#0B0F14] border border-[#2D3748] rounded-3xl p-8 flex flex-col gap-6">
            <h2 className="text-2xl font-black text-white">Send a Message</h2>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-white/50">Your Name</label>
              <input
                type="text" name="name" required
                value={form.name} onChange={handleChange}
                placeholder="Rahul Patil"
                className="bg-[#111827] border border-[#2D3748] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-400/60 transition-colors placeholder:text-white/20"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-white/50">Message</label>
              <textarea
                name="message" required
                value={form.message} onChange={handleChange}
                placeholder="Hi, I need a logo design for my business..."
                className="bg-[#111827] border border-[#2D3748] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-400/60 transition-colors resize-none h-40 placeholder:text-white/20"
              />
            </div>

            <button
              type="submit"
              className="interactive btn-amber py-4 rounded-xl font-black text-base transition-all duration-300"
            >
              Send via WhatsApp →
            </button>
            <p className="text-xs text-white/25 text-center">A prefilled message will be sent to us on WhatsApp.</p>
          </form>

          {/* Info */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-black text-white mb-2">Contact Info</h2>

            {[
              { icon: Phone, label: 'Phone', value: PHONE,           href: `tel:${PHONE.replace(/\s+/g, '')}` },
              { icon: Mail,  label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
            ].map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href} className="group bg-[#0B0F14] border border-[#2D3748] rounded-2xl p-5 hover:border-amber-400/50 hover:shadow-[0_0_20px_rgba(245,158,11,0.08)] transition-all duration-300">
                <p className="text-xs font-bold text-white/25 uppercase tracking-widest mb-1">{label}</p>
                <div className="flex items-center gap-3">
                  <Icon size={16} className="text-amber-400" />
                  <span className="font-bold text-white group-hover:text-amber-400 transition-colors break-all">{value}</span>
                </div>
              </a>
            ))}

            <div className="bg-[#0B0F14] border border-[#2D3748] rounded-2xl p-5">
              <p className="text-xs font-bold text-white/25 uppercase tracking-widest mb-1">Address</p>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-amber-400 mt-0.5 shrink-0" />
                <p className="font-bold text-white leading-relaxed whitespace-pre-line">{ADDRESS}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <a
                href={INSTAGRAM}
                target="_blank" rel="noreferrer"
                className="interactive bg-[#0B0F14] border border-[#2D3748] hover:border-pink-400/50 rounded-2xl p-5 transition-all duration-300 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white">
                  <Share2 size={16} />
                </div>
                <div>
                  <p className="text-xs text-white/30 uppercase tracking-widest mb-0.5">Instagram</p>
                  <p className="font-bold text-white text-sm">{INSTAGRAM.split('/').pop()}</p>
                </div>
              </a>

              <a
                href={GOOGLE_REVIEW}
                target="_blank" rel="noreferrer"
                className="interactive bg-[#0B0F14] border border-[#2D3748] hover:border-blue-400/50 rounded-2xl p-5 transition-all duration-300 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black">G</div>
                <div>
                  <p className="text-xs text-white/30 uppercase tracking-widest mb-0.5">Google</p>
                  <p className="font-bold text-white text-sm">Find us</p>
                </div>
              </a>
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank" rel="noreferrer"
              className="interactive bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-2xl p-5 text-center font-black transition-all duration-300 shadow-lg hover:shadow-green-500/30"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
