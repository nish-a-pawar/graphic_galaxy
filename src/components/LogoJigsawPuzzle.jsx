import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, RotateCcw, Eye, EyeOff, CheckCircle2, MessageSquare, Trophy, Hand } from "lucide-react";
import { WHATSAPP_LINK } from "../constants";

const PUZZLE_LOGOS = [
  {
    id: "evercare",
    name: "Evercare",
    tagline: "Healthcare Brand Identity",
    image: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1776493347/Logo_evercare_hgshnm.webp",
  },
  {
    id: "parth",
    name: "Parth Executive",
    tagline: "Hospitality & Dining Identity",
    image: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1776493347/Logo_Parth_Executuive_aw7jb7.webp",
  },
  {
    id: "vanira",
    name: "Vanira Organics",
    tagline: "Organic Agro Brand Identity",
    image: "https://res.cloudinary.com/daxfbjcpc/image/upload/v1776493347/Logo_vanira-organics_drque1.webp",
  },
];

// Jigsaw Hole & Key Architecture for a 3x3 Grid
const PIECE_CONFIGS = [
  { top: 0, right: 1, bottom: -1, left: 0 },
  { top: 0, right: 1, bottom: 1, left: -1 },
  { top: 0, right: 0, bottom: -1, left: -1 },
  { top: 1, right: -1, bottom: 1, left: 0 },
  { top: -1, right: 1, bottom: -1, left: 1 },
  { top: 1, right: 0, bottom: 1, left: -1 },
  { top: -1, right: 1, bottom: 0, left: 0 },
  { top: 1, right: -1, bottom: 0, left: -1 },
  { top: -1, right: 0, bottom: 0, left: 1 },
];

