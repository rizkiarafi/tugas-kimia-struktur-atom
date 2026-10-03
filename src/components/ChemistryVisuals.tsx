import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/* ===================================================================
   CHEMISTRY VISUALS
   Custom, responsive SVG and interactive components for:
   - AtomModel: 3D-styled animated atomic nucleus and electron shells
   - Carbon12Diagram: Carbon-12 shell structure and ion behavior
   - LegoAnalogy: Visual Lego brick comparison for elements and compounds
   - CompoundVisual: Chemical bond formation and emergent property shift
   - MixtureVisual: Homogeneous vs Heterogeneous phase diagram
   - HierarchyChain: Flow from Atom -> Element -> Compound -> Mixture
   =================================================================== */

// 1. ATOM MODEL (Bohr-Rutherford dynamic model)
export function AtomModel() {
  const reduce = useReducedMotion();

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: 420,
        aspectRatio: '1 / 1',
        marginInline: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg
        viewBox="0 0 400 400"
        style={{ width: '100%', height: '100%', overflow: 'visible' }}
      >
        <defs>
          <filter id="atom-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <radialGradient id="nuc-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--c-amber)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="p-grad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#e8985c" />
            <stop offset="100%" stopColor="var(--c-amber)" />
          </radialGradient>
          <radialGradient id="n-grad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#d9c7a2" />
            <stop offset="100%" stopColor="var(--c-sand)" />
          </radialGradient>
          <radialGradient id="e-grad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#8ebca1" />
            <stop offset="100%" stopColor="var(--c-sage)" />
          </radialGradient>
        </defs>

        {/* Outer aura / electron cloud hint */}
        <circle cx="200" cy="200" r="160" fill="url(#nuc-glow)" />

        {/* Orbit 1 (Horizontal tilt) */}
        <ellipse
          cx="200"
          cy="200"
          rx="155"
          ry="58"
          fill="none"
          stroke="var(--hair)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          transform="rotate(-25 200 200)"
        />
        {/* Orbit 2 (Opposite tilt) */}
        <ellipse
          cx="200"
          cy="200"
          rx="155"
          ry="58"
          fill="none"
          stroke="var(--hair)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          transform="rotate(35 200 200)"
        />
        {/* Orbit 3 (Vertical tilt) */}
        <ellipse
          cx="200"
          cy="200"
          rx="155"
          ry="58"
          fill="none"
          stroke="var(--hair)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          transform="rotate(95 200 200)"
        />

        {/* Electrons on orbits (animated with framer-motion) */}
        <motion.g
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
          style={{ originX: '200px', originY: '200px' }}
        >
          <g transform="rotate(-25 200 200)">
            <circle
              cx="355"
              cy="200"
              r="7"
              fill="url(#e-grad)"
              filter="url(#atom-glow)"
            />
            <text
              x="355"
              y="203"
              textAnchor="middle"
              fill="var(--c-plum)"
              fontSize="9"
              fontWeight="bold"
            >
              -
            </text>
          </g>
        </motion.g>

        <motion.g
          animate={reduce ? undefined : { rotate: -360 }}
          transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
          style={{ originX: '200px', originY: '200px' }}
        >
          <g transform="rotate(35 200 200)">
            <circle
              cx="45"
              cy="200"
              r="7"
              fill="url(#e-grad)"
              filter="url(#atom-glow)"
            />
            <text
              x="45"
              y="203"
              textAnchor="middle"
              fill="var(--c-plum)"
              fontSize="9"
              fontWeight="bold"
            >
              -
            </text>
          </g>
        </motion.g>

        <motion.g
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 11, repeat: Infinity, ease: 'linear' }}
          style={{ originX: '200px', originY: '200px' }}
        >
          <g transform="rotate(95 200 200)">
            <circle
              cx="355"
              cy="200"
              r="7"
              fill="url(#e-grad)"
              filter="url(#atom-glow)"
            />
            <text
              x="355"
              y="203"
              textAnchor="middle"
              fill="var(--c-plum)"
              fontSize="9"
              fontWeight="bold"
            >
              -
            </text>
          </g>
        </motion.g>

        {/* Nucleus Boundary Glow */}
        <circle
          cx="200"
          cy="200"
          r="44"
          fill="rgba(68, 42, 49, 0.6)"
          stroke="var(--hair)"
          strokeWidth="1.5"
        />

        {/* Protons and Neutrons clustered in nucleus */}
        {/* Neutrons (n0, neutral sand/ivory) */}
        <circle cx="188" cy="188" r="11" fill="url(#n-grad)" />
        <circle cx="212" cy="189" r="11" fill="url(#n-grad)" />
        <circle cx="199" cy="214" r="11" fill="url(#n-grad)" />

        {/* Protons (p+, positive amber/copper) */}
        <circle
          cx="200"
          cy="194"
          r="11.5"
          fill="url(#p-grad)"
          filter="url(#atom-glow)"
        />
        <text
          x="200"
          y="198"
          textAnchor="middle"
          fill="#fff"
          fontSize="11"
          fontWeight="bold"
        >
          +
        </text>

        <circle
          cx="186"
          cy="209"
          r="11.5"
          fill="url(#p-grad)"
          filter="url(#atom-glow)"
        />
        <text
          x="186"
          y="213"
          textAnchor="middle"
          fill="#fff"
          fontSize="11"
          fontWeight="bold"
        >
          +
        </text>

        <circle
          cx="214"
          cy="207"
          r="11.5"
          fill="url(#p-grad)"
          filter="url(#atom-glow)"
        />
        <text
          x="214"
          y="211"
          textAnchor="middle"
          fill="#fff"
          fontSize="11"
          fontWeight="bold"
        >
          +
        </text>

        {/* Central label badge */}
        <rect
          x="145"
          y="256"
          width="110"
          height="24"
          rx="12"
          fill="rgba(43, 25, 52, 0.85)"
          stroke="var(--hair)"
        />
        <text
          x="200"
          y="272"
          textAnchor="middle"
          fill="var(--fg)"
          fontSize="11"
          fontWeight="600"
          letterSpacing="0.04em"
        >
          Inti Atom (p⁺, n⁰)
        </text>
      </svg>

      {/* Legend chips below */}
      <div
        style={{
          position: 'absolute',
          bottom: -18,
          display: 'flex',
          gap: 10,
          fontSize: 12,
          color: 'var(--fg-muted)',
        }}
      >
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: '50%',
              background: 'var(--c-amber)',
            }}
          />
          Proton (p⁺)
        </span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: '50%',
              background: 'var(--c-sand)',
            }}
          />
          Neutron (n⁰)
        </span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: '50%',
              background: 'var(--c-sage)',
            }}
          />
          Elektron (e⁻)
        </span>
      </div>
    </div>
  );
}

