// MandalaBorder — full-width repeating SVG pattern divider

interface MandalaBorderProps {
  className?: string;
  color?: string;
  opacity?: number;
  flip?: boolean; // flip vertically for bottom borders
}

export default function MandalaBorder({
  className = "",
  color = "#D4AF37",
  opacity = 0.6,
  flip = false,
}: MandalaBorderProps) {
  return (
    <div
      className={`w-full overflow-hidden ${className}`}
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        width="100%"
        height="60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        opacity={opacity}
      >
        <defs>
          <pattern id="mandala-pattern" x="0" y="0" width="120" height="60" patternUnits="userSpaceOnUse">
            {/* Central diamond */}
            <path d="M60 5 L75 30 L60 55 L45 30 Z" stroke={color} strokeWidth="1" />
            {/* Inner diamond */}
            <path d="M60 15 L70 30 L60 45 L50 30 Z" stroke={color} strokeWidth="0.7" />
            {/* Central dot */}
            <circle cx="60" cy="30" r="3" fill={color} />
            {/* Horizontal connecting lines */}
            <line x1="0" y1="30" x2="45" y2="30" stroke={color} strokeWidth="0.5" />
            <line x1="75" y1="30" x2="120" y2="30" stroke={color} strokeWidth="0.5" />
            {/* Small corner lotus petals */}
            <path d="M0 0 Q10 15 0 30" stroke={color} strokeWidth="0.5" />
            <path d="M120 0 Q110 15 120 30" stroke={color} strokeWidth="0.5" />
            {/* Accent dots on connecting lines */}
            <circle cx="22" cy="30" r="1.5" fill={color} />
            <circle cx="98" cy="30" r="1.5" fill={color} />
            {/* Top & bottom border lines */}
            <line x1="0" y1="2" x2="120" y2="2" stroke={color} strokeWidth="0.5" strokeDasharray="3 4" />
            <line x1="0" y1="58" x2="120" y2="58" stroke={color} strokeWidth="0.5" strokeDasharray="3 4" />
          </pattern>
        </defs>
        <rect width="1200" height="60" fill="url(#mandala-pattern)" />
      </svg>
    </div>
  );
}
