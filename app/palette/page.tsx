import Link from "next/link";

type Palette = {
  id: string;
  name: string;
  vibe: string;
  colors: {
    primary: string; // deep brand color (close to #002e62)
    background: string; // page bg
    surface: string; // cards / inputs
    text: string; // body text on background
    muted: string; // secondary / meta text
    accent: string; // CTA / highlight
    onPrimary: string; // text on primary
  };
};

const palettes: Palette[] = [
  {
    id: "editorial-warm",
    name: "Editorial warm",
    vibe: "Cream paper + client's navy + warm cognac. Feels like a print magazine — premium, approachable, far from the current dark-mode look.",
    colors: {
      primary: "#002e62",
      background: "#f5efe6",
      surface: "#ffffff",
      text: "#1a1a1a",
      muted: "#6b6459",
      accent: "#c68b59",
      onPrimary: "#ffffff",
    },
  },
  {
    id: "modern-soft",
    name: "Modern soft",
    vibe: "Slightly softer navy + oatmeal + mustard. The softest of the four — gentle, editorial, pairs well with photography.",
    colors: {
      primary: "#1e3a5f",
      background: "#f4f1ec",
      surface: "#ffffff",
      text: "#1e1e24",
      muted: "#8a8478",
      accent: "#e8b04b",
      onPrimary: "#ffffff",
    },
  },
  {
    id: "cool-pale",
    name: "Cool pale",
    vibe: "Pale blue-tinted background + client's navy + rust accent. Cooler and more technical — good fit for the audio/studio angle.",
    colors: {
      primary: "#002e62",
      background: "#eef2f7",
      surface: "#ffffff",
      text: "#0e1a2c",
      muted: "#6f7c8f",
      accent: "#d96c4d",
      onPrimary: "#ffffff",
    },
  },
  {
    id: "studio-tape",
    name: "Studio tape",
    vibe: "Paper white + deep navy + brick red. Strong editorial feel with more contrast — closest to a classic design studio look.",
    colors: {
      primary: "#0f2a4a",
      background: "#faf7f1",
      surface: "#ffffff",
      text: "#1c1c1c",
      muted: "#747c89",
      accent: "#b2492b",
      onPrimary: "#ffffff",
    },
  },
];

function Swatch({
  label,
  hex,
  textHex,
}: {
  label: string;
  hex: string;
  textHex: string;
}) {
  return (
    <div className="flex flex-col">
      <div
        className="h-14 rounded-md border border-black/5"
        style={{ backgroundColor: hex }}
      />
      <div className="mt-1.5 flex items-baseline justify-between">
        <span className="text-[11px] font-medium" style={{ color: textHex }}>
          {label}
        </span>
        <span
          className="text-[10px] font-mono tabular-nums"
          style={{ color: textHex, opacity: 0.6 }}
        >
          {hex}
        </span>
      </div>
    </div>
  );
}

