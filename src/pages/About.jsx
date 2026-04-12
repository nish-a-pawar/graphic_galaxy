import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';

gsap.registerPlugin(ScrollTrigger);

const team = [
  { name: 'Vaibhav Biradar', role: 'Founder & Senior Designer', initials: 'VB', color: 'from-primary to-primary-dark' },
  { name: 'Nisha Pawar', role: 'General Manager', initials: 'NP', color: 'from-purple-500 to-purple-700' },
  { name: 'Tanmay Patil', role: 'Senior Graphic Designer', initials: 'TP', color: 'from-blue-500 to-blue-700' },
  { name: 'Shraddha Dongre', role: 'Junior Graphic Designer', initials: 'SD', color: 'from-pink-500 to-pink-700' },
  { name: 'Prajwal Aawti', role: 'Design Intern', initials: 'PA', color: 'from-secondary to-orange-400' },
];

const stats = [
  { value: '2022', label: 'Founded' },
  { value: '5+', label: 'Team Members' },
  { value: '50+', label: 'Projects Done' },
  { value: '5.0★', label: 'Google Rating' },
];

const reviews = [
  { name: 'Rahul Patil', role: 'Business Owner, Sangli', initials: 'RP', text: 'Graphic Galaxy designed our logo and packaging — the quality was outstanding. Highly recommend!', rating: 5 },
  { name: 'Priya Sharma', role: 'Clinic Owner, Sangli', initials: 'PS', text: 'Very professional team. Our social media designs improved our online presence significantly.', rating: 5 },
  { name: 'Amit Desai', role: 'Event Organizer, Sangli', initials: 'AD', text: 'Amazing event branding work. The Duathlon event designs were loved by everyone.', rating: 5 },
];

const clients = [
  { name: 'Sangli Marathon', type: 'Event Branding' },
  { name: 'Vijeta Group', type: 'Branding & Design' },
  { name: 'Radhey Dental Clinic', type: 'Social Media Design' },
  { name: 'Smile Sangli Clinic', type: 'Branding & Design' },
  { name: 'Shravani Organics', type: 'Packaging Design' },
  { name: 'S3 Academy', type: 'Event Branding' },
  { name: 'MTDK School', type: 'Event Branding' },
];

const About = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.from(el, {
          y: 50, opacity: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        });
      });
      gsap.from('.team-card', {
        y: 60, opacity: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.team-grid', start: 'top 80%' },
      });
      gsap.from('.review-card', {
        y: 60, opacity: 0, duration: 0.9, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.reviews-grid', start: 'top 80%' },
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-24 px-6 bg-[#F9FAFB] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(114,224,215,0.15),transparent)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-sm font-bold text-primary-dark uppercase tracking-[0.3em] mb-4">About Us</p>
          <h1 className="text-5xl md:text-7xl font-black text-text-dark mb-6 leading-tight">
            We Are <span className="text-gradient">Graphic Galaxy</span>
          </h1>
          <p className="text-text-dark/55 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Founded in 2022 in Sangli, Maharashtra — a creative design studio helping local businesses build powerful brand identities through logos, packaging, and social media design.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-y border-border">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {stats.map((s, i) => (
            <div key={i} className="py-12 text-center reveal">
              <p className="text-4xl font-black text-gradient mb-2">{s.value}</p>
              <p className="text-sm text-text-dark/50 font-semibold uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 bg-[#F9FAFB]">
        <div className="max-w-3xl mx-auto text-center reveal">
          <p className="text-sm font-bold text-primary-dark uppercase tracking-[0.3em] mb-4">Our Story</p>
          <h2 className="text-4xl md:text-5xl font-black text-text-dark mb-8">Built for Sangli Businesses</h2>
          <p className="text-text-dark/60 leading-relaxed text-lg">
            Graphic Galaxy was founded in 2022 by Vaibhav Biradar with a simple vision — to provide professional and impactful design to local businesses in Sangli. Today our team works across logos, packaging, social media, brochures, and event branding. From the Duathlon event branding for S3 Academy Sangli to the Marathon branding for MTDK Run — we bring creativity and dedication to every project.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="text-sm font-bold text-primary-dark uppercase tracking-[0.3em] mb-4">The Team</p>
            <h2 className="text-4xl md:text-5xl font-black text-text-dark">Meet Our Crew</h2>
          </div>
          <div className="team-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {team.map((member, i) => (
              <div key={i} className="team-card bg-[#F9FAFB] border border-border rounded-[1.5rem] p-6 flex flex-col items-center text-center hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-black text-lg mb-4`}>
                  {member.initials}
                </div>
                <h3 className="font-bold text-text-dark text-sm">{member.name}</h3>
                <p className="text-xs text-text-dark/50 mt-1 leading-relaxed">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-[#F9FAFB]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="text-sm font-bold text-primary-dark uppercase tracking-[0.3em] mb-4">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-black text-text-dark">What Clients Say</h2>
          </div>
          <div className="reviews-grid grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="review-card bg-white border border-border rounded-[1.5rem] p-7 hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(r.rating)].map((_, j) => <span key={j} className="text-yellow-400">★</span>)}
                </div>
                <p className="text-text-dark/65 text-sm leading-relaxed mb-6">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    {r.initials}
                  </div>
                  <div>
                    <p className="font-bold text-text-dark text-sm">{r.name}</p>
                    <p className="text-xs text-text-dark/40">{r.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 reveal">
            <a
              href="https://share.google/Mo2zWhichHtggjwSW"
              target="_blank"
              rel="noreferrer"
              className="interactive inline-flex items-center gap-2 border border-border text-text-dark/70 px-6 py-3 rounded-full text-sm font-semibold hover:border-primary hover:text-primary transition-all duration-300"
            >
              <span className="text-blue-600 font-black">G</span>
              View all reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* Clients Marquee */}
      <section className="py-16 overflow-hidden bg-white border-y border-border">
        <div className="text-center mb-10 px-6 reveal">
          <p className="text-sm font-bold text-primary-dark uppercase tracking-[0.3em] mb-2">Trusted By</p>
          <h2 className="text-3xl font-black text-text-dark">Our Clients</h2>
        </div>
        <div className="flex gap-6 mb-4 overflow-hidden">
          <div className="flex gap-6 animate-scroll-left whitespace-nowrap">
            {[...clients, ...clients].map((c, i) => (
              <div key={i} className="flex-shrink-0 bg-[#F9FAFB] border border-border rounded-xl px-6 py-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black text-sm flex-shrink-0">
                  {c.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-text-dark text-sm whitespace-nowrap">{c.name}</p>
                  <p className="text-xs text-text-dark/40 whitespace-nowrap">{c.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-6 overflow-hidden">
          <div className="flex gap-6 animate-scroll-right whitespace-nowrap">
            {[...clients.slice().reverse(), ...clients.slice().reverse()].map((c, i) => (
              <div key={i} className="flex-shrink-0 bg-[#F9FAFB] border border-border rounded-xl px-6 py-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary font-black text-sm flex-shrink-0">
                  {c.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-text-dark text-sm whitespace-nowrap">{c.name}</p>
                  <p className="text-xs text-text-dark/40 whitespace-nowrap">{c.type}</p>
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

export default About;
