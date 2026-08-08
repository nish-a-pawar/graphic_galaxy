import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Tag, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import SEO from "../seo/SEO";
import MarkdownRenderer from "../components/MarkdownRenderer";
import { getPostBySlug, getAllPosts } from "../blog/blogUtils";

// Import images statically for Vite bundling
import logoBlogImg from "../assets/images/logo-design-process-sangli.jpg";
import packagingBlogImg from "../assets/images/packaging-design-guide.jpg";
import consultationBlogImg from "../assets/images/graphic-designer-consultation-sangli.jpg";

const imageMap = {
  "/src/assets/images/logo-design-process-sangli.jpg": logoBlogImg,
  "/src/assets/images/packaging-design-guide.jpg": packagingBlogImg,
  "/src/assets/images/graphic-designer-consultation-sangli.jpg": consultationBlogImg,
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  const allPosts = getAllPosts();

  if (!post) {
    return (
      <div className="bg-[#0B0F14] min-h-screen text-white flex flex-col justify-between">
        <Navbar />
        <div className="max-w-4xl mx-auto px-6 py-36 text-center">
          <h1 className="text-4xl font-black mb-4">Article Not Found</h1>
          <p className="text-white/50 mb-8">
            The blog article you are looking for does not exist or has been moved.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 btn-amber px-6 py-3 text-sm font-bold"
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const { metadata, content } = post;
  const imageSrc = imageMap[metadata.featuredImage] || logoBlogImg;
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 2);

  // Article / BlogPosting Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: metadata.title,
    description: metadata.description,
    image: `https://graphicgalaxystudio.netlify.app${metadata.featuredImage}`,
    datePublished: metadata.date,
    dateModified: metadata.date,
    author: {
      "@type": "Organization",
      name: metadata.author || "Graphic Galaxy",
    },
    publisher: {
      "@type": "Organization",
      name: "Graphic Galaxy",
      logo: {
        "@type": "ImageObject",
        url: "https://graphicgalaxystudio.netlify.app/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://graphicgalaxystudio.netlify.app/blog/${slug}`,
    },
  };

  return (
    <div className="bg-[#0B0F14] min-h-screen text-white">
      <SEO
        title={metadata.title}
        description={metadata.description}
        canonical={`https://graphicgalaxystudio.netlify.app/blog/${slug}`}
        schema={articleSchema}
      />
      <Navbar />

      {/* Header */}
      <article className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors mb-8"
        >
          <ArrowLeft size={16} /> Back to All Articles
        </Link>

        {/* Category & Date Meta */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-white/50 mb-6">
          <span className="px-3 py-1 bg-amber-400/10 border border-amber-400/25 text-amber-400 rounded-full font-bold uppercase tracking-wider">
            {metadata.category || "Design Guide"}
          </span>
          <div className="flex items-center gap-1.5">
            <Calendar size={14} className="text-amber-400" />
            <span>{metadata.date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <User size={14} className="text-amber-400" />
            <span>{metadata.author || "Graphic Galaxy"}</span>
          </div>
        </div>

        {/* Single H1 Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-8">
          {metadata.title}
        </h1>

        {/* Featured Image */}
        <div className="rounded-3xl overflow-hidden mb-12 border border-[#2D3748] bg-[#111827] shadow-2xl">
          <img
            src={imageSrc}
            alt={metadata.featuredImageAlt || metadata.title}
            className="w-full h-auto max-h-[480px] object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="prose prose-invert max-w-none">
          <MarkdownRenderer content={content} />
        </div>

        {/* End-of-article CTA box */}
        <div className="mt-16 bg-[#111827] border border-[#2D3748] rounded-3xl p-8 md:p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
          <h3 className="text-2xl font-black text-white mb-4">
            Need Professional Graphic Design Services in Sangli?
          </h3>
          <p className="text-white/60 text-base max-w-lg mx-auto mb-6 font-medium">
            Whether you need a custom logo, product packaging, or complete brand identity, Graphic Galaxy is here to elevate your brand.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-amber px-8 py-3 text-sm font-bold inline-flex items-center gap-2"
            >
              Contact Graphic Galaxy <ArrowRight size={16} />
            </Link>
            <Link
              to="/portfolio-graphic-designer-sangli"
              className="px-8 py-3 bg-transparent border-2 border-[#2D3748] text-white hover:border-amber-400 hover:text-amber-400 transition-all rounded-full text-sm font-bold"
            >
              View Our Portfolio
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-[#111827] border-t border-[#2D3748]">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-2xl font-black text-white mb-8 text-center">
              More Articles & Guides
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedPosts.map((rel) => {
                const relImg = imageMap[rel.featuredImage] || logoBlogImg;
                return (
                  <div
                    key={rel.slug}
                    className="group bg-[#0B0F14] border border-[#2D3748] rounded-2xl overflow-hidden hover:border-amber-400/50 transition-all p-6 flex flex-col"
                  >
                    <img
                      src={relImg}
                      alt={rel.featuredImageAlt || rel.title}
                      className="w-full h-44 object-cover rounded-xl mb-4"
                    />
                    <span className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                      {rel.category}
                    </span>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors line-clamp-2">
                      {rel.title}
                    </h4>
                    <p className="text-white/45 text-xs line-clamp-2 mb-4 font-medium">
                      {rel.description}
                    </p>
                    <Link
                      to={`/blog/${rel.slug}`}
                      className="mt-auto text-xs font-bold text-amber-400 inline-flex items-center gap-1 hover:underline"
                    >
                      Read Article <ArrowRight size={14} />
                    </Link>
                  </div>
                );
              })}
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
