import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Trophy, X, Eye, EyeOff, RotateCcw, ArrowRight, MessageSquare, Hand, Gamepad2 } from "lucide-react";
import { WHATSAPP_LINK } from "../constants";

// Pool of 8 famous iconic brand vector logos
const BRAND_DATABASE = [
  {
    id: "nike",
    name: "Nike",
    trivia: "The Swoosh was designed in 1971 by Carolyn Davidson for just $35.",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  },
  {
    id: "apple",
    name: "Apple",
    trivia: "Designed by Rob Janoff in 1977; the bite ensures it's instantly distinct from a cherry.",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    id: "starbucks",
    name: "Starbucks",
    trivia: "Features a twin-tailed siren inspired by a 16th-century Norse woodcut.",
    image: "https://upload.wikimedia.org/wikipedia/en/d/d3/Starbucks_Corporation_Logo_2011.svg",
  },
  {
    id: "target",
    name: "Target",
    trivia: "The bullseye was introduced in 1962 and is recognized by 96% of shoppers.",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Target_Corporation_logo_%28vector%29.svg",
  },
  {
    id: "spotify",
    name: "Spotify",
    trivia: "The three curved waves symbolize streaming sound waves and musical flow.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
  },
  {
    id: "mcdonalds",
    name: "McDonald's",
    trivia: "The Golden Arches originally formed the architectural structure of early franchise stores.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg",
  },
  {
    id: "pepsi",
    name: "Pepsi",
    trivia: "The globe evolved through the 1940s, adopting red, white, and blue colors.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Pepsi_logo_2014.svg",
  },
  {
    id: "puma",
    name: "Puma",
    trivia: "The leaping puma symbolizes speed, agility, and endurance across sports.",
    image: "https://upload.wikimedia.org/wikipedia/en/3/37/Puma_AG.svg",
  },
];

// Jigsaw Hole & Key Architecture for a 3x3 Grid
// 0 = Flat border edge, 1 = Key (outward tab), -1 = Hole (inward socket)
const PIECE_CONFIGS = [
  // Row 0
  { top: 0, right: 1, bottom: -1, left: 0 },
  { top: 0, right: 1, bottom: 1, left: -1 },
  { top: 0, right: 0, bottom: -1, left: -1 },
  // Row 1
  { top: 1, right: -1, bottom: 1, left: 0 },
  { top: -1, right: 1, bottom: -1, left: 1 },
  { top: 1, right: 0, bottom: 1, left: -1 },
  // Row 2
  { top: -1, right: 1, bottom: 0, left: 0 },
  { top: 1, right: -1, bottom: 0, left: -1 },
  { top: -1, right: 0, bottom: 0, left: 1 },
];

function getEdgePath(p1, p2, type) {
  if (type === 0) {
    return `L ${p2[0]} ${p2[1]}`;
  }

  const dx = p2[0] - p1[0];
  const dy = p2[1] - p1[1];
  const tx = dx / 100;
  const ty = dy / 100;
  const nx = ty;
  const ny = -tx;
  const sign = type;

  const pt = (s, h) => {
    const x = p1[0] + s * tx + h * sign * nx;
    const y = p1[1] + s * ty + h * sign * ny;
    return `${x.toFixed(1)} ${y.toFixed(1)}`;
  };

  // Realistic interlocking jigsaw tab shape with neck and rounded bulb
  return (
    `L ${pt(35, 0)} ` +
    `C ${pt(36, -3)} ${pt(38, 4)} ${pt(40, 7)} ` +
    `C ${pt(35, 17)} ${pt(42, 20)} ${pt(50, 20)} ` +
    `C ${pt(58, 20)} ${pt(65, 17)} ${pt(60, 7)} ` +
    `C ${pt(62, 4)} ${pt(64, -3)} ${pt(65, 0)} ` +
    `L ${p2[0]} ${p2[1]}`
  );
}

