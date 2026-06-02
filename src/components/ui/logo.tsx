import React from 'react';

interface LogoProps {
  className?: string; // Standardized class support
  showText?: boolean;
}

export function Logo({ className = "h-9", showText = true }: LogoProps) {
  // Gracefully adapt the "renova" branding text color for dark footers / parent wrappers
  const isWhiteText = className?.includes('text-white');
  const renovaColorClass = isWhiteText ? 'text-white' : 'text-slate-850 dark:text-zinc-100';
  const growColorClass = isWhiteText ? 'text-emerald-300' : 'text-emerald-700';

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      
      {/* Handcrafted High-Fidelity 3D Leaf & Arrow Mark */}
      <svg
        viewBox="0 0 320 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 md:w-11 md:h-11 hover:scale-105 transition-transform duration-300 shrink-0"
      >
        <defs>
          {/* Subtle Outer Dropshadow underneath the Leaf */}
          <filter id="leafOrganicShadow" x="-15%" y="-15%" width="140%" height="140%" filterUnits="userSpaceOnUse">
            <feDropShadow dx="3" dy="12" stdDeviation="15" floodColor="#041208" floodOpacity="0.48" />
            <feDropShadow dx="1" dy="4" stdDeviation="5" floodColor="#081c0e" floodOpacity="0.25" />
          </filter>

          {/* 3D Crest Ribbon Shadow on the Leaf Surface */}
          <filter id="ribbonShadow" x="-30%" y="-30%" width="160%" height="160%" filterUnits="userSpaceOnUse">
            <feDropShadow dx="-1" dy="6" stdDeviation="7" floodColor="#020d04" floodOpacity="0.55" />
          </filter>

          {/* Core Multi-level Leaf Gradients */}
          <linearGradient id="leafBaseGrad" x1="110" y1="310" x2="260" y2="90" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0a2a14" />      {/* Under deepest jade shadow */}
            <stop offset="25%" stopColor="#124a20" />     {/* Dark jungle green */}
            <stop offset="65%" stopColor="#1c7e37" />     {/* Rich leaf chlorophyll green */}
            <stop offset="100%" stopColor="#4de07e" />    {/* Dynamic sun-struck lime vertex */}
          </linearGradient>

          {/* Overlay Plate Gradients for Left Paper-Cut Slices */}
          <linearGradient id="layerGrad1" x1="100" y1="260" x2="160" y2="120" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#08220f" />
            <stop offset="50%" stopColor="#155726" />
            <stop offset="100%" stopColor="#2db555" />
          </linearGradient>

          <linearGradient id="layerGrad2" x1="80" y1="200" x2="190" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0b2c14" />
            <stop offset="60%" stopColor="#1c7835" />
            <stop offset="100%" stopColor="#4be37d" />
          </linearGradient>

          {/* Pure Silver-Gold 3D bevel fill for the Arrow Depth Extrusion */}
          <linearGradient id="arrow3DDepthGrad" x1="105" y1="230" x2="240" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#9dbf9d" />
            <stop offset="35%" stopColor="#b3cbba" />
            <stop offset="75%" stopColor="#d4e0d6" />
            <stop offset="100%" stopColor="#8da08d" />
          </linearGradient>

          {/* Glowing Highlight for the upper leaf contour rim */}
          <linearGradient id="rimHighlightGrad" x1="180" y1="70" x2="280" y2="110" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#a3f7be" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#43ce74" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* --- LAYER 1: Core Leaf Body & Organic Drop Shadow --- */}
        <g filter="url(#leafOrganicShadow)">
          {/* Stem base + main leaf shape */}
          <path
            d="M 134 290 
               C 130 294, 114 312, 102 322 
               C 96 327, 93 328, 91 324 
               C 89 319, 94 309, 105 295 
               C 112 286, 126 272, 131 268 
               C 74 212, 85 110, 185 64 
               C 225 45, 269 58, 276 96 
               C 285 145, 240 235, 134 290 Z"
            fill="url(#leafBaseGrad)"
          />
        </g>

        {/* --- LAYER 2: Rim Edge Contour Golden Glow --- */}
        <path
          d="M 185 64 
             C 215 50, 262 55, 276 96 
             C 264 92, 222 81, 185 64 Z"
          fill="url(#rimHighlightGrad)"
        />

        {/* --- LAYER 3: 3D Left-Wing Overlapping Shadow Slits (Paper Cut Feel) --- */}
        {/* Ridge Crevice 1 */}
        <path
          d="M 131 268 
             C 98 228, 92 165, 150 115 
             C 142 125, 108 185, 131 268 Z"
          fill="url(#layerGrad1)"
          opacity="0.9"
        />

        {/* Ridge Crevice 2 (Nested top curve) */}
        <path
          d="M 120 215 
             C 100 152, 128 92, 195 62 
             C 181 74, 134 135, 120 215 Z"
          fill="url(#layerGrad2)"
          opacity="0.85"
        />

        {/* --- LAYER 4: Embossed Right Leaf Veins (Shading + Highlight Pairs) --- */}
        {/* Vein Rib 1 (Bottom Right) */}
        <path d="M 168 250 Q 212 216, 238 174" stroke="#061e0c" strokeWidth="2.5" strokeLinecap="round" opacity="0.65" />
        <path d="M 169 251 Q 213 217, 239 175" stroke="#4be880" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />

        {/* Vein Rib 2 (Middle Right) */}
        <path d="M 202 201 Q 235 166, 256 128" stroke="#061e0c" strokeWidth="2.5" strokeLinecap="round" opacity="0.65" />
        <path d="M 203 202 Q 236 167, 257 129" stroke="#4be880" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />

        {/* Vein Rib 3 (Top Right) */}
        <path d="M 230 155 Q 255 125, 266 100" stroke="#061e0c" strokeWidth="2.0" strokeLinecap="round" opacity="0.55" />
        <path d="M 231 156 Q 256 126, 267 101" stroke="#4be880" strokeWidth="1.0" strokeLinecap="round" opacity="0.3" />


        {/* --- LAYER 5: Sweeping 3D Ascent Arrow --- */}
        <g filter="url(#ribbonShadow)">
          {/* Arrow 3D Depth / Bevel / Extrusion Edge (Shifted downwards) */}
          <path
            d="M 104 227 
               C 126 211, 156 179, 198 126 
               H 183 
               L 242 100 
               V 161 
               L 221 140 
               C 185 186, 146 226, 104 227 Z"
            fill="url(#arrow3DDepthGrad)"
          />

          {/* Arrow Top Face (Clean Beveled White) */}
          <path
            d="M 105 224 
               C 126 208, 158 175, 198 122 
               H 186 
               L 245 96 
               L 245 156 
               L 223 135 
               C 188 181, 148 222, 105 224 Z"
            fill="#FFFFFF"
          />
        </g>
      </svg>

      {/* Brand Text Elements: Dynamic Slate/White & Grass Green with Centered Sprout Leaf Over 'grow' */}
      {showText && (
        <span className={`font-bold tracking-tighter text-xl flex items-center select-none ml-0.5 ${renovaColorClass}`}>
          renova
          <span className={`relative inline-flex flex-col ml-0.5 ${growColorClass}`}>
            
            {/* Exactly Centered Symmetrical Leaf Sprout Above 'grow' text */}
            <span className="absolute -top-[14px] left-0 right-1 flex justify-center pointer-events-none">
              <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Left Sprout Leaf segment */}
                <path
                  d="M 11 11 
                     C 6 10, 1.5 8, 1 4 
                     C 0.5 1, 4.5 0, 8.5 5 
                     C 10.5 8, 11 10.5, 11 11 Z"
                  stroke="#388e3c"
                  strokeWidth="1.5"
                  fill="#81c784"
                  fillOpacity="0.45"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                
                {/* Right Sprout Leaf segment */}
                <path
                  d="M 11 11 
                     C 16 10, 20.5 8, 21 4 
                     C 21.5 1, 17.5 0, 13.5 5 
                     C 11.5 8, 11 10.5, 11 11 Z"
                  stroke="#388e3c"
                  strokeWidth="1.5"
                  fill="#81c784"
                  fillOpacity="0.45"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            grow
          </span>
        </span>
      )}
    </div>
  );
}
