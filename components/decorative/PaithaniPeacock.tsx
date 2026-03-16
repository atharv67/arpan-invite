// PaithaniPeacock — peacock motif border (Maharashtrian Paithani saree motif)
// Used as a decorative border on Shivani's panel

interface PaithaniPeacockProps {
  className?: string;
  color?: string;
  accentColor?: string;
  orientation?: "horizontal" | "vertical";
}

export default function PaithaniPeacock({
  className = "",
  color = "#5B2D8E",
  accentColor = "#D4AF37",
  orientation = "horizontal",
}: PaithaniPeacockProps) {
  const isVertical = orientation === "vertical";

  return (
    <div
      className={`overflow-hidden ${className}`}
      aria-hidden="true"
      style={{ transform: isVertical ? "rotate(90deg)" : undefined }}
    >
      <svg
        viewBox="0 0 600 80"
        width="100%"
        height="80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="paithani-peacock" x="0" y="0" width="120" height="80" patternUnits="userSpaceOnUse">
            {/* Peacock body */}
            <ellipse cx="60" cy="55" rx="10" ry="14" stroke={color} strokeWidth="1.2" fill={color} fillOpacity="0.06" />
            {/* Neck */}
            <path d="M60 41 Q57 32 60 24 Q63 32 60 41" stroke={color} strokeWidth="1.2" fill={color} fillOpacity="0.06" />
            {/* Head */}
            <circle cx="60" cy="21" r="6" stroke={color} strokeWidth="1" fill={color} fillOpacity="0.06" />
            {/* Crest feathers */}
            <path d="M56 16 L54 8"  stroke={accentColor} strokeWidth="0.8" />
            <path d="M58 14 L57 6"  stroke={accentColor} strokeWidth="0.8" />
            <path d="M60 13 L60 5"  stroke={accentColor} strokeWidth="0.8" />
            <path d="M62 14 L63 6"  stroke={accentColor} strokeWidth="0.8" />
            <path d="M64 16 L66 8"  stroke={accentColor} strokeWidth="0.8" />
            {/* Crest dots */}
            <circle cx="54" cy="8"  r="1.5" fill={accentColor} />
            <circle cx="57" cy="6"  r="1.5" fill={accentColor} />
            <circle cx="60" cy="5"  r="1.8" fill={accentColor} />
            <circle cx="63" cy="6"  r="1.5" fill={accentColor} />
            <circle cx="66" cy="8"  r="1.5" fill={accentColor} />
            {/* Eye */}
            <circle cx="62" cy="21" r="2" fill={accentColor} opacity="0.9" />
            {/* Fan tail — peacock feathers spread */}
            {[-40,-25,-12,0,12,25,40].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const len = 30 - Math.abs(i - 3) * 2;
              const x2 = 60 + len * Math.sin(rad);
              const y2 = 70 - len * Math.cos(rad);
              return (
                <g key={i}>
                  <line x1="60" y1="70" x2={x2} y2={y2} stroke={color} strokeWidth="0.8" opacity="0.7" />
                  {/* Feather eye */}
                  <ellipse
                    cx={x2}
                    cy={y2}
                    rx="3.5"
                    ry="5"
                    stroke={accentColor}
                    strokeWidth="0.7"
                    fill={accentColor}
                    fillOpacity="0.12"
                    transform={`rotate(${angle} ${x2} ${y2})`}
                  />
                </g>
              );
            })}
            {/* Feet */}
            <path d="M57 69 L54 76 M60 70 L60 76 M63 69 L66 76" stroke={color} strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="600" height="80" fill="url(#paithani-peacock)" />
        {/* Decorative border lines */}
        <line x1="0" y1="1"  x2="600" y2="1"  stroke={accentColor} strokeWidth="0.8" opacity="0.5" />
        <line x1="0" y1="79" x2="600" y2="79" stroke={accentColor} strokeWidth="0.8" opacity="0.5" />
      </svg>
    </div>
  );
}
