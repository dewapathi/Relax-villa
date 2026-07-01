import Image from "next/image";

interface LogoProps {
  className?: string;
  light?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizes = {
  sm: { outer: "w-9 h-9", border: "border" },
  md: { outer: "w-12 h-12", border: "border" },
  lg: { outer: "w-16 h-16", border: "border" },
  xl: { outer: "w-24 h-24", border: "border-2" },
};

export default function Logo({ className = "", light = false, size = "md" }: LogoProps) {
  const s = sizes[size];
  const borderColorClass = light ? "border-white/60" : "border-green-900/50";

  return (
    <div
      className={`relative overflow-hidden inline-flex items-center justify-center ${s.outer} ${s.border} ${borderColorClass} rounded-sm shrink-0 ${className}`}
    >
      <Image
        src="/images/ranuli_logo.jpeg"
        alt="Relax Villa logo"
        fill
        className="object-cover"
      />
    </div>
  );
}
