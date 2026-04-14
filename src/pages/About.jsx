import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import { TEAM, clients, STATS, REVIEWS, GOOGLE_REVIEW } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const teamRef = useRef(null);
  const reviewsRef = useRef(null);

  useEffect(() => {
    gsap.utils.toArray('.reveal').forEach((el) => {
      gsap.fromTo(el, { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%' } });
    });

    const teamCards = teamRef.current?.querySelectorAll('.team-card');
    if (teamCards?.length) {
      gsap.fromTo(teamCards, { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: teamRef.current, start: 'top 80%' }
        });
    }

    const rCards = reviewsRef.current?.querySelectorAll('.review-card');
    if (rCards?.length) {
      gsap.fromTo(rCards, { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: reviewsRef.current, start: 'top 80%' }
        });
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="bg-[#0B0F14]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, #111827, #0B0F14)' }} />
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-amber-400/8 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-sm font-bold text-amber-400 uppercase tracking-[0.3em] mb-4">About Us</p>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            We Are <span className="text-gradient">Graphic Galaxy</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Founded in 2022 in Sangli, Maharashtra — a creative design studio helping local businesses build powerful brand identities through logos, packaging, and social media design.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#111827] border-y border-[#2D3748]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-[#2D3748]">
          {STATS.map((s, i) => (
            <div key={i} className="py-12 text-center reveal">
              <p className="text-4xl font-black text-gradient mb-2">{s.value}</p>
              <p className="text-sm text-white/40 font-semibold uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 bg-[#111827]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="text-sm font-bold text-amber-400 uppercase tracking-[0.3em] mb-4">The Team</p>
            <h2 className="text-4xl md:text-5xl font-black text-white">Meet Our Crew</h2>
          </div>
          <div ref={teamRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {TEAM.map((m, i) => (
              <div key={i} className="team-card bg-[#0B0F14] border border-[#2D3748] rounded-3xl p-6 flex flex-col items-center text-center hover:border-amber-400/50 hover:shadow-[0_0_20px_rgba(245,158,11,0.1)] transition-all duration-300 hover:-translate-y-1" style={{ opacity: 0 }}>
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-black text-lg mb-4"
                  style={{ backgroundColor: m.color }}
                >
                  {m.initials}
                </div>
                <h3 className="font-bold text-white text-sm">{m.name}</h3>
                <p className="text-xs text-white/40 mt-1 leading-relaxed">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-[#0B0F14]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="text-sm font-bold text-amber-400 uppercase tracking-[0.3em] mb-4">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-black text-white">What Clients Say</h2>
          </div>
          <div ref={reviewsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <div key={i} className="review-card bg-[#111827] border border-[#2D3748] rounded-3xl p-7 hover:border-amber-400/40 hover:shadow-[0_0_20px_rgba(245,158,11,0.08)] transition-all duration-300" style={{ opacity: 0 }}>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(r.rating || 5)].map((_, j) => <span key={j} className="text-amber-400">★</span>)}
                </div>
                <p className="text-white/55 text-sm leading-relaxed mb-6">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 font-bold text-sm">
                    {r.initials}
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{r.name}</p>
                    <p className="text-xs text-white/35">{r.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 reveal">
            <a
              href={GOOGLE_REVIEW}
              target="_blank" rel="noreferrer"
              className="interactive inline-flex items-center gap-2 border border-[#2D3748] text-white/60 px-6 py-3 rounded-full text-sm font-semibold hover:border-amber-400/50 hover:text-amber-400 transition-all duration-300"
            >
              <span className="text-blue-400 font-black">G</span>
              View all reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* Clients Marquee */}
      <section className="py-16 overflow-hidden bg-[#111827] border-y border-[#2D3748]">
        <div className="text-center mb-10 px-6 reveal">
          <p className="text-sm font-bold text-amber-400 uppercase tracking-[0.3em] mb-2">Trusted By</p>
          <h2 className="text-3xl font-black text-white">Our Clients</h2>
        </div>
        <div className="flex gap-6 mb-4 overflow-hidden">
          <div className="flex gap-6 animate-scroll-left whitespace-nowrap">
            {[...clients, ...clients].map((c, i) => (
              <div key={i} className="shrink-0 bg-[#0B0F14] border border-[#2D3748] rounded-xl px-6 py-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400 font-black text-sm shrink-0">
                  {c.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-white text-sm whitespace-nowrap">{c.name}</p>
                  <p className="text-xs text-white/35 whitespace-nowrap">{c.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default About;
