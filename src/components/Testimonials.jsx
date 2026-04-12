import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    name: 'Rahul Patil',
    role: 'Business Owner, Sangli',
    initials: 'RP',
    color: 'from-primary to-primary-dark',
    text: 'Graphic Galaxy designed our logo and packaging — the quality was outstanding. They understood our brand perfectly and delivered beyond expectations.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Clinic Owner, Sangli',
    initials: 'PS',
    color: 'from-secondary to-orange-400',
    text: 'Very professional team. Our social media designs improved our online presence significantly. Fast turnaround and great communication throughout.',
    rating: 5,
  },
  {
    name: 'Amit Desai',
    role: 'Event Organizer, Sangli',
    initials: 'AD',
    color: 'from-purple-500 to-purple-700',
    text: 'Amazing event branding work. The Duathlon event designs were loved by everyone. Graphic Galaxy truly brings creativity and dedication to every project.',
    rating: 5,
  },
];

const Testimonials = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('.t-card');
    if (!cards?.length) return;

    gsap.fromTo(
      cards,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 82%',
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section className="py-28 bg-text-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Client Love</p>
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
              className="t-card group bg-white/5 border border-white/10 rounded-4xl p-8 hover:bg-white/10 hover:border-primary/30 transition-all duration-500"
              style={{ opacity: 0 }}
            >
              <Quote size={32} className="text-primary/50 mb-6" />
              <p className="text-white/70 leading-relaxed mb-8 text-base">"{r.text}"</p>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full bg-linear-to-br ${r.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                  {r.initials}
                </div>
                <div>
                  <p className="font-bold text-white">{r.name}</p>
                  <p className="text-white/40 text-sm">{r.role}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(r.rating)].map((_, j) => (
                    <span key={j} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="https://share.google/Mo2zWhichHtggjwSW"
            target="_blank"
            rel="noreferrer"
            className="interactive inline-flex items-center gap-3 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-full font-bold hover:bg-primary hover:border-primary transition-all duration-300"
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
