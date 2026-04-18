import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Heart, Zap, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InvitationSection from "../components/InvitationSection";
import { SEO_DATA, WHATSAPP_LINK, INVITATION_PROJECTS } from "../constants";

const InvitationDesignInSangli = () => {
  const seo = SEO_DATA.invitationDesign;

  return (
    <div className="bg-[#0B0F14] text-[#F9FAFB] min-h-screen font-inter selection:bg-amber-500/30 overflow-x-hidden">
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={`${seo.url}`} />
      </Helmet>

      <Navbar />

      <main>
        <section className="relative pt-32 pb-20 overflow-hidden lg:pt-48 lg:pb-32">
          <div className="absolute top-0 -left-20 w-72 h-72 bg-amber-500/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 -right-20 w-96 h-96 bg-teal-500/5 rounded-full blur-[150px] animate-pulse delay-1000" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div
                className="lg:w-1/2 text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-semibold mb-6">
                  <Heart size={16} /> Premium Invitation Design
                </span>

                <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-[1.05]">
                  Invitation Design in <span className="text-gradient-amber">Sangli</span>
                  <br />
                  <span className="text-4xl lg:text-6xl text-white/90">Beautiful Cards for Events & Weddings</span>
                </h1>

                <p className="text-lg lg:text-xl text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Beautiful invitations set the tone for your event. We design premium wedding cards, birthday invites and corporate event stationery that feels memorable and polished.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                  <a
                    href={WHATSAPP_LINK}
                    className="btn-amber px-8 py-5 flex items-center gap-3 text-lg group"
                  >
                    <Zap className="fill-current" />
                    Design My Invitation
                  </a>
                </div>
              </motion.div>

              <div className="lg:w-1/2 relative h-[500px] w-full max-w-[600px]">
                <div className="absolute inset-0 bg-amber-500/10 blur-[100px] rounded-full" />
                <motion.div
                  className="relative z-10 rounded-[2.5rem] border border-white/10 bg-[#111827] p-8 shadow-2xl"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="space-y-6">
                    <div className="rounded-[2rem] bg-[#0F172A] p-8 border border-white/10 shadow-xl">
                      <p className="text-white/50 uppercase tracking-widest text-xs mb-4">Event Invite</p>
                      <h2 className="text-3xl font-black text-white">Elegant Wedding Invitation</h2>
                      <p className="text-white/50 mt-4">Rich textures, premium detail and timeless layouts for your special day.</p>
                    </div>
                    <div className="rounded-[2rem] bg-[#111827] p-8 border border-white/10 shadow-xl">
                      <p className="text-white/50 uppercase tracking-widest text-xs mb-4">Corporate Invite</p>
                      <h2 className="text-3xl font-black text-white">Corporate Event Cards</h2>
                      <p className="text-white/50 mt-4">Professional invites for launches, seminars and brand celebrations.</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

       
        <InvitationSection INVITATION_PROJECTS={INVITATION_PROJECTS}/>

   
        

    
        <section className="py-24 px-6 bg-[#111827]">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <p className="text-sm font-bold text-amber-400 uppercase tracking-widest mb-4">Related Services</p>
            <h2 className="text-4xl lg:text-5xl font-black text-white">Pair invitations with matching design services</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Link to="/flyer-design-sangli" className="rounded-[2rem] border border-white/10 bg-[#0B0F14] p-10 hover:border-amber-400/40 transition-all">
              <p className="text-sm uppercase tracking-widest text-amber-400 mb-3">Flyer Design</p>
              <h3 className="text-2xl font-black text-white mb-4">Flyer design</h3>
              <p className="text-white/50">Use coordinated flyers and invites to make every event announcement feel seamless.</p>
            </Link>
            <Link to="/logo-design-in-sangli" className="rounded-[2rem] border border-white/10 bg-[#0B0F14] p-10 hover:border-amber-400/40 transition-all">
              <p className="text-sm uppercase tracking-widest text-amber-400 mb-3">Logo Design</p>
              <h3 className="text-2xl font-black text-white mb-4">Logo design services in Sangli</h3>
              <p className="text-white/50">Make your invitations part of a unified brand identity with a custom logo.</p>
            </Link>
          </div>
        </section>

        <section className="py-24 lg:py-32 px-6">
          <div className="container mx-auto">
            <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#1F2937] to-[#0B0F14] border border-white/10 p-12 lg:p-24 text-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-full bg-amber-500/5 blur-[120px]" />
              <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-4xl lg:text-7xl font-black mb-10 leading-tight">
                  Invite guests with style<br />
                  <span className="text-gradient-amber">and premium design</span>
                </h2>
                <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                  Ready to create wedding cards, party invites or corporate stationery that guests will love? Let’s design something unforgettable.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
                  <Link
                    to={WHATSAPP_LINK}
                    className="btn-amber px-10 py-6 text-xl flex items-center gap-4 group shadow-xl"
                  >
                    <Zap className="fill-current" />
                    Order Custom Invitations
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InvitationDesignInSangli;

