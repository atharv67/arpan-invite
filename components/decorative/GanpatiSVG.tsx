// GanpatiSVG — gold linework SVG of Lord Ganesha
// Seated pose, 4 arms, crown, halo, trunk curling right, mouse at feet
// stroke="#D4AF37" fill="none" viewBox="0 0 400 500"

export default function GanpatiSVG({ size = 420 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 400 500"
      width={size}
      height={size * 1.25}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ganpati-glow"
      aria-label="Lord Ganesha"
    >
      <defs>
        {/* Radial glow behind the head */}
        <radialGradient id="halo-glow" cx="50%" cy="38%" r="28%">
          <stop offset="0%"   stopColor="#D4AF37" stopOpacity="0.35" />
          <stop offset="60%"  stopColor="#D4AF37" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </radialGradient>

        {/* Gold gradient for filled accents */}
        <linearGradient id="gold-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#F0D060" />
          <stop offset="100%" stopColor="#A88520" />
        </linearGradient>
      </defs>

      {/* ── Halo glow ellipse ── */}
      <ellipse cx="200" cy="160" rx="110" ry="100" fill="url(#halo-glow)" />

      {/* ── Prabhamandal (circular halo ring) ── */}
      <circle cx="200" cy="148" r="90" stroke="#D4AF37" strokeWidth="1.2" strokeDasharray="5 4" opacity="0.7" />
      <circle cx="200" cy="148" r="83" stroke="#D4AF37" strokeWidth="0.6" opacity="0.4" />

      {/* ── Outer decorative ring petals ── */}
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 360) / 16;
        const rad = (angle * Math.PI) / 180;
        const x1 = 200 + 83 * Math.cos(rad);
        const y1 = 148 + 83 * Math.sin(rad);
        const x2 = 200 + 93 * Math.cos(rad);
        const y2 = 148 + 93 * Math.sin(rad);
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#D4AF37" strokeWidth="1" opacity="0.5" />
        );
      })}

      {/* ── Mukut (crown) ── */}
      {/* Crown base band */}
      <path d="M162 82 Q200 72 238 82" stroke="#D4AF37" strokeWidth="2" />
      {/* Central crown spire */}
      <path d="M200 82 L196 58 Q200 48 204 58 L200 82" stroke="#D4AF37" strokeWidth="1.5" fill="#D4AF37" fillOpacity="0.15" />
      {/* Left spire */}
      <path d="M176 82 L173 65 Q176 57 179 65 L176 82" stroke="#D4AF37" strokeWidth="1.2" fill="#D4AF37" fillOpacity="0.1" />
      {/* Right spire */}
      <path d="M224 82 L221 65 Q224 57 227 65 L224 82" stroke="#D4AF37" strokeWidth="1.2" fill="#D4AF37" fillOpacity="0.1" />
      {/* Crown jewel dots */}
      <circle cx="200" cy="56" r="3"  fill="#D4AF37" opacity="0.9" />
      <circle cx="176"  cy="63" r="2" fill="#D4AF37" opacity="0.7" />
      <circle cx="224"  cy="63" r="2" fill="#D4AF37" opacity="0.7" />
      {/* Crown lateral decorations */}
      <path d="M145 86 Q155 78 162 82" stroke="#D4AF37" strokeWidth="1.2" />
      <path d="M238 82 Q248 78 256 86" stroke="#D4AF37" strokeWidth="1.2" />

      {/* ── Elephant head ── */}
      {/* Main head shape */}
      <ellipse cx="200" cy="148" rx="62" ry="66" stroke="#D4AF37" strokeWidth="1.8" fill="#D4AF37" fillOpacity="0.03" />

      {/* Large ears */}
      {/* Left ear */}
      <path d="M138 120 Q105 110 100 148 Q100 185 138 190 Q148 178 145 148 Q148 120 138 120Z"
        stroke="#D4AF37" strokeWidth="1.5" fill="#D4AF37" fillOpacity="0.04" />
      <path d="M138 128 Q112 120 110 150 Q110 178 138 182"
        stroke="#D4AF37" strokeWidth="0.8" opacity="0.5" />
      {/* Right ear */}
      <path d="M262 120 Q295 110 300 148 Q300 185 262 190 Q252 178 255 148 Q252 120 262 120Z"
        stroke="#D4AF37" strokeWidth="1.5" fill="#D4AF37" fillOpacity="0.04" />
      <path d="M262 128 Q288 120 290 150 Q290 178 262 182"
        stroke="#D4AF37" strokeWidth="0.8" opacity="0.5" />

      {/* ── Eyes ── */}
      {/* Left eye */}
      <ellipse cx="178" cy="138" rx="10" ry="8" stroke="#D4AF37" strokeWidth="1.5" fill="#D4AF37" fillOpacity="0.06" />
      <circle  cx="178" cy="138" r="4"  fill="#D4AF37" opacity="0.8" />
      <circle  cx="179" cy="136" r="1.5" fill="#FDF8F0" opacity="0.9" /> {/* highlight */}
      {/* Right eye */}
      <ellipse cx="222" cy="138" rx="10" ry="8" stroke="#D4AF37" strokeWidth="1.5" fill="#D4AF37" fillOpacity="0.06" />
      <circle  cx="222" cy="138" r="4"  fill="#D4AF37" opacity="0.8" />
      <circle  cx="223" cy="136" r="1.5" fill="#FDF8F0" opacity="0.9" />

      {/* ── Tilak on forehead ── */}
      <ellipse cx="200" cy="118" rx="6" ry="9" stroke="#D4AF37" strokeWidth="1" fill="#D4AF37" fillOpacity="0.2" />
      <line x1="200" y1="110" x2="200" y2="105" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />

      {/* ── Trunk curling right ── */}
      <path
        d="M200 170 Q190 192 185 210 Q178 232 195 245 Q210 255 218 242 Q225 232 215 224 Q205 218 210 210"
        stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        fill="#D4AF37" fillOpacity="0.03"
      />
      {/* Trunk tip */}
      <ellipse cx="213" cy="207" rx="5" ry="7" stroke="#D4AF37" strokeWidth="1.2" transform="rotate(20 213 207)" />

      {/* ── Neck & shoulders ── */}
      <path d="M165 200 Q180 215 200 218 Q220 215 235 200" stroke="#D4AF37" strokeWidth="1.5" />

      {/* ── Body (pot-belly, seated) ── */}
      <ellipse cx="200" cy="320" rx="88" ry="80" stroke="#D4AF37" strokeWidth="1.8" fill="#D4AF37" fillOpacity="0.03" />
      {/* Belly curve (lambodara) */}
      <path d="M145 330 Q160 370 200 375 Q240 370 255 330" stroke="#D4AF37" strokeWidth="1.2" opacity="0.7" />
      {/* Navel */}
      <circle cx="200" cy="345" r="5" stroke="#D4AF37" strokeWidth="1" fill="#D4AF37" fillOpacity="0.15" />

      {/* Sacred thread (yagnopavit) */}
      <path d="M185 225 Q175 270 165 310 Q160 330 168 340" stroke="#D4AF37" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />

      {/* ── Four arms ── */}
      {/* Upper-left arm — holds ankusha (elephant goad) */}
      <path d="M155 240 Q125 225 115 200 Q108 185 118 175" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
      {/* Ankusha */}
      <path d="M118 175 L110 158 Q108 150 116 150" stroke="#D4AF37" strokeWidth="1.3" />
      <path d="M116 150 Q124 145 126 155" stroke="#D4AF37" strokeWidth="1.3" />

      {/* Upper-right arm — holds pasha (noose/rope) */}
      <path d="M245 240 Q275 225 285 200 Q292 185 282 175" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
      {/* Pasha loop */}
      <ellipse cx="284" cy="162" rx="10" ry="12" stroke="#D4AF37" strokeWidth="1.3" transform="rotate(-15 284 162)" />
      <path d="M278 170 L270 180" stroke="#D4AF37" strokeWidth="1" />

      {/* Lower-left arm — rests on knee, modak in hand */}
      <path d="M148 310 Q135 350 140 375 Q143 390 155 392" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
      {/* Modak (sweet) */}
      <path d="M148 390 Q145 380 155 375 Q165 378 162 390 Q158 400 148 390Z"
        stroke="#D4AF37" strokeWidth="1.2" fill="#D4AF37" fillOpacity="0.12" />

      {/* Lower-right arm — raised in abhaya mudra (blessing) */}
      <path d="M252 310 Q265 350 260 375 Q258 392 248 392" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
      {/* Hand (simplified palm) */}
      <path d="M244 395 Q238 390 240 382 Q248 375 256 382 Q260 390 255 397Z"
        stroke="#D4AF37" strokeWidth="1.2" fill="#D4AF37" fillOpacity="0.1" />
      {/* Fingers */}
      <line x1="244" y1="380" x2="242" y2="368" stroke="#D4AF37" strokeWidth="0.9" strokeLinecap="round" />
      <line x1="248" y1="377" x2="247" y2="365" stroke="#D4AF37" strokeWidth="0.9" strokeLinecap="round" />
      <line x1="252" y1="377" x2="252" y2="365" stroke="#D4AF37" strokeWidth="0.9" strokeLinecap="round" />
      <line x1="256" y1="379" x2="257" y2="368" stroke="#D4AF37" strokeWidth="0.9" strokeLinecap="round" />

      {/* ── Dhoti / lower garment ── */}
      <path d="M130 350 Q140 400 200 415 Q260 400 270 350" stroke="#D4AF37" strokeWidth="1.2" opacity="0.7" />
      {/* Dhoti fold lines */}
      <path d="M160 370 Q170 395 200 402" stroke="#D4AF37" strokeWidth="0.7" opacity="0.5" />
      <path d="M240 370 Q230 395 200 402" stroke="#D4AF37" strokeWidth="0.7" opacity="0.5" />

      {/* Seated legs (crossed, lotus pose) */}
      <path d="M132 355 Q120 380 135 400 Q160 420 200 422" stroke="#D4AF37" strokeWidth="1.3" />
      <path d="M268 355 Q280 380 265 400 Q240 420 200 422" stroke="#D4AF37" strokeWidth="1.3" />

      {/* ── Mushak (mouse) at feet ── */}
      <ellipse cx="200" cy="460" rx="20" ry="10" stroke="#D4AF37" strokeWidth="1.2" fill="#D4AF37" fillOpacity="0.05" />
      {/* Mouse head */}
      <circle cx="218" cy="455" r="8" stroke="#D4AF37" strokeWidth="1" fill="#D4AF37" fillOpacity="0.05" />
      {/* Mouse ear */}
      <circle cx="223" cy="449" r="3.5" stroke="#D4AF37" strokeWidth="0.8" />
      {/* Mouse eye */}
      <circle cx="221" cy="455" r="1.2" fill="#D4AF37" opacity="0.8" />
      {/* Mouse tail */}
      <path d="M180 462 Q165 458 162 452 Q160 444 168 445"
        stroke="#D4AF37" strokeWidth="1" fill="none" />
      {/* Mouse holds a modak */}
      <circle cx="226" cy="462" r="4" stroke="#D4AF37" strokeWidth="0.8" fill="#D4AF37" fillOpacity="0.12" />

      {/* ── Lotus seat ── */}
      <ellipse cx="200" cy="475" rx="95" ry="16" stroke="#D4AF37" strokeWidth="1" fill="#D4AF37" fillOpacity="0.05" />
      {/* Lotus petals around base */}
      {Array.from({ length: 10 }).map((_, i) => {
        const angle = -180 + (i * 180) / 9;
        const rad = (angle * Math.PI) / 180;
        const cx = 200 + 90 * Math.cos(rad);
        const cy = 475 + 14 * Math.sin(rad);
        return (
          <ellipse key={i} cx={cx} cy={cy} rx="9" ry="5"
            stroke="#D4AF37" strokeWidth="0.8"
            fill="#D4AF37" fillOpacity="0.06"
            transform={`rotate(${angle + 90} ${cx} ${cy})`}
          />
        );
      })}
    </svg>
  );
}
