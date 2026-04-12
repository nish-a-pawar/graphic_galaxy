import { ArrowUpRight } from 'lucide-react';

const ServiceCard = ({ title, desc, icon: Icon }) => (
  <div className="group relative bg-white p-8 rounded-4xl border border-border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40 flex flex-col h-full overflow-hidden">
    {/* Hover background glow */}
    <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-4xl" />

    {/* Icon */}
    <div className="relative w-14 h-14 bg-background rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-500">
      <Icon size={26} className="text-primary" />
    </div>

    <h3 className="text-xl font-black text-text-dark mb-3 group-hover:text-primary-dark transition-colors duration-300">
      {title}
    </h3>

    <p className="text-text-dark/55 leading-relaxed mb-8 grow text-sm">
      {desc}
    </p>

    <button className="interactive w-full py-3.5 bg-background text-text-dark rounded-2xl font-bold flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white transition-all duration-500 text-sm">
      Learn More
      <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
    </button>
  </div>
);

export default ServiceCard;