function getEdgePath(p1, p2, type) {
  if (type === 0) return `L ${p2[0]} ${p2[1]}`;
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

const PIECE_PATHS = [0, 1, 2, 3, 4, 5, 6, 7, 8].map(getPiecePath);

const GRID_SIZE = 3;
const TOTAL_TILES = 9;

function createShuffledBoard() {
  const arr = Array.from({ length: TOTAL_TILES }, (_, i) => i);
  for (let i = 0; i < 16; i++) {
    const a = Math.floor(Math.random() * TOTAL_TILES);
    const b = Math.floor(Math.random() * TOTAL_TILES);
    if (a !== b) [arr[a], arr[b]] = [arr[b], arr[a]];
  }
  if (arr.every((val, idx) => val === idx)) {
    [arr[0], arr[1]] = [arr[1], arr[0]];
  }
  return arr;
}

export default function LogoJigsawPuzzle() {
  const [selectedLogoIdx, setSelectedLogoIdx] = useState(0);
  const [tiles, setTiles] = useState(createShuffledBoard);
  const [selectedTileIdx, setSelectedTileIdx] = useState(null);
  const [draggingSlot, setDraggingSlot] = useState(null);
  const [dragOverSlot, setDragOverSlot] = useState(null);
  const [moves, setMoves] = useState(0);
  const [isSolved, setIsSolved] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const touchStartSlotRef = useRef(null);
  const touchHasMovedRef = useRef(false);

  const currentLogo = PUZZLE_LOGOS[selectedLogoIdx];

  const swapTiles = useCallback((fromSlot, toSlot) => {
    if (fromSlot === toSlot) return;
    setTiles((prev) => {
      const next = [...prev];
      const temp = next[fromSlot];
      next[fromSlot] = next[toSlot];
      next[toSlot] = temp;
      if (next.every((v, i) => v === i)) {
        setIsSolved(true);
      }
      return next;
    });
    setSelectedTileIdx(null);
    setDraggingSlot(null);
    setDragOverSlot(null);
    setMoves((m) => m + 1);
  }, []);

  const handleTileClick = (slotIdx) => {
    if (isSolved) return;
    if (selectedTileIdx === null) {
      setSelectedTileIdx(slotIdx);
    } else if (selectedTileIdx === slotIdx) {
      setSelectedTileIdx(null);
    } else {
      swapTiles(selectedTileIdx, slotIdx);
    }
  };

  // Drag handlers
  const handleDragStart = (e, slotIdx) => {
    if (isSolved || showHint) return;
    setDraggingSlot(slotIdx);
    setSelectedTileIdx(null);
    e.dataTransfer.setData("text/plain", slotIdx.toString());
  };

  const handleDragOver = (e, slotIdx) => {
    e.preventDefault();
    if (dragOverSlot !== slotIdx) setDragOverSlot(slotIdx);
  };

  const handleDrop = (e, targetSlotIdx) => {
    e.preventDefault();
    const fromSlot = draggingSlot ?? parseInt(e.dataTransfer.getData("text/plain"), 10);
    if (!isNaN(fromSlot)) swapTiles(fromSlot, targetSlotIdx);
  };

  // Touch handlers
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
      if (!isNaN(targetSlot)) setDragOverSlot(targetSlot);
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

  const handleReset = (newLogoIdx = selectedLogoIdx) => {
    setSelectedLogoIdx(newLogoIdx);
    setTiles(createShuffledBoard());
    setSelectedTileIdx(null);
    setDraggingSlot(null);
    setDragOverSlot(null);
    setMoves(0);
    setIsSolved(false);
    setShowHint(false);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-amber-400/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-teal-400/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative bg-[#111827] border border-[#2D3748] rounded-[2.5rem] p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-xl">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 font-bold text-xs tracking-wider uppercase mb-3">
            <Sparkles size={14} className="animate-spin-slow" />
            Interactive Jigsaw Challenge
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Logo Jigsaw & Brand ID
          </h3>
          <p className="text-white/50 text-xs sm:text-sm mt-2 max-w-md mx-auto flex items-center justify-center gap-1.5">
            <Hand size={14} className="text-amber-400 shrink-0" />
            <span>Drag & snap jigsaw pieces into blocks to complete the logo!</span>
          </p>
        </div>

        {/* Logo Selector Pill Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {PUZZLE_LOGOS.map((logo, idx) => (
            <button
              key={logo.id}
              onClick={() => handleReset(idx)}
              className={`interactive px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedLogoIdx === idx
                  ? "bg-amber-400 text-[#0B0F14] shadow-md shadow-amber-400/20"
                  : "bg-[#0B0F14] text-white/60 border border-[#2D3748] hover:border-amber-400/40 hover:text-white"
              }`}
            >
              {logo.name}
            </button>
          ))}
        </div>

        {/* Puzzle Board Viewport */}
        <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px] aspect-square rounded-2xl overflow-visible border-2 border-[#2D3748] bg-[#0B0F14] p-3 shadow-inner">
          <AnimatePresence mode="wait">
            {showHint ? (
              <motion.div
                key="hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-full flex flex-col items-center justify-center bg-white rounded-xl p-4 z-10"
              >
                <img
                  src={currentLogo.image}
                  alt={currentLogo.name}
                  className="max-h-full max-w-full object-contain"
                />
                <span className="absolute bottom-5 bg-black/80 text-white text-[11px] font-semibold px-3 py-1 rounded-full shadow">
                  Original Reference View
                </span>
              </motion.div>
            ) : (
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
                      onDragEnd={() => {
                        setDraggingSlot(null);
                        setDragOverSlot(null);
                      }}
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
                      aria-label={`Jigsaw slot ${slotIdx + 1}`}
                    >
                      <svg
                        viewBox="-25 -25 150 150"
                        className="w-full h-full overflow-visible pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                      >
                        <defs>
                          <clipPath id={`local-jigsaw-clip-${selectedLogoIdx}-${pieceIdx}`}>
                            <path d={PIECE_PATHS[pieceIdx]} />
                          </clipPath>
                        </defs>

                        {/* Silhouette */}
                        <path d={PIECE_PATHS[pieceIdx]} fill="#FFFFFF" />

                        {/* Logo Piece Image */}
                        <g clipPath={`url(#local-jigsaw-clip-${selectedLogoIdx}-${pieceIdx})`}>
                          <image
                            href={currentLogo.image}
                            x={-origCol * 100}
                            y={-origRow * 100}
                            width="300"
                            height="300"
                            preserveAspectRatio="xMidYMid meet"
                          />
                        </g>

                        {/* Seam line */}
                        <path
                          d={PIECE_PATHS[pieceIdx]}
                          fill="none"
                          stroke="rgba(0,0,0,0.35)"
                          strokeWidth="2.5"
                        />

                        {/* Outline Highlight */}
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

                      {isCorrect && !isSolved && (
                        <span className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-emerald-500 shadow-sm pointer-events-none z-20" />
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </AnimatePresence>

          {/* Success Overlay */}
          <AnimatePresence>
            {isSolved && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="absolute inset-0 bg-[#0B0F14]/95 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center p-6 text-center z-40"
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-3 shadow-lg shadow-amber-400/20">
                  <Trophy size={28} className="animate-bounce" />
                </div>

                <span className="text-xs uppercase tracking-widest font-black text-amber-400 mb-1">
                  Brand Identity Solved!
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-white mb-1">
                  {currentLogo.name}
                </h4>
                <p className="text-xs text-white/50 mb-4 font-medium">
                  {currentLogo.tagline} · Completed in {moves} moves
                </p>

                <div className="w-28 h-20 bg-white rounded-xl p-2 mb-5 flex items-center justify-center shadow-md">
                  <img
                    src={currentLogo.image}
                    alt={currentLogo.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="interactive btn-amber px-6 py-3 text-sm flex items-center gap-2 mb-3 shadow-md w-full justify-center text-[#0B0F14]"
                >
                  <MessageSquare size={16} />
                  Book a Consultation
                </a>

                <button
                  type="button"
                  onClick={() => handleReset()}
                  className="text-xs font-bold text-white/60 hover:text-amber-400 transition-colors flex items-center gap-1.5 py-1 cursor-pointer"
                >
                  <RotateCcw size={13} />
                  Try Again / Shuffle
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Bar */}
        <div className="flex items-center justify-between mt-5 max-w-[380px] mx-auto text-xs text-white/60">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white/80">Moves:</span>
            <span className="bg-[#0B0F14] border border-[#2D3748] px-2.5 py-1 rounded-md text-amber-400 font-bold font-mono">
              {moves}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowHint((prev) => !prev)}
              className="interactive inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0B0F14] border border-[#2D3748] hover:border-amber-400/40 text-white/70 hover:text-white transition-all cursor-pointer"
              title="Preview completed logo"
            >
              {showHint ? <EyeOff size={14} /> : <Eye size={14} />}
              <span>{showHint ? "Hide" : "Peek"}</span>
            </button>

            <button
              type="button"
              onClick={() => handleReset()}
              className="interactive inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0B0F14] border border-[#2D3748] hover:border-amber-400/40 text-white/70 hover:text-white transition-all cursor-pointer"
              title="Reset puzzle"
            >
              <RotateCcw size={14} />
              <span>Shuffle</span>
            </button>
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-center gap-2 text-xs text-white/40">
          <CheckCircle2 size={14} className="text-teal-400" />
          <span>Crafted with pixel precision by Graphic Galaxy, Sangli</span>
        </div>
      </div>
    </div>
  );
}
