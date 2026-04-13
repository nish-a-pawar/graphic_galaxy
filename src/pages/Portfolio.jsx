import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA    from '../components/CTA';
import { RECENT_PROJECTS } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const categories = ['All', 'Event Branding', 'Sports Branding', 'Packaging & Logo', 'Branding & Design', 'Social Media Design'];

const Portfolio = () => {
  const [active, setActive] = useState('All');
  const gridRef = useRef(null);

  const filtered = active === 'All' ? RECENT_PROJECTS : RECENT_PROJECTS.filter((p) => p.category === active);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('.portfolio-card');
    if (!cards?.length) return;
    gsap.fromTo(cards,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 85%' } }
    );
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [active]);

  return (
    <div className="bg-[#0B0F14]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, #111827, #0B0F14)' }} />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal-400/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="text-sm font-bold text-amber-400 uppercase tracking-[0.3em] mb-4">Our Work</p>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Our <span className="text-gradient">Portfolio.</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto font-medium">
            Graphic design projects for businesses across Sangli, Miraj, Kupwad and Maharashtra.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#111827]">
        <div className="max-w-6xl mx-auto">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`interactive px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  active === cat
                    ? 'bg-amber-400 text-[#0B0F14] shadow-[0_0_20px_rgba(245,158,11,0.4)]'
                    : 'bg-[#0B0F14] text-white/50 border border-[#2D3748] hover:border-amber-400/50 hover:text-amber-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project) => (
                <div
                  key={project.id}
                  className="portfolio-card group bg-[#0B0F14] border border-[#2D3748] rounded-3xl overflow-hidden hover:border-amber-400/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] transition-all duration-500 hover:-translate-y-1"
                  style={{ opacity: 0 }}
                >
                  <div 
                    className="h-52 flex items-center justify-center relative overflow-hidden"
                    style={{ backgroundColor: project.bg || '#1a1a1a' }}
                  >
                    <span className="text-white text-3xl font-black opacity-10 tracking-tight select-none">
                      {project.title.toUpperCase()}
                    </span>
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.4),transparent)]" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-black text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                        project.status === 'Completed'
                          ? 'bg-green-400/10 text-green-400 border border-green-400/20'
                          : 'bg-amber-400/10 text-amber-400 border border-amber-400/20'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <h3 className="font-black text-white text-lg mt-2">{project.title}</h3>
                    <p className="text-sm text-white/35 mt-1 font-medium">{project.client}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <p className="text-white/25 font-medium">No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default Portfolio;
