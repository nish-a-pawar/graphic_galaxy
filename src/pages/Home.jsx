import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Palette, Box, FileText, Heart, Zap, Layout, Image, ShoppingBag, Trophy, Shirt, Camera } from 'lucide-react';
import { SERVICES } from '../constants';

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

const iconMap = {
  "Logo Design": Palette,
  "Packaging Design": Box,
  "Social Media Design": Camera,
  "Brochure Design": FileText,
  "Flyer Design": Zap,
  "Invitation Design": Heart,
  "Signage Design": Layout,
  "Nameplate Design": Image,
  "Booklet & Magazine": FileText,
  "Trophy & Sports": Trophy,
  "T-Shirt Design": Shirt,
  "Misc Design": ShoppingBag,
};

const Home = () => {
  const servicesGridRef = useRef(null);

  useEffect(() => {
    gsap.utils.toArray('.reveal').forEach((el) => {
      gsap.fromTo(el,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%' }
        }
      );
    });

    const cards = servicesGridRef.current?.querySelectorAll('.service-card-stagger');
    if (cards?.length) {
      gsap.fromTo(cards,
        { y: 100, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: servicesGridRef.current, start: 'top 80%' }
        }
      );
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="bg-[#0B0F14]">
      <Navbar />
      <Hero />
      <RecentWork />
      <Marquee />

      {/* Services */}
      <section id="services" className="w-full bg-[#0B0F14] py-28 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 reveal">
            <p className="text-sm font-bold text-amber-400 uppercase tracking-[0.3em] mb-4">Our Expertise</p>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              Design <span className="text-gradient">Services.</span>
            </h2>
            <p className="text-white/40 mt-3 max-w-2xl mx-auto text-lg font-medium">
              Professional graphic design solutions tailored for businesses in Sangli and across Maharashtra.
            </p>
          </div>

          <div ref={servicesGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <div key={i} className="service-card-stagger" style={{ opacity: 0 }}>
                <ServiceCard icon={iconMap[s.title] || Palette} title={s.title} desc={s.desc} />
              </div>
            ))}
          </div>
        </div>
      </section>


      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
