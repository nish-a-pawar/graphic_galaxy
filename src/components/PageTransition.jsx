import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"
import {LOGO} from "../constants.js"

const PageTransition = () => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const prevPathname = useRef(location.pathname);
  const isInitialMount = useRef(true);

  useEffect(() => {
    // Skip transition on initial page load
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    // Trigger transition ONLY when route pathname actually changes
    if (prevPathname.current !== location.pathname) {
      prevPathname.current = location.pathname;
      setIsTransitioning(true);

      // Bottom->Top Entrance (500ms) + Brand Hold (650ms) = 1150ms before triggering top exit
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 1150);

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      {isTransitioning && (
        <motion.div
          key="frosted-glass-bottom-to-top-panel"
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1], // Smooth cinematic cubic-bezier
          }}
          className="fixed inset-0 z-[99999] pointer-events-none flex items-center justify-center bg-[#0B0F14]/70 backdrop-blur-2xl border-t border-b border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          style={{
            WebkitBackdropFilter: "blur(24px)",
            backdropFilter: "blur(24px)",
          }}
        >
          {/* Subtle glass reflection highlight lines */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

          {/* Centered Graphic Galaxy Logo — direct placement on glass without container */}
          <motion.img
            src={LOGO}
            alt="Graphic Galaxy"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              delay: 0.25, // Reveal starts during upward entry so it is fully ready for the hold phase
              duration: 0.2, // 200ms reveal
              ease: "easeOut",
            }}
            className="h-16 md:h-18 w-auto relative z-10 select-none"
           // style={{ filter: "brightness(0) invert(1)" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;
