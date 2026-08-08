import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, HelpCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "What graphic design services does Graphic Galaxy offer in Sangli?",
    answer: (
      <>
        Graphic Galaxy provides complete branding and graphic design solutions including{" "}
        <Link to="/logo-design-in-sangli" className="text-amber-400 hover:underline">
          Logo Design
        </Link>
        ,{" "}
        <Link to="/packaging-design-in-sangli" className="text-amber-400 hover:underline">
          Packaging Design
        </Link>
        ,{" "}
        <Link to="/social-media-design-sangli" className="text-amber-400 hover:underline">
          Social Media Design
        </Link>
        ,{" "}
        <Link to="/brochure-design-sangli" className="text-amber-400 hover:underline">
          Brochure Design
        </Link>
        ,{" "}
        <Link to="/flyer-design-sangli" className="text-amber-400 hover:underline">
          Flyer Design
        </Link>
        , and{" "}
        <Link to="/signage-design-sangli" className="text-amber-400 hover:underline">
          Signage Board Design
        </Link>{" "}
        for businesses across Sangli, Miraj, and Kupwad.
      </>
    ),
    rawAnswer: "Graphic Galaxy provides complete branding and graphic design solutions including Logo Design, Packaging Design, Social Media Design, Brochure Design, Flyer Design, and Signage Board Design for businesses across Sangli, Miraj, and Kupwad."
  },
  {
    question: "Do you provide custom logo design for businesses?",
    answer: (
      <>
        Yes, we specialize in crafting distinctive, memorable logos and brand identities tailored to your business goals. Explore our dedicated{" "}
        <Link to="/logo-design-in-sangli" className="text-amber-400 hover:underline">
          Logo Design in Sangli
        </Link>{" "}
        page to learn more.
      </>
    ),
    rawAnswer: "Yes, we specialize in crafting distinctive, memorable logos and brand identities tailored to your business goals. Explore our dedicated Logo Design in Sangli page to learn more."
  },
  {
    question: "Do you design product packaging and retail labels?",
    answer: (
      <>
        Absolutely. We design product packaging boxes, labels, pouch packaging, bottle stickers, and luxury carry bags engineered to stand out on retail shelves. Check out our{" "}
        <Link to="/packaging-design-in-sangli" className="text-amber-400 hover:underline">
          Packaging Design in Sangli
        </Link>{" "}
        services.
      </>
    ),
    rawAnswer: "Absolutely. We design product packaging boxes, labels, pouch packaging, bottle stickers, and luxury carry bags engineered to stand out on retail shelves. Check out our Packaging Design in Sangli services."
  },
  {
    question: "What types of businesses can work with Graphic Galaxy?",
    answer: (
      <>
        We partner with local businesses, startups, agricultural brands, retail stores, healthcare clinics, educational institutes, and event organizers in Sangli, Miraj, Kupwad, and across Maharashtra. You can view our work in our{" "}
        <Link to="/portfolio-graphic-designer-sangli" className="text-amber-400 hover:underline">
          graphic design portfolio
        </Link>.
      </>
    ),
    rawAnswer: "We partner with local businesses, startups, agricultural brands, retail stores, healthcare clinics, educational institutes, and event organizers in Sangli, Miraj, Kupwad, and across Maharashtra. You can view our work in our graphic design portfolio."
  },
  {
    question: "Do you provide print-ready design files?",
    answer: "Yes, all design deliverables are provided in high-resolution, print-ready formats (including vector AI, PDF, PNG, and SVG) suitable for local commercial printing presses as well as digital media platforms.",
    rawAnswer: "Yes, all design deliverables are provided in high-resolution, print-ready formats (including vector AI, PDF, PNG, and SVG) suitable for local commercial printing presses as well as digital media platforms."
  },
  {
    question: "How can I start a design project with Graphic Galaxy?",
    answer: (
      <>
        Getting started is simple. You can reach out directly via WhatsApp or send us your requirements through our{" "}
        <Link to="/contact" className="text-amber-400 hover:underline">
          Contact Page
        </Link>
        . We will review your project details and provide a tailored consultation.
      </>
    ),
    rawAnswer: "Getting started is simple. You can reach out directly via WhatsApp or send us your requirements through our Contact Page. We will review your project details and provide a tailored consultation."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const containerRef = useRef(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const items = containerRef.current?.querySelectorAll(".faq-item");
    if (!items?.length) return;

    gsap.fromTo(
      items,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 82%",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // Matching FAQPage JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.rawAnswer,
      },
    })),
  };

  return (
    <section className="py-28 bg-[#0B0F14] overflow-hidden">
      {/* FAQ Schema Script Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-amber-400 uppercase tracking-[0.3em] mb-4">
            Got Questions?
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Frequently Asked <span className="text-gradient">Questions.</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-lg font-medium">
            Everything you need to know about working with Graphic Galaxy in Sangli.
          </p>
        </div>

        <div ref={containerRef} className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="faq-item bg-[#111827] border border-[#2D3748] rounded-2xl overflow-hidden transition-all duration-300 hover:border-amber-400/40"
                style={{ opacity: 0 }}
              >
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3 text-lg font-bold text-white">
                    <HelpCircle size={20} className="text-amber-400 shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-white/50 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-amber-400" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-white/65 leading-relaxed text-base border-t border-[#2D3748]/50 font-medium">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
