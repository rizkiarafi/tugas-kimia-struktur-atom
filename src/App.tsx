import React from 'react';
import Deck from './deck/Deck';
import Slide from './deck/Slide';
import Build from './deck/Build';
import Reveal from './deck/Reveal';
import Cover from './components/Cover';
import Agenda from './components/Agenda';
import Split from './components/Split';
import Table from './components/Table';
import Tabs from './components/Tabs';
import Steps from './components/Steps';
import Contrast from './components/Contrast';
import {
  AtomModel,
  Carbon12Diagram,
  LegoAnalogyVisual,
  CompoundFormationVisual,
  MixturePhasesVisual,
  HierarchyChain,
} from './components/ChemistryVisuals';

/* Shared theme styles for cards & callouts */
const cardStyle: React.CSSProperties = {
  padding: 'clamp(18px, 2.2vw, 26px)',
  borderRadius: 'var(--radius)',
  background: 'var(--surface)',
  border: '1px solid var(--hair)',
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  textAlign: 'left',
  boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.5)',
};

const formulaBoxStyle: React.CSSProperties = {
  padding: '12px 20px',
  borderRadius: 'var(--radius-sm)',
  background: 'color-mix(in srgb, var(--primary) 12%, transparent)',
  border: '1px solid var(--primary)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 12,
  fontFamily: 'var(--font-mono)',
  fontSize: 'clamp(14px, 1.4vw, 17px)',
  color: 'var(--fg)',
  fontWeight: 600,
};

const badgeStyle = (color = 'var(--c-amber)'): React.CSSProperties => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  padding: '4px 10px',
  borderRadius: 999,
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: '#fff',
  background: color,
  width: 'fit-content',
});

