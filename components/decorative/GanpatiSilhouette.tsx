// GanpatiSilhouette — Minimalist gold gradient silhouette of Lord Ganesha
// Clean filled shapes, no outlines. Iconic front-facing seated pose.

export default function GanpatiSilhouette({ size = 320 }: { size?: number }) {
  const h = size * 1.3;

  return (
    <svg
      viewBox="0 0 300 390"
      width={size}
      height={h}
      xmlns="http://www.w3.org/2000/svg"
      className="ganpati-glow"
      aria-label="Lord Ganesha"
    >
      <defs>
        {/* Main gold gradient — warm top to rich bottom */}
        <linearGradient id="sil-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#F5E070" />
          <stop offset="40%"  stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8A6A10" />
        </linearGradient>

        {/* Highlight gradient for crown */}
        <linearGradient id="sil-crown" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#FFF0A0" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>

        {/* Radial glow behind whole figure */}
        <radialGradient id="sil-glow" cx="50%" cy="45%" r="45%">
          <stop offset="0%"   stopColor="#D4AF37" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0"    />
        </radialGradient>

        {/* Soft inner shadow for depth on body */}
        <radialGradient id="sil-body-shade" cx="50%" cy="35%" r="55%">
          <stop offset="0%"   stopColor="#F5E070" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#7A5A08" stopOpacity="0.25" />
        </radialGradient>
      </defs>

      {/* ── Background glow ── */}
      <ellipse cx="150" cy="175" rx="130" ry="140" fill="url(#sil-glow)" />

      {/* ══════════════════════════════════════
          CROWN (Mukut)
      ══════════════════════════════════════ */}

      {/* Crown band */}
      <rect x="88" y="72" width="124" height="20" rx="4" fill="url(#sil-crown)" />

      {/* Central tall spire */}
      <path d="M150 72 L140 42 Q150 22 160 42 Z" fill="url(#sil-crown)" />
      {/* Central spire gem */}
      <ellipse cx="150" cy="35" rx="5" ry="7" fill="#FFF5CC" opacity="0.95" />

      {/* Left spire */}
      <path d="M110 72 L103 52 Q110 42 117 52 Z" fill="url(#sil-crown)" />
      <circle cx="110" cy="47" r="3.5" fill="#FFF5CC" opacity="0.85" />

      {/* Right spire */}
      <path d="M190 72 L183 52 Q190 42 197 52 Z" fill="url(#sil-crown)" />
      <circle cx="190" cy="47" r="3.5" fill="#FFF5CC" opacity="0.85" />

      {/* Crown side wings */}
      <path d="M88 72 Q72 68 68 80 Q72 88 88 88 Z" fill="url(#sil-gold)" opacity="0.8" />
      <path d="M212 72 Q228 68 232 80 Q228 88 212 88 Z" fill="url(#sil-gold)" opacity="0.8" />

      {/* ══════════════════════════════════════
          EARS (large, rounded)
      ══════════════════════════════════════ */}

      {/* Left ear — large teardrop */}
      <ellipse cx="60" cy="160" rx="46" ry="52" fill="url(#sil-gold)" />
      {/* Left ear inner hollow */}
      <ellipse cx="64" cy="160" rx="30" ry="35" fill="#4A0E0E" opacity="0.18" />

      {/* Right ear */}
      <ellipse cx="240" cy="160" rx="46" ry="52" fill="url(#sil-gold)" />
      {/* Right ear inner hollow */}
      <ellipse cx="236" cy="160" rx="30" ry="35" fill="#4A0E0E" opacity="0.18" />

      {/* ══════════════════════════════════════
          HEAD
      ══════════════════════════════════════ */}

      <ellipse cx="150" cy="158" rx="80" ry="82" fill="url(#sil-gold)" />

      {/* ── Forehead tilak ── */}
      <ellipse cx="150" cy="120" rx="7" ry="10" fill="#FFF5CC" opacity="0.7" />
      <circle  cx="150" cy="112" r="3" fill="#FFF5CC" opacity="0.9" />

      {/* ── Eyes ── */}
      {/* Eye whites */}
      <ellipse cx="124" cy="148" rx="13" ry="11" fill="#FFF8E8" opacity="0.92" />
      <ellipse cx="176" cy="148" rx="13" ry="11" fill="#FFF8E8" opacity="0.92" />
      {/* Irises */}
      <circle cx="124" cy="149" r="7" fill="#2A0A00" opacity="0.85" />
      <circle cx="176" cy="149" r="7" fill="#2A0A00" opacity="0.85" />
      {/* Eye highlights */}
      <circle cx="126" cy="146" r="2.5" fill="white" opacity="0.9" />
      <circle cx="178" cy="146" r="2.5" fill="white" opacity="0.9" />
      {/* Eyelids / brow shadow */}
      <path d="M113 142 Q124 136 135 142" stroke="#8A6A10" strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M165 142 Q176 136 187 142" stroke="#8A6A10" strokeWidth="1.5" fill="none" opacity="0.6" />

      {/* ── Cheek roundness highlight ── */}
      <ellipse cx="118" cy="168" rx="16" ry="12" fill="#F5E070" opacity="0.15" />
      <ellipse cx="182" cy="168" rx="16" ry="12" fill="#F5E070" opacity="0.15" />

      {/* ── Trunk — curves to the right ── */}
      <path
        d="
          M 143 205
          Q 138 228 132 248
          Q 124 272 130 290
          Q 136 308 152 308
          Q 170 308 172 292
          Q 174 276 162 264
          Q 155 255 158 242
          Q 162 228 158 210
        "
        fill="url(#sil-gold)"
      />
      {/* Trunk tip highlight */}
      <ellipse cx="158" cy="298" rx="10" ry="8" fill="#F5E070" opacity="0.35" transform="rotate(10 158 298)" />

      {/* ══════════════════════════════════════
          BODY (Lambodara — pot belly)
      ══════════════════════════════════════ */}

      {/* Neck connector */}
      <rect x="120" y="228" width="60" height="22" rx="12" fill="url(#sil-gold)" />

      {/* Main body */}
      <ellipse cx="150" cy="308" rx="90" ry="76" fill="url(#sil-gold)" />
      {/* Body shading for depth */}
      <ellipse cx="150" cy="308" rx="90" ry="76" fill="url(#sil-body-shade)" />

      {/* Navel */}
      <circle cx="150" cy="318" r="7" fill="#8A6A10" opacity="0.45" />
      <circle cx="150" cy="318" r="4" fill="#FFF5CC" opacity="0.25" />

      {/* ── Arms (4 arms, simplified rounded shapes) ── */}

      {/* Upper-left arm — raised */}
      <path d="M 90 255 Q 58 238 48 210 Q 44 192 58 186 Q 72 180 80 196 Q 86 210 82 228 Q 88 240 90 255 Z"
        fill="url(#sil-gold)" />
      {/* Upper-left hand — holds ankusha */}
      <ellipse cx="55" cy="182" rx="12" ry="10" fill="url(#sil-gold)" transform="rotate(-20 55 182)" />
      <path d="M 50 175 L 44 160 Q 48 152 54 158" stroke="url(#sil-crown)" strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* Upper-right arm — raised */}
      <path d="M 210 255 Q 242 238 252 210 Q 256 192 242 186 Q 228 180 220 196 Q 214 210 218 228 Q 212 240 210 255 Z"
        fill="url(#sil-gold)" />
      {/* Upper-right hand — holds pasha loop */}
      <ellipse cx="245" cy="182" rx="12" ry="10" fill="url(#sil-gold)" transform="rotate(20 245 182)" />
      <ellipse cx="248" cy="168" rx="10" ry="13" fill="none" stroke="url(#sil-crown)" strokeWidth="3" transform="rotate(-10 248 168)" />

      {/* Lower-left arm — resting, holds modak */}
      <path d="M 90 310 Q 64 330 60 355 Q 58 372 72 376 Q 86 380 92 365 Q 96 350 90 335 Q 92 322 90 310 Z"
        fill="url(#sil-gold)" />
      {/* Modak */}
      <path d="M 70 374 Q 62 362 72 356 Q 82 358 80 372 Q 78 382 70 374 Z" fill="url(#sil-crown)" opacity="0.9" />

      {/* Lower-right arm — abhaya mudra (blessing) */}
      <path d="M 210 310 Q 236 330 240 355 Q 242 372 228 376 Q 214 380 208 365 Q 204 350 210 335 Q 208 322 210 310 Z"
        fill="url(#sil-gold)" />
      {/* Hand - open palm */}
      <ellipse cx="232" cy="372" rx="13" ry="11" fill="url(#sil-gold)" transform="rotate(15 232 372)" />

      {/* ══════════════════════════════════════
          SEATED LEGS
      ══════════════════════════════════════ */}

      <ellipse cx="100" cy="368" rx="52" ry="22" fill="url(#sil-gold)" />
      <ellipse cx="200" cy="368" rx="52" ry="22" fill="url(#sil-gold)" />

      {/* Dhoti fold line */}
      <path d="M 70 355 Q 150 375 230 355" stroke="#8A6A10" strokeWidth="2" fill="none" opacity="0.4" />

      {/* ══════════════════════════════════════
          LOTUS BASE
      ══════════════════════════════════════ */}

      {/* Base platform */}
      <ellipse cx="150" cy="382" rx="105" ry="14" fill="url(#sil-gold)" opacity="0.7" />

      {/* Lotus petals (bottom half arc) */}
      {Array.from({ length: 9 }).map((_, i) => {
        const angle = 195 + i * 18;
        const rad = (angle * Math.PI) / 180;
        const cx = 150 + 95 * Math.cos(rad);
        const cy = 382 + 12 * Math.sin(rad);
        return (
          <ellipse
            key={i}
            cx={cx} cy={cy}
            rx="11" ry="6"
            fill="url(#sil-gold)"
            opacity="0.85"
            transform={`rotate(${angle + 90} ${cx} ${cy})`}
          />
        );
      })}
    </svg>
  );
}