function getPiecePath(pieceIdx) {
  const config = PIECE_CONFIGS[pieceIdx];
  const p0 = [0, 0];
  const p1 = [100, 0];
  const p2 = [100, 100];
  const p3 = [0, 100];

  const topEdge = getEdgePath(p0, p1, config.top);
  const rightEdge = getEdgePath(p1, p2, config.right);
  const bottomEdge = getEdgePath(p2, p3, config.bottom);
  const leftEdge = getEdgePath(p3, p0, config.left);

  return `M 0 0 ${topEdge} ${rightEdge} ${bottomEdge} ${leftEdge} Z`;
}

// Precomputed paths for each of the 9 pieces
const PIECE_PATHS = [0, 1, 2, 3, 4, 5, 6, 7, 8].map(getPiecePath);

const GRID_SIZE = 3;
const TOTAL_TILES = 9;

function generateSolvableBoard() {
  const arr = Array.from({ length: TOTAL_TILES }, (_, i) => i);
  for (let i = 0; i < 14; i++) {
    const a = Math.floor(Math.random() * TOTAL_TILES);
    const b = Math.floor(Math.random() * TOTAL_TILES);
    if (a !== b) {
      [arr[a], arr[b]] = [arr[b], arr[a]];
    }
  }
  if (arr.every((v, i) => v === i)) {
    [arr[0], arr[1]] = [arr[1], arr[0]];
  }
  return arr;
}

function pickTwoRandomBrands() {
  const shuffled = [...BRAND_DATABASE].sort(() => Math.random() - 0.5);
  return [shuffled[0], shuffled[1]];
}

