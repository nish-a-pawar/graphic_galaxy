import { ArrowRight } from 'lucide-react';

const CTA = () => (
  <section className="py-28 bg-white overflow-hidden">
    <div className="max-w-5xl mx-auto px-6">
      <div className="relative bg-gradient-to-br from-text-dark to-[#111827] rounded-[2.5rem] p-12 md:p-20 text-center overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="relative z-10">
          <p className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-6">Ready to Start?</p>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Let's Build Your <br />
            <span className="text-gradient">Brand Together.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto mb-10 font-medium">
            Get a free consultation and quote for your next design project. We're just a message away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/918459763568?text=Hi, I need design service"
              target="_blank"
              rel="noreferrer"
              className="interactive group px-10 py-4 bg-primary text-white rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary-dark transition-all duration-300 shadow-xl hover:shadow-primary/30"
            >
              💬 WhatsApp Us
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/contact"
              className="interactive px-10 py-4 bg-white/10 border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300"
            >
              Contact Form
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
