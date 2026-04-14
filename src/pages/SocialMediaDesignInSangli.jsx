/* eslint-disable react/prop-types */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Target, 
  Palette, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Smartphone,
  MessageSquare,
  Share2,
  MousePointer2
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { SEO_DATA, WHATSAPP_LINK } from '../constants';

// Assets
import socialCoffee from '../assets/images/social-coffee.png';
import socialTech from '../assets/images/social-tech.png';
import socialReel from '../assets/images/social-reel.png';

const SocialMediaDesignInSangli = () => {
  const seo = SEO_DATA.socialMediaDesign;

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
                <Smartphone size={16} /> Scroll-Stopping Social Media Design
              </motion.span>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl lg:text-7xl font-black mb-8 leading-[1.1]"
              >
                Social Media Design in <span className="text-gradient-amber">Sangli</span> <br /> 
                <span className="text-4xl lg:text-6xl text-white/90">Dominate Every Feed</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg lg:text-xl text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                In a world of infinite scrolling, capture the eye in a split second. We design premium social media assets that turn casual scrollers into loyal customers.
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
              >
                <a 
                  href={WHATSAPP_LINK}
                  className="btn-amber px-8 py-5 flex items-center gap-3 text-lg group"
                >
                  <Share2 className="group-hover:rotate-12 transition-transform" />
                  Get Your Feed Redesigned
                </a>
                <span className="text-gray-500 text-sm italic font-medium">Boost Your Engagement Today</span>
              </motion.div>
            </motion.div>

            {/* Hero Mockups Visual */}
            <div className="lg:w-1/2 relative h-[500px] w-full max-w-[600px]">
              <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex flex-wrap justify-center gap-4"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <motion.div 
                  className="w-48 lg:w-64 glass-dark p-2 rounded-2xl transform rotate-[-6deg] drop-shadow-2xl"
                  animate={{ rotate: [-6, -4, -6] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                    <img src={socialCoffee} alt="Instagram Post Mockup" className="rounded-xl w-full" />
                </motion.div>
                <motion.div 
                  className="w-48 lg:w-64 glass-dark p-2 rounded-2xl transform rotate-[6deg] mt-10 drop-shadow-2xl"
                  animate={{ rotate: [6, 4, 6] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                    <img src={socialTech} alt="Facebook Ad Mockup" className="rounded-xl w-full" />
                </motion.div>
                <motion.div 
                  className="w-40 lg:w-56 glass-dark p-2 rounded-2xl absolute -bottom-10 left-1/2 -translate-x-1/2 z-20 drop-shadow-2xl"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                    <img src={socialReel} alt="Reel Design Mockup" className="rounded-xl w-full" />
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
            "Instagram Posts", "Facebook Ads", "Reel Graphics", "LinkedIn Carousels",
            "Story Designs", "Cover Photos", "YouTube Thumbnails", "Social Content Kits",
            "Brand Presets", "Ad Creatives", "Engagement Posts", "Campaign Branding"
          ].map((service, idx) => (
            <div key={idx} className="flex items-center mx-10 text-2xl font-bold text-white/40 uppercase tracking-widest gap-4">
              <span className="w-2 h-2 bg-amber-500 rounded-full" />
              {service}
            </div>
          ))}
          {/* Duplicate for infinite loop */}
          {[
            "Instagram Posts", "Facebook Ads", "Reel Graphics", "LinkedIn Carousels",
            "Story Designs", "Cover Photos", "YouTube Thumbnails", "Social Content Kits",
            "Brand Presets", "Ad Creatives", "Engagement Posts", "Campaign Branding"
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
            <h2 className="text-4xl lg:text-6xl font-black mb-6">Designed for <span className="text-gradient-amber">Max Engagement</span></h2>
            <p className="text-gray-400 text-lg">We don't just design; we strategize. Each pixel is placed to drive likes, shares, and conversations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ShowcaseCard 
              image={socialCoffee}
              title="Brew & Bloom"
              type="Instagram Post"
            />
            <ShowcaseCard 
              image={socialTech}
              title="NextGen Solutions"
              type="Facebook Ad Suite"
              colSpan="lg:col-span-2"
            />
            <ShowcaseCard 
              image={socialReel}
              title="Pulse Creators"
              type="Viral Reel Cover"
            />
            <ShowcaseCard 
              image={socialCoffee}
              title="Elegance Interiors"
              type="LinkedIn Carousel"
              colSpan="lg:col-span-2"
            />
          </div>
        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section className="py-24 relative overflow-hidden bg-surface/30">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black mb-4">Our Content <span className="text-amber-500">Engine</span></h2>
            <p className="text-gray-400">Streamlined workflow for consistent brand presence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
            <ProcessStep 
              icon={<Target className="text-amber-500" />}
              step="01"
              title="Goal Setting"
              desc="Defining the objective: Awareness, Lead Gen, or Pure Engagement."
            />
            <ProcessStep 
              icon={<Palette className="text-amber-500" />}
              step="02"
              title="Visual Guide"
              desc="Establishing a consistent color palette and typography for your brand."
            />
            <ProcessStep 
              icon={<Zap className="text-amber-500" />}
              step="03"
              title="Content Design"
              desc="Creating scroll-stopping visuals tailored for each platform's algorithm."
            />
            <ProcessStep 
              icon={<BarChart3 className="text-amber-500" />}
              step="04"
              title="Review & Revise"
              desc="Ensuring every post is perfect and ready to go live."
            />
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="py-24 lg:py-40">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight">Elevate Your <br /> Digital <span className="text-amber-500 underline decoration-2 underline-offset-8">Authority</span></h2>
              <p className="text-gray-400 text-lg mb-12">
                In Sangli’s competitive market, professional social media design sets you apart from the 'amateur' look and builds instant trust.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <FeatureItem 
                  icon={<MousePointer2 size={24} />}
                  title="Algorithm Focused"
                  desc="Designs optimized for high visibility and engagement on all feeds."
                />
                <FeatureItem 
                  icon={<Sparkles size={24} />}
                  title="Visual Consistency"
                  desc="Maintain a unified brand look across all social media platforms."
                />
                <FeatureItem 
                  icon={<MessageSquare size={24} />}
                  title="Interactive Elements"
                  desc="Custom icons and graphics that encourage users to comment and share."
                />
                <FeatureItem 
                  icon={<Smartphone size={24} />}
                  title="Mobile-First"
                  desc="Pixel-perfect designs tested on all mobile screen sizes for clarity."
                />
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative z-10 glass-dark rounded-[2.5rem] p-8 lg:p-12 border border-white/10 glow-amber/5">
                <blockquote className="text-2xl font-medium italic text-gray-200 mb-8 leading-relaxed">
                  "Our social media went from average to extraordinary. Graphic Galaxy knows how to make content that actually gets people talking."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center font-bold text-gray-900">RC</div>
                  <div>
                    <div className="font-bold text-white">Radhey Clinic</div>
                    <div className="text-gray-500 text-sm italic">Satisfied Client, Sangli</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/20 rounded-full blur-[80px]" />
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 lg:py-32 px-6">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#1F2937] to-[#0B0F14] border border-white/10 p-12 lg:p-24 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-full bg-amber-500/5 blur-[120px]" />
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-7xl font-black mb-10 leading-tight">
                Ready to Stop <br /> 
                <span className="text-gradient-amber">The Scroll?</span>
              </h2>
              <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                Transform your social media into a powerful business engine. Let's create content that converts.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
                <a 
                  href={WHATSAPP_LINK} 
                  className="btn-amber px-10 py-6 text-xl flex items-center gap-4 group shadow-xl"
                >
                  <Zap className="fill-current" />
                  Launch My Campaign
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </a>
              </div>

              <div className="mt-16 flex items-center justify-center gap-8 grayscale opacity-50">
                <CheckCircle2 size={20} className="text-amber-500" />
                <span className="text-sm font-medium">Daily Engagement Boost</span>
                <span className="hidden sm:inline w-1 h-1 bg-gray-600 rounded-full" />
                <span className="text-sm font-medium">Full Post Management</span>
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
    <div className="aspect-square overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110" 
      />
    </div>
    
    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-[#0B0F14]/40 to-transparent opacity-100 group-hover:opacity-90 transition-opacity" />
    
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
    
    <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-500/30 rounded-3xl transition-all pointer-events-none" />
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

export default SocialMediaDesignInSangli;