function Preview({ p }: { p: Palette }) {
  const c = p.colors;
  return (
    <article
      className="rounded-2xl overflow-hidden border border-black/5"
      style={{ backgroundColor: c.background, color: c.text }}
    >
      {/* Header with palette name + swatches */}
      <header className="px-8 pt-8 pb-6">
        <div className="flex items-baseline justify-between gap-4 flex-wrap">
          <div>
            <p
              className="text-[10px] font-medium tracking-[0.25em] uppercase"
              style={{ color: c.muted }}
            >
              Option · {p.id}
            </p>
            <h2
              className="text-3xl md:text-4xl font-semibold mt-1"
              style={{ color: c.text }}
            >
              {p.name}
            </h2>
          </div>
          <p
            className="text-sm max-w-md leading-relaxed"
            style={{ color: c.muted }}
          >
            {p.vibe}
          </p>
        </div>

        <div className="mt-6 grid grid-cols-7 gap-3">
          <Swatch label="Primary" hex={c.primary} textHex={c.text} />
          <Swatch label="Background" hex={c.background} textHex={c.text} />
          <Swatch label="Surface" hex={c.surface} textHex={c.text} />
          <Swatch label="Text" hex={c.text} textHex={c.text} />
          <Swatch label="Muted" hex={c.muted} textHex={c.text} />
          <Swatch label="Accent" hex={c.accent} textHex={c.text} />
          <Swatch label="On-primary" hex={c.onPrimary} textHex={c.text} />
        </div>
      </header>

      {/* Sample site preview */}
      <div className="px-8 pb-8 grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Hero block */}
        <section
          className="lg:col-span-2 rounded-xl p-8 flex flex-col justify-between min-h-[280px]"
          style={{ backgroundColor: c.primary, color: c.onPrimary }}
        >
          <p
            className="text-[10px] font-medium tracking-[0.3em] uppercase"
            style={{ opacity: 0.7 }}
          >
            Voice Actor
          </p>
          <div>
            <h3 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-none">
              MAIK
            </h3>
            <p
              className="text-xl md:text-2xl font-semibold tracking-tighter leading-none mt-1"
              style={{ opacity: 0.35 }}
            >
              VAN VELTHOVEN
            </p>
            <p className="mt-5 text-sm max-w-xs" style={{ opacity: 0.7 }}>
              Professionele stem voor commercials, narratieve producties en
              corporate content.
            </p>
            <div className="mt-6 flex gap-2">
              <button
                className="text-xs font-semibold px-4 py-2 rounded-full"
                style={{ backgroundColor: c.accent, color: c.onPrimary }}
              >
                Luister demo
              </button>
              <button
                className="text-xs font-semibold px-4 py-2 rounded-full"
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: c.onPrimary,
                }}
              >
                Neem contact op
              </button>
            </div>
          </div>
        </section>

        {/* FAQ card */}
        <section
          className="rounded-xl p-6"
          style={{ backgroundColor: c.surface, color: c.text }}
        >
          <p
            className="text-[10px] font-medium tracking-[0.25em] uppercase"
            style={{ color: c.muted }}
          >
            FAQ
          </p>
          <h4 className="text-lg font-semibold mt-2">
            Hoe snel kun je een opname leveren?
          </h4>
          <p className="text-sm mt-2 leading-relaxed" style={{ color: c.muted }}>
            In de meeste gevallen kan ik snel schakelen en binnen 24 uur
            aanleveren.
          </p>
          <a
            href="#"
            className="inline-block mt-4 text-sm font-semibold"
            style={{ color: c.accent }}
          >
            Meer vragen →
          </a>
        </section>

        {/* Pricing strip */}
        <section
          className="lg:col-span-3 rounded-xl p-6"
          style={{ backgroundColor: c.surface }}
        >
          <div className="flex items-baseline justify-between">
            <h4 className="text-lg font-semibold" style={{ color: c.text }}>
              Radio commercial
            </h4>
            <span className="text-xs" style={{ color: c.muted }}>
              Incl. 1 jaar buy-out
            </span>
          </div>
          <table className="w-full text-sm mt-4">
            <thead>
              <tr
                className="text-[10px] uppercase tracking-wider"
                style={{ color: c.muted }}
              >
                <th className="text-left pb-2 font-medium"></th>
                <th className="text-right pb-2 font-medium">1 versie</th>
                <th className="text-right pb-2 font-medium">2 versies</th>
                <th className="text-right pb-2 font-medium">3 versies</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Lokaal", "€44,-", "€72,-", "€99,-"],
                ["Regionaal", "€120,-", "€195,-", "€270,-"],
                ["Landelijk", "€320,-", "€520,-", "€720,-"],
              ].map(([region, a, b, d]) => (
                <tr
                  key={region}
                  style={{ borderTopWidth: 1, borderColor: `${c.text}14` }}
                >
                  <td
                    className="py-2 font-medium"
                    style={{ color: c.text }}
                  >
                    {region}
                  </td>
                  <td
                    className="py-2 text-right tabular-nums"
                    style={{ color: c.text }}
                  >
                    {a}
                  </td>
                  <td
                    className="py-2 text-right tabular-nums"
                    style={{ color: c.text }}
                  >
                    {b}
                  </td>
                  <td
                    className="py-2 text-right tabular-nums"
                    style={{ color: c.text }}
                  >
                    {d}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-5 flex items-center justify-between">
            <p className="text-xs" style={{ color: c.muted }}>
              Tag-on +25% · Prijzen excl. btw
            </p>
            <button
              className="text-xs font-semibold px-4 py-2 rounded-full"
              style={{ backgroundColor: c.primary, color: c.onPrimary }}
            >
              Offerte aanvragen
            </button>
          </div>
        </section>
      </div>
    </article>
  );
}

export default function PalettePage() {
  return (
    <main className="min-h-screen bg-[#ececec] py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-10">
          <p className="text-[10px] font-medium tracking-[0.25em] uppercase text-black/40">
            Preview
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-black mt-2">
            Palette options
          </h1>
          <p className="mt-4 text-sm text-black/60 max-w-2xl leading-relaxed">
            Vier varianten, elk opgebouwd rond een kleur dichtbij de door de
            klant gekozen <code className="font-mono">#002e62</code>. Ze
            verschillen vooral in achtergrond en accent, om het algehele
            &quot;te donker&quot;-gevoel weg te halen. Geen van de varianten
            gebruikt de huidige bijna-zwart (<code className="font-mono">#111</code>)
            achtergrond.
          </p>
          <p className="mt-4 text-sm text-black/40">
            <Link href="/" className="underline hover:text-black">
              ← terug naar de site
            </Link>
          </p>
        </header>

        <div className="space-y-8">
          {palettes.map((p) => (
            <Preview key={p.id} p={p} />
          ))}
        </div>
      </div>
    </main>
  );
}
