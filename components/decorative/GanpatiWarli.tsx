// GanpatiWarli — Warli tribal art style Ganpati
// Traditional Maharashtrian folk art: geometric shapes, stick figures
// Circles + triangles + lines, gold on transparent

export default function GanpatiWarli({ size = 340 }: { size?: number }) {
  const h = size * 1.15;

  return (
    <svg
      viewBox="0 0 400 460"
      width={size}
      height={h}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Lord Ganesha — Warli art style"
    >
      {/* ── Colour tokens ── */}
      {/* All strokes and fills use the gold palette to sit on ivory bg */}

      {/* ══════════════════════════════════════
          OUTER RING — circle of dancing
          Warli figures (paalghat / chauk)
      ══════════════════════════════════════ */}

      {/* Outer boundary circle */}
      <circle cx="200" cy="220" r="185" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.35" />
      <circle cx="200" cy="220" r="172" stroke="#D4AF37" strokeWidth="0.8" opacity="0.2" />

      {/* 12 dancing Warli figures around the ring */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180);
        const r = 155;
        const cx = 200 + r * Math.cos(angle);
        const cy = 220 + r * Math.sin(angle);
        const rot = i * 30 + 90;
        return (
          <g key={i} transform={`translate(${cx},${cy}) rotate(${rot})`}>
            {/* Head */}
            <circle cx="0" cy="-14" r="4" stroke="#D4AF37" strokeWidth="1.2" fill="#D4AF37" fillOpacity="0.15" />
            {/* Body triangle */}
            <path d="M-5 -10 L0 5 L5 -10 Z" stroke="#D4AF37" strokeWidth="1.1" fill="#D4AF37" fillOpacity="0.12" />
            {/* Arms */}
            <line x1="-5" y1="-5" x2="-10" y2="-10" stroke="#D4AF37" strokeWidth="1.1" />
            <line x1="5"  y1="-5" x2="10"  y2="-10" stroke="#D4AF37" strokeWidth="1.1" />
            {/* Legs */}
            <line x1="-2" y1="5" x2="-4" y2="12" stroke="#D4AF37" strokeWidth="1.1" />
            <line x1="2"  y1="5" x2="4"  y2="12" stroke="#D4AF37" strokeWidth="1.1" />
          </g>
        );
      })}

      {/* Dots between figures */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 - 75) * (Math.PI / 180);
        const cx = 200 + 155 * Math.cos(angle);
        const cy = 220 + 155 * Math.sin(angle);
        return <circle key={i} cx={cx} cy={cy} r="2.5" fill="#D4AF37" opacity="0.5" />;
      })}

      {/* ══════════════════════════════════════
          INNER DECORATIVE BAND
          — small birds and rice motifs
      ══════════════════════════════════════ */}

      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 45 - 90) * (Math.PI / 180);
        const cx = 200 + 120 * Math.cos(angle);
        const cy = 220 + 120 * Math.sin(angle);
        // Bird: two small triangles (wings)
        return (
          <g key={i} transform={`translate(${cx},${cy})`}>
            <path d="M-6 0 L0 -5 L6 0" stroke="#D4AF37" strokeWidth="1" fill="#D4AF37" fillOpacity="0.12" />
            <circle cx="0" cy="2" r="2" fill="#D4AF37" opacity="0.5" />
          </g>
        );
      })}

      {/* Rice/seed dots scattered in middle ring */}
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 22.5) * (Math.PI / 180);
        const cx = 200 + 100 * Math.cos(angle);
        const cy = 220 + 100 * Math.sin(angle);
        return <circle key={i} cx={cx} cy={cy} r="1.8" fill="#D4AF37" opacity="0.3" />;
      })}

      {/* ══════════════════════════════════════
          GANPATI — Central Warli figure
      ══════════════════════════════════════ */}

      {/* ── Halo ring ── */}
      <circle cx="200" cy="185" r="82" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.55" />

      {/* ── Mukut (Crown) — zigzag line + dots ── */}
      {/* Crown band */}
      <path d="M155 108 L165 95 L175 108 L185 92 L195 108 L205 92 L215 108 L225 95 L235 108"
        stroke="#D4AF37" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
      {/* Crown dots */}
      <circle cx="165" cy="95" r="3" fill="#D4AF37" opacity="0.9" />
      <circle cx="185" cy="92" r="3" fill="#D4AF37" opacity="0.9" />
      <circle cx="200" cy="88" r="4" fill="#D4AF37" opacity="1" />
      <circle cx="215" cy="92" r="3" fill="#D4AF37" opacity="0.9" />
      <circle cx="225" cy="95" r="3" fill="#D4AF37" opacity="0.9" />
      {/* Crown top finial */}
      <circle cx="200" cy="82" r="5" stroke="#D4AF37" strokeWidth="1.5" fill="#D4AF37" fillOpacity="0.2" />
      <line x1="200" y1="77" x2="200" y2="68" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
      <circle cx="200" cy="65" r="3" fill="#D4AF37" />

      {/* ── Head — large circle ── */}
      <circle cx="200" cy="168" r="60"
        stroke="#D4AF37" strokeWidth="2.5"
        fill="#D4AF37" fillOpacity="0.08" />

      {/* ── Ears — circles on each side ── */}
      <circle cx="130" cy="168" r="28"
        stroke="#D4AF37" strokeWidth="2"
        fill="#D4AF37" fillOpacity="0.06" />
      {/* Ear inner detail */}
      <circle cx="134" cy="168" r="16"
        stroke="#D4AF37" strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />

      <circle cx="270" cy="168" r="28"
        stroke="#D4AF37" strokeWidth="2"
        fill="#D4AF37" fillOpacity="0.06" />
      <circle cx="266" cy="168" r="16"
        stroke="#D4AF37" strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />

      {/* ── Eyes — classic Warli style: simple circles ── */}
      <circle cx="182" cy="158" r="7" stroke="#D4AF37" strokeWidth="2" fill="#D4AF37" fillOpacity="0.2" />
      <circle cx="182" cy="158" r="3" fill="#D4AF37" opacity="0.9" />

      <circle cx="218" cy="158" r="7" stroke="#D4AF37" strokeWidth="2" fill="#D4AF37" fillOpacity="0.2" />
      <circle cx="218" cy="158" r="3" fill="#D4AF37" opacity="0.9" />

      {/* ── Tilak — three horizontal lines ── */}
      <line x1="193" y1="130" x2="207" y2="130" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
      <line x1="196" y1="136" x2="204" y2="136" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="200" cy="143" r="2.5" fill="#D4AF37" opacity="0.8" />

      {/* ── Trunk — wavy zigzag line, Warli style ── */}
      <path d="M 200 220 Q 208 234 202 246 Q 196 258 206 268 Q 216 278 210 290"
        stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Trunk tip circle */}
      <circle cx="210" cy="293" r="5" stroke="#D4AF37" strokeWidth="1.5" fill="#D4AF37" fillOpacity="0.2" />

      {/* ── Body — inverted triangle (classic Warli body) ── */}
      <path d="M 148 240 L 200 340 L 252 240 Z"
        stroke="#D4AF37" strokeWidth="2.5"
        strokeLinejoin="round"
        fill="#D4AF37" fillOpacity="0.08" />

      {/* Navel dot */}
      <circle cx="200" cy="295" r="4" fill="#D4AF37" opacity="0.5" />

      {/* Belly sacred thread — diagonal line */}
      <line x1="180" y1="255" x2="165" y2="315" stroke="#D4AF37" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.6" />

      {/* ── Four arms — diagonal lines with hand circles ── */}

      {/* Upper-left: raised holding ankusha */}
      <line x1="158" y1="248" x2="118" y2="210" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="115" cy="207" r="6" stroke="#D4AF37" strokeWidth="1.5" fill="#D4AF37" fillOpacity="0.1" />
      {/* Ankusha — hook shape */}
      <path d="M112 200 L108 190 Q112 183 118 188" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" />

      {/* Upper-right: raised holding pasha */}
      <line x1="242" y1="248" x2="282" y2="210" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="285" cy="207" r="6" stroke="#D4AF37" strokeWidth="1.5" fill="#D4AF37" fillOpacity="0.1" />
      {/* Pasha — loop */}
      <circle cx="288" cy="197" r="8" stroke="#D4AF37" strokeWidth="1.5" fill="none" opacity="0.8" />

      {/* Lower-left: down, modak */}
      <line x1="165" y1="300" x2="140" y2="335" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="137" cy="338" r="6" stroke="#D4AF37" strokeWidth="1.5" fill="#D4AF37" fillOpacity="0.1" />
      {/* Modak — small filled circle */}
      <circle cx="130" cy="348" r="8" stroke="#D4AF37" strokeWidth="1.5" fill="#D4AF37" fillOpacity="0.2" />
      <path d="M125 348 Q130 342 135 348" stroke="#D4AF37" strokeWidth="1" />

      {/* Lower-right: raised in blessing */}
      <line x1="235" y1="300" x2="260" y2="335" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="263" cy="338" r="6" stroke="#D4AF37" strokeWidth="1.5" fill="#D4AF37" fillOpacity="0.1" />
      {/* Open palm — fan of finger lines */}
      <line x1="258" y1="345" x2="255" y2="354" stroke="#D4AF37" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="263" y1="345" x2="262" y2="355" stroke="#D4AF37" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="268" y1="345" x2="269" y2="354" stroke="#D4AF37" strokeWidth="1.2" strokeLinecap="round" />

      {/* ── Legs — two downward triangles ── */}
      <path d="M 165 338 L 148 365 L 182 365 Z"
        stroke="#D4AF37" strokeWidth="2"
        fill="#D4AF37" fillOpacity="0.1" />
      <path d="M 235 338 L 218 365 L 252 365 Z"
        stroke="#D4AF37" strokeWidth="2"
        fill="#D4AF37" fillOpacity="0.1" />

      {/* ── Mushak (mouse) — tiny Warli figure ── */}
      <circle cx="200" cy="400" r="10" stroke="#D4AF37" strokeWidth="1.5" fill="#D4AF37" fillOpacity="0.08" />
      <circle cx="210" cy="393" r="5"  stroke="#D4AF37" strokeWidth="1.2" fill="#D4AF37" fillOpacity="0.08" />
      <circle cx="208" cy="393" r="1.5" fill="#D4AF37" opacity="0.8" />
      {/* Tail */}
      <path d="M190 403 Q178 398 176 390" stroke="#D4AF37" strokeWidth="1.2" fill="none" strokeLinecap="round" />

      {/* ── Lotus base — row of petal triangles ── */}
      {Array.from({ length: 9 }).map((_, i) => {
        const x = 120 + i * 20;
        return (
          <path key={i}
            d={`M${x} 415 L${x + 10} 430 L${x + 20} 415`}
            stroke="#D4AF37" strokeWidth="1.5"
            strokeLinejoin="round"
            fill="#D4AF37" fillOpacity="0.1"
          />
        );
      })}

      {/* Base ground line */}
      <line x1="110" y1="415" x2="290" y2="415" stroke="#D4AF37" strokeWidth="1.5" opacity="0.6" />

      {/* ══════════════════════════════════════
          CORNER WARLI MOTIFS
          — trees and spirals at four corners
      ══════════════════════════════════════ */}

      {/* Bottom-left tree */}
      <line x1="30" y1="440" x2="30" y2="410" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <circle cx="30" cy="403" r="10" stroke="#D4AF37" strokeWidth="1.2" fill="#D4AF37" fillOpacity="0.06" opacity="0.4" />

      {/* Bottom-right tree */}
      <line x1="370" y1="440" x2="370" y2="410" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <circle cx="370" cy="403" r="10" stroke="#D4AF37" strokeWidth="1.2" fill="#D4AF37" fillOpacity="0.06" opacity="0.4" />

      {/* Top spiral motifs */}
      <path d="M35 30 Q40 20 50 25 Q55 35 45 38 Q38 40 38 32" stroke="#D4AF37" strokeWidth="1.2" fill="none" opacity="0.35" />
      <path d="M365 30 Q360 20 350 25 Q345 35 355 38 Q362 40 362 32" stroke="#D4AF37" strokeWidth="1.2" fill="none" opacity="0.35" />

    </svg>
  );
}
