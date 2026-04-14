import { clients } from "../constants";

const Track = ({ reverse = false }) => (
  <div
    className={`flex gap-10 ${reverse ? "animate-marquee-reverse" : "animate-marquee"
      } whitespace-nowrap`}
  >
    {[...clients, ...clients].map((client, i) => (
      <span
        key={i}
        className="inline-flex items-center gap-3 text-white/50 font-semibold text-sm uppercase tracking-widest"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
        {client.name}
      </span>
    ))}
  </div>
);

const Marquee = () => (
  <div className="py-8 border-y border-[#2D3748] overflow-hidden bg-[#111827]">
    <div className="flex gap-10 overflow-hidden mb-3">
      <Track />
    </div>
    <div className="flex gap-10 overflow-hidden">
      <Track reverse />
    </div>

  </div>
);

export default Marquee;
