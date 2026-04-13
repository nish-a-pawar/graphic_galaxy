import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    gsap.set([dot, ring], { opacity: 0 });

    const move = (e) => {
      gsap.set([dot, ring], { opacity: 1 });
      gsap.to(dot,  { x: e.clientX, y: e.clientY, duration: 0.08, ease: 'none' });
      gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.35, ease: 'power2.out' });
    };

    const onEnter = () => {
      gsap.to(dot,  { scale: 0, duration: 0.2 });
      gsap.to(ring, { scale: 2.2, borderColor: '#F59E0B', duration: 0.3 });
    };
    const onLeave = () => {
      gsap.to(dot,  { scale: 1, duration: 0.2 });
      gsap.to(ring, { scale: 1, borderColor: '#F59E0B', duration: 0.3 });
    };

    window.addEventListener('mousemove', move);

    const attach = () => {
      document.querySelectorAll('a, button, .interactive').forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };
    attach();
    const obs = new MutationObserver(attach);
    obs.observe(document.body, { childList: true, subtree: true });

    return () => { window.removeEventListener('mousemove', move); obs.disconnect(); };
  }, []);

  return (
    <div className="hidden md:block pointer-events-none select-none">
      <div ref={dotRef}  className="cursor-dot"  />
      <div ref={ringRef} className="cursor-ring" />
    </div>
  );
};

export default CustomCursor;