// 2. CARBON-12 & ION DIAGRAM
export function Carbon12Diagram() {
  const [isIon, setIsIon] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16,
        width: '100%',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: 360,
          aspectRatio: '1 / 1',
        }}
      >
        <svg
          viewBox="0 0 340 340"
          style={{ width: '100%', height: '100%', overflow: 'visible' }}
        >
          <defs>
            <filter id="c-glow">
              <feGaussianBlur stdDeviation="4" result="b" />
              <feComposite in="SourceGraphic" in2="b" operator="over" />
            </filter>
          </defs>

          {/* Shell 1 (K shell, n=1, 2 electrons) */}
          <circle
            cx="170"
            cy="170"
            r="70"
            fill="none"
            stroke="var(--hair)"
            strokeWidth="1.2"
            strokeDasharray="4 3"
          />
          <text
            x="170"
            y="94"
            textAnchor="middle"
            fill="var(--fg-faint)"
            fontSize="10"
            fontFamily="var(--font-mono)"
          >
            Kulit K (2e⁻)
          </text>

          {/* Shell 2 (L shell, n=2, 4 electrons) */}
          <circle
            cx="170"
            cy="170"
            r="125"
            fill="none"
            stroke="var(--hair)"
            strokeWidth="1.2"
            strokeDasharray="5 4"
          />
          <text
            x="170"
            y="38"
            textAnchor="middle"
            fill="var(--fg-faint)"
            fontSize="10"
            fontFamily="var(--font-mono)"
          >
            Kulit L (Valensi)
          </text>

          {/* Nucleus */}
          <circle
            cx="170"
            cy="170"
            r="38"
            fill="rgba(118, 66, 50, 0.45)"
            stroke="var(--c-amber)"
            strokeWidth="1.5"
          />
          <text
            x="170"
            y="163"
            textAnchor="middle"
            fill="var(--fg)"
            fontSize="12"
            fontWeight="bold"
          >
            6p⁺ · 6n⁰
          </text>
          <text
            x="170"
            y="181"
            textAnchor="middle"
            fill="var(--c-sand)"
            fontSize="10.5"
            fontFamily="var(--font-mono)"
          >
            Karbon-12
          </text>

          {/* 2 Electrons on K Shell */}
          <circle
            cx="170"
            cy="100"
            r="6"
            fill="var(--c-sage)"
            filter="url(#c-glow)"
          />
          <circle
            cx="170"
            cy="240"
            r="6"
            fill="var(--c-sage)"
            filter="url(#c-glow)"
          />

          {/* 4 Valence Electrons on L Shell (or 3 if cation ion demo) */}
          <circle
            cx="45"
            cy="170"
            r="6"
            fill="var(--c-sage)"
            filter="url(#c-glow)"
          />
          <circle
            cx="295"
            cy="170"
            r="6"
            fill="var(--c-sage)"
            filter="url(#c-glow)"
          />
          <circle
            cx="170"
            cy="45"
            r="6"
            fill="var(--c-sage)"
            filter="url(#c-glow)"
          />

          {!isIon ? (
            <circle
              cx="170"
              cy="295"
              r="6"
              fill="var(--c-sage)"
              filter="url(#c-glow)"
            />
          ) : (
            <g>
              <circle
                cx="170"
                cy="295"
                r="6"
                fill="none"
                stroke="var(--c-amber)"
                strokeDasharray="2 2"
              />
              <text
                x="170"
                y="318"
                textAnchor="middle"
                fill="var(--c-amber)"
                fontSize="10"
                fontWeight="600"
              >
                e⁻ terlepas
              </text>
            </g>
          )}
        </svg>
      </div>

      {/* Interactive toggle & status card */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 10,
          width: '100%',
          maxWidth: 380,
        }}
      >
        <button
          onClick={() => setIsIon(!isIon)}
          style={{
            background: isIon
              ? 'var(--accent)'
              : 'color-mix(in srgb, var(--primary) 12%, transparent)',
            color: isIon ? 'var(--accent-ink)' : 'var(--primary)',
            border: '1px solid var(--primary)',
            padding: '7px 18px',
            borderRadius: 999,
            cursor: 'pointer',
            fontSize: 13,
            fontWeight: 600,
            transition: 'all 0.3s ease',
          }}
        >
          {isIon ? 'Simulasikan: Atom Netral' : 'Simulasikan: Melepas 1 Elektron (Ion C⁺)'}
        </button>

        <div
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--hair)',
            borderRadius: 'var(--radius-sm)',
            padding: '10px 16px',
            fontSize: 13,
            textAlign: 'center',
            width: '100%',
          }}
        >
          <span style={{ color: 'var(--fg-faint)', textTransform: 'uppercase', fontSize: 11, letterSpacing: '0.08em' }}>
            Status Saat Ini:
          </span>
          <div style={{ color: 'var(--fg)', fontWeight: 600, marginTop: 2 }}>
            {isIon ? 'Ion Karbon Bermuatan Positif (C⁺)' : 'Atom Karbon Netral (C)'}
          </div>
          <div style={{ color: 'var(--c-sand)', fontSize: 12, marginTop: 4 }}>
            {isIon
              ? 'Proton tetap 6! Identitas tidak berubah, tetap Karbon.'
              : 'Jumlah proton (6) = Jumlah elektron (6) → Muatan = 0'}
          </div>
        </div>
      </div>
    </div>
  );
}

