import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageSquare, Lightbulb, PenTool, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Discovery Call',
    desc: 'We start by understanding your brand, goals, and target audience through a quick consultation.',
    color: 'bg-primary/10',
    iconColor: 'text-primary',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Concept & Strategy',
    desc: 'Our team brainstorms creative directions and presents initial concepts tailored to your vision.',
    color: 'bg-secondary/10',
    iconColor: 'text-secondary',
  },
  {
    number: '03',
    icon: PenTool,
    title: 'Design & Refine',
    desc: "We craft the final design with precision, incorporating your feedback until it's perfect.",
    color: 'bg-primary/10',
    iconColor: 'text-primary',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Deliver & Launch',
    desc: 'Final files delivered in all formats you need — print-ready, web-optimized, and more.',
    color: 'bg-secondary/10',
    iconColor: 'text-secondary',
  },
];

const Process = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('.process-step');
    if (!cards?.length) return;

    gsap.fromTo(
      cards,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.18,
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
    <section className="py-28 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-sm font-bold text-primary-dark uppercase tracking-[0.3em] mb-4">How We Work</p>
          <h2 className="text-4xl md:text-6xl font-black text-text-dark mb-6">
            Our <span className="text-gradient">Process.</span>
          </h2>
          <p className="text-text-dark/50 max-w-xl mx-auto text-lg font-medium">
            A streamlined 4-step process that takes your idea from concept to reality.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="process-step group relative bg-white rounded-3xl p-8 border border-border hover:border-primary hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2"
              style={{ opacity: 0 }}
            >
              {/* Big number watermark */}
              <span className="text-7xl font-black text-text-dark/5 absolute top-4 right-6 leading-none select-none group-hover:text-primary/10 transition-colors duration-500">
                {step.number}
              </span>

              {/* Icon */}
              <div className={`w-14 h-14 ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <step.icon size={26} className={step.iconColor} />
              </div>

              <h3 className="text-xl font-bold text-text-dark mb-3">{step.title}</h3>
              <p className="text-text-dark/55 leading-relaxed text-sm">{step.desc}</p>

              {/* Connector arrow (desktop only, not on last) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10 items-center">
                  <div className="w-8 h-px bg-border" />
                  <div className="w-0 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-border" />
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
