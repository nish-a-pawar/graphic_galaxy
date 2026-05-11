import { ArrowUpRight } from 'lucide-react';

const ServiceCard = ({ title, desc, icon: Icon }) => (
  <div className="group relative bg-[#111827] p-8 rounded-3xl border border-[#2D3748] transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/60 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] flex flex-col h-full overflow-hidden">
    {/* Amber glow on hover */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.06),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />

    {/* Icon */}
    <div className="relative w-14 h-14 bg-[#1F2937] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-400/10 group-hover:scale-110 transition-all duration-500 border border-[#2D3748] group-hover:border-amber-400/30">
      <Icon size={26} className="text-teal-400 group-hover:text-amber-400 transition-colors duration-300" />
    </div>

    <h3 className="text-xl font-black text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">
      {title}
    </h3>

    <p className="text-white/45 leading-relaxed text-sm">
      {desc}
    </p>
  </div>
);

export default ServiceCard;
