/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Layers, 
  FileText, 
  Printer, 
  Search, 
  Lightbulb, 
  PenTool, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Zap,
  Globe,
  Layout,
  Book,
  Grid
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { SEO_DATA, WHATSAPP_LINK } from '../constants';

// Assets
import brochureRealEstate from '../assets/images/brochure-realestate.png';
import luxuryBox from '../assets/images/luxury-box.png';

const BookletMagazineDesignInSangli = () => {
  const seo = SEO_DATA.bookletMagazine;

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
    <div className="bg-[#0B0F14] text-[#F9FAFB] min-h-screen font-inter selection:bg-amber-500/30 overflow-x-hidden">
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
                <BookOpen size={16} /> Premium Editorial Design
              </motion.span>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl lg:text-7xl font-black mb-8 leading-[1.1]"
              >
                Booklet & Magazine <br /> 
                <span className="text-gradient-amber">Editorial Excellence</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg lg:text-xl text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                Turn your content into a visual journey. We design high-end booklets and magazines in Sangli that combine sophisticated layout with compelling storytelling.
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
              >
                <a 
                  href={WHATSAPP_LINK}
                  className="btn-amber px-8 py-5 flex items-center gap-3 text-lg group"
                >
                  <Book className="group-hover:rotate-12 transition-transform" />
                  Start My Editorial Project
                </a>
              </motion.div>
            </motion.div>

            {/* Hero Mockups Visual */}
            <div className="lg:w-1/2 relative h-[500px] w-full max-w-[600px]">
              <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img 
                  src={brochureRealEstate} 
                  alt="Premium Magazine Layout" 
                  className="absolute z-30 w-full max-w-[480px] left-1/2 -translate-x-1/2 top-10 drop-shadow-[0_20px_50px_rgba(245,158,11,0.25)] rounded-3xl border border-white/10"
                />
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
            "Annual Reports", "Product Catalogs", "Lifestyle Magazines", "Corporate Booklets",
            "Event Programs", "Tech Manuals", "Institutional Prospectus", "Brand Guidelines",
            "Recipe Books", "Portfolios", "Newsletter Layouts", "Editorial Publishing"
          ].map((service, idx) => (
            <div key={idx} className="flex items-center mx-10 text-2xl font-bold text-white/40 uppercase tracking-widest gap-4">
              <span className="w-2 h-2 bg-amber-500 rounded-full" />
              {service}
            </div>
          ))}
          {/* Duplicate */}
          {[
            "Annual Reports", "Product Catalogs", "Lifestyle Magazines", "Corporate Booklets",
            "Event Programs", "Tech Manuals", "Institutional Prospectus", "Brand Guidelines",
            "Recipe Books", "Portfolios", "Newsletter Layouts", "Editorial Publishing"
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
            <h2 className="text-4xl lg:text-6xl font-black mb-6">Designed to <span className="text-gradient-amber">Command Attention</span></h2>
            <p className="text-gray-400 text-lg">Every page is a canvas. We blend grid-based precision with creative flair for the ultimate reader experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <ShowcaseCard 
              image={brochureRealEstate}
              title="Modern Enterprise"
              type="32-Page Corporate Booklet"
            />
            <ShowcaseCard 
              image={luxuryBox}
              title="Aura Lifestyle"
              type="Premium Quarterly Magazine"
              isGrayscale={true}
            />
          </div>
        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section className="py-24 relative overflow-hidden bg-surface/30">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black mb-4">The <span className="text-amber-500">Editorial</span> Engine</h2>
            <p className="text-gray-400">Our systematic approach to complex multi-page layouts.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
            <ProcessStep 
              icon={<Grid className="text-amber-500" />}
              step="01"
              title="Grid Layout"
              desc="Establishing a solid structural foundation for consistent readability."
            />
            <ProcessStep 
              icon={<FileText className="text-amber-500" />}
              step="02"
              title="Typography"
              desc="Selecting an elite font pairing that speaks your brand voice."
            />
            <ProcessStep 
              icon={<Layout className="text-amber-500" />}
              step="03"
              title="Paging & Flow"
              desc="Curating the reader's journey through content and visuals."
            />
            <ProcessStep 
              icon={<Printer className="text-amber-500" />}
              step="04"
              title="Final Pre-Press"
              desc="Rigorous checks for resolution, colors, and binding specs."
            />
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="py-24 lg:py-40">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight">Mastery in <br /> Every <span className="text-amber-500 underline decoration-2 underline-offset-8">Single</span> Detail</h2>
              <p className="text-gray-400 text-lg mb-12">
                Booklets and magazines are tangible assets. We ensure they feel premium in the hands and look stunning on the screen.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <FeatureItem 
                  icon={<Layers size={24} />}
                  title="Grid System"
                  desc="Mathematically perfect layouts for a professional editorial look."
                />
                <FeatureItem 
                  icon={<Sparkles size={24} />}
                  title="Visual Rhythm"
                  desc="Dynamic page transitions that keep the reader engaged."
                />
                <FeatureItem 
                  icon={<Globe size={24} />}
                  title="Digital Ready"
                  desc="Interactive PDFs with hyperlinks for easy online browsing."
                />
                <FeatureItem 
                  icon={<Zap size={24} />}
                  title="Quick Iteration"
                  desc="Rapid prototyping of layouts for your fast approvals."
                />
              </div>
            </div>

            <div className="relative lg:w-1/2">
              <div className="relative z-10 glass-dark rounded-[2.5rem] p-8 lg:p-12 border border-white/10 glow-amber/5">
                <blockquote className="text-2xl font-medium italic text-gray-200 mb-8 leading-relaxed">
                  {"\""}Their magazine layout changed how our stakeholders viewed our company. It was clean, bold, and extremely professional.{"\""}
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center font-bold text-gray-900">TP</div>
                  <div>
                    <div className="font-bold text-white">Tanmay Patil</div>
                    <div className="text-gray-500 text-sm italic">Lead Editor, Sangli</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- RELATED SERVICES --- */}
      <section className="py-24 px-6 bg-[#111827]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-amber-400 uppercase tracking-widest mb-4">Related Services</p>
            <h2 className="text-4xl lg:text-5xl font-black text-white">Extend your long-format design with matching branding assets</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Link to="/brochure-design-sangli" className="rounded-[2rem] border border-white/10 bg-[#0B0F14] p-10 hover:border-amber-400/40 transition-all">
              <p className="text-sm uppercase tracking-widest text-amber-400 mb-3">Brochure Design</p>
              <h3 className="text-2xl font-black text-white mb-4">Brochure design</h3>
              <p className="text-white/50">Use booklets and magazines as an elevated extension of your brochure messaging.</p>
            </Link>
            <Link to="/logo-design-in-sangli" className="rounded-[2rem] border border-white/10 bg-[#0B0F14] p-10 hover:border-amber-400/40 transition-all">
              <p className="text-sm uppercase tracking-widest text-amber-400 mb-3">Logo Design</p>
              <h3 className="text-2xl font-black text-white mb-4">Logo design services in Sangli</h3>
              <p className="text-white/50">Anchor your editorial content with a professional logo and brand identity.</p>
            </Link>
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
                Ready to Publish <br /> 
                <span className="text-gradient-amber">Your Masterpiece?</span>
              </h2>
              <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                Whether it{"'"}s a 100-page catalog or a 12-page company profile, let{"'"}s make it iconic.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
                <a 
                  href={WHATSAPP_LINK} 
                  className="btn-amber px-10 py-6 text-xl flex items-center gap-4 group shadow-xl"
                >
                  <Zap className="fill-current" />
                  Launch My Publication
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

const ShowcaseCard = ({ image, title, type, isGrayscale = false }) => (
  <motion.div 
    className="group relative overflow-hidden rounded-3xl bg-surface/50 border border-white/5"
    whileHover={{ y: -10 }}
  >
    <div className="aspect-[16/10] overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className={`w-full h-full object-cover transition-all duration-700 scale-100 group-hover:scale-110 ${isGrayscale ? 'grayscale group-hover:grayscale-0' : 'brightness-90 group-hover:brightness-110'}`} 
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

export default BookletMagazineDesignInSangli;

