const Footer = () => {
  return (
    <>

     <div className="bg-gray-900 text-white py-10 px-6 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">

        <div>
          <h2 className="text-xl font-bold mb-2">Graphic Galaxy</h2>
          <p className="text-gray-400 text-sm max-w-xs">
            Professional graphic design services in Sangli, Maharashtra.
            Logos, packaging, social media & more.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Services</h3>
          <ul className="text-gray-400 text-sm flex flex-col gap-2">
            <li>Logo Design in Sangli</li>
            <li>Packaging Design</li>
            <li>Social Media Design</li>
            <li>Brochure Design</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <ul className="text-gray-400 text-sm flex flex-col gap-2">
            <li>Sangli, Maharashtra</li>
            <li>
              <a href="tel:+918459763568" className="hover:text-white transition">
                +91 84597 63568
              </a>
            </li>
            <li>
              
                <a href="https://wa.me/8459763568"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition">
              
                WhatsApp Us
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="text-center text-gray-600 text-xs mt-10">
        © 2025 Graphic Galaxy, Sangli. All rights reserved.
      </div>
    </div>
    </>

   
  );
};

export default Footer;