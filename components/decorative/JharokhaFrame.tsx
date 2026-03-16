// JharokhaFrame — Rajputana arch/window frame for photos or names
// Pure SVG decorative frame with Mughal-inspired pointed arch

import { ReactNode } from "react";

interface JharokhaFrameProps {
  children?: ReactNode;
  className?: string;
  color?: string;
  width?: number;
  height?: number;
}

export default function JharokhaFrame({
  children,
  className = "",
  color = "#D4AF37",
  width = 300,
  height = 380,
}: JharokhaFrameProps) {
  const w = width;
  const h = height;
  const pad = 18;

  // Arch path — pointed Mughal arch
  // Arch top: rises to pointed peak at center
  const archPath = `
    M ${pad} ${h - pad}
    L ${pad} ${h * 0.55}
    Q ${pad} ${h * 0.30} ${w / 2} ${pad}
    Q ${w - pad} ${h * 0.30} ${w - pad} ${h * 0.55}
    L ${w - pad} ${h - pad}
    Z
  `;

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`} style={{ width, height }}>
      <svg
        viewBox={`0 0 ${w} ${h}`}
        width={w}
        height={h}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
        aria-hidden="true"
      >
        {/* Outer arch */}
        <path d={archPath} stroke={color} strokeWidth="1.8" fill={color} fillOpacity="0.04" />

        {/* Inner arch (inset) */}
        <path
          d={`
            M ${pad + 10} ${h - pad}
            L ${pad + 10} ${h * 0.56}
            Q ${pad + 10} ${h * 0.33} ${w / 2} ${pad + 14}
            Q ${w - pad - 10} ${h * 0.33} ${w - pad - 10} ${h * 0.56}
            L ${w - pad - 10} ${h - pad}
          `}
          stroke={color}
          strokeWidth="0.8"
          strokeDasharray="4 3"
          opacity="0.6"
        />

        {/* Decorative border bottom */}
        <line x1={pad} y1={h - pad} x2={w - pad} y2={h - pad} stroke={color} strokeWidth="1.5" />
        <line x1={pad} y1={h - pad + 6} x2={w - pad} y2={h - pad + 6} stroke={color} strokeWidth="0.6" opacity="0.5" />

        {/* Side columns */}
        {/* Left pillar */}
        <rect x={pad - 4} y={h * 0.7} width={8} height={h * 0.3 - pad} stroke={color} strokeWidth="1" fill={color} fillOpacity="0.05" rx="2" />
        {/* Right pillar */}
        <rect x={w - pad - 4} y={h * 0.7} width={8} height={h * 0.3 - pad} stroke={color} strokeWidth="1" fill={color} fillOpacity="0.05" rx="2" />

        {/* Corner rosettes */}
        <circle cx={pad + 2} cy={h - pad - 2} r="5" stroke={color} strokeWidth="1" fill={color} fillOpacity="0.1" />
        <circle cx={w - pad - 2} cy={h - pad - 2} r="5" stroke={color} strokeWidth="1" fill={color} fillOpacity="0.1" />

        {/* Peak finial */}
        <circle cx={w / 2} cy={pad - 4} r="4" fill={color} opacity="0.8" />
        <line x1={w / 2} y1={pad - 8} x2={w / 2} y2={pad - 16} stroke={color} strokeWidth="1.5" strokeLinecap="round" />

        {/* Jali (lattice) accent — small diamonds near arch peak */}
        <path d={`M ${w/2 - 14} ${h * 0.28} L ${w/2} ${h * 0.22} L ${w/2 + 14} ${h * 0.28} L ${w/2} ${h * 0.34} Z`}
          stroke={color} strokeWidth="0.8" fill={color} fillOpacity="0.07" />
        <circle cx={w / 2} cy={h * 0.28} r="2" fill={color} opacity="0.6" />
      </svg>

      {/* Content inside the frame */}
      <div className="relative z-10 flex items-center justify-center" style={{ width: width - 60, height: height - 60, marginTop: -20 }}>
        {children}
      </div>
    </div>
  );
}
