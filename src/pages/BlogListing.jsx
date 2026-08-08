import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import SEO from "../seo/SEO";
import { getAllPosts } from "../blog/blogUtils";

// Import images statically for Vite bundling
import logoBlogImg from "../assets/images/logo-design-process-sangli.jpg";
import packagingBlogImg from "../assets/images/packaging-design-guide.jpg";
import consultationBlogImg from "../assets/images/graphic-designer-consultation-sangli.jpg";

gsap.registerPlugin(ScrollTrigger);

const imageMap = {
  "/src/assets/images/logo-design-process-sangli.jpg": logoBlogImg,
  "/src/assets/images/packaging-design-guide.jpg": packagingBlogImg,
  "/src/assets/images/graphic-designer-consultation-sangli.jpg": consultationBlogImg,
};

const BlogListing = () => {
  const posts = getAllPosts();
  const gridRef = useRef(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll(".blog-card");
    if (!cards?.length) return;

    gsap.fromTo(
      cards,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="bg-[#0B0F14] min-h-screen text-white">
      <SEO
        title="Blog & Graphic Design Insights | Graphic Galaxy"
        description="Read practical guides on logo design costs, packaging design best practices, and how to choose a graphic designer in Sangli."
        canonical="https://graphicgalaxystudio.netlify.app/blog"
      />
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 50% 0%, #111827, #0B0F14)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-400 font-semibold text-sm mb-6">
            <Tag size={14} />
            Design Insights & Guides · Sangli
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Graphic Design <span className="text-gradient">Blog.</span>
          </h1>
          <p className="text-white/55 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Practical guides and strategic design insights for businesses, brands, and entrepreneurs in Sangli and Maharashtra.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {posts.map((post) => {
              const imageSrc = imageMap[post.featuredImage] || logoBlogImg;
              return (
                <div
                  key={post.slug}
                  className="blog-card group bg-[#111827] border border-[#2D3748] rounded-3xl overflow-hidden hover:border-amber-400/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] transition-all duration-500 flex flex-col h-full"
                  style={{ opacity: 0 }}
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden bg-[#1F2937]">
                    <img
                      src={imageSrc}
                      alt={post.featuredImageAlt || post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-amber-400 text-[#0B0F14] text-xs font-black rounded-full uppercase tracking-wider">
                        {post.category || "Design"}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-white/40 text-xs font-semibold mb-3">
                      <Calendar size={14} className="text-amber-400" />
                      <span>{post.date}</span>
                    </div>

                    <h2 className="text-xl font-black text-white mb-3 group-hover:text-amber-400 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-white/45 text-sm leading-relaxed mb-6 font-medium line-clamp-3">
                      {post.description}
                    </p>

                    <div className="mt-auto pt-4 border-t border-[#2D3748]/50">
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 group-hover:text-amber-300 transition-colors"
                      >
                        Read Article
                        <ArrowRight
                          size={16}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default BlogListing;
