/* eslint-disable react/prop-types */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Megaphone, 
  Zap, 
  Star, 
  Target, 
  Printer, 
  PenTool, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  MousePointer2,
  Users,
  Calendar,
  FastForward,
  Heart
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { SEO_DATA, WHATSAPP_LINK } from '../constants';

// Assets
import socialReel from '../assets/images/social-reel.png'; // Using as a dynamic flyer mockup
import socialTech from '../assets/images/social-tech.png'; // Using as a corporate promo mockup

const FlyerDesignInSangli = () => {
  const seo = SEO_DATA.flyerDesign;

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div className="bg-[#0B0F14] text-[#F9FAFB] min-h-screen font-inter selection:bg-amber-500/30">
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={seo.url} />
      </Helmet>

      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 overflow-hidden lg:pt-48 lg:pb-32">
        <div className="absolute top-0 -left-20 w-72 h-72 bg-amber-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-teal-500/5 rounded-full blur-[150px] animate-pulse delay-1000" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2 text-center lg:text-left"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.span 
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-semibold mb-6"
              >
                <Megaphone size={16} /> High-Impact Flyer Design
              </motion.span>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl lg:text-7xl font-black mb-8 leading-[1.1]"
              >
                Flyer Design in <span className="text-gradient-amber">Sangli</span> <br /> 
                <span className="text-4xl lg:text-6xl text-white/90">Catch Every Eye</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg lg:text-xl text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                From street promotions to local event launches, we design flyers that demand attention and drive action. Get noticed in every corner of Sangli.
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
              >
                <a 
                  href={WHATSAPP_LINK}
                  className="btn-amber px-8 py-5 flex items-center gap-3 text-lg group"
                >
                  <Zap className="fill-current" />
                  Design My Promo Flyer
                </a>
              </motion.div>
            </motion.div>

            {/* Hero Mockups Visual */}
            <div className="lg:w-1/2 relative h-[500px] w-full max-w-[600px]">
              <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center"
              >
                <motion.div
                   className="relative z-20 w-64 lg:w-80 glass-dark p-3 rounded-3xl drop-shadow-2xl"
                   animate={{ 
                    rotate: [0, 2, -2, 0],
                    y: [0, -20, 0]
                   }}
                   transition={{ duration: 6, repeat: Infinity }}
                >
                    <img src={socialReel} alt="Modern Flyer Mockup" className="rounded-2xl w-full" />
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center font-black text-gray-900 shadow-xl border-4 border-[#0B0F14]">50% OFF</div>
                </motion.div>
                
                <motion.div 
                  className="absolute z-10 w-56 lg:w-72 glass-dark p-2 rounded-2xl right-[-20px] top-40 opacity-50 grayscale blur-[1px]"
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 8, repeat: Infinity }}
                >
                    <img src={socialTech} alt="Promo Flyer Mockup" className="rounded-xl w-full" />
                </motion.div>
              </motion.div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-500/10 blur-[100px] rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* --- SCROLLING MARQUEE --- */}
      <div className="py-12 bg-surface/50 border-y border-white/5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[
            "Event Flyers", "Product Launch Promo", "Business Handouts", "Special Offers",
            "Store Openings", "Educational Flyers", "Medical Camp Promo", "Real Estate Flyers",
            "Discount Vouchers", "Service Menus", "Recruitment Flyers", "Charity Event Flyers"
          ].map((service, idx) => (
            <div key={idx} className="flex items-center mx-10 text-2xl font-bold text-white/40 uppercase tracking-widest gap-4">
              <span className="w-2 h-2 bg-amber-500 rounded-full" />
              {service}
            </div>
          ))}
          {/* Duplicate */}
          {[
            "Event Flyers", "Product Launch Promo", "Business Handouts", "Special Offers",
            "Store Openings", "Educational Flyers", "Medical Camp Promo", "Real Estate Flyers",
            "Discount Vouchers", "Service Menus", "Recruitment Flyers", "Charity Event Flyers"
          ].map((service, idx) => (
            <div key={`dup-${idx}`} className="flex items-center mx-10 text-2xl font-bold text-white/40 uppercase tracking-widest gap-4">
              <span className="w-2 h-2 bg-amber-500 rounded-full" />
              {service}
            </div>
          ))}
        </div>
      </div>

      {/* --- SHOWCASE GRID --- */}
      <section className="py-24 lg:py-40">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-20 text-center mx-auto">
            <h2 className="text-4xl lg:text-6xl font-black mb-6">Designed to <span className="text-gradient-amber">Ignite Action</span></h2>
            <p className="text-gray-400 text-lg">We combine psychology with design to create flyers that customers don{"'"}t just see, they resonance with.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ShowcaseCard 
              image={socialReel}
              title="Neon Vibes Event"
              type="Dynamic Party Flyer"
            />
            <ShowcaseCard 
              image={socialTech}
              title="FinTech Launch"
              type="Corporate Promo Sheet"
              colSpan="lg:col-span-2"
            />
            <ShowcaseCard 
              image={socialReel}
              title="Art Fest Sangli"
              type="Cultural Event Flyer"
              colSpan="lg:col-span-3"
            />
          </div>
        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section className="py-24 relative overflow-hidden bg-surface/30">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black mb-4">The <span className="text-amber-500">Fast-Track</span> Design</h2>
            <p className="text-gray-400">Rapid design for fast-moving businesses.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
            <ProcessStep 
              icon={<Star className="text-amber-500" />}
              step="01"
              title="Hook Setting"
              desc="Finding the single most important message to grab attention."
            />
            <ProcessStep 
              icon={<PenTool className="text-amber-500" />}
              step="02"
              title="Visual Burst"
              desc="Creating a high-contrast layout that pops in a crowded space."
            />
            <ProcessStep 
              icon={<MousePointer2 className="text-amber-500" />}
              step="03"
              title="CTA Placement"
              desc="Strategically placing contacts and QR codes for easy action."
            />
            <ProcessStep 
              icon={<Printer className="text-amber-500" />}
              step="04"
              title="Final Press"
              desc="Perfectly aligned files ready for any local Sangli printer."
            />
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="py-24 lg:py-40">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight">Your Local <br /> Marketing <span className="text-amber-500 underline decoration-2 underline-offset-8">Powerhouse</span></h2>
              <p className="text-gray-400 text-lg mb-12">
                We know what works in our city. From Marathi-English bilingual layouts to vibrant local styles, we've got you covered.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <FeatureItem 
                  icon={<FastForward size={24} />}
                  title="Super Fast Delivery"
                  desc="Need a flyer by tomorrow? We handle rush orders with precision."
                />
                <FeatureItem 
                  icon={<Users size={24} />}
                  title="Targeted Design"
                  desc="Visuals that speak directly to your specific Sangli neighborhood."
                />
                <FeatureItem 
                  icon={<Calendar size={24} />}
                  title="Event Logistics"
                  desc="We optimize fonts and colors for maximum readability at a distance."
                />
                <FeatureItem 
                  icon={<Heart size={24} />}
                  title="Emotional Connect"
                  desc="Designs that build a local bond with your community."
                />
              </div>
            </div>

            <div className="relative lg:w-1/2">
              <div className="relative z-10 glass-dark rounded-[2.5rem] p-8 lg:p-12 border border-white/10 glow-amber/5">
                <blockquote className="text-2xl font-medium italic text-gray-200 mb-8 leading-relaxed">
                  "The flyers they designed for our store opening were a hit. We had more walk-ins than we expected! Highly recommended."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center font-bold text-gray-900">SK</div>
                  <div>
                    <div className="font-bold text-white">Smile Sangli</div>
                    <div className="text-gray-500 text-sm italic">Local Client Success</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 lg:py-32 px-6">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#1F2937] to-[#0B0F14] border border-white/10 p-12 lg:p-24 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-full bg-teal-500/5 blur-[120px]" />
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-7xl font-black mb-10 leading-tight">
                Get Your Promo <br /> 
                <span className="text-gradient-amber">In Their Hands</span>
              </h2>
              <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                Ready to kickstart your next campaign? Let's design a flyer that gets results.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
                <a 
                  href={WHATSAPP_LINK} 
                  className="btn-amber px-10 py-6 text-xl flex items-center gap-4 group shadow-xl"
                >
                  <Megaphone className="fill-current" />
                  Order My Flyers
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

