import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import { BLOG_POSTS, SEO_DATA } from '../constants';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Blog = () => {
  const blogGridRef = useRef(null);

  useEffect(() => {
    // Dynamic SEO update
    if (SEO_DATA?.blog) {
      document.title = SEO_DATA.blog.title;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', SEO_DATA.blog.description);
    }

    // GSAP Animations
    const elements = gsap.utils.toArray('.reveal-blog');
    if (elements.length > 0) {
      gsap.fromTo(elements,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: ".reveal-blog", start: "top 90%" } }
      );
    }

    const cards = blogGridRef.current?.querySelectorAll('.blog-card');
    if (cards?.length) {
      gsap.fromTo(cards,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: blogGridRef.current, start: "top 85%" } }
      );
    }

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <div className="bg-[#0B0F14] min-h-screen text-white selection:bg-amber-400/30 selection:text-amber-400">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.06),transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="reveal-blog">
            <p className="text-sm font-bold text-amber-400 uppercase tracking-[0.4em] mb-6">Expert Perspectives</p>
            <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
              Graphic <span className="text-gradient">Galaxy</span> Blog.
            </h1>
            <p className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto font-medium">
              Dive into the world of design, branding, and packaging with our latest news and expert guides.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div ref={blogGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS && BLOG_POSTS.map((post) => (
              <div
                key={post.id}
                className="blog-card group relative bg-[#111827] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-amber-400/30 transition-all duration-500 flex flex-col h-full"
              >
                {/* Image Placeholder */}
                <div className="relative h-64 w-full bg-[#1F2937] overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-br from-amber-400/10 to-teal-400/10 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center text-8xl font-black text-white/5 select-none uppercase">
                    {post.category?.charAt(0)}
                  </div>
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 bg-amber-400 text-[#0B0F14] text-xs font-black rounded-full uppercase tracking-widest shadow-xl">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-10 flex flex-col flex-grow">
                  <div className="flex items-center gap-5 text-[10px] font-black text-white/20 mb-5 uppercase tracking-[0.2em]">
                    <span className="flex items-center gap-1.5"><Calendar size={12} className="text-amber-400" /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock size={12} className="text-amber-400" /> {post.readTime}</span>
                  </div>

                  <h3 className="text-2xl font-black mb-4 group-hover:text-amber-400 transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-white/40 text-sm leading-relaxed mb-10 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-8 border-t border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-amber-400/10 border border-amber-400/20 rounded-full flex items-center justify-center">
                        <User size={14} className="text-amber-400" />
                      </div>
                      <span className="text-xs font-bold text-white/60">{post.author}</span>
                    </div>
                    <button className="flex items-center gap-2 text-xs font-black text-amber-400 uppercase tracking-widest group/btn">
                      Read <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default Blog;
