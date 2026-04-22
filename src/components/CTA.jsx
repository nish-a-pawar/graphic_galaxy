import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WHATSAPP_LINK } from '../constants';

const CTA = () => (
  <section className="py-28 bg-[#111827] overflow-hidden">
    <div className="max-w-5xl mx-auto px-6">
      <div
        className="relative rounded-[2.5rem] p-12 md:p-20 text-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #F59E0B 0%, #72E0D7 100%)' }}
      >
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-[#0B0F14]/30 pointer-events-none rounded-[2.5rem]" />
        {/* Glow blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="relative z-10">
          <p className="text-sm font-black text-[#0B0F14]/70 uppercase tracking-[0.3em] mb-6">Ready to Start?</p>
          <h2 className="text-4xl md:text-6xl font-black text-[#0B0F14] mb-6 leading-tight">
            Let's Build Your <br />Brand Together.
          </h2>
          <p className="text-[#0B0F14]/65 text-lg max-w-xl mx-auto mb-10 font-semibold">
            Get a free consultation and quote for your next design project. We're just a message away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank" rel="noreferrer"
              className="interactive group px-10 py-4 bg-[#0B0F14] text-white rounded-full font-black text-lg flex items-center justify-center gap-2 hover:bg-[#111827] transition-all duration-300 shadow-xl"
            >
              💬 WhatsApp Us
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              to="/contact"
              className="interactive px-10 py-4 bg-transparent border-2 border-[#0B0F14]/40 text-[#0B0F14] rounded-full font-black text-lg hover:bg-[#0B0F14]/10 transition-all duration-300"
            >
              Contact Form
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