// 3. LEGO ANALOGY VISUAL
export function LegoAnalogyVisual() {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 16,
        maxWidth: 720,
        marginInline: 'auto',
      }}
    >
      {[
        {
          name: 'Keping Merah (H)',
          proton: '1 Proton',
          desc: 'Balok paling ringan, satu tonjolan, identitas unik Hidrogen.',
          color: '#be7740',
          studs: 1,
        },
        {
          name: 'Keping Biru (O)',
          proton: '8 Proton',
          desc: 'Balok berukuran sedang, spesifik membentuk gas oksigen.',
          color: '#6a8872',
          studs: 2,
        },
        {
          name: 'Keping Emas (Fe)',
          proton: '26 Proton',
          desc: 'Balok logam padat berkekuatan tinggi, identitas atom Besi.',
          color: '#ab935e',
          studs: 4,
        },
      ].map((b, i) => (
        <div
          key={i}
          style={{
            flex: '1 1 200px',
            background: 'var(--surface)',
            border: '1px solid var(--hair)',
            borderRadius: 'var(--radius)',
            padding: '20px 18px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: 12,
          }}
        >
          {/* Lego brick SVG */}
          <svg width="84" height="60" viewBox="0 0 100 70">
            {/* Studs */}
            {Array.from({ length: b.studs }).map((_, si) => {
              const xPos = b.studs === 1 ? 50 : 25 + si * (50 / (b.studs - 1 || 1));
              return (
                <g key={si}>
                  <rect
                    x={xPos - 12}
                    y="6"
                    width="24"
                    height="12"
                    rx="3"
                    fill={b.color}
                    opacity="0.9"
                  />
                  <ellipse
                    cx={xPos}
                    cy="6"
                    rx="12"
                    ry="4"
                    fill="color-mix(in srgb, #fff 35%, transparent)"
                  />
                </g>
              );
            })}
            {/* Brick Body */}
            <rect
              x="10"
              y="16"
              width="80"
              height="44"
              rx="6"
              fill={b.color}
              stroke="rgba(0,0,0,0.25)"
              strokeWidth="1.5"
            />
            {/* Top highlight line */}
            <line
              x1="12"
              y1="18"
              x2="88"
              y2="18"
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="2"
            />
          </svg>

          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                fontWeight: 600,
                color: b.color,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              {b.proton}
            </div>
            <h4
              style={{
                fontSize: 17,
                fontWeight: 600,
                color: 'var(--fg)',
                margin: '4px 0 6px',
              }}
            >
              {b.name}
            </h4>
            <p style={{ fontSize: 13, color: 'var(--fg-muted)', lineHeight: 1.45 }}>
              {b.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

// 4. COMPOUND SYNTHESIS VISUAL (Water & Salt)
export function CompoundFormationVisual() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        width: '100%',
        maxWidth: 420,
        marginInline: 'auto',
      }}
    >
      {/* Case 1: H2O */}
      <div
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--hair)',
          borderRadius: 'var(--radius)',
          padding: '16px 20px',
        }}
      >
        <div
          style={{
            fontSize: 11.5,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'var(--c-sand)',
            marginBottom: 8,
          }}
        >
          Sintesis Air (Ikatan Kovalen)
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 10,
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: 13, color: 'var(--c-amber)', fontWeight: 600 }}>
              2 H₂ (Gas)
            </span>
            <div style={{ fontSize: 11, color: 'var(--fg-faint)' }}>Mudah terbakar</div>
          </div>
          <span style={{ fontSize: 18, color: 'var(--fg-faint)' }}>+</span>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: 13, color: 'var(--c-sand)', fontWeight: 600 }}>
              O₂ (Gas)
            </span>
            <div style={{ fontSize: 11, color: 'var(--fg-faint)' }}>Pemicu api</div>
          </div>
          <span style={{ fontSize: 18, color: 'var(--primary)' }}>➔</span>
          <div
            style={{
              textAlign: 'center',
              background: 'color-mix(in srgb, var(--c-sage) 18%, transparent)',
              padding: '6px 12px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--c-sage)',
            }}
          >
            <span style={{ fontSize: 15, color: '#fbf7ee', fontWeight: 700 }}>
              2 H₂O
            </span>
            <div style={{ fontSize: 11, color: 'var(--c-sage)', fontWeight: 600 }}>
              Cairan pemadam api!
            </div>
          </div>
        </div>
      </div>

      {/* Case 2: NaCl */}
      <div
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--hair)',
          borderRadius: 'var(--radius)',
          padding: '16px 20px',
        }}
      >
        <div
          style={{
            fontSize: 11.5,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'var(--c-amber)',
            marginBottom: 8,
          }}
        >
          Garam Dapur (Ikatan Ionik)
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 10,
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: 13, color: 'var(--c-terracotta)', fontWeight: 600 }}>
              Na (Logam)
            </span>
            <div style={{ fontSize: 11, color: 'var(--fg-faint)' }}>Meledak di air</div>
          </div>
          <span style={{ fontSize: 18, color: 'var(--fg-faint)' }}>+</span>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: 13, color: 'var(--c-gold)', fontWeight: 600 }}>
              Cl₂ (Gas)
            </span>
            <div style={{ fontSize: 11, color: 'var(--fg-faint)' }}>Gas beracun</div>
          </div>
          <span style={{ fontSize: 18, color: 'var(--primary)' }}>➔</span>
          <div
            style={{
              textAlign: 'center',
              background: 'color-mix(in srgb, var(--c-amber) 18%, transparent)',
              padding: '6px 12px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--c-amber)',
            }}
          >
            <span style={{ fontSize: 15, color: '#fbf7ee', fontWeight: 700 }}>
              NaCl
            </span>
            <div style={{ fontSize: 11, color: 'var(--c-sand)', fontWeight: 600 }}>
              Garam aman dimakan!
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          fontSize: 12,
          color: 'var(--fg-muted)',
          textAlign: 'center',
          fontStyle: 'italic',
        }}
      >
        Ikatan kimia mengubah total sifat dasar atom asalnya menjadi zat baru.
      </div>
    </div>
  );
}

