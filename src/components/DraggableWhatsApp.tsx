// components/DraggableWhatsApp.tsx
import { useState, useRef, useEffect, useCallback } from 'react';

const TYPING_TEXT = 'Chat with Dr. Swapnil';
const SNAP_DURATION = 400;
const EDGE_MARGIN = 12;

export default function DraggableWhatsApp() {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: EDGE_MARGIN, y: 200 });
  const [snappedSide, setSnappedSide] = useState<'left' | 'right'>('left');
  const [dragging, setDragging] = useState<boolean>(false);
  const [wasDragged, setWasDragged] = useState<boolean>(false);
  const [displayedText, setDisplayedText] = useState<string>('');
  const [phase, setPhase] = useState<'typing' | 'pause' | 'deleting'>('typing');
  const [showRipple, setShowRipple] = useState<boolean>(false);
  const [hovered, setHovered] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const dragOffset = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // ── Detect mobile ────────────────────────────────────────────
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Responsive sizes
  const BTN_SIZE = isMobile ? 40 : 54;
  const iconSize = isMobile ? 20 : 28;
  const bubblePx = isMobile ? 10 : 14;
  const bubblePy = isMobile ? 6 : 8;
  const fontSize = isMobile ? 11 : 13;
  const labelSize = isMobile ? 8 : 10;
  const cursorH = isMobile ? 10 : 13;
  const bubbleGap = isMobile ? 8 : 10;

  useEffect(() => {
    const t = setTimeout(() => setShowRipple(true), 800);
    return () => clearTimeout(t);
  }, []);

  // ── Typewriter loop ──────────────────────────────────────────
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (phase === 'typing') {
      if (displayedText.length < TYPING_TEXT.length) {
        timeout = setTimeout(() => setDisplayedText(TYPING_TEXT.slice(0, displayedText.length + 1)), 72);
      } else {
        timeout = setTimeout(() => setPhase('pause'), 2000);
      }
    } else if (phase === 'pause') {
      timeout = setTimeout(() => setPhase('deleting'), 500);
    } else if (phase === 'deleting') {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => setDisplayedText(prev => prev.slice(0, -1)), 38);
      } else {
        timeout = setTimeout(() => setPhase('typing'), 600);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayedText, phase]);

  // ── Snap to nearest edge ─────────────────────────────────────
  const snapToEdge = useCallback((currentX: number, currentY: number) => {
    const midX = window.innerWidth / 2;
    const side: 'left' | 'right' = currentX + BTN_SIZE / 2 < midX ? 'left' : 'right';
    const targetX = side === 'left' ? EDGE_MARGIN : window.innerWidth - BTN_SIZE - EDGE_MARGIN;
    const clampedY = Math.max(80, Math.min(window.innerHeight - 80, currentY));
    setSnappedSide(side);

    const startX = currentX;
    const startY = currentY;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / SNAP_DURATION, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      setPosition({
        x: startX + (targetX - startX) * ease,
        y: startY + (clampedY - startY) * ease,
      });
      if (t < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [BTN_SIZE]);

  // ── Drag start ───────────────────────────────────────────────
  const startDrag = useCallback((clientX: number, clientY: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    dragOffset.current = { x: clientX - rect.left, y: clientY - rect.top };
    setDragging(true);
    setWasDragged(false);
  }, []);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => { e.preventDefault(); startDrag(e.clientX, e.clientY); };
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => { startDrag(e.touches[0].clientX, e.touches[0].clientY); };

  // ── Global listeners ─────────────────────────────────────────
  useEffect(() => {
    const move = (clientX: number, clientY: number) => {
      if (!dragging) return;
      setWasDragged(true);
      setPosition({
        x: Math.max(0, Math.min(window.innerWidth - BTN_SIZE, clientX - dragOffset.current.x)),
        y: Math.max(0, Math.min(window.innerHeight - BTN_SIZE, clientY - dragOffset.current.y)),
      });
    };
    const stopDrag = (clientX: number, clientY: number) => {
      if (!dragging) return;
      setDragging(false);
      snapToEdge(clientX - dragOffset.current.x, clientY - dragOffset.current.y);
    };

    const onMouseMove = (e: MouseEvent) => move(e.clientX, e.clientY);
    const onMouseUp = (e: MouseEvent) => stopDrag(e.clientX, e.clientY);
const onTouchMove = (e: TouchEvent) => { 
  if (dragging) e.preventDefault();  // ← only block when dragging the button
  move(e.touches[0].clientX, e.touches[0].clientY); 
};    const onTouchEnd = (e: TouchEvent) => stopDrag(e.changedTouches[0].clientX, e.changedTouches[0].clientY);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onTouchEnd);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [dragging, snapToEdge, BTN_SIZE]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (wasDragged) { e.preventDefault(); return; }
    window.open(
      'https://wa.me/919881893851?text=Hello!%20I%20want%20to%20know%20more%20about%20your%20treatment%20plans.',
      '_blank', 'noopener,noreferrer'
    );
  };

  const isLeft = snappedSide === 'left';
  const showBubble = !dragging && (isLeft || hovered);

  return (
    <>
      <style>{`
        @keyframes wa-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }
        @keyframes wa-ripple {
          0%   { transform: scale(1);   opacity: 0.55; }
          100% { transform: scale(2.8); opacity: 0; }
        }
        @keyframes wa-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37,211,102,0.45), 0 4px 18px rgba(37,211,102,0.35); }
          50%       { box-shadow: 0 0 0 9px rgba(37,211,102,0),  0 4px 26px rgba(37,211,102,0.55); }
        }
        .wa-idle { animation: wa-float 3s ease-in-out infinite, wa-glow 2.5s ease-in-out infinite; }
        .wa-bubble-anim { transition: opacity 0.25s ease, transform 0.25s ease; }
      `}</style>

      <div
        ref={containerRef}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ left: position.x, top: position.y, width: BTN_SIZE, height: BTN_SIZE }}
        className={`fixed z-[100] select-none ${dragging ? 'cursor-grabbing' : 'cursor-grab'}`}
      >
        {/* ── Button ── */}
        <div className="relative w-full h-full">
          {showRipple && !dragging && (
            <>
              <span className="absolute inset-0 rounded-full bg-[#25D366]/40 pointer-events-none"
                style={{ animation: 'wa-ripple 2s ease-out infinite' }} />
              <span className="absolute inset-0 rounded-full bg-[#25D366]/25 pointer-events-none"
                style={{ animation: 'wa-ripple 2s ease-out 0.7s infinite' }} />
            </>
          )}

          <div
            className={`w-full h-full rounded-full flex items-center justify-center
              bg-gradient-to-br from-[#2ecc71] via-[#25D366] to-[#128C7E] text-white
              hover:scale-110 transition-transform duration-200
              ${!dragging ? 'wa-idle' : ''}`}
          >
            <div className="absolute inset-[2px] rounded-full bg-gradient-to-b from-white/25 to-transparent pointer-events-none" />
            <svg
              style={{ width: iconSize, height: iconSize }}
              className="fill-white relative z-10"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.93 0c3.165.001 6.14 1.233 8.377 3.469 2.237 2.236 3.467 5.214 3.466 8.379-.003 6.582-5.339 11.93-11.871 11.93-2.007-.001-3.98-.51-5.725-1.486L0 24zm6.59-4.846c1.6.95 3.488 1.451 5.414 1.452 5.372 0 9.742-4.373 9.745-9.745.002-2.602-1.01-5.05-2.85-6.89C17.06 2.122 14.61 1.11 12.002 1.11 6.629 1.11 2.26 5.481 2.257 10.854c-.001 1.938.504 3.827 1.463 5.432l-.988 3.61 3.702-.971c1.541.84 3.272 1.282 5.031 1.282zm11.307-6.8c-.333-.167-1.97-.974-2.275-1.084-.306-.11-.528-.167-.75.167-.221.333-.859 1.084-1.054 1.306-.194.221-.39.249-.723.083-.333-.167-1.408-.52-2.682-1.656-1.002-.894-1.678-2.001-1.874-2.334-.196-.333-.021-.513.145-.679.15-.149.333-.39.5-.584.166-.195.222-.333.333-.556.11-.222.056-.417-.029-.584-.083-.167-.75-1.804-1.027-2.47-.27-.648-.546-.56-.75-.56-.21-.005-.452-.006-.694-.006-.242 0-.638.09-.971.456-.333.333-1.277 1.249-1.277 3.047 0 1.798 1.305 3.526 1.486 3.776.18.25 2.569 3.922 6.223 5.503.869.375 1.547.6 2.077.768.873.278 1.667.238 2.295.145.7-.105 1.97-.806 2.248-1.542.278-.737.278-1.368.194-1.5-.083-.132-.305-.221-.638-.388z" />
            </svg>
          </div>
        </div>

        {/* ── Bubble — grows inward, never off screen ── */}
        <div
          className={`wa-bubble-anim absolute top-1/2 -translate-y-1/2
            bg-white border border-gray-100 shadow-lg rounded-[12px]
            pointer-events-none whitespace-nowrap
            ${isLeft
              ? 'rounded-tl-[4px]'
              : 'rounded-tr-[4px]'
            }
            ${showBubble
              ? 'opacity-100 translate-x-0'
              : isLeft ? 'opacity-0 -translate-x-2' : 'opacity-0 translate-x-2'
            }`}
          style={{
            // Always grows INWARD from the button
            ...(isLeft
              ? { left: BTN_SIZE + bubbleGap }
              : { right: BTN_SIZE + bubbleGap }),
            padding: `${bubblePy}px ${bubblePx}px`,
          }}
        >
          <p style={{ fontSize: labelSize }} className="font-semibold text-[#25D366] mb-0.5 tracking-wide uppercase">
            WhatsApp
          </p>
          <div className="flex items-center gap-[3px]">
            <span style={{ fontSize }} className="font-medium text-gray-800">{displayedText}</span>
            <span
              className="inline-block w-[1.5px] bg-[#25D366] rounded-full animate-pulse"
              style={{ height: cursorH }}
            />
          </div>

          {/* Tail toward button */}
          {isLeft ? (
            <div className="absolute top-1/2 -translate-y-1/2 -left-[6px] w-0 h-0
              border-t-[6px] border-t-transparent
              border-r-[6px] border-r-white
              border-b-[6px] border-b-transparent" />
          ) : (
            <div className="absolute top-1/2 -translate-y-1/2 -right-[6px] w-0 h-0
              border-t-[6px] border-t-transparent
              border-l-[6px] border-l-white
              border-b-[6px] border-b-transparent" />
          )}
        </div>
      </div>
    </>
  );
}