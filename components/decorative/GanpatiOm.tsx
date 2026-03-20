// GanpatiOm — Sacred OM (ॐ) symbol with Ganpati's crown, ears & trunk
// The Om IS the face — crown rises above, ears extend sideways, trunk below.
// Gold gradient on transparent background.

export default function GanpatiOm({ size = 340 }: { size?: number }) {
  const h = size * 1.2;

  return (
    <svg
      viewBox="0 0 360 432"
      width={size}
      height={h}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ganpati-glow"
      aria-label="Om — Lord Ganesha"
    >
      <defs>
        {/* Main gold gradient */}
        <linearGradient id="om-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#FFF0A0" />
          <stop offset="45%"  stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#8A6A10" />
        </linearGradient>

        {/* Radial glow centred on the Om */}
        <radialGradient id="om-glow" cx="50%" cy="52%" r="44%">
          <stop offset="0%"   stopColor="#D4AF37" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0"    />
        </radialGradient>

        {/* Text gradient for the Om character */}
        <linearGradient id="om-text-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#FFF5C0" />
          <stop offset="50%"  stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#9A7820" />
        </linearGradient>
      </defs>

      {/* ── Ambient glow behind Om ── */}
      <ellipse cx="180" cy="225" rx="148" ry="148" fill="url(#om-glow)" />

      {/* ══════════════════════════════════════
          OUTER MANDALA RINGS
      ══════════════════════════════════════ */}
      <circle cx="180" cy="228" r="158" stroke="#D4AF37" strokeWidth="0.7" strokeDasharray="4 5" opacity="0.25" />
      <circle cx="180" cy="228" r="148" stroke="#D4AF37" strokeWidth="1"   opacity="0.18" />

      {/* 24 petal dots on outer ring */}
      {Array.from({ length: 24 }).map((_, i) => {
        const a = (i * 15 * Math.PI) / 180;
        return (
          <circle key={i}
            cx={180 + 148 * Math.cos(a)}
            cy={228 + 148 * Math.sin(a)}
            r="2" fill="#D4AF37" opacity="0.3"
          />
        );
      })}

      {/* Inner ring */}
      <circle cx="180" cy="228" r="132" stroke="#D4AF37" strokeWidth="0.6" strokeDasharray="2 4" opacity="0.2" />

      {/* ══════════════════════════════════════
          MUKUT (CROWN)
          Rises above the Om
      ══════════════════════════════════════ */}

      {/* Crown base band */}
      <path d="M120 98 Q180 90 240 98 L236 116 Q180 108 124 116 Z"
        fill="url(#om-gold)" opacity="0.9" />

      {/* Crown spires */}
      {/* Left spire */}
      <path d="M134 98 L128 72 Q134 58 140 72 L134 98Z" fill="url(#om-gold)" />
      <circle cx="134" cy="55" r="4" fill="#FFF5CC" opacity="0.95" />

      {/* Centre spire — tallest */}
      <path d="M180 96 L173 52 Q180 34 187 52 L180 96Z" fill="url(#om-gold)" />
      <circle cx="180" cy="30" r="6" fill="#FFF5CC" opacity="1" />
      {/* Centre jewel glow */}
      <circle cx="180" cy="30" r="10" stroke="#D4AF37" strokeWidth="1" opacity="0.4" />

      {/* Right spire */}
      <path d="M226 98 L220 72 Q226 58 232 72 L226 98Z" fill="url(#om-gold)" />
      <circle cx="226" cy="55" r="4" fill="#FFF5CC" opacity="0.95" />

      {/* Crown side wings */}
      <path d="M120 98 Q100 92 94 104 Q98 116 120 116Z"  fill="url(#om-gold)" opacity="0.7" />
      <path d="M240 98 Q260 92 266 104 Q262 116 240 116Z" fill="url(#om-gold)" opacity="0.7" />

      {/* Crown decorative dots row */}
      {[140, 155, 170, 180, 190, 205, 220].map((x, i) => (
        <circle key={i} cx={x} cy={112} r="2" fill="#FFF5CC" opacity="0.7" />
      ))}

      {/* ══════════════════════════════════════
          ELEPHANT EARS
          Extend either side of the Om body
      ══════════════════════════════════════ */}

      {/* Left ear */}
      <ellipse cx="34" cy="228" rx="40" ry="52"
        stroke="url(#om-gold)" strokeWidth="2"
        fill="url(#om-gold)" fillOpacity="0.06" />
      {/* Left ear inner curve */}
      <ellipse cx="40" cy="228" rx="24" ry="34"
        stroke="#D4AF37" strokeWidth="1" strokeDasharray="3 2" opacity="0.4" />
      {/* Left ear vein lines */}
      <path d="M26 210 Q36 228 26 246" stroke="#D4AF37" strokeWidth="0.8" opacity="0.3" />

      {/* Right ear */}
      <ellipse cx="326" cy="228" rx="40" ry="52"
        stroke="url(#om-gold)" strokeWidth="2"
        fill="url(#om-gold)" fillOpacity="0.06" />
      <ellipse cx="320" cy="228" rx="24" ry="34"
        stroke="#D4AF37" strokeWidth="1" strokeDasharray="3 2" opacity="0.4" />
      <path d="M334 210 Q324 228 334 246" stroke="#D4AF37" strokeWidth="0.8" opacity="0.3" />

      {/* ══════════════════════════════════════
          OM CHARACTER — the face
          Rendered as SVG text using the
          already-loaded Noto Serif Devanagari
      ══════════════════════════════════════ */}

      {/* Shadow / depth layer */}
      <text
        x="183" y="318"
        textAnchor="middle"
        fontSize="210"
        fontFamily="'Noto Serif Devanagari', serif"
        fill="#8A6A10"
        opacity="0.25"
      >
        ॐ
      </text>

      {/* Main Om — filled with gradient via a trick:
          render twice: once clipped for gradient fill */}
      <text
        x="180" y="314"
        textAnchor="middle"
        fontSize="210"
        fontFamily="'Noto Serif Devanagari', serif"
        fill="url(#om-text-gold)"
        opacity="0.95"
      >
        ॐ
      </text>

      {/* ══════════════════════════════════════
          EYES — positioned in the upper
          loops of the Om character
      ══════════════════════════════════════ */}

      {/* Left eye */}
      <ellipse cx="148" cy="182" rx="11" ry="9" fill="#FFF8E8" opacity="0.92" />
      <circle  cx="148" cy="183" r="5.5" fill="#2A0A00" opacity="0.85" />
      <circle  cx="150" cy="180" r="2"   fill="white"   opacity="0.9"  />

      {/* Right eye */}
      <ellipse cx="210" cy="182" rx="11" ry="9" fill="#FFF8E8" opacity="0.92" />
      <circle  cx="210" cy="183" r="5.5" fill="#2A0A00" opacity="0.85" />
      <circle  cx="212" cy="180" r="2"   fill="white"   opacity="0.9"  />

      {/* Brow curves */}
      <path d="M138 174 Q148 168 158 174" stroke="#8A6A10" strokeWidth="1.5" opacity="0.5" />
      <path d="M200 174 Q210 168 220 174" stroke="#8A6A10" strokeWidth="1.5" opacity="0.5" />

      {/* Tilak on forehead */}
      <ellipse cx="180" cy="148" rx="7" ry="10" fill="#D4AF37" opacity="0.3" />
      <circle  cx="180" cy="140" r="3.5" fill="#FFF5CC" opacity="0.8" />

      {/* ══════════════════════════════════════
          TRUNK — flows from bottom of Om,
          curling to the right
      ══════════════════════════════════════ */}

      {/* Trunk body */}
      <path
        d="M 178 320
           Q 170 340 165 358
           Q 158 378 168 392
           Q 178 404 192 398
           Q 206 392 204 378
           Q 202 364 190 358
           Q 182 352 186 338
           Q 190 326 185 318"
        stroke="url(#om-gold)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      {/* Trunk highlight */}
      <path
        d="M 176 322
           Q 168 342 163 360
           Q 157 378 167 392"
        stroke="#FFF0A0"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.35"
      />
      {/* Trunk tip */}
      <ellipse cx="195" cy="393" rx="9" ry="7"
        fill="url(#om-gold)" opacity="0.7"
        transform="rotate(20 195 393)" />

      {/* ══════════════════════════════════════
          LOTUS BASE
      ══════════════════════════════════════ */}

      {/* Base platform */}
      <ellipse cx="180" cy="424" rx="100" ry="10" fill="url(#om-gold)" opacity="0.5" />

      {/* Lotus petals */}
      {Array.from({ length: 9 }).map((_, i) => {
        const angle = -180 + (i * 180) / 8;
        const rad   = (angle * Math.PI) / 180;
        const cx    = 180 + 90 * Math.cos(rad);
        const cy    = 424 +  9 * Math.sin(rad);
        return (
          <ellipse key={i}
            cx={cx} cy={cy}
            rx="11" ry="6"
            fill="url(#om-gold)"
            opacity="0.75"
            transform={`rotate(${angle + 90} ${cx} ${cy})`}
          />
        );
      })}

      {/* ══════════════════════════════════════
          BOTTOM BLESSING TEXT
      ══════════════════════════════════════ */}
      <text
        x="180" y="445"
        textAnchor="middle"
        fontSize="11"
        fontFamily="'Noto Serif Devanagari', serif"
        fill="#D4AF37"
        opacity="0.65"
        letterSpacing="3"
      >
        गणपती बाप्पा मोरया
      </text>
    </svg>
  );
}