export default function FamousLogoJigsawModal() {
  // Modal & Banner state
  const [showBanner, setShowBanner] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Game state
  const [activeBrands, setActiveBrands] = useState([]);
  const [round, setRound] = useState(0); // 0 = Round 1, 1 = Round 2
  const [tiles, setTiles] = useState([]);
  const [selectedTileIdx, setSelectedTileIdx] = useState(null);
  const [draggingSlot, setDraggingSlot] = useState(null);
  const [dragOverSlot, setDragOverSlot] = useState(null);
  const [moves, setMoves] = useState(0);
  const [isSolved, setIsSolved] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const touchStartSlotRef = useRef(null);
  const touchHasMovedRef = useRef(false);

  // Scroll trigger: banner appears after 300px
  useEffect(() => {
    const handleScroll = () => {
      if (isDismissed || isOpen) return;
      if (window.scrollY > 300) {
        setShowBanner(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed, isOpen]);

  // Lock body scroll when modal is open + ESC key listener
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          handleCloseModal();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const initGame = useCallback(() => {
    const brands = pickTwoRandomBrands();
    setActiveBrands(brands);
    setRound(0);
    setTiles(generateSolvableBoard());
    setSelectedTileIdx(null);
    setDraggingSlot(null);
    setDragOverSlot(null);
    setMoves(0);
    setIsSolved(false);
    setShowHint(false);
  }, []);

  const handleOpenModal = () => {
    setShowBanner(false);
    initGame();
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedTileIdx(null);
    setDraggingSlot(null);
    setDragOverSlot(null);
  };

  const handleNextRound = () => {
    setRound(1);
    setTiles(generateSolvableBoard());
    setSelectedTileIdx(null);
    setDraggingSlot(null);
    setDragOverSlot(null);
    setMoves(0);
    setIsSolved(false);
    setShowHint(false);
  };

  // Swapping core logic
  const swapTiles = (fromSlot, toSlot) => {
    if (fromSlot === toSlot) return;
    const nextTiles = [...tiles];
    const temp = nextTiles[fromSlot];
    nextTiles[fromSlot] = nextTiles[toSlot];
    nextTiles[toSlot] = temp;

    setTiles(nextTiles);
    setSelectedTileIdx(null);
    setDraggingSlot(null);
    setDragOverSlot(null);
    setMoves((m) => m + 1);

    if (nextTiles.every((val, idx) => val === idx)) {
      setIsSolved(true);
    }
  };

  // Tap-to-swap fallback logic
  const handleTileClick = (slotIdx) => {
    if (isSolved || showHint) return;

    if (selectedTileIdx === null) {
      setSelectedTileIdx(slotIdx);
    } else if (selectedTileIdx === slotIdx) {
      setSelectedTileIdx(null);
    } else {
      swapTiles(selectedTileIdx, slotIdx);
    }
  };

  // Desktop Drag & Drop Handlers
  const handleDragStart = (e, slotIdx) => {
    if (isSolved || showHint) return;
    setDraggingSlot(slotIdx);
    setSelectedTileIdx(null);
    e.dataTransfer.setData("text/plain", slotIdx.toString());
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e, slotIdx) => {
    if (isSolved || showHint) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    if (dragOverSlot !== slotIdx) {
      setDragOverSlot(slotIdx);
    }
  };

  const handleDrop = (e, targetSlotIdx) => {
    e.preventDefault();
    if (isSolved || showHint) return;
    const fromSlot = draggingSlot ?? parseInt(e.dataTransfer.getData("text/plain"), 10);
    if (!isNaN(fromSlot)) {
      swapTiles(fromSlot, targetSlotIdx);
    }
  };

  const handleDragEnd = () => {
    setDraggingSlot(null);
    setDragOverSlot(null);
  };

  // Mobile Touch Drag Handlers
  const handleTouchStart = (e, slotIdx) => {
    if (isSolved || showHint) return;
    touchStartSlotRef.current = slotIdx;
    touchHasMovedRef.current = false;
    setDraggingSlot(slotIdx);
  };

  const handleTouchMove = (e) => {
    if (isSolved || showHint || touchStartSlotRef.current === null) return;
    touchHasMovedRef.current = true;
    const touch = e.touches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY);
    const slotEl = element?.closest("[data-slot-idx]");
    if (slotEl) {
      const targetSlot = parseInt(slotEl.getAttribute("data-slot-idx"), 10);
      if (!isNaN(targetSlot)) {
        setDragOverSlot(targetSlot);
      }
    } else {
      setDragOverSlot(null);
    }
  };

  const handleTouchEnd = () => {
    const fromSlot = touchStartSlotRef.current;
    const toSlot = dragOverSlot;

    if (touchHasMovedRef.current && fromSlot !== null && toSlot !== null && fromSlot !== toSlot) {
      swapTiles(fromSlot, toSlot);
    } else if (!touchHasMovedRef.current && fromSlot !== null) {
      handleTileClick(fromSlot);
    }

    touchStartSlotRef.current = null;
    touchHasMovedRef.current = false;
    setDraggingSlot(null);
    setDragOverSlot(null);
  };

  const currentBrand = activeBrands[round] || BRAND_DATABASE[0];

  return (
    <>
      {/* ── 1. SCROLL FLOATING BANNER (With engaging pop-up animation & glow effects) ── */}
      <AnimatePresence>
        {showBanner && !isOpen && (
          <motion.aside
            key="jigsaw-floating-banner"
            initial={{ opacity: 0, y: 45, scale: 0.8 }}
            animate={{
              opacity: 1,
              y: [0, -5, 0],
              scale: 1,
              transition: {
                y: { repeat: Infinity, duration: 3.5, ease: "easeInOut" },
                scale: { type: "spring", stiffness: 400, damping: 24 },
                opacity: { duration: 0.25 },
              },
            }}
            exit={{ opacity: 0, y: 30, scale: 0.85, transition: { duration: 0.2 } }}
            whileHover={{ scale: 1.03, y: -4 }}
            aria-label="Interactive Logo Challenge"
            className="fixed bottom-6 right-6 z-[9990] max-w-[calc(100vw-2rem)] select-none"
          >
            {/* Pulsing ambient aura */}
            <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-500/35 via-amber-400/20 to-teal-400/30 blur-md animate-pulse pointer-events-none" />

            <div className="relative flex items-center bg-[#111827]/95 border border-amber-400/50 backdrop-blur-md rounded-full shadow-[0_16px_50px_rgba(0,0,0,0.7),0_0_24px_rgba(245,158,11,0.25)] p-2 sm:px-4 sm:py-2.5 overflow-hidden group">
              {/* Shimmer reflection sweep */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none rounded-full" />

              <button
                type="button"
                onClick={handleOpenModal}
                className="flex items-center gap-3 text-left focus:outline-none cursor-pointer"
              >
                {/* Icon with glowing badge & micro ping */}
                <div className="relative w-9 h-9 rounded-full bg-gradient-to-br from-amber-400/25 to-amber-500/10 border border-amber-400/30 text-amber-400 flex items-center justify-center shrink-0 shadow-inner">
                  <Sparkles size={17} className="animate-[spin_8s_linear_infinite]" />
                  <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400" />
                  </span>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-black text-white group-hover:text-amber-400 transition-colors tracking-tight">
                      Got an eye for design?
                    </span>
                    <span className="hidden sm:inline-block text-[9px] font-black uppercase tracking-wider bg-amber-400/15 text-amber-400 border border-amber-400/25 px-1.5 py-0.5 rounded-full">
                      Game
                    </span>
                  </div>
                  <span className="text-[11px] text-white/60 hidden sm:inline">
                    Drag & snap the jigsaw pieces to solve the logo!
                  </span>
                </div>

                {/* Animated CTA Pill */}
                <span className="relative bg-amber-400 hover:bg-amber-300 text-[#0B0F14] text-xs font-black px-3.5 py-1.5 rounded-full ml-1 sm:ml-2 whitespace-nowrap shadow-md shadow-amber-400/30 transition-all flex items-center gap-1 group-hover:scale-105 active:scale-95">
                  <span>Play Now</span>
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </button>

              {/* Dismiss button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowBanner(false);
                  setIsDismissed(true);
                }}
                className="text-white/40 hover:text-white hover:bg-white/10 p-1.5 ml-2 rounded-full transition-all cursor-pointer shrink-0"
                aria-label="Dismiss banner"
              >
                <X size={15} />
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* ── 2. MODAL DIALOG (High z-index, reliable close) ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="jigsaw-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-4 bg-[#0B0F14]/90 backdrop-blur-md"
            onClick={(e) => {
              if (e.target === e.currentTarget) handleCloseModal();
            }}
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              data-lenis-prevent
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm sm:max-w-md bg-[#111827] border border-[#2D3748] rounded-[2rem] p-5 sm:p-6 shadow-[0_25px_60px_rgba(0,0,0,0.85)] z-10 flex flex-col"
            >
            {/* Header with High-Contrast Direct Close Button */}
            <div className="flex items-center justify-between mb-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 font-bold text-xs uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                Round {round + 1} of 2
              </div>

              {/* Close Button: Explicit, high-contrast, stops propagation */}
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleCloseModal();
                }}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-red-500/20 border border-white/15 text-white/80 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-md active:scale-90"
                aria-label="Close modal"
              >
                <X size={18} className="stroke-[2.5]" />
              </button>
            </div>

            {/* Title / Instruction */}
            <div className="text-center mb-4">
              <h3 className="text-xl sm:text-2xl font-black text-white">
               Are you a Brand Genious ? 
            
              </h3>
              <p className="text-xs text-white/50 mt-1 flex items-center justify-center gap-1.5">
                <Hand size={13} className="text-amber-400 shrink-0" />
                <span>Drag & drop any jigsaw piece into a block to snap it!</span>
              </p>
            </div>

            {/* JIGSAW PUZZLE BOARD CONTAINER */}
            <div className="relative mx-auto w-full aspect-square max-w-[320px] rounded-2xl overflow-visible bg-[#0B0F14] border-2 border-[#2D3748] p-3 shadow-inner">
              {/* Peek Reference View */}
              {showHint ? (
                <div className="w-full h-full flex flex-col items-center justify-center bg-white rounded-xl p-4 z-10">
                  <img
                    src={currentBrand.image}
                    alt={currentBrand.name}
                    className="max-h-full max-w-full object-contain"
                  />
                  <span className="absolute bottom-5 bg-black/80 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow">
                    Reference View
                  </span>
                </div>
              ) : (
                /* 3x3 Interlocking Jigsaw Grid */
                <div
                  className="w-full h-full grid grid-cols-3 grid-rows-3 gap-0 relative"
                  role="grid"
                >
                  {tiles.map((pieceIdx, slotIdx) => {
                    const isSelected = selectedTileIdx === slotIdx;
                    const isDragging = draggingSlot === slotIdx;
                    const isDragOver = dragOverSlot === slotIdx;
                    const isCorrect = pieceIdx === slotIdx;

                    const origRow = Math.floor(pieceIdx / GRID_SIZE);
                    const origCol = pieceIdx % GRID_SIZE;

                    return (
                      <div
                        key={slotIdx}
                        data-slot-idx={slotIdx}
                        draggable={!isSolved}
                        onDragStart={(e) => handleDragStart(e, slotIdx)}
                        onDragOver={(e) => handleDragOver(e, slotIdx)}
                        onDragEnter={() => setDragOverSlot(slotIdx)}
                        onDragLeave={() => setDragOverSlot(null)}
                        onDrop={(e) => handleDrop(e, slotIdx)}
                        onDragEnd={handleDragEnd}
                        onTouchStart={(e) => handleTouchStart(e, slotIdx)}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        onClick={() => handleTileClick(slotIdx)}
                        className={`relative w-full h-full cursor-grab active:cursor-grabbing select-none transition-all duration-150 ${
                          isDragging ? "opacity-30 scale-90" : "opacity-100"
                        } ${
                          isDragOver
                            ? "scale-105 z-30 drop-shadow-[0_0_12px_rgba(114,224,215,0.7)]"
                            : isSelected
                            ? "scale-105 z-30 drop-shadow-[0_0_12px_rgba(245,158,11,0.8)]"
                            : "hover:scale-[1.02] z-10"
                        }`}
                        style={{ touchAction: "none" }}
                        aria-label={`Jigsaw block ${slotIdx + 1}`}
                      >
                        {/* Jigsaw Piece SVG with Tabs & Sockets */}
                        <svg
                          viewBox="-25 -25 150 150"
                          className="w-full h-full overflow-visible pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                        >
                          <defs>
                            <clipPath id={`jigsaw-clip-${round}-${pieceIdx}`}>
                              <path d={PIECE_PATHS[pieceIdx]} />
                            </clipPath>
                          </defs>

                          {/* White background silhouette */}
                          <path
                            d={PIECE_PATHS[pieceIdx]}
                            fill="#FFFFFF"
                          />

                          {/* Sliced Logo image aligned to piece coordinates */}
                          <g clipPath={`url(#jigsaw-clip-${round}-${pieceIdx})`}>
                            <image
                              href={currentBrand.image}
                              x={-origCol * 100}
                              y={-origRow * 100}
                              width="300"
                              height="300"
                              preserveAspectRatio="xMidYMid meet"
                            />
                          </g>

                          {/* Outer dark stroke for jigsaw seam line */}
                          <path
                            d={PIECE_PATHS[pieceIdx]}
                            fill="none"
                            stroke="rgba(0,0,0,0.35)"
                            strokeWidth="2.5"
                          />

                          {/* Active / Correct / Hover Highlight Border */}
                          <path
                            d={PIECE_PATHS[pieceIdx]}
                            fill="none"
                            stroke={
                              isDragOver
                                ? "#72E0D7"
                                : isSelected
                                ? "#F59E0B"
                                : isCorrect && !isSolved
                                ? "rgba(16,185,129,0.7)"
                                : "rgba(255,255,255,0.3)"
                            }
                            strokeWidth={isSelected || isDragOver ? "3.5" : "1.2"}
                          />
                        </svg>

                        {/* Corner indicator when piece is in perfect position */}
                        {isCorrect && !isSolved && (
                          <span className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-emerald-500 shadow-sm pointer-events-none z-20" />
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Completion Overlay */}
              {isSolved && (
                <div className="absolute inset-0 bg-[#0B0F14]/95 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center p-5 text-center z-40 animate-fadeIn">
                  <div className="w-12 h-12 rounded-2xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-2 shadow-lg shadow-amber-400/20">
                    <Trophy size={24} />
                  </div>

                  <span className="text-[10px] font-black uppercase tracking-widest text-amber-400">
                    Eagle Eye Solved!
                  </span>
                  <h4 className="text-xl font-black text-white mt-0.5">
                    {currentBrand.name}
                  </h4>
                  <p className="text-[11px] text-white/50 mb-3 px-2 line-clamp-2">
                    {currentBrand.trivia}
                  </p>

                  {/* Solved Logo Frame */}
                  <div className="w-24 h-14 bg-white rounded-xl p-2 mb-4 flex items-center justify-center shadow-md">
                    <img
                      src={currentBrand.image}
                      alt={currentBrand.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  {/* Actions for Round 1 vs Round 2 */}
                  {round === 0 ? (
                    <button
                      type="button"
                      onClick={handleNextRound}
                      className="btn-amber w-full py-2.5 px-4 text-xs font-black flex items-center justify-center gap-2 cursor-pointer shadow-md text-[#0B0F14]"
                    >
                      <span>Next Brand Challenge</span>
                      <ArrowRight size={14} />
                    </button>
                  ) : (
                    <div className="w-full flex flex-col gap-2">
                      <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-amber w-full py-2.5 px-4 text-xs font-black flex items-center justify-center gap-2 cursor-pointer shadow-md text-[#0B0F14]"
                      >
                        <MessageSquare size={14} />
                        Want an Iconic Brand? Get a Quote
                      </a>
                      <button
                        type="button"
                        onClick={initGame}
                        className="text-[11px] font-bold text-white/50 hover:text-amber-400 flex items-center justify-center gap-1 transition-colors cursor-pointer py-1"
                      >
                        <RotateCcw size={12} />
                        Play Another 2 Brands
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Footer Stats & Actions */}
            <div className="flex items-center justify-between mt-4 max-w-[320px] mx-auto w-full text-xs text-white/60">
              <div className="flex items-center gap-2">
                <span>Moves:</span>
                <span className="bg-[#0B0F14] border border-[#2D3748] px-2 py-0.5 rounded font-mono text-amber-400 font-bold">
                  {moves}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowHint((p) => !p)}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#0B0F14] border border-[#2D3748] hover:border-amber-400/40 text-white/70 hover:text-white transition-all cursor-pointer"
                  title="Peek reference logo"
                >
                  {showHint ? <EyeOff size={13} /> : <Eye size={13} />}
                  <span>{showHint ? "Hide" : "Peek"}</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setTiles(generateSolvableBoard());
                    setSelectedTileIdx(null);
                    setDraggingSlot(null);
                    setDragOverSlot(null);
                  }}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#0B0F14] border border-[#2D3748] hover:border-amber-400/40 text-white/70 hover:text-white transition-all cursor-pointer"
                  title="Shuffle puzzle"
                >
                  <RotateCcw size={13} />
                  <span>Shuffle</span>
                </button>
              </div>
            </div>

            {/* Agency Tagline */}
            <div className="mt-3 pt-2.5 border-t border-white/5 text-center text-[10px] text-white/40">
              Crafted by <strong className="text-white/70">Graphic Galaxy</strong> · Sangli, MH
            </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
