import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Star, Award, Users } from 'lucide-react';
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
  const floatingCardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.from(badgeRef.current, { y: 30, opacity: 0, duration: 0.8, delay: 0.2 })
        .from(headlineRef.current.querySelectorAll('.word'), {
          y: 120, opacity: 0, duration: 1, stagger: 0.08,
        }, '-=0.4')
        .from(subRef.current, { y: 40, opacity: 0, duration: 0.9 }, '-=0.6')
        .from(ctaRef.current.children, { y: 30, opacity: 0, duration: 0.8, stagger: 0.15 }, '-=0.6')
        .from(statsRef.current.children, { y: 40, opacity: 0, duration: 0.8, stagger: 0.1 }, '-=0.5')
        .from(floatingCardsRef.current.children, {
          scale: 0.7, opacity: 0, duration: 1, stagger: 0.15, ease: 'back.out(1.4)',
        }, '-=0.8');

      // Floating animation for cards
      gsap.utils.toArray('.float-card').forEach((card, i) => {
        gsap.to(card, {
          y: i % 2 === 0 ? -18 : 18,
          rotation: i % 2 === 0 ? 2 : -2,
          duration: 3 + i * 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.3,
        });
      });

      // Parallax on mouse move
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const xPct = (clientX / window.innerWidth - 0.5) * 20;
        const yPct = (clientY / window.innerHeight - 0.5) * 20;
        gsap.to('.parallax-layer', {
          x: xPct, y: yPct, duration: 1.2, ease: 'power2.out',
        });
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const words = ['Graphic', 'Designer', 'In', 'Sangli.'];

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-[#F9FAFB]">
      {/* Background mesh gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(114,224,215,0.18),transparent)]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(241,144,106,0.12),transparent_70%)]" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(#1F2937 1px,transparent 1px),linear-gradient(90deg,#1F2937 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div ref={badgeRef} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/25 text-primary-dark font-semibold text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Premium Creative Agency · Sangli
            </div>

            {/* Headline */}
            <h1 ref={headlineRef} className="text-5xl md:text-7xl lg:text-8xl font-black text-text-dark leading-[1.1] md:leading-[1.05] mb-6 overflow-hidden">
              {words.map((word, i) => (
                <span key={i} className="word inline-block mr-4">
                  {i === 3 ? <span className="text-gradient">{word}</span> : word}
                </span>
              ))}
            </h1>

            <p ref={subRef} className="text-lg text-text-dark/60 max-w-lg mb-10 leading-relaxed font-medium">
              We transform your ideas into stunning visual identities. Logos, packaging, branding — crafted with precision for businesses that want to stand out.
            </p>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-wrap gap-4 mb-14">
              <a
                href="https://wa.me/918459763568?text=Hi, I need design service"
                target="_blank"
                rel="noreferrer"
                className="interactive group px-8 py-4 bg-text-dark text-white rounded-full font-bold text-base flex items-center gap-2 hover:bg-primary transition-all duration-300 shadow-xl hover:shadow-primary/30"
              >
                Start Your Project
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#portfolio"
                className="interactive px-8 py-4 bg-white text-text-dark border-2 border-border rounded-full font-bold text-base hover:border-primary hover:text-primary transition-all duration-300"
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
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-text-dark leading-none">{value}</p>
                    <p className="text-xs text-text-dark/50 font-medium mt-0.5">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Floating Work Cards */}
          <div ref={floatingCardsRef} className="relative h-[400px] md:h-[520px] lg:h-[520px] parallax-layer">
            {/* Card 1 — top left */}
            <div className="float-card absolute top-0 left-0 w-[160px] md:w-[240px] rounded-2xl overflow-hidden shadow-2xl border border-white/60 z-20">
              <img src={logoSample} alt="Logo Design" className="w-full h-[110px] md:h-[160px] object-cover" />
              <div className="bg-white px-3 md:px-4 py-2 md:py-3">
                <p className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-wider">Logo Design</p>
                <p className="text-xs md:text-sm font-bold text-text-dark mt-0.5">Brand Identity</p>
              </div>
            </div>

            {/* Card 2 — top right */}
            <div className="float-card absolute top-8 right-0 w-[140px] md:w-[220px] rounded-2xl overflow-hidden shadow-2xl border border-white/60 z-10">
              <img src={packagingSample} alt="Packaging" className="w-full h-[100px] md:h-[150px] object-cover" />
              <div className="bg-white px-3 md:px-4 py-2 md:py-3">
                <p className="text-[10px] md:text-xs font-bold text-secondary uppercase tracking-wider">Packaging</p>
                <p className="text-xs md:text-sm font-bold text-text-dark mt-0.5">Product Design</p>
              </div>
            </div>

            {/* Card 3 — bottom left */}
            <div className="float-card absolute bottom-10 left-4 md:left-8 w-[140px] md:w-[220px] rounded-2xl overflow-hidden shadow-2xl border border-white/60 z-10">
              <img src={brandingSample} alt="Branding" className="w-full h-[100px] md:h-[150px] object-cover" />
              <div className="bg-white px-3 md:px-4 py-2 md:py-3">
                <p className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-wider">Branding</p>
                <p className="text-xs md:text-sm font-bold text-text-dark mt-0.5">Visual Identity</p>
              </div>
            </div>

            {/* Card 4 — bottom right (hidden on very small phones, shown on md up) */}
            <div className="float-card absolute bottom-0 right-4 w-[130px] md:w-[200px] rounded-2xl overflow-hidden shadow-2xl border border-white/60 z-20 hidden sm:block">
              <img src={posterSample} alt="Poster" className="w-full h-[90px] md:h-[140px] object-cover" />
              <div className="bg-white px-3 md:px-4 py-2 md:py-3">
                <p className="text-[10px] md:text-xs font-bold text-secondary uppercase tracking-wider">Poster</p>
                <p className="text-xs md:text-sm font-bold text-text-dark mt-0.5">Event Design</p>
              </div>
            </div>

            {/* Center accent blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-primary/30 to-secondary/20 rounded-full blur-3xl pointer-events-none" />

            {/* Floating badge */}
            <div className="float-card absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl px-4 md:px-5 py-2 md:py-3 border border-border flex items-center gap-2 md:gap-3 z-30">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-primary flex items-center justify-center">
                <Star size={14} className="text-white fill-white md:hidden" />
                <Star size={18} className="text-white fill-white hidden md:block" />
              </div>
              <div>
                <p className="text-[10px] text-text-dark/50 font-medium leading-none">Reviews</p>
                <p className="text-xs md:text-sm font-black text-text-dark">5.0 ★</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-dark">Scroll</span>
        <div className="w-px h-10 bg-text-dark/40 animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
