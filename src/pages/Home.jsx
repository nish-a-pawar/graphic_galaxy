import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Palette, Box, FileText, Heart, Zap, CreditCard } from 'lucide-react';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import ServiceCard from '../components/ServiceCard';
import RecentWork from '../components/RecentWork';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { title: 'Logo Design', desc: 'Unique logos that define your brand identity in Sangli and beyond. We create symbols that tell your story.', icon: Palette },
  { title: 'Packaging Design', desc: 'Eye-catching product packaging that stands out on shelves and connects with your customers.', icon: Box },
  { title: 'Brochure Design', desc: 'Professional brochures that communicate your business clearly and leave a lasting impression.', icon: FileText },
  { title: 'Invitation Design', desc: 'Beautiful invitations for weddings, corporate events & celebrations that set the perfect tone.', icon: Heart },
  { title: 'Flyer Design', desc: 'Attention-grabbing flyers for promotions and local events. Get your message across effectively.', icon: Zap },
  { title: 'Card Design', desc: 'Premium business cards and visiting cards that make a strong first impression every time.', icon: CreditCard },
];

const Home = () => {
  const servicesGridRef = useRef(null);

  useEffect(() => {
    // Reveal animations for .reveal elements
    gsap.utils.toArray('.reveal').forEach((el) => {
      gsap.fromTo(el,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        }
      );
    });

    // Service cards stagger
    const cards = servicesGridRef.current?.querySelectorAll('.service-card-stagger');
    if (cards?.length) {
      gsap.fromTo(
        cards,
        { y: 100, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: servicesGridRef.current, start: 'top 80%' },
        }
      );
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Marquee />

      {/* Services Section */}
      <section id="services" className="w-full bg-white py-28 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 reveal">
            <p className="text-sm font-bold text-primary-dark uppercase tracking-[0.3em] mb-4">Our Expertise</p>
            <h2 className="text-4xl md:text-6xl font-black text-text-dark mb-6">
              Design <span className="text-gradient">Services.</span>
            </h2>
            <p className="text-text-dark/50 mt-3 max-w-2xl mx-auto text-lg font-medium">
              Professional graphic design solutions tailored for businesses in Sangli and across Maharashtra.
            </p>
          </div>

          <div ref={servicesGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card-stagger" style={{ opacity: 0 }}>
                <ServiceCard icon={service.icon} title={service.title} desc={service.desc} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <RecentWork />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
