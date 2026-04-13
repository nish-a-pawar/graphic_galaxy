import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageSquare, Lightbulb, PenTool, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { number: '01', icon: MessageSquare, title: 'Discovery Call',     desc: 'We start by understanding your brand, goals, and target audience through a quick consultation.', accent: 'amber' },
  { number: '02', icon: Lightbulb,     title: 'Concept & Strategy', desc: 'Our team brainstorms creative directions and presents initial concepts tailored to your vision.',  accent: 'teal'  },
  { number: '03', icon: PenTool,       title: 'Design & Refine',    desc: "We craft the final design with precision, incorporating your feedback until it's perfect.",         accent: 'amber' },
  { number: '04', icon: Rocket,        title: 'Deliver & Launch',   desc: 'Final files delivered in all formats you need — print-ready, web-optimized, and more.',             accent: 'teal'  },
];

const Process = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('.process-step');
    if (!cards?.length) return;
    gsap.fromTo(cards,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, stagger: 0.18, ease: 'power3.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 82%' } }
    );
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section className="py-28 bg-[#111827] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-sm font-bold text-amber-400 uppercase tracking-[0.3em] mb-4">How We Work</p>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Our <span className="text-gradient">Process.</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-lg font-medium">
            A streamlined 4-step process that takes your idea from concept to reality.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`process-step group relative bg-[#0B0F14] rounded-3xl p-8 border border-[#2D3748] transition-all duration-500 hover:-translate-y-2 ${
                step.accent === 'amber'
                  ? 'hover:border-amber-400/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.12)]'
                  : 'hover:border-teal-400/50 hover:shadow-[0_0_30px_rgba(114,224,215,0.12)]'
              }`}
              style={{ opacity: 0 }}
            >
              {/* Watermark number */}
              <span className={`text-7xl font-black absolute top-4 right-6 leading-none select-none opacity-[0.08] group-hover:opacity-[0.15] transition-opacity duration-500 ${
                step.accent === 'amber' ? 'text-amber-400' : 'text-teal-400'
              }`}>
                {step.number}
              </span>

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 border ${
                step.accent === 'amber'
                  ? 'bg-amber-400/10 border-amber-400/20 group-hover:bg-amber-400/20'
                  : 'bg-teal-400/10 border-teal-400/20 group-hover:bg-teal-400/20'
              }`}>
                <step.icon size={26} className={step.accent === 'amber' ? 'text-amber-400' : 'text-teal-400'} />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-white/45 leading-relaxed text-sm">{step.desc}</p>

              {/* Connector */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10 items-center">
                  <div className="w-8 h-px bg-[#2D3748]" />
                  <div className="w-0 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-[#2D3748]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
