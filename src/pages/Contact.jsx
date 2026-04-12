import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const text = `Hi, I'm ${form.name}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/918459763568?text=${text}`, "_blank");
  };

  return (
    <>
      <Header />

      <main className="bg-white min-h-screen py-16 px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-green-600 uppercase tracking-widest mb-2">
            Get In Touch
          </p>
          <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
          <p className="text-gray-500 mt-3 text-sm max-w-md mx-auto">
            Looking for a graphic designer in Sangli? We'd love to hear about
            your project.
          </p>
        </div>

        {/* Equal 2 column grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Left - Form */}
          <form
            onSubmit={handleWhatsApp}
            className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col gap-5 shadow-lg"
          >
            <h2 className="text-gray-900 font-semibold text-lg">
              Send a Message
            </h2>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-600">Your Name</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Rahul Patil"
                className="bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-green-500 transition"
              />
            </div>

            <div className="flex flex-col gap-2 flex-1">
              <label className="text-sm text-gray-600">Message</label>
              <textarea
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Hi, I need a logo design for my business..."
                className="bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-green-500 transition resize-none h-40"
              />
            </div>

            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition"
            >
              Send via WhatsApp →
            </button>

            <p className="text-xs text-gray-400 text-center">
              On Submit a prefilled message will deliver to us!
            </p>
          </form>

          <div className="flex flex-col gap-4">
            <h2 className="text-gray-900 font-semibold text-lg">
              Contact Info
            </h2>

            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                Phone
              </p>

              <a
                href="tel:+918459763568"
                className="text-gray-900 font-semibold text-lg hover:text-green-600 transition"
              >
                +91 84597 63568
              </a>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                Email
              </p>

              <a
                href="mailto:graphicgalaxy2022@gmail.com"
                className="text-gray-900 font-semibold hover:text-green-600 transition break-all"
              >
                graphicgalaxy2022@gmail.com
              </a>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                Address
              </p>
              <p className="text-gray-900 font-semibold leading-relaxed">
                Near Pramod Dairy, Vishrambag,
                <br />
                Sangli – 416416, Maharashtra
              </p>
            </div>
            <div className="flex items-center content-between gap-2">
              <a
                href="https://instagram.com/galaxy_graphics_ind"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-50 border border-gray-200 hover:border-pink-400 rounded-xl p-5 transition-all duration-300 flex items-center gap-4 shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                  IG
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                    Instagram
                  </p>
                  <p className="text-gray-900 font-semibold">
                    @galaxy_graphics_ind
                  </p>
                </div>
              </a>

              <a
                href="https://share.google/Mo2zWhichHtggjwSW"
                target="_blank"
                rel="noreferrer"
                className="bg-white border border-gray-200 hover:border-blue-400 rounded-xl p-5 transition-all duration-300 flex items-center gap-4 shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                  G
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                    Google Business
                  </p>
                  <p className="text-gray-900 font-semibold">
                    {" "}
                    Find us on Google 
                  </p>
                </div>
              </a>
            </div>

            <a
              href="https://wa.me/918459763568?text=Hi, I need design service"
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white rounded-xl p-5 text-center font-semibold transition mt-auto"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