/* --- SUB-COMPONENTS --- */

const ShowcaseCard = ({ image, title, type, colSpan = "" }) => (
  <motion.div 
    className={`group relative overflow-hidden rounded-3xl bg-surface/50 border border-white/5 ${colSpan}`}
    whileHover={{ y: -10 }}
  >
    <div className="aspect-[3/4] overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110" 
      />
    </div>
    
    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-[#0B0F14]/40 to-transparent" />
    
    <div className="absolute bottom-0 left-0 p-8 w-full">
      <div className="flex justify-between items-end">
        <div>
          <span className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-2 block">{type}</span>
          <h3 className="text-2xl font-black">{title}</h3>
        </div>
        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-amber-500 group-hover:border-amber-500 group-hover:text-gray-900 transition-all">
          <ArrowRight size={20} />
        </div>
      </div>
    </div>
  </motion.div>
);

const ProcessStep = ({ icon, step, title, desc }) => (
  <motion.div 
    className="relative p-8 rounded-3xl bg-surface/50 border border-white/5 hover:border-amber-500/20 transition-all group"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className="mb-6 flex justify-between items-start">
      <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
        {React.cloneElement(icon, { size: 28 })}
      </div>
      <span className="text-4xl font-black text-white/5 group-hover:text-amber-500/10 transition-colors uppercase">{step}</span>
    </div>
    <h3 className="text-xl font-black mb-3">{title}</h3>
    <p className="text-gray-500 leading-relaxed text-sm">{desc}</p>
  </motion.div>
);

const FeatureItem = ({ icon, title, desc }) => (
  <div className="group">
    <div className="flex items-center gap-4 mb-3">
      <div className="text-amber-500 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-black">{title}</h3>
    </div>
    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default FlyerDesignInSangli;