// 5. MIXTURE PHASES (Homogen vs Heterogen)
export function MixturePhasesVisual() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: 16,
        width: '100%',
        maxWidth: 440,
        marginInline: 'auto',
      }}
    >
      {/* Homogen container */}
      <div
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--hair)',
          borderRadius: 'var(--radius)',
          padding: 16,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            width: 100,
            height: 120,
            border: '2px solid var(--hair)',
            borderTop: 'none',
            borderRadius: '0 0 16px 16px',
            position: 'relative',
            overflow: 'hidden',
            background: 'rgba(255,255,255,0.03)',
            marginBottom: 12,
          }}
        >
          {/* Uniform solution */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '80%',
              background:
                'linear-gradient(180deg, rgba(106, 136, 114, 0.45) 0%, rgba(106, 136, 114, 0.65) 100%)',
            }}
          />
          {/* Dispersed salt particles */}
          <span
            style={{
              position: 'absolute',
              bottom: 45,
              left: 30,
              width: 4,
              height: 4,
              borderRadius: '50%',
              background: '#fff',
            }}
          />
          <span
            style={{
              position: 'absolute',
              bottom: 25,
              right: 25,
              width: 4,
              height: 4,
              borderRadius: '50%',
              background: '#fff',
            }}
          />
          <span
            style={{
              position: 'absolute',
              bottom: 60,
              right: 40,
              width: 4,
              height: 4,
              borderRadius: '50%',
              background: '#fff',
            }}
          />
          <span
            style={{
              position: 'absolute',
              bottom: 15,
              left: 45,
              width: 4,
              height: 4,
              borderRadius: '50%',
              background: '#fff',
            }}
          />
        </div>
        <h4 style={{ fontSize: 15, fontWeight: 600, color: 'var(--fg)', margin: 0 }}>
          Air Garam
        </h4>
        <span
          style={{
            fontSize: 11.5,
            color: 'var(--c-sage)',
            fontWeight: 600,
            marginTop: 4,
          }}
        >
          Homogen (1 Fase Seragam)
        </span>
        <p style={{ fontSize: 11.5, color: 'var(--fg-faint)', marginTop: 6 }}>
          Dipisahkan lewat penguapan (fisik).
        </p>
      </div>

      {/* Heterogen container */}
      <div
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--hair)',
          borderRadius: 'var(--radius)',
          padding: 16,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            width: 100,
            height: 120,
            border: '2px solid var(--hair)',
            borderTop: 'none',
            borderRadius: '0 0 16px 16px',
            position: 'relative',
            overflow: 'hidden',
            background: 'rgba(255,255,255,0.03)',
            marginBottom: 12,
          }}
        >
          {/* Water layer (bottom) */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '48%',
              background: 'rgba(106, 136, 114, 0.55)',
            }}
          />
          {/* Phase boundary line */}
          <div
            style={{
              position: 'absolute',
              bottom: '48%',
              left: 0,
              right: 0,
              height: 2,
              background: 'var(--c-amber)',
            }}
          />
          {/* Oil layer (top) */}
          <div
            style={{
              position: 'absolute',
              bottom: '50%',
              left: 0,
              right: 0,
              height: '35%',
              background: 'rgba(190, 119, 64, 0.65)',
            }}
          />
        </div>
        <h4 style={{ fontSize: 15, fontWeight: 600, color: 'var(--fg)', margin: 0 }}>
          Air + Minyak
        </h4>
        <span
          style={{
            fontSize: 11.5,
            color: 'var(--c-amber)',
            fontWeight: 600,
            marginTop: 4,
          }}
        >
          Heterogen (2 Lapisan Terpisah)
        </span>
        <p style={{ fontSize: 11.5, color: 'var(--fg-faint)', marginTop: 6 }}>
          Dipisahkan langsung dengan corong pisah.
        </p>
      </div>
    </div>
  );
}

