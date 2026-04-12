import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';

gsap.registerPlugin(ScrollTrigger);

const categories = ['All', 'Logo', 'Packaging', 'Social Media', 'Brochure', 'Event', 'Misc'];

const projects = [
  { id: 1, title: 'Duathlon Event', client: 'S3 Academy Sangli', category: 'Event', status: 'Completed', bg: 'from-slate-700 to-slate-900' },
  { id: 2, title: 'Marathon Event', client: 'MTDK Run', category: 'Event', status: 'Ongoing', bg: 'from-purple-700 to-purple-900' },
  { id: 3, title: 'Shravani Organics', client: 'Shravani Organics', category: 'Packaging', status: 'Completed', bg: 'from-green-600 to-green-900' },
  { id: 4, title: 'Radhey Dental', client: 'Radhey Dental Clinic', category: 'Social Media', status: 'Completed', bg: 'from-blue-600 to-blue-900' },
  { id: 5, title: 'Vijeta Group', client: 'Vijeta Group', category: 'Logo', status: 'Completed', bg: 'from-orange-500 to-red-700' },
  { id: 6, title: 'Smile Clinic', client: 'Smile Sangli Clinic', category: 'Logo', status: 'Completed', bg: 'from-teal-500 to-teal-800' },
];

const Portfolio = () => {
  const [active, setActive] = useState('All');
  const pageRef = useRef(null);

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.portfolio-card', {
        y: 60, opacity: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.portfolio-grid', start: 'top 85%' },
      });
    }, pageRef);
    return () => ctx.revert();
  }, [active]);

  return (
    <div ref={pageRef}>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 bg-[#F9FAFB] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(114,224,215,0.15),transparent)] pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="text-sm font-bold text-primary-dark uppercase tracking-[0.3em] mb-4">Our Work</p>
          <h1 className="text-5xl md:text-7xl font-black text-text-dark mb-6 leading-tight">
            Our <span className="text-gradient">Portfolio.</span>
          </h1>
          <p className="text-text-dark/55 text-lg max-w-xl mx-auto font-medium">
            Graphic design projects for businesses across Sangli, Miraj, Kupwad and Maharashtra.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`interactive px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  active === cat
                    ? 'bg-text-dark text-white shadow-lg'
                    : 'bg-[#F9FAFB] text-text-dark/60 border border-border hover:border-primary hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="portfolio-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project) => (
                <div key={project.id} className="portfolio-card group bg-white border border-border rounded-[1.5rem] overflow-hidden hover:border-primary hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1">
                  <div className={`h-52 bg-gradient-to-br ${project.bg} flex items-center justify-center relative overflow-hidden`}>
                    <span className="text-white text-3xl font-black opacity-10 tracking-tight select-none">
                      {project.title.toUpperCase()}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                        project.status === 'Completed' ? 'bg-green-50 text-green-600' : 'bg-amber-50 text-amber-600'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <h3 className="font-black text-text-dark text-lg mt-2">{project.title}</h3>
                    <p className="text-sm text-text-dark/45 mt-1 font-medium">{project.client}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <p className="text-text-dark/30 font-medium">No projects in this category yet.</p>
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
