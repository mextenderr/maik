"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

type MatrixTable = {
  kind: "matrix";
  title?: string;
  columns: string[];
  rows: { label: string; values: string[] }[];
  footnote?: string;
};

type ListTable = {
  kind: "list";
  title?: string;
  rows: { label: string; value: string }[];
  footnote?: string;
};

type Category = {
  id: string;
  label: string;
  subtitle?: string;
  tables: (MatrixTable | ListTable)[];
};

const categories: Category[] = [
  {
    id: "radio",
    label: "Radio commercial",
    subtitle: "Inclusief 1 jaar buy-out",
    tables: [
      {
        kind: "matrix",
        columns: ["1 versie", "2 versies", "3 versies"],
        rows: [
          { label: "Lokaal", values: ["€44,-", "€72,-", "€99,-"] },
          { label: "Regionaal", values: ["€120,-", "€195,-", "€270,-"] },
          { label: "Landelijk", values: ["€320,-", "€520,-", "€720,-"] },
        ],
        footnote: "Tag-on +25%",
      },
      {
        kind: "matrix",
        title: "Buy-out",
        columns: ["2 jaar", "5 jaar", "Onbeperkt"],
        rows: [
          { label: "Lokaal", values: ["€66,-", "€110,-", "€130,-"] },
          { label: "Regionaal", values: ["€180,-", "€300,-", "€360,-"] },
          { label: "Landelijk", values: ["€480,-", "€800,-", "€960,-"] },
        ],
      },
    ],
  },
  {
    id: "tv",
    label: "TV commercial",
    subtitle: "Inclusief 1 jaar buy-out",
    tables: [
      {
        kind: "matrix",
        columns: ["1 versie", "2 versies", "3 versies"],
        rows: [
          { label: "Lokaal", values: ["€60,-", "€99,-", "€135,-"] },
          { label: "Regionaal", values: ["€200,-", "€325,-", "€450,-"] },
          { label: "Landelijk", values: ["€320,-", "€520,-", "€720,-"] },
        ],
        footnote: "Tag-on +25%",
      },
      {
        kind: "matrix",
        title: "Buy-out",
        columns: ["2 jaar", "5 jaar", "Onbeperkt"],
        rows: [
          { label: "Lokaal", values: ["€90,-", "€150,-", "€180,-"] },
          { label: "Regionaal", values: ["€300,-", "€500,-", "€600,-"] },
          { label: "Landelijk", values: ["€720,-", "€1.200,-", "€1.440,-"] },
        ],
      },
    ],
  },
  {
    id: "bedrijfsfilm",
    label: "Bedrijfsfilm",
    tables: [
      {
        kind: "list",
        rows: [
          { label: "250 woorden / 2 min", value: "€140,-" },
          { label: "500 woorden / 4 min", value: "€200,-" },
          { label: "1000 woorden / 7 min", value: "€260,-" },
          { label: "1000+ woorden", value: "Op aanvraag" },
        ],
      },
    ],
  },
  {
    id: "dubbing",
    label: "Voice-over dubbing",
    tables: [
      {
        kind: "list",
        rows: [
          { label: "250 woorden / 2 min", value: "€120,-" },
          { label: "500 woorden / 4 min", value: "€180,-" },
          { label: "1000 woorden / 7 min", value: "€300,-" },
        ],
      },
    ],
  },
  {
    id: "social",
    label: "Online video / Social media",
    subtitle: "Wordt niet gepromoot door advertenties",
    tables: [
      {
        kind: "list",
        rows: [
          { label: "50 woorden / 25 sec", value: "€75,-" },
          { label: "100 woorden / 50 sec", value: "€100,-" },
          { label: "100+ woorden / 2 min", value: "€120,-" },
        ],
      },
    ],
  },
  {
    id: "betaalde-promotie",
    label: "Betaalde promotie",
    subtitle: "Inclusief 1 jaar buy-out",
    tables: [
      {
        kind: "list",
        rows: [
          { label: "1 versie", value: "€310,-" },
          { label: "2 versies", value: "€510,-" },
          { label: "3 versies", value: "€700,-" },
        ],
      },
      {
        kind: "list",
        title: "Buy-out",
        rows: [
          { label: "2 jaar", value: "€468,-" },
          { label: "5 jaar", value: "€780,-" },
          { label: "Onbeperkt", value: "€936,-" },
        ],
      },
    ],
  },
  {
    id: "pre-roll",
    label: "Pre-roll / video-advertentie",
    subtitle: "Inclusief 1 jaar buy-out",
    tables: [
      {
        kind: "list",
        rows: [
          { label: "1 versie", value: "€360,-" },
          { label: "2 versies", value: "€585,-" },
          { label: "3 versies", value: "€800,-" },
        ],
      },
      {
        kind: "list",
        title: "Buy-out",
        rows: [
          { label: "2 jaar", value: "€540,-" },
          { label: "5 jaar", value: "€900,-" },
          { label: "Onbeperkt", value: "€1.060,-" },
        ],
      },
    ],
  },
  {
    id: "e-learning",
    label: "E-learning",
    tables: [
      {
        kind: "list",
        rows: [
          { label: "500 woorden / 4 min", value: "€160,-" },
          { label: "1000 woorden / 7 min", value: "€240,-" },
          { label: "1000+ woorden", value: "Op aanvraag" },
        ],
      },
    ],
  },
];

