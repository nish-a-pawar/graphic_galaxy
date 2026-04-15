import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Star, Award, Users } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';
import logoSample from '../assets/images/logo_sample.png';
import packagingSample from '../assets/images/packaging_sample.png';
import brandingSample from '../assets/images/branding_sample.png';
import posterSample from '../assets/images/poster_sample.png';

const Hero = () => {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const badgeRef = useRef(null);
  const statsRef = useRef(null);
  const floatingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.from(badgeRef.current, { y: 30, opacity: 0, duration: 0.8, delay: 0.2 })
        .from(headlineRef.current.querySelectorAll('.word'), { y: 120, opacity: 0, duration: 1, stagger: 0.08 }, '-=0.4')
        .from(subRef.current, { y: 40, opacity: 0, duration: 0.9 }, '-=0.6')
        .from(ctaRef.current.children, { y: 30, opacity: 0, duration: 0.8, stagger: 0.15 }, '-=0.6')
        .from(statsRef.current.children, { y: 40, opacity: 0, duration: 0.8, stagger: 0.1 }, '-=0.5')
        .from(floatingRef.current.children, { scale: 0.7, opacity: 0, duration: 1, stagger: 0.15, ease: 'back.out(1.4)' }, '-=0.8');

      gsap.utils.toArray('.float-card').forEach((card, i) => {
        gsap.to(card, {
          y: i % 2 === 0 ? -16 : 16,
          rotation: i % 2 === 0 ? 1.5 : -1.5,
          duration: 3 + i * 0.5,
          repeat: -1, yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.3,
        });
      });

      const onMouseMove = (e) => {
        const xPct = (e.clientX / window.innerWidth - 0.5) * 18;
        const yPct = (e.clientY / window.innerHeight - 0.5) * 18;
        gsap.to('.parallax-layer', { x: xPct, y: yPct, duration: 1.2, ease: 'power2.out' });
      };
      window.addEventListener('mousemove', onMouseMove);
      return () => window.removeEventListener('mousemove', onMouseMove);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-[#0B0F14]">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% -10%, #111827 0%, #0B0F14 60%)' }} />
        {/* Amber glow top-left */}
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-amber-400/8 rounded-full blur-[120px]" />
        {/* Teal glow bottom-right */}
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-teal-400/8 rounded-full blur-[120px]" />
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(#F9FAFB 1px,transparent 1px),linear-gradient(90deg,#F9FAFB 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            {/* Badge */}
            <div ref={badgeRef} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-400 font-semibold text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              Premium Creative Agency · Sangli
            </div>

            {/* Headline */}
            <h1 ref={headlineRef} className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-6 overflow-hidden">
              {['Graphic', 'Designer', 'In'].map((w, i) => (
                <span key={i} className="word inline-block mr-4">{w}</span>
              ))}
              <span className="word inline-block text-gradient-amber">Sangli.</span>
            </h1>

            <p ref={subRef} className="text-lg text-white/55 max-w-lg mb-10 leading-relaxed font-medium">We provide expert graphic design services in Sangli — from logo design and packaging to complete brand identity — crafted to elevate your business and attract more customers.

            </p>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-wrap gap-4 mb-14">
              <a
                href={WHATSAPP_LINK}
                target="_blank" rel="noreferrer"
                className="interactive btn-amber group flex items-center gap-2 px-8 py-4 text-base"
              >
                Start Your Project
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#portfolio"
                className="interactive px-8 py-4 bg-transparent text-white border-2 border-[#2D3748] rounded-full font-bold text-base hover:border-teal-400 hover:text-teal-400 transition-all duration-300"
              >
                View Our Work
              </a>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="flex flex-wrap gap-8">
              {[
                { icon: Award, value: '50+', label: 'Projects Done' },
                { icon: Users, value: '30+', label: 'Happy Clients' },
                { icon: Star, value: '5.0', label: 'Google Rating' },
              ].map(({ icon: Icon, value, label }, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center">
                    <Icon size={18} className="text-amber-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-white leading-none">{value}</p>
                    <p className="text-xs text-white/40 font-medium mt-0.5">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Floating cards */}
          <div ref={floatingRef} className="relative h-[400px] md:h-[520px] hidden lg:block parallax-layer">
            {/* Card 1 */}
            <div className="float-card absolute top-0 left-0 w-[240px] rounded-2xl overflow-hidden shadow-2xl border border-[#2D3748] glass-dark z-20">
              <img src={logoSample} alt="Logo Design" className="w-full h-[160px] object-cover" />
              <div className="px-4 py-3">
                <p className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">Logo Design</p>
                <p className="text-sm font-bold text-white mt-0.5">Brand Identity</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="float-card absolute top-8 right-0 w-[220px] rounded-2xl overflow-hidden shadow-2xl border border-[#2D3748] glass-dark z-10">
              <img src={packagingSample} alt="Packaging" className="w-full h-[150px] object-cover" />
              <div className="px-4 py-3">
                <p className="text-[10px] font-bold text-teal-400 uppercase tracking-wider">Packaging</p>
                <p className="text-sm font-bold text-white mt-0.5">Product Design</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="float-card absolute bottom-10 left-8 w-[220px] rounded-2xl overflow-hidden shadow-2xl border border-[#2D3748] glass-dark z-10">
              <img src={brandingSample} alt="Branding" className="w-full h-[150px] object-cover" />
              <div className="px-4 py-3">
                <p className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">Branding</p>
                <p className="text-sm font-bold text-white mt-0.5">Visual Identity</p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="float-card absolute bottom-0 right-4 w-[200px] rounded-2xl overflow-hidden shadow-2xl border border-[#2D3748] glass-dark z-20">
              <img src={posterSample} alt="Poster" className="w-full h-[140px] object-cover" />
              <div className="px-4 py-3">
                <p className="text-[10px] font-bold text-teal-400 uppercase tracking-wider">Poster</p>
                <p className="text-sm font-bold text-white mt-0.5">Event Design</p>
              </div>
            </div>

            {/* Center glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />

            {/* Rating badge */}
            <div className="float-card absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass-dark rounded-2xl px-5 py-3 flex items-center gap-3 z-30 glow-amber">
              <div className="w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center">
                <Star size={18} className="text-[#0B0F14] fill-[#0B0F14]" />
              </div>
              <div>
                <p className="text-[10px] text-white/40 font-medium">Google Reviews</p>
                <p className="text-sm font-black text-white">5.0 ★★★★★</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">Scroll</span>
        <div className="w-px h-10 bg-amber-400/60 animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
