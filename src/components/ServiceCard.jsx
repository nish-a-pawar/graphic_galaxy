const ServiceCard = ({ title, desc }) => {
  return (
    <div className="shadow-sm rounded-xl p-5 bg-gradient-to-br from-gray-50 to-white hover:shadow-xl transition-shadow duration-300 flex flex-col gap-3">
      <h3 className="font-semibold text-gray-900 text-base">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
      
       <a href="https://wa.me/8459763568?text=Hi, I need design service"
        target="_blank"
        rel="noreferrer"
        className="mt-auto inline-block text-sm bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition text-center"
      >
        Get Quote
      </a>
    </div>
  );
};

export default ServiceCard;