// 6. HIERARCHY CHAIN (Atom -> Unsur -> Senyawa -> Campuran)
export function HierarchyChain() {
  const steps = [
    {
      level: '1. ATOM',
      title: 'Partikel Dasar',
      keyText: 'Identitas proton (Z)',
      color: 'var(--c-amber)',
    },
    {
      level: '2. UNSUR',
      title: 'Zat Murni Sejenis',
      keyText: '1 Jenis atom identik',
      color: 'var(--c-sand)',
    },
    {
      level: '3. SENYAWA',
      title: 'Ikatan Kimia',
      keyText: '≥2 unsur berbeda (Zat baru)',
      color: 'var(--c-gold)',
    },
    {
      level: '4. CAMPURAN',
      title: 'Gabungan Fisik',
      keyText: 'Bercampur tanpa reaksi kimia',
      color: 'var(--c-sage)',
    },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12,
        maxWidth: 760,
        marginInline: 'auto',
        width: '100%',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: 14,
          width: '100%',
        }}
      >
        {steps.map((s, idx) => (
          <div
            key={idx}
            style={{
              background: 'var(--surface)',
              border: `1px solid ${s.color}`,
              borderRadius: 'var(--radius)',
              padding: '18px 14px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 8px 24px -10px rgba(0,0,0,0.5)',
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  color: s.color,
                }}
              >
                {s.level}
              </span>
              <h4
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: 'var(--fg)',
                  margin: '6px 0 8px',
                }}
              >
                {s.title}
              </h4>
            </div>
            <div
              style={{
                fontSize: 12,
                color: 'var(--fg-muted)',
                background: 'rgba(255,255,255,0.03)',
                padding: '6px 8px',
                borderRadius: 'var(--radius-sm)',
              }}
            >
              {s.keyText}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
