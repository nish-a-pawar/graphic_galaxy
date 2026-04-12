const clients = [
  'Sangli Marathon', 'Vijeta Group', 'Radhey Dental Clinic',
  'Smile Sangli Clinic', 'Shravani Organics', 'S3 Academy',
  'MTDK School', 'Duathlon Event', 'Local Businesses',
];

const MarqueeTrack = ({ reverse = false }) => (
  <div className={`flex gap-8 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} whitespace-nowrap`}>
    {[...clients, ...clients].map((name, i) => (
      <span key={i} className="inline-flex items-center gap-3 text-text-dark/40 font-semibold text-sm uppercase tracking-widest">
        <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
        {name}
      </span>
    ))}
  </div>
);

const Marquee = () => (
  <div className="py-10 border-y border-border overflow-hidden bg-white">
    <div className="flex gap-8 overflow-hidden mb-4">
      <MarqueeTrack />
    </div>
    <div className="flex gap-8 overflow-hidden">
      <MarqueeTrack reverse />
    </div>
  </div>
);

export default Marquee;
