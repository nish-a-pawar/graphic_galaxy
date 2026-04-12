import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Share2 } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const text = `Hi, I'm ${form.name}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/918459763568?text=${text}`, '_blank');
  };

  return (
    <div>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 bg-[#F9FAFB] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(114,224,215,0.15),transparent)] pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="text-sm font-bold text-primary-dark uppercase tracking-[0.3em] mb-4">Get In Touch</p>
          <h1 className="text-5xl md:text-7xl font-black text-text-dark mb-6 leading-tight">
            Let's <span className="text-gradient">Talk.</span>
          </h1>
          <p className="text-text-dark/55 text-lg max-w-xl mx-auto font-medium">
            Looking for a graphic designer in Sangli? We'd love to hear about your project.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Form */}
          <form onSubmit={handleWhatsApp} className="bg-[#F9FAFB] border border-border rounded-[2rem] p-8 flex flex-col gap-6">
            <h2 className="text-2xl font-black text-text-dark">Send a Message</h2>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-text-dark/60">Your Name</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Rahul Patil"
                className="bg-white border border-border rounded-xl px-4 py-3 text-text-dark text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2 flex-1">
              <label className="text-sm font-semibold text-text-dark/60">Message</label>
              <textarea
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Hi, I need a logo design for my business..."
                className="bg-white border border-border rounded-xl px-4 py-3 text-text-dark text-sm focus:outline-none focus:border-primary transition-colors resize-none h-40"
              />
            </div>

            <button
              type="submit"
              className="interactive bg-text-dark hover:bg-primary text-white py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-primary/30"
            >
              Send via WhatsApp →
            </button>
            <p className="text-xs text-text-dark/35 text-center">A prefilled message will be sent to us on WhatsApp.</p>
          </form>

          {/* Info */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-black text-text-dark mb-2">Contact Info</h2>

            {[
              { icon: Phone, label: 'Phone', value: '+91 84597 63568', href: 'tel:+918459763568' },
              { icon: Mail, label: 'Email', value: 'graphicgalaxy2022@gmail.com', href: 'mailto:graphicgalaxy2022@gmail.com' },
            ].map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href} className="group bg-[#F9FAFB] border border-border rounded-2xl p-5 hover:border-primary hover:shadow-md hover:shadow-primary/10 transition-all duration-300">
                <p className="text-xs font-bold text-text-dark/35 uppercase tracking-widest mb-1">{label}</p>
                <div className="flex items-center gap-3">
                  <Icon size={16} className="text-primary" />
                  <span className="font-bold text-text-dark group-hover:text-primary transition-colors break-all">{value}</span>
                </div>
              </a>
            ))}

            <div className="bg-[#F9FAFB] border border-border rounded-2xl p-5">
              <p className="text-xs font-bold text-text-dark/35 uppercase tracking-widest mb-1">Address</p>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <p className="font-bold text-text-dark leading-relaxed">Near Pramod Dairy, Vishrambag,<br />Sangli – 416416, Maharashtra</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://instagram.com/galaxy_graphics_ind"
                target="_blank"
                rel="noreferrer"
                className="interactive bg-[#F9FAFB] border border-border hover:border-pink-400 rounded-2xl p-5 transition-all duration-300 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white">
                  <Share2 size={16} />
                </div>
                <div>
                  <p className="text-xs text-text-dark/40 uppercase tracking-widest mb-0.5">Instagram</p>
                  <p className="font-bold text-text-dark text-sm">@galaxy_graphics_ind</p>
                </div>
              </a>

              <a
                href="https://share.google/Mo2zWhichHtggjwSW"
                target="_blank"
                rel="noreferrer"
                className="interactive bg-[#F9FAFB] border border-border hover:border-blue-400 rounded-2xl p-5 transition-all duration-300 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black">G</div>
                <div>
                  <p className="text-xs text-text-dark/40 uppercase tracking-widest mb-0.5">Google</p>
                  <p className="font-bold text-text-dark text-sm">Find us</p>
                </div>
              </a>
            </div>

            <a
              href="https://wa.me/918459763568?text=Hi, I need design service"
              target="_blank"
              rel="noreferrer"
              className="interactive bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-2xl p-5 text-center font-bold transition-all duration-300 shadow-lg hover:shadow-green-500/30"
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
