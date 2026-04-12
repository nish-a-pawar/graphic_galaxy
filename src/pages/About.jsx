import Header from "../components/Header";
import Footer from "../components/Footer";

const team = [
  {
    name: "Vaibhav Biradar",
    role: "Founder & Senior Graphic Designer",
    initials: "VB",
    color: "bg-green-600",
  },
  {
    name: "Nisha Pawar",
    role: "General Manager",
    initials: "NP",
    color: "bg-purple-600",
  },
  {
    name: "Tanmay Patil",
    role: "Senior Graphic Designer",
    initials: "TP",
    color: "bg-blue-600",
  },
  {
    name: "Shraddha Dongre",
    role: "Junior Graphic Designer",
    initials: "SD",
    color: "bg-pink-600",
  },
  {
    name: "Prajwal Aawti",
    role: "Intern",
    initials: "PA",
    color: "bg-amber-500",
  },
];

const About = () => {
  return (
    <>
      <Header />

      <main className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="bg-gray-900 py-20 px-6 text-center">
          <p className="text-sm font-medium text-green-400 uppercase tracking-widest mb-3">
            About Us
          </p>
          <h1 className="text-4xl font-bold text-white mb-4">Graphic Galaxy</h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            Founded in 2022 in Sangli, Maharashtra — we are a creative design
            studio helping local businesses build powerful brand identities
            through logos, packaging, and social media design.
          </p>
        </section>

        {/* Stats */}
        <section className="border-b border-gray-200">
          <div className="max-w-5xl mx-auto grid grid-cols-3 divide-x divide-gray-200">
            <div className="py-10 text-center">
              <p className="text-3xl font-bold text-green-600">2022</p>
              <p className="text-sm text-gray-500 mt-1">Founded</p>
            </div>
            <div className="py-10 text-center">
              <p className="text-3xl font-bold text-green-600">5</p>
              <p className="text-sm text-gray-500 mt-1">Team Members</p>
            </div>
            <div className="py-10 text-center">
              <p className="text-3xl font-bold text-green-600">50+</p>
              <p className="text-sm text-gray-500 mt-1">Projects Done</p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 px-6 max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium text-green-600 uppercase tracking-widest mb-3">
            Our Story
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Built for Sangli businesses
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Graphic Galaxy was founded in 2022 by Vaibhav Biradar with a simple
            vision — to provide professional and impactful design to local
            businesses in Sangli. Today our team works across logos, packaging,
            social media, brochures, and event branding. From the Duathlon event
            branding for S3 Academy Sangli to the Marathon branding for MTDK Run
            — we bring creativity and dedication to every project.
          </p>
        </section>

        {/* Team */}
        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-green-600 uppercase tracking-widest mb-2">
                The Team
              </p>
              <h2 className="text-3xl font-bold text-gray-900">
                Meet Our Team
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition"
                >
                  <div
                    className={`w-16 h-16 rounded-full ${member.color} flex items-center justify-center text-white font-bold text-lg mb-4`}
                  >
                    {member.initials}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {member.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to build your brand?
          </h2>
          <p className="text-gray-500 text-sm mb-8 max-w-md mx-auto">
            Connect with Sangli's leading graphic design studio today.
          </p>

          <a
            href="https://wa.me/918459763568?text=Hi, I need design service"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            💬 WhatsApp Us
          </a>
        </section>
        {/* Reviews Section */}
<section className="bg-gray-50 py-16 px-6">
  <div className="max-w-5xl mx-auto">

    <div className="text-center mb-12">
      <p className="text-sm font-medium text-green-600 uppercase tracking-widest mb-2">
        Testimonials
      </p>
      <h2 className="text-3xl font-bold text-gray-900">
        What Our Clients Say
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        {
          name: "Rahul Patil",
          business: "Local Business, Sangli",
          review: "Graphic Galaxy designed our logo and packaging — the quality was outstanding. Highly recommend!",
          rating: 5,
        },
        {
          name: "Priya Sharma",
          business: "Clinic Owner, Sangli",
          review: "Very professional team. Our social media designs improved our online presence significantly.",
          rating: 5,
        },
        {
          name: "Amit Desai",
          business: "Event Organizer, Sangli",
          review: "Amazing event branding work. The Duathlon event designs were loved by everyone.",
          rating: 5,
        },
      ].map((review, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
        >
          {/* Stars */}
          <div className="flex gap-1 mb-4">
            {[...Array(review.rating)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-lg">★</span>
            ))}
          </div>

          {/* Review Text */}
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            "{review.review}"
          </p>

          {/* Reviewer */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-50 border border-green-100 flex items-center justify-center text-green-600 font-bold text-sm">
              {review.name.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
              <p className="text-xs text-gray-400">{review.business}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Google Reviews Link */}
    <div className="text-center mt-10">
      
       <a href="https://share.google/Mo2zWhichHtggjwSW"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 px-6 py-3 rounded-lg text-sm font-medium hover:border-green-400 hover:text-green-600 transition"
      >
        <span className="text-blue-600 font-bold">G</span>
        View all reviews on Google
      </a>
    </div>

  </div>
</section>

        {/* Clients Section */}
        <section className="py-16 overflow-hidden">
          <div className="text-center mb-12 px-6">
            <p className="text-sm font-medium text-green-600 uppercase tracking-widest mb-2">
              Trusted By
            </p>
            <h2 className="text-3xl font-bold text-gray-900">Our Clients</h2>
            <p className="text-gray-500 mt-3 text-sm max-w-md mx-auto">
              Businesses across Sangli who trust Graphic Galaxy for their design
              needs.
            </p>
          </div>

          {/* Row 1 - Left scroll */}
          <div className="flex gap-4 mb-4 animate-scroll-left">
            {[
              { name: "Sangli Marathon", type: "Event Branding" },
              { name: "Vijeta Group", type: "Branding & Design" },
              { name: "Radhey Dental Clinic", type: "Social Media Design" },
              { name: "Smile Sangli Clinic", type: "Branding & Design" },
              { name: "Shravani Organics", type: "Packaging Design" },
              { name: "S3 Academy", type: "Event Branding" },
              { name: "MTDK School", type: "Event Branding" },
              // Duplicate for seamless loop
              { name: "Sangli Marathon", type: "Event Branding" },
              { name: "Vijeta Group", type: "Branding & Design" },
              { name: "Radhey Dental Clinic", type: "Social Media Design" },
              { name: "Smile Sangli Clinic", type: "Branding & Design" },
              { name: "Shravani Organics", type: "Packaging Design" },
              { name: "S3 Academy", type: "Event Branding" },
              { name: "MTDK School", type: "Event Branding" },
            ].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white border border-gray-200 rounded-xl px-6 py-4 shadow-sm flex items-center gap-3 min-w-fit"
              >
                <div className="w-10 h-10 rounded-full bg-green-50 border border-green-100 flex items-center justify-center text-green-600 font-bold text-sm flex-shrink-0">
                  {client.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm whitespace-nowrap">
                    {client.name}
                  </p>
                  <p className="text-xs text-gray-400 whitespace-nowrap">
                    {client.type}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 - Right scroll */}
          <div className="flex gap-4 animate-scroll-right">
            {[
              { name: "MTDK School", type: "Event Branding" },
              { name: "S3 Academy", type: "Event Branding" },
              { name: "Shravani Organics", type: "Packaging Design" },
              { name: "Smile Sangli Clinic", type: "Branding & Design" },
              { name: "Radhey Dental Clinic", type: "Social Media Design" },
              { name: "Vijeta Group", type: "Branding & Design" },
              { name: "Sangli Marathon", type: "Event Branding" },
              // Duplicate for seamless loop
              { name: "MTDK School", type: "Event Branding" },
              { name: "S3 Academy", type: "Event Branding" },
              { name: "Shravani Organics", type: "Packaging Design" },
              { name: "Smile Sangli Clinic", type: "Branding & Design" },
              { name: "Radhey Dental Clinic", type: "Social Media Design" },
              { name: "Vijeta Group", type: "Branding & Design" },
              { name: "Sangli Marathon", type: "Event Branding" },
            ].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white border border-gray-200 rounded-xl px-6 py-4 shadow-sm flex items-center gap-3 min-w-fit"
              >
                <div className="w-10 h-10 rounded-full bg-green-50 border border-green-100 flex items-center justify-center text-green-600 font-bold text-sm flex-shrink-0">
                  {client.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm whitespace-nowrap">
                    {client.name}
                  </p>
                  <p className="text-xs text-gray-400 whitespace-nowrap">
                    {client.type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;