export default function App() {
  return (
    <Deck>
      {/* ─────────────────────────────────────────────────────────────────
          SLIDE 1: COVER
          Judul, Subjudul, Alur Utama
          ───────────────────────────────────────────────────────────────── */}
      <Cover
        nav="Cover"
        notes="Selamat datang di presentasi Kimia Dasar. Kita akan menelusuri bagaimana materi di alam semesta tersusun dari tingkatan atom hingga campuran."
        kicker="Kimia Dasar · Modul Pembelajaran"
        title={
          <>
            Struktur Atom, Unsur,
            <br />
            <span className="accent-text">Senyawa, & Campuran</span>
          </>
        }
        subtitle="Memahami hierarki materi dari partikel subatomik terkecil hingga sistem campuran dalam kehidupan sehari-hari."
        foot="Alur Pembelajaran: Atom → Unsur → Senyawa → Campuran"
      />

      {/* ─────────────────────────────────────────────────────────────────
          SLIDE 2: AGENDA (PETA KONSEP)
          Alur 5 Bagian Utama
          ───────────────────────────────────────────────────────────────── */}
      <Agenda
        nav="Agenda"
        notes="Tinjau peta konsep ini selama 30 detik untuk memberikan gambaran besar hierarki materi kepada audiens sebelum masuk ke detail atom."
        kicker="Peta Konsep"
        title="Empat Pilar Hierarki Materi"
        items={[
          { title: '1. Struktur Atom: Inti, Kulit, dan Partikel Subatomik', hint: 'Bagian 01' },
          { title: '2. Unsur: Zat Murni Satu Jenis Atom & Tabel Periodik', hint: 'Bagian 02' },
          { title: '3. Senyawa: Ikatan Kimia & Pembentukan Zat Baru', hint: 'Bagian 03' },
          { title: '4. Campuran: Gabungan Fisik Homogen & Heterogen', hint: 'Bagian 04' },
          { title: '5. Hubungan Antar Konsep & Kasus Nyata Kehidupan', hint: 'Sintesis' },
        ]}
      />

      {/* ─────────────────────────────────────────────────────────────────
          SLIDE 3: STRUKTUR ATOM (DEFINISI & 3 PARTIKEL SUBATOMIK)
          Split layout with interactive 3D Bohr Atom Model
          ───────────────────────────────────────────────────────────────── */}
      <Split
        nav="Struktur Atom"
        notes="Tekankan definisi atom sebagai unit penyusun terkecil yang mempertahankan sifat kimia unsur. Tunjukkan posisi inti dan elektron."
        kicker="Bagian 01 · Struktur Atom"
        title={
          <>
            Apa Itu <span className="accent-text">Atom?</span>
          </>
        }
        body={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p>
              <strong>Atom adalah partikel terkecil dari suatu unsur yang masih mempertahankan sifat kimia unsur tersebut.</strong>
            </p>
            <p style={{ color: 'var(--fg-muted)', fontSize: 'clamp(14px, 1.4vw, 17px)' }}>
              Atom tersusun atas tiga partikel subatomik utama:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={badgeStyle('var(--c-amber)')}>p⁺</span>
                <span><strong>Proton</strong> — bermuatan positif (+1)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={badgeStyle('var(--c-sand)')}>n⁰</span>
                <span><strong>Neutron</strong> — tidak bermuatan / netral (0)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={badgeStyle('var(--c-sage)')}>e⁻</span>
                <span><strong>Elektron</strong> — bermuatan negatif (−1)</span>
              </div>
            </div>
            <p style={{ color: 'var(--fg-faint)', fontSize: 13, marginTop: 4 }}>
              Proton dan neutron memadat di <strong>inti atom</strong>, sedangkan elektron berada di <strong>sekeliling inti</strong>.
            </p>
          </div>
        }
        media={<AtomModel />}
      />

      {/* ─────────────────────────────────────────────────────────────────
          SLIDE 4: BAGIAN-BAGIAN ATOM & NOTASI
          Peran Partikel, Nomor Atom (Z), Nomor Massa (A)
          ───────────────────────────────────────────────────────────────── */}
      <Slide
        center
        nav="Peran Partikel"
        notes="Jelaskan bahwa muatan atom netral adalah nol karena jumlah proton sama dengan elektron. Soroti rumus Z dan A."
      >
        <Reveal>
          <div className="kicker" style={{ marginBottom: 10 }}>
            Tabel Partikel Subatomik
          </div>
          <h2
            className="headline"
            style={{
              textAlign: 'center',
              marginInline: 'auto',
              marginBottom: 'clamp(20px, 3vh, 32px)',
            }}
          >
            Peran Partikel & Notasi Atom
          </h2>
        </Reveal>

        <Reveal>
          <div style={{ maxWidth: 840, marginInline: 'auto', width: '100%' }}>
            <Table
              columns={[
                'Partikel',
                { label: 'Muatan', align: 'center' },
                { label: 'Lokasi', align: 'center' },
                { label: 'Peran Utama', align: 'left' },
              ]}
              rows={[
                ['Proton (p⁺)', '+1', 'Inti Atom', 'Menentukan identitas unsur'],
                ['Neutron (n⁰)', '0', 'Inti Atom', 'Berkontribusi terhadap massa atom'],
                ['Elektron (e⁻)', '−1', 'Sekitar Inti', 'Berperan dalam ikatan & reaksi kimia'],
              ]}
              highlightCol={0}
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 16,
              marginTop: 'clamp(18px, 2.5vh, 26px)',
              maxWidth: 840,
              marginInline: 'auto',
            }}
          >
            <div style={formulaBoxStyle}>
              <span style={{ color: 'var(--c-sand)' }}>Nomor Atom (Z)</span>
              <span>=</span>
              <span className="accent-text">Jumlah Proton</span>
            </div>
            <div style={formulaBoxStyle}>
              <span style={{ color: 'var(--c-sand)' }}>Nomor Massa (A)</span>
              <span>=</span>
              <span className="accent-text">Proton + Neutron (Z + n)</span>
            </div>
          </div>
        </Reveal>
      </Slide>

      {/* ─────────────────────────────────────────────────────────────────
          SLIDE 5: CONTOH STRUKTUR ATOM (ATOM KARBON-12 & ION)
          Split flip with interactive Carbon-12 diagram
          ───────────────────────────────────────────────────────────────── */}
      <Split
        flip
        nav="Kasus Karbon"
        notes="Klik tombol simulasi pada diagram untuk menunjukkan bahwa pelepasan elektron mengubah muatan menjadi ion positif (C+), namun identitasnya tetap karbon karena jumlah protonnya tidak berubah."
        kicker="Studi Kasus 01"
        title={
          <>
            Struktur Atom Karbon <span className="accent-text">(¹²₆C)</span>
          </>
        }
        body={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p>
              Pada atom karbon-12 netral, partikel penyusunnya terdistribusi secara seimbang:
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 10,
                textAlign: 'center',
              }}
            >
              <div style={{ ...cardStyle, padding: 12, alignItems: 'center' }}>
                <span style={{ fontSize: 24, fontWeight: 700, color: 'var(--c-amber)' }}>6</span>
                <span style={{ fontSize: 12, color: 'var(--fg-muted)' }}>Proton</span>
              </div>
              <div style={{ ...cardStyle, padding: 12, alignItems: 'center' }}>
                <span style={{ fontSize: 24, fontWeight: 700, color: 'var(--c-sand)' }}>6</span>
                <span style={{ fontSize: 12, color: 'var(--fg-muted)' }}>Neutron</span>
              </div>
              <div style={{ ...cardStyle, padding: 12, alignItems: 'center' }}>
                <span style={{ fontSize: 24, fontWeight: 700, color: 'var(--c-sage)' }}>6</span>
                <span style={{ fontSize: 12, color: 'var(--fg-muted)' }}>Elektron</span>
              </div>
            </div>
            <div style={{ ...cardStyle, padding: '12px 16px', gap: 6 }}>
              <div style={{ fontSize: 13, color: 'var(--c-sand)', fontWeight: 600 }}>
                Kalkulasi Notasi Atom:
              </div>
              <div style={{ fontSize: 13.5, color: 'var(--fg)' }}>
                <strong>Nomor atom (Z) = 6</strong> · <strong>Nomor massa (A) = 6 + 6 = 12</strong>
              </div>
            </div>
            <p style={{ color: 'var(--fg-muted)', fontSize: 13.5, lineHeight: 1.5 }}>
              Jika jumlah elektron berubah, atom menjadi <strong>ion</strong>. Namun selama jumlah proton tetap <strong>6</strong>, identitasnya mutlak tetap <strong>Karbon</strong>.
            </p>
          </div>
        }
        media={<Carbon12Diagram />}
      />

      {/* ─────────────────────────────────────────────────────────────────
          SLIDE 6: ANALOGI STRUKTUR ATOM (RUMAH & PENGHUNI)
          Centered with 4 conceptual analogy cards
          ───────────────────────────────────────────────────────────────── */}
      <Slide
        center
        nav="Analogi Atom"
        notes="Analogi rumah memudahkan audiens membayangkan inti atom yang padat dengan elektron yang mobile di sekitarnya."
      >
        <Reveal>
          <div className="kicker" style={{ marginBottom: 10 }}>
            Analogi Konseptual
          </div>
          <h2
            className="headline"
            style={{
              textAlign: 'center',
              marginInline: 'auto',
              marginBottom: 'clamp(20px, 3.5vh, 32px)',
            }}
          >
            Bayangkan Atom Seperti Sebuah Rumah
          </h2>
        </Reveal>

        <Reveal>
          <div className="cols" style={{ maxWidth: 940, marginInline: 'auto', width: '100%' }}>
            <div style={cardStyle}>
              <div style={{ fontSize: 28 }}>🏠</div>
              <h3 style={{ fontSize: 17, margin: 0, color: 'var(--fg)' }}>Inti Atom</h3>
              <p style={{ fontSize: 13.5, color: 'var(--fg-muted)', margin: 0 }}>
                Bagian utama bangunan rumah yang kokoh dan menetap di pusat.
              </p>
            </div>

            <div style={cardStyle}>
              <div style={{ fontSize: 28 }}>🧱</div>
              <h3 style={{ fontSize: 17, margin: 0, color: 'var(--fg)' }}>Proton & Neutron</h3>
              <p style={{ fontSize: 13.5, color: 'var(--fg-muted)', margin: 0 }}>
                Pondasi dan tiang penyangga di dalam rumah yang menentukan bobot total.
              </p>
            </div>

            <div style={cardStyle}>
              <div style={{ fontSize: 28 }}>🏃</div>
              <h3 style={{ fontSize: 17, margin: 0, color: 'var(--fg)' }}>Elektron</h3>
              <p style={{ fontSize: 13.5, color: 'var(--fg-muted)', margin: 0 }}>
                Penghuni lincah yang beraktivitas di halaman sekitar rumah.
              </p>
            </div>

            <div style={cardStyle}>
              <div style={{ fontSize: 28 }}>📍</div>
              <h3 style={{ fontSize: 17, margin: 0, color: 'var(--c-amber)' }}>Jumlah Proton</h3>
              <p style={{ fontSize: 13.5, color: 'var(--fg-muted)', margin: 0 }}>
                Nomor alamat resmi rumah. Mengganti nomor berarti berpindah alamat!
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div
            style={{
              marginTop: 'clamp(20px, 3vh, 30px)',
              padding: '12px 24px',
              borderRadius: 999,
              background: 'color-mix(in srgb, var(--c-amber) 12%, transparent)',
              border: '1px solid var(--c-amber)',
              color: 'var(--fg)',
              fontSize: 'clamp(13px, 1.3vw, 15px)',
              fontWeight: 500,
              maxWidth: 720,
              marginInline: 'auto',
            }}
          >
            <strong>Prinsip Utama:</strong> Perubahan jumlah proton akan mengubah alamat dan identitas unsur secara fundamental.
          </div>
        </Reveal>
      </Slide>

      {/* ─────────────────────────────────────────────────────────────────
          SLIDE 7: DARI ATOM MENUJU UNSUR
          Definisi Unsur & Pengelompokan Berdasarkan Proton
          ───────────────────────────────────────────────────────────────── */}
      <Slide
        center
        nav="Konsep Unsur"
        notes="Unsur adalah zat murni fundamental. Satu jenis atom berarti semua atomnya memiliki jumlah proton yang identik."
      >
        <Reveal>
          <div className="kicker" style={{ marginBottom: 10 }}>
            Bagian 02 · Unsur
          </div>
          <h2
            className="headline"
            style={{
              textAlign: 'center',
              marginInline: 'auto',
              marginBottom: 'clamp(18px, 2.5vh, 28px)',
            }}
          >
            Dari Kumpulan Atom Menuju Unsur
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p
            className="lead"
            style={{
              textAlign: 'center',
              marginInline: 'auto',
              marginBottom: 'clamp(20px, 3vh, 32px)',
              maxWidth: '46ch',
            }}
          >
            Ketika kita mengelompokkan atom berdasarkan <strong style={{ color: 'var(--c-amber)' }}>jumlah protonnya</strong>, kita mendapatkan berbagai jenis <strong>unsur</strong>.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div
            style={{
              ...cardStyle,
              maxWidth: 820,
              marginInline: 'auto',
              padding: 'clamp(22px, 3vw, 36px)',
              border: '1px solid var(--c-sand)',
              background: 'linear-gradient(180deg, var(--surface-2), var(--surface))',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                color: 'var(--c-sand)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              Definisi Ilmiah
            </div>
            <h3
              style={{
                fontSize: 'clamp(20px, 2.6vw, 28px)',
                lineHeight: 1.35,
                color: 'var(--fg)',
                margin: '8px 0 12px',
              }}
            >
              "Unsur adalah zat murni yang tersusun dari <span className="accent-text">satu jenis atom</span> dan tidak dapat diuraikan menjadi zat yang lebih sederhana melalui reaksi kimia biasa."
            </h3>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 'clamp(14px, 2vw, 28px)',
                flexWrap: 'wrap',
                marginTop: 8,
                fontSize: 13,
                color: 'var(--fg-muted)',
              }}
            >
              <span>🔬 Hidrogen (H) = 1 Proton</span>
              <span>•</span>
              <span>🌿 Karbon (C) = 6 Proton</span>
              <span>•</span>
              <span>💨 Oksigen (O) = 8 Proton</span>
              <span>•</span>
              <span>⚙️ Besi (Fe) = 26 Proton</span>
            </div>
          </div>
        </Reveal>
      </Slide>

      {/* ─────────────────────────────────────────────────────────────────
          SLIDE 8: JENIS-JENIS UNSUR & TABEL PERIODIK
          Tabs Layout: Logam, Nonlogam, Metaloid
          ───────────────────────────────────────────────────────────────── */}
      <Slide
        center
        nav="Jenis Unsur"
        notes="Klik tab untuk menjelajahi karakteristik logam, nonlogam, dan metaloid. Jelaskan bagaimana silikon menjadi pondasi komputasi modern."
      >
        <Reveal>
          <div className="kicker" style={{ marginBottom: 10 }}>
            Klasifikasi Unsur
          </div>
          <h2
            className="headline"
            style={{
              textAlign: 'center',
              marginInline: 'auto',
              marginBottom: 'clamp(20px, 3vh, 30px)',
            }}
          >
            Tiga Kelompok Unsur
          </h2>
        </Reveal>

        <Reveal>
          <div style={{ maxWidth: 840, marginInline: 'auto', width: '100%' }}>
            <Tabs
              tabs={[
                {
                  label: 'Logam (Metals)',
                  content: (
                    <div style={{ ...cardStyle, maxWidth: 680, marginInline: 'auto' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={badgeStyle('var(--c-amber)')}>Karakteristik</span>
                        <h4 style={{ fontSize: 18, margin: 0, color: 'var(--fg)' }}>
                          Konduktor Baik, Mengilap, & Dapat Ditempa
                        </h4>
                      </div>
                      <p style={{ fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.5, margin: '6px 0' }}>
                        Berwujud padat pada suhu ruang (kecuali raksa/Hg). Memiliki elektron valensi yang bebas bergerak sehingga sangat baik menghantarkan panas dan arus listrik.
                      </p>
                      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 6 }}>
                        <span style={formulaBoxStyle}>Besi (Fe)</span>
                        <span style={formulaBoxStyle}>Tembaga (Cu)</span>
                        <span style={formulaBoxStyle}>Aluminium (Al)</span>
                      </div>
                    </div>
                  ),
                },
                {
                  label: 'Nonlogam (Non-metals)',
                  content: (
                    <div style={{ ...cardStyle, maxWidth: 680, marginInline: 'auto' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={badgeStyle('var(--c-sand)')}>Karakteristik</span>
                        <h4 style={{ fontSize: 18, margin: 0, color: 'var(--fg)' }}>
                          Isolator Panas/Listrik & Rapuh
                        </h4>
                      </div>
                      <p style={{ fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.5, margin: '6px 0' }}>
                        Tidak mengilap, tidak dapat ditempa, dan umumnya berwujud gas atau padatan rapuh pada temperatur kamar. Menjadi komponen penting molekul kehidupan.
                      </p>
                      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 6 }}>
                        <span style={formulaBoxStyle}>Oksigen (O)</span>
                        <span style={formulaBoxStyle}>Nitrogen (N)</span>
                        <span style={formulaBoxStyle}>Sulfur (S)</span>
                      </div>
                    </div>
                  ),
                },
                {
                  label: 'Metaloid (Semimetals)',
                  content: (
                    <div style={{ ...cardStyle, maxWidth: 680, marginInline: 'auto' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={badgeStyle('var(--c-sage)')}>Karakteristik</span>
                        <h4 style={{ fontSize: 18, margin: 0, color: 'var(--fg)' }}>
                          Sifat Antara Logam & Nonlogam
                        </h4>
                      </div>
                      <p style={{ fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.5, margin: '6px 0' }}>
                        Memiliki konduktivitas listrik menengah (semikonduktor). Sifat unik ini menjadikannya fondasi industri mikroelektronika, chip prosesor, dan sel surya.
                      </p>
                      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 6 }}>
                        <span style={formulaBoxStyle}>Silikon (Si)</span>
                        <span style={formulaBoxStyle}>Germanium (Ge)</span>
                      </div>
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="foot" style={{ marginTop: 22, textAlign: 'center' }}>
            Seluruh unsur disusun secara sistematis menurut kenaikan nomor atom dalam <strong>Tabel Periodik</strong>.
          </div>
        </Reveal>
      </Slide>

      {/* ─────────────────────────────────────────────────────────────────
          SLIDE 9: CONTOH KASUS UNSUR (BESI & MOLEKUL O₂)
          Split Layout: Besi (Fe) vs Oksigen (O2)
          ───────────────────────────────────────────────────────────────── */}
      <Split
        nav="Kasus Besi & O₂"
        notes="Sering terjadi miskonsepsi bahwa molekul selalu berarti senyawa. Tunjukkan bahwa O2 adalah molekul unsur, bukan senyawa."
        kicker="Studi Kasus 02"
        title={
          <>
            Besi (Fe) vs <span className="accent-text">Gas Oksigen (O₂)</span>
          </>
        }
        body={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ ...cardStyle, padding: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={badgeStyle('var(--c-amber)')}>Kasus 1</span>
                <h4 style={{ fontSize: 17, margin: 0, color: 'var(--fg)' }}>
                  Besi (Fe) — Unsur Atomik
                </h4>
              </div>
              <p style={{ fontSize: 13.5, color: 'var(--fg-muted)', margin: 0, lineHeight: 1.45 }}>
                Semua atom besi wajib memiliki tepat <strong>26 proton</strong>. Walau jumlah neutron berbeda (isotop Fe-54, Fe-56), selama protonnya 26, ia tetap Besi.
              </p>
            </div>

            <div style={{ ...cardStyle, padding: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={badgeStyle('var(--c-sage)')}>Kasus 2</span>
                <h4 style={{ fontSize: 17, margin: 0, color: 'var(--fg)' }}>
                  Oksigen (O₂) — Molekul Unsur
                </h4>
              </div>
              <p style={{ fontSize: 13.5, color: 'var(--fg-muted)', margin: 0, lineHeight: 1.45 }}>
                Terdiri dari dua atom oksigen yang saling berikatan. Walaupun berbentuk molekul, ia <strong>tetap merupakan unsur</strong> karena hanya terdiri dari satu jenis atom: oksigen.
              </p>
            </div>
          </div>
        }
        media={
          <div
            style={{
              padding: 'clamp(20px, 3vw, 40px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 20,
              width: '100%',
              maxWidth: 420,
              marginInline: 'auto',
            }}
          >
            <div
              style={{
                ...cardStyle,
                width: '100%',
                padding: '24px 20px',
                textAlign: 'center',
                alignItems: 'center',
                border: '1px solid var(--c-amber)',
              }}
            >
              <div style={{ fontSize: 12, color: 'var(--c-sand)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Kunci Identitas Besi
              </div>
              <div
                style={{
                  fontSize: 'clamp(44px, 6vw, 68px)',
                  fontWeight: 700,
                  color: 'var(--c-amber)',
                  lineHeight: 1,
                  fontFamily: 'var(--font-mono)',
                  margin: '8px 0',
                }}
              >
                26
              </div>
              <div style={{ fontSize: 14, color: 'var(--fg)' }}>
                <strong>Proton Absolut</strong> pada setiap atom Besi (Fe)
              </div>
            </div>

            <div
              style={{
                ...cardStyle,
                width: '100%',
                padding: '16px 20px',
                alignItems: 'center',
                textAlign: 'center',
                border: '1px solid var(--c-sage)',
              }}
            >
              <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--c-sage)' }}>
                O = O (Molekul Diatomik)
              </div>
              <div style={{ fontSize: 12.5, color: 'var(--fg-muted)', marginTop: 4 }}>
                2 Atom Sejenis ➔ <strong>Tetap Satu Unsur</strong>
              </div>
            </div>
          </div>
        }
      />

      {/* ─────────────────────────────────────────────────────────────────
          SLIDE 10: ANALOGI UNSUR (KEPING BALOK LEGO)
          Centered with 3D-styled Lego visual
          ───────────────────────────────────────────────────────────────── */}
      <Slide
        center
        nav="Analogi Lego"
        notes="Dengan analogi balok Lego, kita mempersiapkan pemahaman tentang bagaimana balok-balok ini nantinya akan saling mengunci membentuk senyawa."
      >
        <Reveal>
          <div className="kicker" style={{ marginBottom: 10 }}>
            Analogi Konseptual
          </div>
          <h2
            className="headline"
            style={{
              textAlign: 'center',
              marginInline: 'auto',
              marginBottom: 'clamp(14px, 2vh, 22px)',
            }}
          >
            Unsur Seperti Jenis Keping Lego
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p
            className="lead"
            style={{
              textAlign: 'center',
              marginInline: 'auto',
              marginBottom: 'clamp(20px, 3vh, 32px)',
              maxWidth: '44ch',
            }}
          >
            Warna dan rancangan bentuk balok membedakan identitas setiap keping material di alam semesta.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <LegoAnalogyVisual />
        </Reveal>

        <Reveal delay={0.24}>
          <div
            style={{
              marginTop: 'clamp(20px, 3vh, 28px)',
              fontSize: 'clamp(13px, 1.3vw, 15px)',
              color: 'var(--c-sand)',
              fontWeight: 600,
              textAlign: 'center',
            }}
          >
            Setiap keping Lego memiliki jenisnya sendiri — begitu pula jumlah proton menentukan jenis unsur.
          </div>
        </Reveal>
      </Slide>

      {/* ─────────────────────────────────────────────────────────────────
          SLIDE 11: DARI UNSUR MENUJU SENYAWA
          Definisi Senyawa & Visual Pembentukan Ikatan Kimia
          ───────────────────────────────────────────────────────────────── */}
      <Split
        flip
        nav="Konsep Senyawa"
        notes="Garis bawahi bahwa senyawa terbentuk karena adanya ikatan kimia dan perbandingan massa yang pasti."
        kicker="Bagian 03 · Senyawa"
        title={
          <>
            Ketika Unsur <span className="accent-text">Berikatan Kimia</span>
          </>
        }
        body={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p>
              Unsur dapat berada sendiri, namun atom dari unsur yang berbeda juga dapat <strong>bergabung melalui ikatan kimia</strong>.
            </p>
            <div
              style={{
                ...cardStyle,
                border: '1px solid var(--c-amber)',
                background: 'linear-gradient(180deg, var(--surface-2), var(--surface))',
                padding: '18px 20px',
              }}
            >
              <span style={{ fontSize: 11, color: 'var(--c-sand)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Definisi Senyawa
              </span>
              <p style={{ fontSize: 15, color: 'var(--fg)', lineHeight: 1.45, margin: 0, fontWeight: 500 }}>
                "Senyawa adalah zat murni yang tersusun dari dua atau lebih unsur berbeda yang bergabung secara kimia dalam <strong>perbandingan tertentu</strong>."
              </p>
            </div>
            <p style={{ fontSize: 13.5, color: 'var(--fg-muted)', lineHeight: 1.5 }}>
              Penggabungan kimia ini menghasilkan <strong>zat baru</strong> yang karakteristiknya sama sekali berbeda dari sifat masing-masing unsur penyusun awalnya.
            </p>
          </div>
        }
        media={<CompoundFormationVisual />}
      />

      {/* ─────────────────────────────────────────────────────────────────
          SLIDE 12: JENIS SENYAWA (IKATAN IONIK VS KOVALEN)
          Contrast Layout: Ionik vs Kovalen
          ───────────────────────────────────────────────────────────────── */}
      <Contrast
        nav="Jenis Senyawa"
        notes="Jelaskan kontras mendasar: transfer elektron pada ionik vs pemakaian bersama elektron pada kovalen."
        kicker="Klasifikasi Senyawa"
        title="Senyawa Ionik vs Senyawa Kovalen"
        left={{
          label: 'Senyawa Ionik',
          title: 'Transfer Elektron',
          points: [
            'Terbentuk dari gaya elektrostatik kation (+) dan anion (−)',
            'Terjadi serah terima elektron antara unsur logam & nonlogam',
            'Titik leleh & didih tinggi; lelehannya menghantarkan listrik',
            'Contoh utama: Garam Dapur (NaCl), Magnesium Oksida (MgO)',
          ],
        }}
        right={{
          label: 'Senyawa Kovalen',
          title: 'Pemakaian Bersama Elektron',
          points: [
            'Atom-atom saling berbagi pasangan elektron valensi',
            'Terbentuk antar sesama unsur nonlogam',
            'Berwujud gas, cair, atau padatan dengan titik leleh relatif rendah',
            'Contoh utama: Air (H₂O), Karbon Dioksida (CO₂), Metana (CH₄)',
          ],
        }}
      />

      {/* ─────────────────────────────────────────────────────────────────
          SLIDE 13: CONTOH KASUS SENYAWA (AIR H₂O & GARAM NaCl)
          Centered with 2 comparative cards
          ───────────────────────────────────────────────────────────────── */}
      <Slide
        center
        nav="Kasus H₂O & NaCl"
        notes="Ini adalah fenomena paling menakjubkan dalam kimia: sifat zat hasil reaksi sama sekali baru."
      >
        <Reveal>
          <div className="kicker" style={{ marginBottom: 10 }}>
            Studi Kasus 03 · Transformasi Sifat
          </div>
          <h2
            className="headline"
            style={{
              textAlign: 'center',
              marginInline: 'auto',
              marginBottom: 'clamp(20px, 3vh, 32px)',
            }}
          >
            Terbentuk Zat Baru dengan Karakter Baru
          </h2>
        </Reveal>

        <Reveal>
          <div className="cols" style={{ maxWidth: 900, marginInline: 'auto', width: '100%' }}>
            <div style={cardStyle}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={badgeStyle('var(--c-sage)')}>Molekul Air</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--c-sand)' }}>
                  H : O = 2 : 1
                </span>
              </div>
              <h3 style={{ fontSize: 20, color: 'var(--fg)', margin: '4px 0 0' }}>
                Air (H₂O)
              </h3>
              <p style={{ fontSize: 13.5, color: 'var(--fg-muted)', lineHeight: 1.5, margin: 0 }}>
                <strong>Gas Hidrogen (H₂)</strong> sangat mudah meledak, dan <strong>Gas Oksigen (O₂)</strong> memicu kebakaran.
              </p>
              <div
                style={{
                  background: 'color-mix(in srgb, var(--c-sage) 15%, transparent)',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--c-sage)',
                  fontSize: 13,
                  color: 'var(--fg)',
                }}
              >
                ➔ Setelah berikatan kimia, keduanya menjadi <strong>Air</strong>, zat cair yang justru memadamkan api!
              </div>
            </div>

            <div style={cardStyle}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={badgeStyle('var(--c-amber)')}>Garam Dapur</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--c-sand)' }}>
                  Na : Cl = 1 : 1
                </span>
              </div>
              <h3 style={{ fontSize: 20, color: 'var(--fg)', margin: '4px 0 0' }}>
                Natrium Klorida (NaCl)
              </h3>
              <p style={{ fontSize: 13.5, color: 'var(--fg-muted)', lineHeight: 1.5, margin: 0 }}>
                <strong>Natrium (Na)</strong> logam yang meledak di air, dan <strong>Klorin (Cl₂)</strong> gas beracun mematikan.
              </p>
              <div
                style={{
                  background: 'color-mix(in srgb, var(--c-amber) 15%, transparent)',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--c-amber)',
                  fontSize: 13,
                  color: 'var(--fg)',
                }}
              >
                ➔ Setelah berikatan ionik, terbentuk <strong>Garam Dapur</strong>, zat penyedap makanan yang aman dikonsumsi.
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div
            style={{
              marginTop: 'clamp(20px, 3vh, 28px)',
              fontSize: 'clamp(13px, 1.3vw, 15px)',
              color: 'var(--fg-muted)',
              textAlign: 'center',
            }}
          >
            <strong>Prinsip:</strong> Reaksi kimia melahirkan zat baru yang independen dari sifat reaktif unsur pembentuknya.
          </div>
        </Reveal>
      </Slide>

      {/* ─────────────────────────────────────────────────────────────────
          SLIDE 14: ANALOGI SENYAWA (LEGO YANG TERKUNCI ERAT)
          Centered with locked-Lego conceptual graphic
          ───────────────────────────────────────────────────────────────── */}
      <Slide
        center
        nav="Analogi Senyawa"
        notes="Perkuat analogi bahwa balok yang telah terkunci rapat tidak dapat lepas begitu saja tanpa gaya/reaksi kimia."
      >
        <Reveal>
          <div className="kicker" style={{ marginBottom: 10 }}>
            Analogi Konseptual
          </div>
          <h2
            className="headline"
            style={{
              textAlign: 'center',
              marginInline: 'auto',
              marginBottom: 'clamp(14px, 2vh, 22px)',
            }}
          >
            Senyawa Seperti Balok yang Terkunci
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p
            className="lead"
            style={{
              textAlign: 'center',
              marginInline: 'auto',
              marginBottom: 'clamp(24px, 3.5vh, 36px)',
              maxWidth: '48ch',
            }}
          >
            Dua atau lebih jenis balok Lego direkatkan dan dikunci kuat menjadi suatu model bentuk baru yang berkarakteristik unik.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div
            style={{
              ...cardStyle,
              maxWidth: 720,
              marginInline: 'auto',
              padding: 'clamp(20px, 3vw, 32px)',
              textAlign: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'clamp(10px, 2vw, 20px)',
                flexWrap: 'wrap',
                fontSize: 'clamp(16px, 2vw, 22px)',
                fontWeight: 700,
                color: 'var(--fg)',
              }}
            >
              <span>2 Balok Merah (H)</span>
              <span style={{ color: 'var(--fg-faint)' }}>+</span>
              <span>1 Balok Biru (O)</span>
              <span style={{ color: 'var(--primary)' }}>➔</span>
              <span className="accent-text">1 Model Rumah Baru (H₂O)</span>
            </div>

            <p style={{ fontSize: 14, color: 'var(--fg-muted)', margin: '14px 0 0', lineHeight: 1.5, maxWidth: '54ch' }}>
              Ketika bagian-bagiannya telah tersusun melalui ikatan kimiawi, terbentuk struktur baru. Rakitan ini <strong>tidak dapat dipisahkan hanya dengan diguncang atau disaring fisik</strong>.
            </p>
          </div>
        </Reveal>
      </Slide>

      {/* ─────────────────────────────────────────────────────────────────
          SLIDE 15: DARI SENYAWA MENUJU CAMPURAN
          Definisi Campuran & Penggabungan Fisik
          ───────────────────────────────────────────────────────────────── */}
      <Split
        nav="Konsep Campuran"
        notes="Soroti kata kunci: 'secara fisik' dan 'tanpa membentuk zat baru'."
        kicker="Bagian 04 · Campuran"
        title={
          <>
            Pencampuran Fisik <span className="accent-text">Tanpa Zat Baru</span>
          </>
        }
        body={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p>
              Tidak semua materi yang dipertemukan akan membentuk ikatan kimia. Ada kondisi ketika beberapa zat hanya <strong>bercampur secara fisik</strong>.
            </p>
            <div
              style={{
                ...cardStyle,
                border: '1px solid var(--c-sage)',
                background: 'linear-gradient(180deg, var(--surface-2), var(--surface))',
                padding: '18px 20px',
              }}
            >
              <span style={{ fontSize: 11, color: 'var(--c-sage)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Definisi Campuran
              </span>
              <p style={{ fontSize: 15, color: 'var(--fg)', lineHeight: 1.45, margin: 0, fontWeight: 500 }}>
                "Campuran adalah gabungan dua atau lebih zat yang <strong>bercampur secara fisik tanpa membentuk zat baru</strong>."
              </p>
            </div>
            <p style={{ fontSize: 13.5, color: 'var(--fg-muted)', lineHeight: 1.5 }}>
              Karena tidak ada ikatan kimia baru yang tercipta, <strong>setiap komponen penyusunnya masih mempertahankan sifat dasarnya masing-masing</strong>.
            </p>
          </div>
        }
        media={<MixturePhasesVisual />}
      />

      {/* ─────────────────────────────────────────────────────────────────
          SLIDE 16: JENIS-JENIS CAMPURAN (HOMOGEN VS HETEROGEN)
          Centered with 2 comparative cards
          ───────────────────────────────────────────────────────────────── */}
      <Slide
        center
        nav="Jenis Campuran"
        notes="Jelaskan perbedaan visual dan mikroskopis: homogen menyatu satu fase, heterogen memiliki batas pemisah fase."
      >
        <Reveal>
          <div className="kicker" style={{ marginBottom: 10 }}>
            Klasifikasi Campuran
          </div>
          <h2
            className="headline"
            style={{
              textAlign: 'center',
              marginInline: 'auto',
              marginBottom: 'clamp(20px, 3vh, 32px)',
            }}
          >
            Campuran Homogen vs Heterogen
          </h2>
        </Reveal>

        <Reveal>
          <div className="cols" style={{ maxWidth: 900, marginInline: 'auto', width: '100%' }}>
            <div style={cardStyle}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={badgeStyle('var(--c-sage)')}>Tipe 1</span>
                <h3 style={{ fontSize: 18, margin: 0, color: 'var(--fg)' }}>
                  Campuran Homogen (Larutan)
                </h3>
              </div>
              <p style={{ fontSize: 13.5, color: 'var(--fg-muted)', margin: 0, lineHeight: 1.5 }}>
                Komposisinya <strong>seragam di setiap bagian</strong> dan komponen-komponennya tidak dapat dibedakan secara langsung (satu fase kasat mata).
              </p>
              <div style={{ marginTop: 8 }}>
                <div style={{ fontSize: 12, color: 'var(--c-sand)', fontWeight: 600, marginBottom: 6 }}>
                  Contoh Nyata:
                </div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  <span style={formulaBoxStyle}>Air Garam</span>
                  <span style={formulaBoxStyle}>Udara Bersih</span>
                  <span style={formulaBoxStyle}>Air + Alkohol</span>
                </div>
              </div>
            </div>

            <div style={cardStyle}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={badgeStyle('var(--c-amber)')}>Tipe 2</span>
                <h3 style={{ fontSize: 18, margin: 0, color: 'var(--fg)' }}>
                  Campuran Heterogen
                </h3>
              </div>
              <p style={{ fontSize: 13.5, color: 'var(--fg-muted)', margin: 0, lineHeight: 1.5 }}>
                Komposisinya <strong>tidak seragam</strong> dan komponen-komponen penyusunnya masih dapat dibedakan serta tampak bidang batas pemisah fasenya.
              </p>
              <div style={{ marginTop: 8 }}>
                <div style={{ fontSize: 12, color: 'var(--c-sand)', fontWeight: 600, marginBottom: 6 }}>
                  Contoh Nyata:
                </div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  <span style={formulaBoxStyle}>Air + Minyak</span>
                  <span style={formulaBoxStyle}>Air + Pasir</span>
                  <span style={formulaBoxStyle}>Tanah</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Slide>

      {/* ─────────────────────────────────────────────────────────────────
          SLIDE 17: CONTOH KASUS CAMPURAN (AIR GARAM & AIR-MINYAK)
          Split flip with separation techniques
          ───────────────────────────────────────────────────────────────── */}
      <Split
        flip
        nav="Kasus Garam & Minyak"
        notes="Tunjukkan bahwa karena sifat komponennya tetap ada, campuran selalu dapat dipisahkan dengan teknik fisik."
        kicker="Studi Kasus 04"
        title={
          <>
            Pemisahan Fisik <span className="accent-text">Buktikan Campuran</span>
          </>
        }
        body={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ ...cardStyle, padding: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={badgeStyle('var(--c-sage)')}>Larutan Garam</span>
                <h4 style={{ fontSize: 16, margin: 0, color: 'var(--fg)' }}>Garam + Air</h4>
              </div>
              <p style={{ fontSize: 13, color: 'var(--fg-muted)', margin: 0, lineHeight: 1.45 }}>
                Garam tidak berubah menjadi zat baru; garam hanya terdispersi di sela molekul air. Air garam dapat dipisahkan kembali dengan <strong>penguapan (evaporasi)</strong>.
              </p>
            </div>

            <div style={{ ...cardStyle, padding: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={badgeStyle('var(--c-amber)')}>Dua Lapisan</span>
                <h4 style={{ fontSize: 16, margin: 0, color: 'var(--fg)' }}>Air + Minyak</h4>
              </div>
              <p style={{ fontSize: 13, color: 'var(--fg-muted)', margin: 0, lineHeight: 1.45 }}>
                Air dan minyak tidak saling melarutkan sehingga terbentuk <strong>dua lapisan</strong> yang terpisah jelas (campuran heterogen), dapat dipisahkan dengan corong pisah.
              </p>
            </div>
          </div>
        }
        media={<MixturePhasesVisual />}
      />

      {/* ─────────────────────────────────────────────────────────────────
          SLIDE 18: ANALOGI CAMPURAN (ORANG DI RUANGAN)
          Centered with 3 cards
          ───────────────────────────────────────────────────────────────── */}
      <Slide
        center
        nav="Analogi Campuran"
        notes="Analogi ruangan ini sangat efektif untuk mengunci pemahaman bahwa bercampur fisik tidak sama dengan membentuk zat baru."
      >
        <Reveal>
          <div className="kicker" style={{ marginBottom: 10 }}>
            Analogi Konseptual
          </div>
          <h2
            className="headline"
            style={{
              textAlign: 'center',
              marginInline: 'auto',
              marginBottom: 'clamp(20px, 3vh, 32px)',
            }}
          >
            Campuran Seperti Orang di Dalam Ruangan
          </h2>
        </Reveal>

        <Reveal>
          <div className="cols" style={{ maxWidth: 940, marginInline: 'auto', width: '100%' }}>
            <div style={cardStyle}>
              <div style={{ fontSize: 28 }}>🚪</div>
              <h3 style={{ fontSize: 17, margin: 0, color: 'var(--fg)' }}>Tempat yang Sama</h3>
              <p style={{ fontSize: 13.5, color: 'var(--fg-muted)', margin: 0 }}>
                Beberapa individu berada dalam satu wadah ruangan yang sama secara bersamaan.
              </p>
            </div>

            <div style={cardStyle}>
              <div style={{ fontSize: 28 }}>👤</div>
              <h3 style={{ fontSize: 17, margin: 0, color: 'var(--fg)' }}>Identitas Tetap</h3>
              <p style={{ fontSize: 13.5, color: 'var(--fg-muted)', margin: 0 }}>
                Masing-masing orang tetap mempertahankan nama, kepribadian, dan sifat aslinya.
              </p>
            </div>

            <div style={cardStyle}>
              <div style={{ fontSize: 28 }}>🚶</div>
              <h3 style={{ fontSize: 17, margin: 0, color: 'var(--fg)' }}>Dapat Dipisahkan</h3>
              <p style={{ fontSize: 13.5, color: 'var(--fg-muted)', margin: 0 }}>
                Setiap saat orang-orang tersebut dapat berpisah kembali tanpa berubah menjadi sosok baru.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div
            style={{
              marginTop: 'clamp(24px, 3.5vh, 36px)',
              padding: '14px 28px',
              borderRadius: 999,
              background: 'color-mix(in srgb, var(--c-amber) 16%, transparent)',
              border: '1px solid var(--c-amber)',
              color: 'var(--fg)',
              fontSize: 'clamp(14px, 1.5vw, 17px)',
              fontWeight: 700,
              textAlign: 'center',
              maxWidth: 620,
              marginInline: 'auto',
            }}
          >
            Bercampur Secara Fisik ≠ Membentuk Zat Baru
          </div>
        </Reveal>
      </Slide>

      {/* ─────────────────────────────────────────────────────────────────
          SLIDE 19: PERBEDAAN UTAMA (TABEL KOMPARASI 4 KONSEP)
          Comprehensive table comparing Atom, Unsur, Senyawa, Campuran
          ───────────────────────────────────────────────────────────────── */}
      <Slide
        center
        nav="Tabel Komparasi"
        notes="Tabel ini adalah inti rangkuman materi. Pastikan audiens mencatat kunci pembeda antara senyawa dan campuran."
      >
        <Reveal>
          <div className="kicker" style={{ marginBottom: 10 }}>
            Sintesis Komprehensif
          </div>
          <h2
            className="headline"
            style={{
              textAlign: 'center',
              marginInline: 'auto',
              marginBottom: 'clamp(20px, 3vh, 30px)',
            }}
          >
            Tabel Perbedaan Utama
          </h2>
        </Reveal>

        <Reveal>
          <div style={{ maxWidth: 900, marginInline: 'auto', width: '100%' }}>
            <Table
              columns={[
                'Konsep',
                { label: 'Penyusun', align: 'left' },
                { label: 'Ikatan Kimia?', align: 'center' },
                { label: 'Zat Baru?', align: 'center' },
              ]}
              rows={[
                ['Atom', 'Proton, neutron, elektron', '—', '—'],
                ['Unsur', 'Satu jenis atom', 'Tidak harus', 'Tidak'],
                ['Senyawa', '≥2 unsur berbeda', 'Ya', 'Ya'],
                ['Campuran', '≥2 zat', 'Tidak', 'Tidak'],
              ]}
              highlightCol={0}
            />
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div
            style={{
              marginTop: 'clamp(20px, 3vh, 28px)',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 16,
              maxWidth: 900,
              marginInline: 'auto',
            }}
          >
            <div style={{ ...formulaBoxStyle, border: '1px solid var(--c-amber)' }}>
              <span style={{ color: 'var(--c-amber)' }}>Senyawa ➔</span>
              <span>Bergabung secara <strong>KIMIA</strong> (Membentuk zat baru)</span>
            </div>
            <div style={{ ...formulaBoxStyle, border: '1px solid var(--c-sage)' }}>
              <span style={{ color: 'var(--c-sage)' }}>Campuran ➔</span>
              <span>Bergabung secara <strong>FISIK</strong> (Mempertahankan sifat dasar)</span>
            </div>
          </div>
        </Reveal>
      </Slide>

      {/* ─────────────────────────────────────────────────────────────────
          SLIDE 20: HUBUNGAN ANTAR KONSEP DALAM KEHIDUPAN SEHARI-HARI
          Steps horizontal flow from Atom C to Air Mixture
          ───────────────────────────────────────────────────────────────── */}
      <Steps
        nav="Rantai Kehidupan"
        notes="Tunjukkan bagaimana materi yang kita temui setiap detik (udara atmosfer) merupakan ujung dari hierarki atom -> unsur -> senyawa -> campuran."
        kicker="Koneksi Dunia Nyata"
        title="Hierarki Materi dalam Satu Rangkaian"
        items={[
          {
            title: '1. Atom & Unsur C',
            body: 'Atom Karbon dengan 6 proton; berwujud unsur karbon padat.',
          },
          {
            title: '2. Unsur O₂',
            body: 'Dua atom oksigen sejenis berikatan membentuk molekul gas oksigen murni.',
          },
          {
            title: '3. Senyawa CO₂',
            body: 'Karbon bereaksi kimia dengan oksigen membentuk senyawa gas baru.',
          },
          {
            title: '4. Campuran Udara',
            body: 'CO₂ berbaur fisik bersama N₂ (78%), O₂ (21%), dan Ar membentuk atmosfer bumi.',
          },
        ]}
      />

      {/* ─────────────────────────────────────────────────────────────────
          SLIDE 21: KESIMPULAN & 4 KATA KUNCI
          Closing summary slide
          ───────────────────────────────────────────────────────────────── */}
      <Slide
        center
        nav="Kesimpulan"
        notes="Tutup dengan mengulang 4 kata kunci: Identitas, Satu Jenis Atom, Ikatan Kimia, dan Gabungan Fisik. Buka sesi tanya jawab."
      >
        <Reveal>
          <div className="kicker" style={{ marginBottom: 10 }}>
            Rangkuman Akhir
          </div>
          <h2
            className="headline"
            style={{
              textAlign: 'center',
              marginInline: 'auto',
              marginBottom: 'clamp(20px, 3vh, 32px)',
            }}
          >
            Empat Kata Kunci Kimia Dasar
          </h2>
        </Reveal>

        <Reveal>
          <div className="cols" style={{ maxWidth: 940, marginInline: 'auto', width: '100%' }}>
            <div style={cardStyle}>
              <span style={badgeStyle('var(--c-amber)')}>1. Atom</span>
              <h3 style={{ fontSize: 18, color: 'var(--fg)', margin: '4px 0 0' }}>
                Identitas
              </h3>
              <p style={{ fontSize: 13, color: 'var(--fg-muted)', margin: 0 }}>
                Partikel penyusun dasar suatu unsur. Identitasnya ditentukan eksklusif oleh jumlah proton (Z).
              </p>
            </div>

            <div style={cardStyle}>
              <span style={badgeStyle('var(--c-sand)')}>2. Unsur</span>
              <h3 style={{ fontSize: 18, color: 'var(--fg)', margin: '4px 0 0' }}>
                Satu Jenis Atom
              </h3>
              <p style={{ fontSize: 13, color: 'var(--fg-muted)', margin: 0 }}>
                Zat murni yang tersusun atas atom sejenis dan tidak dapat diuraikan melalui reaksi kimia biasa.
              </p>
            </div>

            <div style={cardStyle}>
              <span style={badgeStyle('var(--c-gold)')}>3. Senyawa</span>
              <h3 style={{ fontSize: 18, color: 'var(--fg)', margin: '4px 0 0' }}>
                Ikatan Kimia
              </h3>
              <p style={{ fontSize: 13, color: 'var(--fg-muted)', margin: 0 }}>
                Zat murni dari ≥2 unsur berbeda yang berikatan kimia menghasilkan karakteristik zat baru.
              </p>
            </div>

            <div style={cardStyle}>
              <span style={badgeStyle('var(--c-sage)')}>4. Campuran</span>
              <h3 style={{ fontSize: 18, color: 'var(--fg)', margin: '4px 0 0' }}>
                Gabungan Fisik
              </h3>
              <p style={{ fontSize: 13, color: 'var(--fg-muted)', margin: 0 }}>
                Pencampuran ≥2 zat tanpa reaksi kimia, di mana komponen tetap membawa sifat aslinya.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div
            style={{
              marginTop: 'clamp(24px, 3.5vh, 36px)',
              textAlign: 'center',
            }}
          >
            <p className="lead" style={{ marginInline: 'auto', fontSize: 'clamp(15px, 1.6vw, 19px)' }}>
              Ada pertanyaan atau konsep yang ingin didiskusikan lebih lanjut?
            </p>
            <div className="foot" style={{ marginTop: 8 }}>
              Kimia Dasar · Struktur Atom, Unsur, Senyawa, dan Campuran
            </div>
          </div>
        </Reveal>
      </Slide>
    </Deck>
  );
}
