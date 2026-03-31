import ScrollReveal from "@/components/ScrollReveal";

type SectionDividerProps = {
  dark?: boolean;
};

export default function SectionDivider({ dark }: SectionDividerProps) {
  const color = dark ? "bg-white/10" : "bg-[#1a1a1a]/10";
  const dotColor = dark ? "bg-white/20" : "bg-[#1a1a1a]/20";

  return (
    <ScrollReveal animation="draw-line" className="flex flex-col items-center py-2 origin-top">
      <div className={`w-px h-12 ${color}`} />
      <div className={`w-1.5 h-1.5 rounded-full ${dotColor} my-2`} />
      <div className={`w-px h-12 ${color}`} />
    </ScrollReveal>
  );
}