function MatrixView({ table }: { table: MatrixTable }) {
  return (
    <div>
      {table.title && (
        <h4 className="text-white/70 text-sm font-semibold mb-4">
          {table.title}
        </h4>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-white/40 text-xs font-medium uppercase tracking-wider">
              <th className="text-left pb-3 pr-4 font-medium"></th>
              {table.columns.map((col) => (
                <th key={col} className="text-right pb-3 px-4 font-medium">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr
                key={row.label}
                className="border-t border-white/10 text-white/80"
              >
                <td className="py-3 pr-4 font-medium text-white">
                  {row.label}
                </td>
                {row.values.map((v, i) => (
                  <td key={i} className="py-3 px-4 text-right tabular-nums">
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {table.footnote && (
        <p className="text-white/40 text-xs mt-3">{table.footnote}</p>
      )}
    </div>
  );
}

function ListView({ table }: { table: ListTable }) {
  return (
    <div>
      {table.title && (
        <h4 className="text-white/70 text-sm font-semibold mb-4">
          {table.title}
        </h4>
      )}
      <ul className="divide-y divide-white/10">
        {table.rows.map((row) => (
          <li
            key={row.label}
            className="flex items-center justify-between py-3 text-sm"
          >
            <span className="text-white/80">{row.label}</span>
            <span className="text-white font-medium tabular-nums">
              {row.value}
            </span>
          </li>
        ))}
      </ul>
      {table.footnote && (
        <p className="text-white/40 text-xs mt-3">{table.footnote}</p>
      )}
    </div>
  );
}

export default function TarievenSection() {
  const [activeId, setActiveId] = useState(categories[0].id);
  const active = categories.find((c) => c.id === activeId) ?? categories[0];

  return (
    <section className="bg-[#0f2a4a] pt-20 pb-24 md:pt-28 md:pb-32 lg:pt-36 lg:pb-40">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <ScrollReveal animation="fade-up">
          <p className="text-white/40 text-[10px] font-medium tracking-[0.25em] uppercase text-center">
            Tarieven
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white text-center mt-3">
            Tarieven
          </h2>
          <p className="text-white/50 text-sm md:text-base text-center mt-4 max-w-xl mx-auto leading-relaxed">
            De prijs hangt af van verschillende factoren, zoals de lengte van de
            tekst, het type project en het gebruik van de opname. Alle afspraken
            worden vooraf duidelijk afgestemd, zodat je precies weet waar je aan
            toe bent. Vragen? Neem contact op voor een prijsindicatie.
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.1}>
          <div
            role="tablist"
            aria-label="Categorieën"
            className="mt-12 flex flex-wrap justify-center gap-2"
          >
            {categories.map((cat) => {
              const isActive = cat.id === activeId;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(cat.id)}
                  className={`text-sm font-medium px-4 py-2 rounded-full transition-colors cursor-pointer ${
                    isActive
                      ? "bg-white text-[#0f2a4a]"
                      : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        <div className="mt-10 bg-white/5 rounded-2xl p-7 md:p-10 lg:p-12">
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-8">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
              {active.label}
            </h3>
            {active.subtitle && (
              <p className="text-white/50 text-sm">{active.subtitle}</p>
            )}
          </div>

          <div className="space-y-10">
            {active.tables.map((table, idx) =>
              table.kind === "matrix" ? (
                <MatrixView key={idx} table={table} />
              ) : (
                <ListView key={idx} table={table} />
              ),
            )}
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-white/40 text-xs leading-relaxed max-w-md">
              Prijzen zijn exclusief btw. Voor een project op maat of bij
              afwijkende vragen neem gerust contact op.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center text-sm font-semibold py-3 px-6 rounded-full bg-[#b2492b] text-white hover:bg-[#9e4025] transition-colors"
            >
              Offerte aanvragen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
