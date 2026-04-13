import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    name: 'Rahul Patil', role: 'Business Owner, Sangli', initials: 'RP',
    color: 'from-amber-400 to-amber-600',
    text: 'Graphic Galaxy designed our logo and packaging — the quality was outstanding. They understood our brand perfectly and delivered beyond expectations.',
    rating: 5,
  },
  {
    name: 'Priya Sharma', role: 'Clinic Owner, Sangli', initials: 'PS',
    color: 'from-teal-400 to-teal-600',
    text: 'Very professional team. Our social media designs improved our online presence significantly. Fast turnaround and great communication throughout.',
    rating: 5,
  },
  {
    name: 'Amit Desai', role: 'Event Organizer, Sangli', initials: 'AD',
    color: 'from-purple-400 to-purple-600',
    text: 'Amazing event branding work. The Duathlon event designs were loved by everyone. Graphic Galaxy truly brings creativity and dedication to every project.',
    rating: 5,
  },
];

const Testimonials = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('.t-card');
    if (!cards?.length) return;
    gsap.fromTo(cards,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 82%' } }
    );
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section className="py-28 bg-[#0B0F14] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-sm font-bold text-amber-400 uppercase tracking-[0.3em] mb-4">Client Love</p>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            What They <span className="text-gradient">Say.</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-lg font-medium">
            Real words from real clients who trusted us with their brand.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="t-card group bg-[#111827] border border-[#2D3748] rounded-3xl p-8 hover:border-amber-400/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.08)] transition-all duration-500"
              style={{ opacity: 0 }}
            >
              <Quote size={32} className="text-amber-400/40 mb-6" />
              <p className="text-white/65 leading-relaxed mb-8 text-base">"{r.text}"</p>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full bg-linear-to-br ${r.color} flex items-center justify-center text-[#0B0F14] font-black text-sm shrink-0`}>
                  {r.initials}
                </div>
                <div>
                  <p className="font-bold text-white">{r.name}</p>
                  <p className="text-white/35 text-sm">{r.role}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(r.rating)].map((_, j) => (
                    <span key={j} className="text-amber-400 text-sm">★</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="https://share.google/Mo2zWhichHtggjwSW"
            target="_blank" rel="noreferrer"
            className="interactive inline-flex items-center gap-3 px-8 py-4 bg-[#111827] border border-[#2D3748] text-white rounded-full font-bold hover:border-amber-400/50 hover:text-amber-400 transition-all duration-300"
          >
            <span className="text-blue-400 font-black">G</span>
            View All Google Reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
