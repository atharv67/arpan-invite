"use client";

// FloatingPetals — CSS keyframe marigold/rose petal falling animation
// Renders purely via CSS, no JS needed after mount

const PETALS = [
  { left: "5%",  animDuration: "8s",  animDelay: "0s",   size: 10, anim: "petal-fall-1" },
  { left: "12%", animDuration: "11s", animDelay: "1.5s", size: 8,  anim: "petal-fall-2" },
  { left: "20%", animDuration: "9s",  animDelay: "3s",   size: 12, anim: "petal-fall-3" },
  { left: "28%", animDuration: "13s", animDelay: "0.5s", size: 7,  anim: "petal-fall-4" },
  { left: "38%", animDuration: "10s", animDelay: "2s",   size: 11, anim: "petal-fall-1" },
  { left: "50%", animDuration: "8.5s",animDelay: "4s",   size: 9,  anim: "petal-fall-2" },
  { left: "60%", animDuration: "12s", animDelay: "1s",   size: 10, anim: "petal-fall-3" },
  { left: "70%", animDuration: "9.5s",animDelay: "3.5s", size: 8,  anim: "petal-fall-4" },
  { left: "80%", animDuration: "11s", animDelay: "0.8s", size: 13, anim: "petal-fall-1" },
  { left: "88%", animDuration: "7.5s",animDelay: "2.5s", size: 8,  anim: "petal-fall-2" },
  { left: "93%", animDuration: "10s", animDelay: "5s",   size: 10, anim: "petal-fall-3" },
  { left: "42%", animDuration: "14s", animDelay: "6s",   size: 7,  anim: "petal-fall-4" },
];

export default function FloatingPetals({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} aria-hidden="true">
      {PETALS.map((petal, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: petal.left,
            top: 0,
            width: petal.size,
            height: petal.size,
            animation: `${petal.anim} ${petal.animDuration} ${petal.animDelay} ease-in-out infinite`,
          }}
        >
          {/* Marigold petal shape */}
          <svg viewBox="0 0 20 20" fill="none" width={petal.size} height={petal.size}>
            <ellipse cx="10" cy="10" rx="5" ry="9" fill="#FF9500" opacity="0.75" transform="rotate(-20 10 10)" />
            <ellipse cx="10" cy="10" rx="5" ry="9" fill="#FFB800" opacity="0.5" transform="rotate(20 10 10)" />
            <ellipse cx="10" cy="10" rx="3" ry="7" fill="#FFC940" opacity="0.6" />
          </svg>
        </div>
      ))}
    </div>
  );
}
