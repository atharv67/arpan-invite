// LeheriyaWave — diagonal wave lines (Rajasthani Leheriya textile motif)
// Used as subtle card texture in Events section

interface LeheriyaWaveProps {
  className?: string;
  color?: string;
  opacity?: number;
}

export default function LeheriyaWave({
  className = "",
  color = "#D4AF37",
  opacity = 0.05,
}: LeheriyaWaveProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      aria-hidden="true"
      style={{ opacity }}
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="leheriya" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <path d="M0 10 Q15 5 30 10 Q45 15 60 10" stroke={color} strokeWidth="1.5" fill="none" />
            <path d="M0 30 Q15 25 30 30 Q45 35 60 30" stroke={color} strokeWidth="1.5" fill="none" />
            <path d="M0 50 Q15 45 30 50 Q45 55 60 50" stroke={color} strokeWidth="1.5" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#leheriya)" />
      </svg>
    </div>
  );
}
