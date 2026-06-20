interface LogoProps {
  className?: string;
  light?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizes = {
  sm: { outer: "w-9 h-9", text: "text-sm tracking-[0.2em]", border: "border" },
  md: { outer: "w-12 h-12", text: "text-base tracking-[0.2em]", border: "border" },
  lg: { outer: "w-16 h-16", text: "text-xl tracking-[0.25em]", border: "border" },
  xl: { outer: "w-24 h-24", text: "text-3xl tracking-[0.3em]", border: "border-2" },
};

export default function Logo({ className = "", light = false, size = "md" }: LogoProps) {
  const s = sizes[size];
  const colorClass = light
    ? "text-white border-white/60"
    : "text-green-900 border-green-900/50";

  return (
    <div
      className={`inline-flex items-center justify-center ${s.outer} ${s.border} ${colorClass} rounded-sm shrink-0 ${className}`}
    >
      <span className={`font-serif font-medium leading-none ${s.text}`}>RV</span>
    </div>
  );
}
