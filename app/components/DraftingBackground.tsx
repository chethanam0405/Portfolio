'use client';

import React, { useEffect, useState } from 'react';

export default function DraftingBackground() {
  const [coords, setCoords] = useState<{ x: number; y: number }>({ x: 420, y: 180 });
  const [isPointerActive, setIsPointerActive] = useState<boolean>(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
      if (!isPointerActive) setIsPointerActive(true);
    };

    const handleMouseLeave = () => {
      setIsPointerActive(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isPointerActive]);

  const formattedX = String(coords.x).padStart(4, '0');
  const formattedY = String(coords.y).padStart(4, '0');

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-obsidian"
    >
      {/* Slow-morphing deep emerald (#059669) and spectral violet (#6D28D9) caustic light beams */}
      <div className="absolute inset-0 opacity-40 mix-blend-screen filter blur-[110px] transform-gpu">
        <div
          className="absolute -top-[25%] -left-[15%] w-[65vw] h-[65vw] rounded-full bg-gradient-to-tr from-[#059669] via-[#10B981]/40 to-transparent animate-caustic-1"
        />
        <div
          className="absolute -bottom-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-bl from-[#6D28D9] via-[#8B5CF6]/35 to-transparent animate-caustic-2"
        />
        <div
          className="absolute top-[40%] left-[25%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-br from-[#064E3B]/80 via-[#2E1065]/60 to-transparent animate-caustic-1"
          style={{ animationDuration: '38s' }}
        />
      </div>

      {/* 64px Architectural drafting grid & 16px subgrid */}
      <div className="absolute inset-0 drafting-grid-pattern opacity-60" />
      <div className="absolute inset-0 drafting-subgrid-pattern opacity-30" />

      {/* Radial grid illumination mask following the pointer */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: isPointerActive
            ? `radial-gradient(circle 380px at ${coords.x}px ${coords.y}px, rgba(16, 185, 129, 0.16), rgba(139, 92, 246, 0.06) 45%, transparent 75%)`
            : 'radial-gradient(circle 500px at 50% 30%, rgba(16, 185, 129, 0.08), transparent 70%)',
        }}
      />

      {/* Live cursor-tracking X/Y crosshair hairlines */}
      {isPointerActive && (
        <>
          {/* Vertical crosshair */}
          <div
            className="absolute top-0 bottom-0 pointer-events-none transition-transform duration-75 ease-out"
            style={{
              left: `${coords.x}px`,
              width: '1px',
              background: 'linear-gradient(to bottom, transparent, rgba(16, 185, 129, 0.3) 30%, rgba(139, 92, 246, 0.3) 70%, transparent)',
            }}
          />
          {/* Horizontal crosshair */}
          <div
            className="absolute left-0 right-0 pointer-events-none transition-transform duration-75 ease-out"
            style={{
              top: `${coords.y}px`,
              height: '1px',
              background: 'linear-gradient(to right, transparent, rgba(16, 185, 129, 0.3) 30%, rgba(139, 92, 246, 0.3) 70%, transparent)',
            }}
          />
          {/* Micro cursor intersection target */}
          <div
            className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2 border border-emerald-500/40 pointer-events-none"
            style={{
              left: `${coords.x}px`,
              top: `${coords.y}px`,
            }}
          >
            <div className="absolute inset-0 m-auto w-1 h-1 bg-violet rounded-full" />
          </div>
        </>
      )}

      {/* Floating coordinate readout pill (X: 0420px / Y: 0180px) */}
      <div className="fixed bottom-6 right-6 z-50 pointer-events-auto hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-smoked-onyx/90 border hairline-border shadow-2xl backdrop-blur-md">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="font-mono text-[11px] text-cool-silver tracking-wider">
          X: <span className="text-alabaster font-semibold">{formattedX}px</span> / Y:{' '}
          <span className="text-alabaster font-semibold">{formattedY}px</span>
        </span>
        <span className="text-[10px] uppercase font-mono text-emerald-400 tracking-widest pl-1 border-l border-white/10">
          GRID // 64PX
        </span>
      </div>
    </div>
  );
}
