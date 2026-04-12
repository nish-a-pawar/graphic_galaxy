import Header from "../components/Header";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import Work from "../components/Work";
import Footer from "../components/Footer";

const Home = () => {
  const services = [
    { title: "Logo Design", desc: "Unique logos that define your brand identity in Sangli and beyond.", icon: "◆" },
    { title: "Packaging Design", desc: "Eye-catching product packaging that stands out on shelves.", icon: "▣" },
    { title: "Brochure Design", desc: "Professional brochures that communicate your business clearly.", icon: "◉" },
    { title: "Invitation Design", desc: "Beautiful invitations for weddings, events & celebrations.", icon: "✦" },
    { title: "Flyer Design", desc: "Attention-grabbing flyers for promotions and local events.", icon: "◈" },
  ];

  return (
    <>
      <Header />
      <Hero />
      <Work />

      <section className="w-full bg-white py-16 px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-green-400 uppercase tracking-widest mb-2">
            What We Offer
          </p>
          <h2 className="text-3xl font-bold text-black">
            Our Services
          </h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">
            Professional graphic design services for businesses in Sangli,
            Miraj, Kupwad and across Maharashtra.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              desc={service.desc}
            />
          ))}
        </div>
      </section>

      {/* Footer section च्या बाहेर */}
      <Footer />
    </>
  );
};

export default Home;