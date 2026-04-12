import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    // Start hidden until first mouse move
    gsap.set([dot, ring], { opacity: 0 });

    const moveCursor = (e) => {
      gsap.set([dot, ring], { opacity: 1 });
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.08, ease: 'none' });
      gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.35, ease: 'power2.out' });
    };

    const onEnter = () => {
      gsap.to(dot, { scale: 0, duration: 0.2 });
      gsap.to(ring, { scale: 2, borderColor: '#72E0D7', duration: 0.3 });
    };

    const onLeave = () => {
      gsap.to(dot, { scale: 1, duration: 0.2 });
      gsap.to(ring, { scale: 1, borderColor: '#72E0D7', duration: 0.3 });
    };

    window.addEventListener('mousemove', moveCursor);

    const attachListeners = () => {
      document.querySelectorAll('a, button, .interactive').forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    attachListeners();

    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="hidden md:block pointer-events-none select-none">
      {/* Teal dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          background: '#72E0D7',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 99999,
          pointerEvents: 'none',
        }}
      />
      {/* Teal ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '36px',
          height: '36px',
          border: '2px solid #72E0D7',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 99998,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};

export default CustomCursor;
