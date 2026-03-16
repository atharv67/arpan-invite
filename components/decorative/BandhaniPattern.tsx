// BandhaniPattern — CSS radial-gradient dot grid (Marwari textile motif)
// Used as a subtle texture on Arpan's panel

interface BandhaniPatternProps {
  className?: string;
  color?: string;
  opacity?: number;
}

export default function BandhaniPattern({
  className = "",
  color = "#D4AF37",
  opacity = 0.08,
}: BandhaniPatternProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      aria-hidden="true"
      style={{
        backgroundImage: `
          radial-gradient(circle at center, ${color} 1.5px, transparent 1.5px),
          radial-gradient(circle at center, ${color} 1px, transparent 1px)
        `,
        backgroundSize: "28px 28px, 14px 14px",
        backgroundPosition: "0 0, 7px 7px",
        opacity,
      }}
    />
  );
}
