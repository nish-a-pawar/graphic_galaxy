import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import s3     from '../assets/images/Logo_Design/s3.png';
import packagingSample from '../assets/images/packaging_sample.png';
import brandingSample  from '../assets/images/branding_sample.png';
import MTDKBooks   from '../assets/images/MTDKBooks.jpeg';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { title: 'S3 Duathlon',  category: 'Sports Event Branding',    image:s3,      tag: 'Featured', assets: [s3, packagingSample] },
  { title: 'MTDK RUN',  category: 'Sports Event Branding',      image: packagingSample, tag: 'Packaging', assets: [packagingSample, MTDKBooks] },
  { title: 'Sangli Marathon', category: 'Sports Event Branding',       image: brandingSample,  tag: 'Branding', assets: [brandingSample, s3] },
];

const RecentWork = () => {
  const gridRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentAssetIndex, setCurrentAssetIndex] = useState(0);

  const openModal = (index) => {
    setSelectedProject(index);
    setCurrentAssetIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = '';
  };

  const nextAsset = (e) => {
    e.stopPropagation();
    if (selectedProject !== null) {
      setCurrentAssetIndex((prev) => 
        (prev + 1) % projects[selectedProject].assets.length
      );
    }
  };

  const prevAsset = (e) => {
    e.stopPropagation();
    if (selectedProject !== null) {
      setCurrentAssetIndex((prev) => 
        (prev - 1 + projects[selectedProject].assets.length) % projects[selectedProject].assets.length
      );
    }
  };

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('.work-card');
    if (!cards?.length) return;
    gsap.fromTo(cards,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 82%' } }
    );
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section id="portfolio" className="py-28 bg-[#0B0F14] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-sm font-bold text-amber-400 uppercase tracking-[0.3em] mb-4">Our Portfolio</p>
            <h2 className="text-4xl md:text-6xl font-black text-white">
              Recent <span className="text-gradient">Work.</span>
            </h2>
          </div>
          <p className="max-w-md text-white/40 font-medium text-lg">
            A showcase of our latest design projects across various industries.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} onClick={() => openModal(i)} className="work-card group relative h-[300px] sm:h-[420px] rounded-3xl overflow-hidden cursor-pointer border border-[#2D3748] hover:border-amber-400/40 transition-all duration-500" style={{ opacity: 0 }}>
              <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.85),transparent)]" />
              {p.tag && (
                <div className="absolute top-5 left-5">
                  <span className="px-3 py-1.5 bg-amber-400 text-[#0B0F14] text-xs font-black rounded-full uppercase tracking-wider">{p.tag}</span>
                </div>
              )}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="text-teal-400 font-bold uppercase tracking-wider text-xs mb-2">{p.category}</span>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-black text-white">{p.title}</h3>
                  <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-[#0B0F14] opacity-100 translate-y-0 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 md:translate-y-2 md:group-hover:translate-y-0">
                    <ArrowUpRight size={22} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Project Carousel Modal */}
        {selectedProject !== null && (
          <div className="fixed inset-0 z-[100] bg-[#0B0F14] overflow-hidden flex flex-col md:flex-row">
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 text-white/50 hover:text-white bg-white/5 p-3 rounded-full backdrop-blur-md transition-colors z-50 border border-white/10"
            >
              <X size={24} />
            </button>
            
            {/* Sidebar / Info Panel */}
            <div className="w-full md:w-1/3 md:h-screen p-8 md:p-12 border-b md:border-b-0 md:border-r border-[#2D3748] flex flex-col justify-center bg-black/30 z-10 shrink-0">
              <span className="text-amber-400 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
                {projects[selectedProject].category}
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                {projects[selectedProject].title}
              </h2>
              <div className="w-16 h-1 bg-amber-400 mb-6"></div>
              <p className="text-white/60 mb-8 font-medium">
                Browsing brand assets. Click Next or Back to view multiple design files provided for this event. 
              </p>
            </div>

            {/* Carousel Area */}
            <div className="flex-1 w-full relative flex items-center justify-center p-4 min-h-[50vh]">
              {projects[selectedProject].assets.length > 1 && (
                <button onClick={prevAsset} className="absolute left-4 md:left-8 text-white/80 hover:text-white bg-white/5 p-4 rounded-full backdrop-blur-md transition-colors z-10 border border-white/10">
                  <ChevronLeft size={28} />
                </button>
              )}
              
              <div className="flex items-center justify-center h-full w-full max-w-4xl p-4">
                <img 
                  src={projects[selectedProject].assets[currentAssetIndex]} 
                  alt={`${projects[selectedProject].title} Brand Asset ${currentAssetIndex + 1}`} 
                  className="max-w-full max-h-full object-contain drop-shadow-2xl rounded-xl"
                />
              </div>

              {projects[selectedProject].assets.length > 1 && (
                <button onClick={nextAsset} className="absolute right-4 md:right-8 text-white/80 hover:text-white bg-white/5 p-4 rounded-full backdrop-blur-md transition-colors z-10 border border-white/10">
                  <ChevronRight size={28} />
                </button>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/80 text-white font-medium px-5 py-2 rounded-full text-xs tracking-widest backdrop-blur-md border border-white/10">
                {currentAssetIndex + 1} / {projects[selectedProject].assets.length}
              </div>
            </div>
          </div>
        )}

        <div className="mt-14 text-center">
          <Link
            to="/portfolio-graphic-designer-sangli"
            className="interactive inline-flex items-center gap-2 px-10 py-4 btn-amber text-lg"
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
