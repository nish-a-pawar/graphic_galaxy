import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import { blogs } from '../data/blogs';
import { ChevronRight, Calendar, Clock, User } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const foundBlog = blogs.find(b => b.slug === slug);
    setBlog(foundBlog);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (foundBlog) {
      document.title = foundBlog.seoTitle;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', foundBlog.metaDescription);
      
      let schemaScript = document.getElementById('blog-schema');
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = 'blog-schema';
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.innerHTML = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": foundBlog.seoTitle,
        "description": foundBlog.metaDescription,
        "datePublished": foundBlog.publishDate,
        "author": {
          "@type": "Organization",
          "name": "Graphic Galaxy"
        }
      });
    }
  }, [slug]);

  if (!blog) {
    return (
      <div className="bg-[#0B0F14] min-h-screen text-white flex flex-col justify-center items-center">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-black mb-4">Article Not Found</h1>
          <Link to="/blog" className="text-amber-400 hover:underline">Back to Blog</Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Related blogs (same category or recent, excluding current)
  const relatedBlogs = blogs
    .filter(b => b.slug !== slug && new Date(b.publishDate) <= new Date())
    .slice(0, 3);

  const formattedDate = new Date(blog.publishDate).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric'
  });

  return (
    <div className="bg-[#0B0F14] min-h-screen text-white selection:bg-amber-400/30 selection:text-amber-400">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-bold text-white/40 uppercase tracking-widest mb-8">
            <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/blog" className="hover:text-amber-400 transition-colors">Blogs</Link>
            <ChevronRight size={14} />
            <span className="text-amber-400 line-clamp-1">{blog.title}</span>
          </nav>

          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-xs font-bold text-white/40 uppercase tracking-widest mb-10 border-y border-white/5 py-4">
            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-amber-400" />
              {formattedDate}
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-amber-400" />
              {blog.readTime}
            </div>
            <div className="flex items-center gap-2">
              <User size={14} className="text-amber-400" />
              Graphic Galaxy
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image placeholder or actual image */}
      {blog.featuredImage && (
        <section className="px-6 mb-16">
          <div className="max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden bg-[#1F2937] aspect-video flex items-center justify-center relative">
              <img src={blog.featuredImage} alt={blog.altText} className="w-full h-full object-cover" />
          </div>
        </section>
      )}

      {/* Content */}
      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto">
          {/* Article HTML Content */}
          <div 
            className="prose prose-invert prose-amber max-w-none prose-headings:font-black prose-p:text-white/70 prose-a:text-amber-400 hover:prose-a:text-amber-300 prose-li:text-white/70"
            dangerouslySetInnerHTML={{ __html: blog.article }}
          />

          {/* FAQ */}
          {blog.faq && blog.faq.length > 0 && (
            <div className="mt-16 pt-12 border-t border-white/10">
              <h2 className="text-3xl font-black mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {blog.faq.map((item, idx) => (
                  <div key={idx} className="bg-[#111827] border border-white/5 rounded-2xl p-6">
                    <h3 className="text-xl font-bold mb-3">{item.question}</h3>
                    <p className="text-white/60 leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Article specific CTA */}
          {blog.cta && (
            <div className="mt-16 bg-gradient-to-br from-amber-400/10 to-transparent border border-amber-400/20 rounded-[2rem] p-10 text-center">
              <h3 className="text-2xl font-black mb-4">Ready to start your project?</h3>
              <p className="text-white/70 mb-8">{blog.cta}</p>
              <Link to="/contact" className="btn-amber px-8 py-3 rounded-xl font-black">Get a Free Quote</Link>
            </div>
          )}
        </div>
      </section>

      {/* Related Blogs */}
      {relatedBlogs.length > 0 && (
        <section className="py-24 px-6 bg-[#111827] border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black mb-12 text-center">Keep Reading</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedBlogs.map((post) => (
                <Link key={post.slug} to={`/blog/${post.slug}`} className="block group bg-[#0B0F14] border border-white/5 rounded-3xl p-6 hover:border-amber-400/30 transition-all">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-amber-400 transition-colors">{post.title}</h3>
                  <p className="text-white/40 text-sm line-clamp-3">{post.metaDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
      <Footer />
    </div>
  );
};

export default BlogPost;
