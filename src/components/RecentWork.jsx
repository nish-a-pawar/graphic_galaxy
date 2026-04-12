import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoSample from '../assets/images/logo_sample.png';
import packagingSample from '../assets/images/packaging_sample.png';
import brandingSample from '../assets/images/branding_sample.png';
import posterSample from '../assets/images/poster_sample.png';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { title: 'Brand Identity', category: 'Logo Design', image: logoSample, tag: 'Featured' },
  { title: 'Organic Coffee', category: 'Packaging', image: packagingSample, tag: 'Packaging' },
  { title: 'Creative Studio', category: 'Branding', image: brandingSample, tag: 'Branding' },
  { title: 'Summer Fest', category: 'Digital Poster', image: posterSample, tag: 'Event' },
];

const RecentWork = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('.work-card');
    if (!cards?.length) return;

    gsap.fromTo(
      cards,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 82%' },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section id="portfolio" ref={gridRef} className="py-28 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="reveal">
            <p className="text-sm font-bold text-secondary uppercase tracking-[0.3em] mb-4">Our Portfolio</p>
            <h2 className="text-4xl md:text-6xl font-black text-text-dark">
              Recent <span className="text-gradient">Work.</span>
            </h2>
          </div>
          <p className="max-w-md text-text-dark/55 font-medium reveal text-lg">
            A showcase of our latest design projects across various industries.
          </p>
        </div>

        {/* Bento-style grid */}
        <div ref={gridRef} className="work-grid grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Large card */}
          <div className="work-card md:col-span-7 group relative h-[420px] rounded-4xl overflow-hidden cursor-pointer shadow-lg" style={{ opacity: 0 }}>
            <img src={projects[0].image} alt={projects[0].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-text-dark/80 via-text-dark/20 to-transparent" />
            <div className="absolute top-6 left-6">
              <span className="px-3 py-1.5 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-wider">{projects[0].tag}</span>
            </div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <span className="text-primary font-bold uppercase tracking-wider text-xs mb-2">{projects[0].category}</span>
              <div className="flex items-center justify-between">
                <h3 className="text-3xl font-black text-white">{projects[0].title}</h3>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-text-dark opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight size={22} />
                </div>
              </div>
            </div>
          </div>

          {/* Small cards column */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {projects.slice(1, 3).map((p, i) => (
              <div key={i} className="work-card group relative h-[192px] rounded-4xl overflow-hidden cursor-pointer shadow-lg" style={{ opacity: 0 }}>
                <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-text-dark/80 via-text-dark/10 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="text-primary font-bold uppercase tracking-wider text-xs mb-1">{p.category}</span>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-black text-white">{p.title}</h3>
                    <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-text-dark opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom wide card */}
          <div className="work-card md:col-span-12 group relative h-[280px] rounded-4xl overflow-hidden cursor-pointer shadow-lg" style={{ opacity: 0 }}>
            <img src={projects[3].image} alt={projects[3].title} className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-text-dark/80 via-text-dark/30 to-transparent" />
            <div className="absolute inset-0 p-10 flex flex-col justify-center max-w-lg">
              <span className="text-secondary font-bold uppercase tracking-wider text-xs mb-3">{projects[3].category}</span>
              <h3 className="text-4xl font-black text-white mb-2">{projects[3].title}</h3>
              <p className="text-white/60 font-medium">Event branding that captures the energy and excitement of the moment.</p>
            </div>
          </div>
        </div>

        <div className="mt-14 text-center reveal">
          <Link
            to="/portfolio-graphic-designer-sangli"
            className="interactive inline-flex items-center gap-2 px-10 py-4 bg-text-dark text-white rounded-full font-bold text-lg hover:bg-primary transition-all duration-300 shadow-xl hover:shadow-primary/30"
          >
            View Full Portfolio
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
