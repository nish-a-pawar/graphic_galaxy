/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  Package,
  Truck,
  Search,
  Lightbulb,
  PenTool,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  Printer,
  Clock,
  ShoppingCart

} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { SEO_DATA, WHATSAPP_LINK } from '../constants';

// Assets
import amukti from '../assets/images/Bag_Design/amukti.webp';
import anuj from '../assets/images/Bag_Design/anuj.webp';
import clothesline from '../assets/images/Bag_Design/clothesline.webp';
import crazy from '../assets/images/Bag_Design/crazy.webp';
import jk_paper_bags from '../assets/images/Bag_Design/jk_paper_bags.webp';
import taaya from '../assets/images/Bag_Design/taaya.webp';
import organicBottle from '../assets/images/organic-bottle.png';
import luxuryBox from '../assets/images/luxury-box.png';
import cosmeticPouch from '../assets/images/cosmetic-pouch.png';

const PackagingDesignInSangli = () => {
  const seo = SEO_DATA.packagingDesign;

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
      <section className="relative pt-28 pb-16 overflow-hidden lg:pt-48 lg:pb-32 bg-gradient-to-br from-black via-[#0a0a0a] to-black">

        {/* Background Glow */}
        <div className="absolute top-0 -left-20 w-72 h-72 bg-amber-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-amber-500/5 rounded-full blur-[150px]" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">

            {/* LEFT CONTENT */}
            <motion.div
              className="w-full lg:w-1/2 text-center lg:text-left"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.span
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-semibold mb-6"
              >
                <Sparkles size={16} /> Premium Packaging Experts in Sangli
              </motion.span>

              <motion.h1
                variants={fadeInUp}
                className="text-3xl sm:text-5xl lg:text-7xl font-black mb-6 sm:mb-8 leading-[1.1]"
              >
                Packaging Design in{" "}
                <span className="text-gradient-amber">Sangli</span> <br />
                <span className="text-2xl sm:text-4xl lg:text-6xl text-white/90">
                  That Sells Your Story
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-base sm:text-lg lg:text-xl text-gray-400 mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                Don't just wrap your product; elevate it. We create high-converting,
                branding-focused packaging that grabs attention and builds trust.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start"
              >
                <a
                  href={WHATSAPP_LINK}
                  className="btn-amber w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-5 flex items-center justify-center gap-3 text-base sm:text-lg group"
                >
                  <Package className="group-hover:rotate-12 transition-transform" />
                  Get Packaging Design
                </a>
                <span className="text-gray-500 text-sm italic font-medium">
                  Free Consultation & Quote
                </span>
              </motion.div>
            </motion.div>

            {/* RIGHT VISUAL */}
            <div className="w-full lg:w-1/2 relative h-[320px] sm:h-[420px] lg:h-[500px] max-w-full overflow-hidden">

              {/* Background blurred image (depth) */}
              <img
                src={organicBottle}
                alt=""
                className="absolute w-32 sm:w-48 lg:w-64 left-2 sm:left-8 lg:left-10 bottom-2 sm:bottom-8 lg:bottom-10 opacity-20 blur-md"
              />

              {/* Main Image */}
              <img
                src={luxuryBox}
                alt="Luxury Packaging Design"
                className="absolute z-30 w-52 sm:w-72 lg:w-96 left-1/2 -translate-x-1/2 top-4 sm:top-8 lg:top-10 drop-shadow-[0_25px_60px_rgba(245,158,11,0.35)]"
              />

              {/* Secondary Image */}
              <motion.img
                src={cosmeticPouch}
                alt="Cosmetic Packaging"
                className="absolute z-40 w-36 sm:w-52 lg:w-72 right-2 sm:right-0 bottom-3 sm:bottom-8 lg:bottom-16 drop-shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              />

              {/* Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-500/10 blur-[100px] rounded-full" />
            </div>
          </div>
        </div>
      </section>


      {/* --- SHOWCASE GRID --- */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-14 sm:mb-20 text-center mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mb-5 sm:mb-6">Designed to <span className="text-gradient-amber">Dominate</span> the Shelf</h2>
            <p className="text-gray-400 text-base sm:text-lg">Browse our elite packaging portfolio. We blend aesthetics with functionality to create designs that aren't just seen, but felt.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <ShowcaseCard
              image={clothesline}
              title="Nature's Essence"
              type="Organic Bottle Label"
            />
            <ShowcaseCard
              image={anuj}
              title="Anuj Jwellers"
              type="Premium Bag Design"
              colSpan="lg:col-span-2"
            />

            <ShowcaseCard
              image={jk_paper_bags}
              title="JK Paper Bags"
              type="Sustainable Tin Packaging"
              colSpan="lg:col-span-2"
            />
            <ShowcaseCard
              image={amukti}
              title="Glow & care"
              type="Cosmetic Pouch"
            />

          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10">
        <div className="container mx-auto px-4 sm:px-6">

          <h2 className="text-3xl md:text-4xl font-black mb-6 text-center">
            Our Packaging Design Specialties
          </h2>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Bag */}
           <Link to="/portfolio-graphic-designer-sangli#bag-design">
              <div className="group relative p-6 rounded-2xl border border-[#2D3748] overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/60 min-h-[170px]">

                <img
                  src={crazy}
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition" />

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-bold text-xl mb-2 text-white">
                    Bag Design
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Shopping bags, paper bags
                  </p>


                </div>

              </div>
            </Link>


            {/* BOX */}
            <Link to="/box-packaging-design-sangli">
              <div className="relative p-6 rounded-2xl border border-[#2D3748] overflow-hidden group cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/60 hover:scale-[1.02] min-h-[170px]">

                <img
                  src={luxuryBox}
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition" />

                <div className="relative z-10">
                  <h3 className="font-bold text-xl mb-2 text-white drop-shadow-lg">
                    Box Packaging
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Luxury boxes, product boxes, gift packaging
                  </p>
                </div>


              </div>
            </Link>

            {/* POUCH */}
            <Link to="/pouch-design-sangli">
              <div className="relative p-6 rounded-2xl border border-[#2D3748] overflow-hidden group cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/60 hover:scale-[1.02] min-h-[170px]">

                <img
                  src={cosmeticPouch}
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition" />

                <div className="relative z-10">
                  <h3 className="font-bold text-xl mb-2 text-white drop-shadow-lg">
                    Pouch Design
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Food pouches, cosmetic pouches
                  </p>
                </div>



              </div>
            </Link>


            {/* LABEL */}
            <Link to="/label-design-sangli">
              <div className="relative p-6 rounded-2xl border border-[#2D3748] overflow-hidden group cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/60 hover:scale-[1.02] min-h-[170px]">

                <img
                  src={luxuryBox}
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition" />

                <div className="relative z-10">
                  <h3 className="font-bold text-xl mb-2 text-white drop-shadow-lg">
                    Sticker & Labels
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Product labels, barcode stickers
                  </p>
                </div>



              </div>
            </Link>

          </div>
        </div>
      </section>



      {/* --- PROCESS SECTION --- */}
      <section className="py-16 relative overflow-hidden bg-surface/30">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black mb-4">Our Creative <span className="text-amber-500">Method</span></h2>
            <p className="text-gray-400">How we turn a concept into a shelf-ready masterpiece.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
            <ProcessStep
              icon={<Search className="text-amber-500" />}
              step="01"
              title="Market Research"
              desc="We analyze your competitors and target audience in Sangli & beyond."
            />
            <ProcessStep
              icon={<Lightbulb className="text-amber-500" />}
              step="02"
              title="Concept Art"
              desc="Creating moodboards and sketches to find the perfect visual tone."
            />
            <ProcessStep
              icon={<PenTool className="text-amber-500" />}
              step="03"
              title="Elite Design"
              desc="High-end 3D mockups and print-ready layouts tailored for you."
            />
            <ProcessStep
              icon={<Truck className="text-amber-500" />}
              step="04"
              title="Final Delivery"
              desc="You get production-ready files and expert guidance on printing."
            />
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mb-6 sm:mb-8 leading-tight">Why Smart Brands <br /> Choose <span className="text-amber-500 underline decoration-2 underline-offset-8">Graphic Galaxy</span></h2>
              <p className="text-gray-400 text-base sm:text-lg mb-10 sm:mb-12">
                We aren't just graphic designers; we are brand storytellers. We understand the Sangli local market and global design standards.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <FeatureItem
                  icon={<Zap size={24} />}
                  title="Branding-Focused"
                  desc="We don't just design labels; we build your brand's future identity."
                />
                <FeatureItem
                  icon={<Printer size={24} />}
                  title="Print-Ready"
                  desc="Files optimized for offset, flexo, and digital printing perfectly."
                />
                <FeatureItem
                  icon={<Clock size={24} />}
                  title="Fast Turnaround"
                  desc="Get your premium designs ready in as little as 3-5 business days."
                />
                <FeatureItem
                  icon={<ShoppingCart size={24} />}
                  title="Retail Ready"
                  desc="Designs that meet all legal and retail standards for barcodes and info."
                />
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative z-10 glass-dark rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-8 lg:p-12 border border-white/10 glow-amber/5">
                <blockquote className="text-lg sm:text-2xl font-medium italic text-gray-200 mb-6 sm:mb-8 leading-relaxed">
                  "Working with Graphic Galaxy changed how customers see our products. The packaging they designed made us look like a national brand overnight."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center font-bold text-gray-900">SO</div>
                  <div>
                    <div className="font-bold text-white">Shravani Organics</div>
                    <div className="text-gray-500 text-sm italic">Satisfied Client, Sangli</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/20 rounded-full blur-[80px]" />
            </div>
          </div>
        </div>
      </section>

      {/* --- RELATED SERVICES --- */}
      <section className="py-16 px-4 sm:px-6 bg-[#111827]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-amber-400 uppercase tracking-widest mb-4">Related Services</p>
            <h2 className="text-3xl lg:text-5xl font-black text-white">Complete product branding with services that work together</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Link to="/logo-design-in-sangli" className="rounded-[2rem] border border-white/10 bg-[#0B0F14] p-6 sm:p-10 hover:border-amber-400/40 transition-all">
              <p className="text-sm uppercase tracking-widest text-amber-400 mb-3">Logo Design</p>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-4">Logo design services in Sangli</h3>
              <p className="text-white/50">Build the visual foundation for your packaging and brand identity.</p>
            </Link>
            <Link to="/brochure-design-sangli" className="rounded-[2rem] border border-white/10 bg-[#0B0F14] p-6 sm:p-10 hover:border-amber-400/40 transition-all">
              <p className="text-sm uppercase tracking-widest text-amber-400 mb-3">Brochure Design</p>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-4">Brochure design</h3>
              <p className="text-white/50">Create polished printed materials that support your packaged products.</p>
            </Link>
            <Link to="/flyer-design-sangli" className="rounded-[2rem] border border-white/10 bg-[#0B0F14] p-6 sm:p-10 hover:border-amber-400/40 transition-all">
              <p className="text-sm uppercase tracking-widest text-amber-400 mb-3">Flyer Design</p>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-4">Flyer design</h3>
              <p className="text-white/50">Promote your launch or product offer with a branded flyer campaign.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* --- CLIENT STRIP --- */}
      <section className="py-16 bg-surface/20">
        <div className="container mx-auto px-6 text-center mb-10">
          <span className="text-gray-500 text-xs uppercase tracking-[0.3em] font-black">Trusted by ambitious brands</span>
        </div>
        <div className="flex animate-scroll-left opacity-30 whitespace-nowrap">
          {["Pramod Dairy", "Shravani Organics", "Radhey Dental", "Vijeta Group", "Sangli Duathlon", "MTDK School", "Smile Sangli", "Carzspa"].map((name, i) => (
            <span key={i} className="mx-12 text-3xl lg:text-4xl font-black text-white">{name}</span>
          ))}
          {/* Loop */}
          {["Pramod Dairy", "Shravani Organics", "Radhey Dental", "Vijeta Group", "Sangli Duathlon", "MTDK School", "Smile Sangli", "Carzspa"].map((name, i) => (
            <span key={`loop-${i}`} className="mx-12 text-3xl lg:text-4xl font-black text-white">{name}</span>
          ))}
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-3xl sm:rounded-[3rem] bg-gradient-to-br from-[#1F2937] to-[#0B0F14] border border-white/10 p-6 sm:p-10 lg:p-24 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-full bg-amber-500/5 blur-[120px]" />

            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-7xl font-black mb-8 sm:mb-10 leading-tight">
                Let's Build Packaging <br />
                <span className="text-gradient-amber">That Sells Itself</span>
              </h2>
              <p className="text-gray-400 text-base sm:text-xl mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
                Ready to take your product to the next level? Join the league of premium brands in Sangli with professional design.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
                <a
                  href={WHATSAPP_LINK}
                  className="btn-amber w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-6 text-base sm:text-xl flex items-center justify-center gap-3 sm:gap-4 group shadow-xl"
                >
                  <Zap className="fill-current" />
                  Start My Project Now
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </a>
                <a
                  href="/portfolio-graphic-designer-sangli"
                  className="w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-6 text-base sm:text-xl font-bold bg-white/5 hover:bg-white/10 rounded-full transition-all border border-white/5"
                >
                  View Case Studies
                </a>
              </div>

              <div className="mt-10 sm:mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-8 grayscale opacity-50">
                <CheckCircle2 size={20} className="text-amber-500" />
                <span className="text-sm font-medium">100% Satisfaction Guaranteed</span>
                <span className="hidden sm:inline w-1 h-1 bg-gray-600 rounded-full" />
                <span className="text-sm font-medium">Premium Asset Handoff</span>
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
    className={`group relative overflow-hidden rounded-2xl ${colSpan} h-[240px] sm:h-[280px] md:h-[320px] lg:h-[360px]`}
    whileHover={{ y: -10 }}
  >
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover brightness-105 contrast-105 group-hover:brightness-75 transition duration-500"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-500" />
    {/* Content */}
    <div className="absolute bottom-0 left-0 p-4 sm:p-6 translate-y-0 opacity-100 md:translate-y-10 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition duration-500">
      <h3 className="text-white text-xl font-bold">{title}</h3>
      <p className="text-gray-300 text-sm mt-1">{type}</p>

    </div>


    {/* Glowing Border Hover */}
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

export default PackagingDesignInSangli;
